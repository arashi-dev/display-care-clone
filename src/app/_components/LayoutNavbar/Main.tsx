"use client"

import { useViewportSize } from '@mantine/hooks'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import React from 'react'

type MainProps = React.PropsWithChildren<{
    linksAmount: number;
    leftLinksAmount: number;
    isAnimating: boolean;
}>

const Main: React.FC<MainProps> = ({ leftLinksAmount, linksAmount, isAnimating, children }) => {
    const { width } = useViewportSize()
    const pathname = usePathname()

    return (
        <motion.main
            key={pathname}
            initial={{ opacity: 0 }}
            animate={!isAnimating ? { opacity: 1 } : undefined}
            transition={{ duration: .3, ease: "easeInOut" }}
            style={{
                width: width - (linksAmount * width * .09),
                marginLeft: leftLinksAmount * width * .09,
            }}
        >
            {children}
        </motion.main>
    )
}

export default Main