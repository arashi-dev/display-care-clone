import { usePrevious, useWindowEvent } from "@mantine/hooks";
import {
  type AnimationControls,
  type Transition,
  type AnimationDefinition,
  motionValue,
  animate,
} from "framer-motion";
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import type { Promisable } from "type-fest";
import { type NavItemProps } from "./NavItem";
import { sleep } from "~/utils/sleep";
import { usePathname } from "next/navigation";
import { type NavLinkData } from "../links";

export const useAnimationQueue = () => {
  const animationQueueRef = useRef<
    {
      key: string | number;
      animate: (next: () => Promise<void>) => Promisable<void>;
    }[]
  >([]);
  const isAnimatingRef = useRef(false);
  const runningAnimationsKeyRef = useRef<(string | number)[]>([]);
  const [isAnimating, setIsAnimating] = useState(false);
  const pathname = usePathname();

  const runAnimationQueue = useCallback(async () => {
    const runAnimationQueueR = async () => {
      const first = animationQueueRef.current[0];

      if (!first) {
        return;
      }

      runningAnimationsKeyRef.current.push(first.key);

      await first.animate(() => {
        animationQueueRef.current.shift();

        return runAnimationQueueR();
      });

      runningAnimationsKeyRef.current = runningAnimationsKeyRef.current.filter(
        (key) => key !== first.key,
      );
    };

    const first = animationQueueRef.current[0];

    if (!first) {
      return;
    }

    isAnimatingRef.current = true;
    setIsAnimating(true);

    await runAnimationQueueR();

    isAnimatingRef.current = false;
    setIsAnimating(false);
  }, []);

  const addAnimation = useCallback(
    (
      key: string | number,
      animate: (next: () => Promise<void>) => Promisable<void>,
    ) => {
      const prevIndex = animationQueueRef.current.findIndex(
        (item) => item.key === key,
      );

      const data = {
        key,
        animate,
      };

      if (prevIndex > -1) {
        if (runningAnimationsKeyRef.current.includes(key)) {
          const clone = [...animationQueueRef.current];

          clone.splice(prevIndex + 1, 0, data);

          animationQueueRef.current = clone;
        } else {
          animationQueueRef.current[prevIndex] = data;
        }
      } else {
        animationQueueRef.current.push(data);
      }

      if (!isAnimatingRef.current) {
        void runAnimationQueue();
      }
    },
    [runAnimationQueue],
  );

  useLayoutEffect(() => {
    setIsAnimating(true);
  }, [pathname]);

  return {
    isAnimating,
    addAnimation,
  } as const;
};

export type LinkDetail = {
  id: string;
  // index: number;
  order: number;
  side: "left" | "right";
  active: boolean;
};

export const useLinksDetails = (links: NavLinkData[]) => {
  const pathname = usePathname();

  const mapLinks = useCallback(
    () =>
      [...links].reverse().map<LinkDetail>((_, i) => ({
        id: _.id,
        // index: links.length - 1 - i,
        order: i,
        side: "left",
        active: false,
      })),
    [links],
  );

  const [linksDetails, setLinksDetails] = useState<LinkDetail[]>(mapLinks);

  useEffect(() => {
    setLinksDetails(mapLinks);
  }, [mapLinks]);

  const switchLinkSide = useCallback(
    (prev: typeof linksDetails, id: string) => {
      const clone = [...prev]
        .sort((a, b) => a.order - b.order)
        .filter((link) => link.id !== id);

      const target = prev.find((link) => link.id === id)!;
      const newSide = target.side === "right" ? "left" : "right";

      clone.push({
        ...target,
        side: newSide,
        order: prev.filter((link) => link.side === newSide).length,
      });

      let n = 0;

      return clone.map((link) => ({
        ...link,
        order:
          link.side === (newSide === "left" ? "right" : "left")
            ? link.order
            : n++,
      }));
    },
    [],
  );

  const move = useCallback(
    (id: string) => {
      setLinksDetails((prev) => {
        const clone = [...prev];

        const target = clone.find((link) => link.id === id)!;

        const neighbors = clone
          .filter((link) => link.side === target.side)
          .sort((a, b) => a.order - b.order);

        const newDetails = neighbors
          .slice(neighbors.indexOf(target))
          .reverse()
          .reduce((arr, { id }) => switchLinkSide(arr, id), clone);

        return newDetails.map((details) => ({
          ...details,
          active:
            links.find((link) => link.id === details.id)?.href === pathname,
        }));
      });
    },
    [links, pathname, switchLinkSide],
  );

  useEffect(() => {
    const link = links.find((link) => link.href === pathname);

    if (link) {
      move(link.id);
    }
  }, [links, move, pathname]);

  return useMemo(
    () =>
      [...linksDetails]
        .sort((a, b) =>
          a.side === "right" ? a.order - b.order : b.order - a.order,
        )
        .sort(({ side }) => (side === "left" ? -1 : 1))
        .map(({ id, order, side, active }, _, arr) => {
          const neighbors = arr.filter((link) => link.side === side);

          const indexInNeighbors = neighbors.findIndex(
            (link) => link.id === id,
          );

          return {
            order: neighbors
              .slice(
                0,
                indexInNeighbors + 1 < neighbors.length - 1
                  ? indexInNeighbors + 1
                  : indexInNeighbors,
              )
              .some((link) => link.active)
              ? order - 1
              : order,
            side,
            id,
            active,
          };
        }),
    [linksDetails],
  );
};

