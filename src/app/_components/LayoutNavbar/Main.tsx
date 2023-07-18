"use client"

import { useViewportSize } from '@mantine/hooks'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import React from 'react'
import { LayoutContext } from './contexts'

type MainProps = React.PropsWithChildren<{
    linksAmount: number;
    leftLinksAmount: number;
    isAnimating: boolean;
}>

const Main: React.FC<MainProps> = ({ leftLinksAmount, linksAmount, isAnimating, children }) => {
    const viewport = useViewportSize()
    const pathname = usePathname()

    const width = viewport.width - (linksAmount * viewport.width * .09)

    return (
        <motion.main
            key={pathname}
            initial={{ opacity: 0 }}
            animate={!isAnimating ? { opacity: 1 } : undefined}
            transition={{ duration: .3, ease: "easeInOut" }}
            className="pt-24"
            style={{
                width,
                marginLeft: leftLinksAmount * viewport.width * .09,
            }}
        >
            <LayoutContext.Provider value={{ width }}>
                {children}
            </LayoutContext.Provider>
        </motion.main>
    )
}

export default Main