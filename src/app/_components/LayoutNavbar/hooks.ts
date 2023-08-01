import {
  type Transition,
  type AnimationDefinition,
  motionValue,
  animate,
  type MotionValue,
} from "framer-motion";
import { type CSSProperties } from "react";
import { type NavLinkData } from "../links";

export const transition = {
  bounce: 0.15,
  damping: 20,
  type: "spring",
} satisfies Transition;

export class AnimatorNode {
  id: string;

  motionValues = {
    left: motionValue<CSSProperties["left"]>(0),
    right: motionValue<CSSProperties["right"]>(0),
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
    this.setEdges();
  }

  set({
    side = this.data.side,
    hide = this.data.hide,
  }: {
    side?: "right" | "left";
    hide?: boolean;
  } = {}) {
    const hiddenNode = this.animator.nodes.find((node) => node.data.hide);

    if (hiddenNode?.id !== this.id) {
      const others = this.animator.nodes.filter(
        (node) => node.data.side === this.data.side,
      );

      const sorted = [...others].sort((a, b) => a.data.order - b.data.order);

      const afters = sorted.slice(sorted.indexOf(this) + 1).reverse();

      for (const node of afters) {
        node.set({ side, hide: false });
      }
    }

    const visibleInTargetSide = this.animator.nodes.filter(
      (node) => node.data.side === side && !node.data.hide,
    );

    this.update({
      side,
      hide,
      order: visibleInTargetSide.length,
    });

    this.setEdges();
  }

  async move({
    side = this.data.side,
    hide = this.data.hide,
  }: {
    side?: "right" | "left";
    hide?: boolean;
  } = {}) {
    this.animator.isAnimating = true;

    const animateSecondEdge = await this.animate(side, hide);

    await animateSecondEdge();

    this.animator.isAnimating = false;
  }

  resize() {
    return this.setEdges();
  }

  private async animate(side: "right" | "left", hide: boolean) {
    const hiddenNode = this.animator.nodes.find((node) => node.data.hide);

    if (hiddenNode?.id !== this.id) {
      if (hiddenNode) {
        const visibleInSameSide = hiddenNode.animator.nodes.filter(
          (node) => node.data.side === this.data.side && !node.data.hide,
        );

        hiddenNode.update({
          side: this.data.side,
          hide: true,
          order: visibleInSameSide.length,
        });

        hiddenNode.setEdges();

        const animateSecondEdge = await hiddenNode.animate(side, false);

        void animateSecondEdge();
      }

      const others = this.animator.nodes.filter(
        (node) => node.data.side === this.data.side && !node.data.hide,
      );

      const sorted = [...others].sort((a, b) => a.data.order - b.data.order);

      const afters = sorted.slice(sorted.indexOf(this) + 1).reverse();

      for (const node of afters) {
        const animateSecondEdge = await node.animate(side, false);

        void animateSecondEdge();
      }
    }

    const visibleInTargetSide = this.animator.nodes.filter(
      (node) => node.data.side === side && !node.data.hide,
    );

    this.update({
      side,
      hide,
      order: visibleInTargetSide.length,
    });

    const { animateFirstEdge, animateSecondEdge } = this.animateEdges();

    await animateFirstEdge();

    return animateSecondEdge;
  }

  private animateEdges() {
    const [firstEdge, secondEdge] = this.createEdgeStyles();

    const animateValues = async (
      values: [MotionValue, number | undefined][],
    ) => {
      await Promise.all(
        values.map(async ([motionValue, value]) => {
          if (typeof value === "undefined") return;

          await animate(motionValue, value, transition);
        }),
      );
    };

    const animateFirstEdge = () =>
      animateValues([
        [this.motionValues.left, firstEdge.left],
        [this.motionValues.right, firstEdge.right],
      ]);

    const animateSecondEdge = () =>
      animateValues([
        [this.motionValues.left, secondEdge.left],
        [this.motionValues.right, secondEdge.right],
      ]);

    return {
      animateFirstEdge,
      animateSecondEdge,
    };
  }

  private setEdges() {
    const [firstEdge, secondEdge] = this.createEdgeStyles();

    this.motionValues.left.set(firstEdge.left ?? secondEdge.left);
    this.motionValues.right.set(firstEdge.right ?? secondEdge.right);
  }

  update({
    hide = this.data.hide,
    order = this.data.order,
    side = this.data.side,
  }: {
    side?: "left" | "right";
    hide?: boolean;
    order?: number;
  }) {
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

  on = <K extends keyof EventMap>(
    eventName: K,
    listener: Listener<EventMap[K]>,
  ) => {
    const listeners = this.eventListeners[eventName] ?? new Set();
    listeners.add(listener);
    this.eventListeners[eventName] = listeners;

    return () => this.off(eventName, listener);
  };

  off = <K extends keyof EventMap>(
    eventName: K,
    listener: Listener<EventMap[K]>,
  ) => {
    const listeners = this.eventListeners[eventName] ?? new Set();
    listeners.delete(listener);
    this.eventListeners[eventName] = listeners;
  };

  emit<K extends keyof EventMap>(eventName: K, ...args: EventMap[K]) {
    const listeners = this.eventListeners[eventName] ?? new Set();
    for (const listener of listeners) {
      listener(...args);
    }
  }
}

type EventsMap = {
  animateStateChange: [isAnimating: boolean];
  nodesChange: [nodes: AnimatorNode[]];
};

export class Animator {
  private _nodes: AnimatorNode[] = [];
  events = new EventEmitter<EventsMap>();

  private _isAnimating = false;

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

  get isAnimating() {
    return this._isAnimating;
  }

  set isAnimating(value) {
    if (this._isAnimating === value) return;

    this._isAnimating = value;

    console.log("value", value);
    this.events.emit("animateStateChange", value);
  }

  get nodes() {
    return this._nodes;
  }

  set nodes(value) {
    if (this._nodes === value) return;

    this._nodes = value;

    this.events.emit("nodesChange", value);
  }

  sortNodes() {
    const leftSide = this.nodes
      .filter((node) => node.data.side === "left")
      .sort((a, b) => a.data.order - b.data.order);

    const rightSide = this.nodes
      .filter((node) => node.data.side === "right")
      .sort((a, b) => b.data.order - a.data.order);

    leftSide.forEach((node, i) => (node.data.order = i));
    rightSide.forEach(
      (node, i) => (node.data.order = rightSide.length - 1 - i),
    );

    this.nodes = [...leftSide, ...rightSide];
  }

  node(id: string) {
    return this.nodes.find((node) => node.id === id);
  }
}

export class AnimatorProxy {
  private animator: Animator;

  constructor(links: NavLinkData[]) {
    this.animator = new Animator(
      links.map((_, i) => ({
        id: _.id,
        order: links.length - 1 - i,
        side: "left",
        hide: false,
      })),
    );
  }

  node(id: string) {
    return this.animator.node(id);
  }

  get isAnimating() {
    return this.animator.isAnimating;
  }

  set isAnimating(value) {
    this.animator.isAnimating = value;
  }

  get on() {
    return this.animator.events.on;
  }

  get nodes() {
    return this.animator.nodes;
  }
}