export const useCreateEdgeStyles = () => {
  const createEdgeStyles = useCallback(
    (side: "left" | "right", hide: boolean, order: number) => {
      const width = typeof window !== "undefined" ? window.innerWidth : 0;

      const NAV_ITEM_WIDTH = width * 0.09;

      const firstEdgeStyles = (
        side === "right"
          ? { right: order * NAV_ITEM_WIDTH }
          : { left: order * NAV_ITEM_WIDTH }
      ) satisfies AnimationDefinition;

      const secondEdgeStyles = (
        hide
          ? side === "right"
            ? { left: width - (firstEdgeStyles.right || 0) }
            : { right: width - (firstEdgeStyles.left || 0) }
          : side === "right"
          ? { left: width - NAV_ITEM_WIDTH - order * NAV_ITEM_WIDTH }
          : { right: width - NAV_ITEM_WIDTH - order * NAV_ITEM_WIDTH }
      ) satisfies AnimationDefinition;

      return [firstEdgeStyles, secondEdgeStyles] as const;
    },
    [],
  );

  return createEdgeStyles;
};

export const useEdgeStyles = ({
  hide,
  order,
  side,
}: Pick<NavItemProps, "hide" | "order" | "side">) => {
  const prevHide = usePrevious(hide);
  const prevOrder = usePrevious(order);
  const prevSide = usePrevious(side);

  const createEdgeStyles = useCreateEdgeStyles();

  const [firstEdgeStyles, secondEdgeStyles] = useMemo(
    () => createEdgeStyles(side, hide, order),
    [createEdgeStyles, hide, order, side],
  );

  const [prevFirstEdgeStyles, prevSecondEdgeStyles] = useMemo(
    () =>
      prevSide !== undefined &&
      prevHide !== undefined &&
      prevOrder !== undefined
        ? createEdgeStyles(
            side === "left" ? "right" : "left",
            prevHide,
            prevOrder,
          )
        : [],
    [createEdgeStyles, prevHide, prevOrder, prevSide, side],
  );

  return {
    firstEdgeStyles,
    secondEdgeStyles,
    prevFirstEdgeStyles,
    prevSecondEdgeStyles,
  } as const;
};

const transition = {
  bounce: 0.15,
  damping: 20,
  type: "spring",
} satisfies Transition;

export const useNavItemAnimation = ({
  hide,
  order,
  side,
  controls,
  id,
  addAnimation,
  pathname,
}: Pick<NavItemProps, "hide" | "order" | "side" | "addAnimation"> & {
  controls: AnimationControls;
  id: string;
  pathname: string;
}) => {
  const isMountedRef = useRef(false);

  const prevHide = usePrevious(hide);
  const {
    firstEdgeStyles,
    secondEdgeStyles,
    prevFirstEdgeStyles,
    prevSecondEdgeStyles,
  } = useEdgeStyles({ hide, order, side });

  const fadeInAnimation = useCallback(() => {
    controls.set({
      y: "100%",
      ...firstEdgeStyles,
      ...secondEdgeStyles,
    });

    let isMounted = true;

    const animation = async (next: () => Promise<void>) => {
      if (isMounted) {
        void controls.start({ y: 0 }, transition);

        await sleep(250);

        isMountedRef.current = true;
      }

      void next();
    };

    addAnimation(id, animation);

    return () => {
      isMounted = false;
    };
  }, [addAnimation, controls, firstEdgeStyles, id, secondEdgeStyles]);

  useEffect(() => {
    if (!isMountedRef.current) {
      return fadeInAnimation();
    }

    const animation = async (next: () => Promise<void>) => {
      console.log("animating", id);
      if (prevHide && !hide) {
        controls.set({
          ...prevFirstEdgeStyles,
          ...prevSecondEdgeStyles,
        });
      }

      void controls.start(firstEdgeStyles, {
        ...transition,
        delay: -0.01,
      });

      void controls.start(secondEdgeStyles, {
        ...transition,
        delay: 0.5,
      });

      await sleep(500);

      await next();

      await sleep(500);
    };

    console.log("addAnimation()", id);

    addAnimation(id, animation);
  }, [
    addAnimation,
    controls,
    fadeInAnimation,
    firstEdgeStyles,
    hide,
    id,
    prevFirstEdgeStyles,
    prevHide,
    prevSecondEdgeStyles,
    secondEdgeStyles,
    pathname,
  ]);

  const createEdgeStyles = useCreateEdgeStyles();

  const resizeHandler = useCallback(() => {
    const [firstEdgeStyles, secondEdgeStyles] = createEdgeStyles(
      side,
      hide,
      order,
    );

    controls.set({
      ...firstEdgeStyles,
      ...secondEdgeStyles,
    });
  }, [controls, createEdgeStyles, hide, order, side]);

  useWindowEvent("resize", resizeHandler);
  useWindowEvent("orientationchange", resizeHandler);
};

