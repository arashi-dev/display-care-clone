import React, { useEffect } from "react"
import Link from 'next/link';
import { MotionConfig, motion, useAnimation } from "framer-motion"
import type { Promisable } from "type-fest";
import { useState } from "react";
import type { NavLinkData } from "./types";
import { useNavItemAnimation } from "./hooks";

const MotionLink = motion(Link)

const containerVariants = {
    rose: "bg-rose-400",
    lightSalmon: "bg-light-salmon",
    mediumPurple: "bg-medium-purple",
} as const

const iconVariants = {
    rose: "text-rose-400",
    lightSalmon: "text-light-salmon",
    mediumPurple: "text-medium-purple",
} as const

export type NavItemProps = {
    link: NavLinkData;
    order: number;
    side: "left" | "right";
    addAnimation: (key: string | number, animation: (next: () => Promise<void>) => Promisable<void>) => void;
    isAnimating: boolean;
    hide: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ hide, isAnimating, addAnimation, side, order, link }) => {
    const controls = useAnimation()

    const [isHidden, setIsHidden] = useState(false)

    useNavItemAnimation({
        addAnimation,
        controls,
        hide,
        order,
        side,
        label: link.label,
    })

    useEffect(() => {
        if(isAnimating) {
            setIsHidden(false)
        } else {
            setIsHidden(hide)
        }
    }, [hide, isAnimating])

    return (
        <MotionLink
            initial={{ y: "100%" }}
            href={link.href}
            className={`fixed z-10 overflow-hidden top-0 h-screen py-12 ${containerVariants[link.color]} ${isHidden ? "invisible" : "visible"}`}
            animate={controls}
            onClick={e => isAnimating && e.preventDefault()}
        >
            <MotionConfig transition={{ duration: .5 }}>
                <motion.div
                    className="flex flex-col items-center justify-between h-full"
                    initial="hidden"
                    animate={isAnimating ? "hidden" : "visible"}
                >
                    <motion.div
                        className={`bg-white p-3 rounded-full`}
                        variants={{
                            hidden: {
                                scale: .5,
                                opacity: 0,
                            },
                            visible: {
                                scale: 1,
                                opacity: 1,
                            }
                        }}
                    >
                        <link.iconComponent size="24" className={iconVariants[link.color]} />
                    </motion.div>

                    <div className="overflow-hidden">
                        <motion.p
                            className={`vertical-text rotate-180 text-4xl/none text-white`}
                            variants={{
                                hidden: {
                                    x: "100%",
                                    rotate: 180,
                                    opacity: 0,
                                },
                                visible: {
                                    x: 0,
                                    rotate: 180,
                                    opacity: 1,
                                }
                            }}
                        >{link.label}</motion.p>
                    </div>
                </motion.div>
            </MotionConfig>
        </MotionLink>
    )
}

export default NavItem