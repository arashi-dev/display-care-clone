"use client"

import React, { useMemo } from 'react'
import NavItem from './NavItem';
import { useAnimationQueue, useLinksDetails } from './hooks';
import { type NavLinkData } from './types';
import Main from './Main';

type LayoutNavbarProps = React.PropsWithChildren<{
    links: NavLinkData[]
}>

const LayoutNavbar: React.FC<LayoutNavbarProps> = ({ children, links }) => {
    const linksDetails = useLinksDetails(links)
    const { addAnimation, isAnimating } = useAnimationQueue()

    const leftLinksAmount = useMemo(() => linksDetails.filter(({ side, active }) => side === "left" && !active).length, [linksDetails])

    return (
        <div>
            {useMemo(() => linksDetails.map(({ index, order, side, active }) => (
                <NavItem
                    key={links[index]!.label}
                    link={links[index]!}
                    order={order}
                    side={side}
                    addAnimation={addAnimation}
                    isAnimating={isAnimating}
                    hide={active}
                />
            )), [addAnimation, isAnimating, links, linksDetails])}

            <Main
                linksAmount={links.length - 1}
                leftLinksAmount={leftLinksAmount}
                isAnimating={isAnimating}
            >
                {children}
            </Main>
        </div>
    )
}

export default LayoutNavbar