class AnimatorNode {
  id: string;

  motionValues = {
    firstEdge: {
      left: motionValue(0),
      right: motionValue(0),
    },
    secondEdge: {
      left: motionValue(0),
      right: motionValue(0),
    },
  };

  constructor(
    private animator: Animator,
    public data: {
      id: string;
      side: "right" | "left";
      order: number;
      hide: boolean;
    },
  ) {
    this.id = data.id;
    this.setEdges()
  }

  moveTo(side: "right" | "left") {
    const others = this.animator.nodes.filter(
      (node) => node.data.side === this.data.side,
    );

    const reversed = [...others].reverse();

    const afters = reversed.slice(reversed.indexOf(this) + 1);

    afters.map((node) => node.moveTo(side));

    if (this.data.hide) {
      const visibleInSameSide = this.animator.nodes.filter(
        (node) => node.data.side === this.data.side && !node.data.hide,
      );

      this.update(this.data.side, true, visibleInSameSide.length);
      this?.setEdges();
    }

    const visibleInOppositeSide = this.animator.nodes.filter(
      (node) => node.data.side === side && !node.data.hide,
    );

    this.update(side, false, visibleInOppositeSide.length);
    this?.animateEdges();
  }

  private animateEdges() {
    const [firstEdge, secondEdge] = this.createEdgeStyles();

    const animates: (() => Promise<void>)[] = [];

    const values = [
      [this.motionValues.firstEdge.left, firstEdge.left],
      [this.motionValues.firstEdge.right, firstEdge.right],
      [this.motionValues.secondEdge.left, secondEdge.left],
      [this.motionValues.secondEdge.right, secondEdge.right],
    ] as const;

    values.forEach(([motionValue, value]) => {
      if (typeof value === "undefined") return;

      animates.push(async () => await animate(motionValue, value, transition));
    });
  }

  private setEdges() {
    const [firstEdge, secondEdge] = this.createEdgeStyles();

    if (firstEdge.left) this.motionValues.firstEdge.left.set(firstEdge.left);
    if (firstEdge.right) this.motionValues.firstEdge.right.set(firstEdge.right);

    if (secondEdge.left) this.motionValues.secondEdge.left.set(secondEdge.left);
    if (secondEdge.right)
      this.motionValues.secondEdge.right.set(secondEdge.right);
  }

  private update(side: "left" | "right", hide: boolean, order: number) {
    this.data.side = side;
    this.data.hide = hide;
    this.data.order = order;
    this.animator.sortNodes();
  }

  private createEdgeStyles() {
    const { side, order, hide } = this.data;

    const width = typeof window !== "undefined" ? window.innerWidth : 0;

    const NAV_ITEM_WIDTH = width * 0.09;

    const firstEdgeStyles = (
      side === "right"
        ? { right: order * NAV_ITEM_WIDTH }
        : { left: order * NAV_ITEM_WIDTH }
    ) satisfies AnimationDefinition;

    const secondEdgeStyles = (
      hide
        ? side === "right"
          ? { left: width - (firstEdgeStyles.right || 0) }
          : { right: width - (firstEdgeStyles.left || 0) }
        : side === "right"
        ? { left: width - NAV_ITEM_WIDTH - order * NAV_ITEM_WIDTH }
        : { right: width - NAV_ITEM_WIDTH - order * NAV_ITEM_WIDTH }
    ) satisfies AnimationDefinition;

    return [firstEdgeStyles, secondEdgeStyles] as const;
  }
}

type Listener<T extends Array<unknown>> = (...args: T) => void;

export class EventEmitter<EventMap extends Record<string, Array<unknown>>> {
  private eventListeners: {
    [K in keyof EventMap]?: Set<Listener<EventMap[K]>>;
  } = {};

  on<K extends keyof EventMap>(eventName: K, listener: Listener<EventMap[K]>) {
    const listeners = this.eventListeners[eventName] ?? new Set();
    listeners.add(listener);
    this.eventListeners[eventName] = listeners;
  }

  emit<K extends keyof EventMap>(eventName: K, ...args: EventMap[K]) {
    const listeners = this.eventListeners[eventName] ?? new Set();
    for (const listener of listeners) {
      listener(...args);
    }
  }
}

type EventsMap = {
  animateStateChange: [isAnimating: boolean];
}

class Animator {
  nodes: AnimatorNode[] = [];

  events = new EventEmitter<EventsMap>()

  constructor(
    links: {
      id: string;
      side: "right" | "left";
      order: number;
      hide: boolean;
    }[],
  ) {
    this.nodes = links.map((link) => new AnimatorNode(this, link));
    this.sortNodes();
  }

  sortNodes() {
    const leftSide = this.nodes
      .filter((node) => node.data.side === "left")
      .sort((a, b) => a.data.order - b.data.order);
    const rightSide = this.nodes
      .filter((node) => node.data.side === "right")
      .sort((a, b) => b.data.order - a.data.order);

    this.nodes = [...leftSide, ...rightSide];
  }

  node(id: string) {
    return this.nodes.find((node) => node.id === id);
  }
}
