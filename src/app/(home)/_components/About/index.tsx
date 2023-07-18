"use client"

import { useElementSize } from '@mantine/hooks'
import { type Variants, motion } from 'framer-motion'
import React from 'react'
import Container from '~/app/_components/Container'

const fadeUpVariants: Variants = {
    initial: {
        y: "100%",
        rotateX: 45,
        skew: -45,
    },
    animate: {
        y: 0,
        rotateX: 0,
        skew: 0,
    },
}

const textLines = [
    "       We work with select",
    "service providers in the",
    "disability sector to develop",
    "inclusive products tailored to",
    "their needs."
]

const About: React.FC = () => {
    const animationBackgroundSize = useElementSize()

    return (
        <Container className="bg-[#645577] py-28 mt-36">
            <div className="flex justify-between">
                <motion.div
                    initial="initial"
                    whileInView="animate"
                    exit="initial"
                    viewport={{ once: true, amount: .5 }}
                    transition={{ staggerChildren: .1, delayChildren: 1 }}
                >
                    {textLines.map(line => (
                        <p key={line} className="overflow-hidden">
                            <motion.span
                                variants={fadeUpVariants}
                                transition={{ duration: .5, ease: "easeOut" }}
                                className='block font-serif text-white text-[3.5rem]/none whitespace-pre-wrap'

                            >
                                {line}
                            </motion.span>
                        </p>
                    ))}
                </motion.div>

                <p className="uppercase font-sans text-white opacity-50 min-w-max">About Us</p>
            </div>

            <div className="flex justify-between md:mt-44 mt-20 items-start">
                <span className="bg-light-salmon aspect-square rounded-full w-[10vw]" />

                <div className="md:w-3/4 w-full">
                    <div className="relative">
                        <div
                            ref={animationBackgroundSize.ref}
                            className={`bg-[#f8f1f1] h-[calc(100%-theme(spacing.16))] mt-16 block w-full absolute`}
                            style={{
                                borderBottomRightRadius: animationBackgroundSize.height / 2
                            }}
                        />

                        <video className="z-[1] relative" src="/videos/about-us-animation.webm" controls={false} autoPlay muted loop />
                    </div>

                    <div className="flex justify-between mt-16 md:flex-row flex-col">
                        <p className="md:full md:mr-24 md:text-base/tight flex-1 font-sans text-lg/snug w-3/4 text-white opacity-80">
                            Designing for inclusivity, not only assists people with disabilities but benefits everyone. Through our practice, ‘Display’ creates person centred products and services that are accessible for people of all abilities.
                        </p>

                        <p className="md:full md:mr-24 md:text-base/tight md:mt-0 flex-1 font-sans text-lg/snug w-3/4 text-white opacity-80 mt-10">
                            Every person differs in the way they comprehend, communicate, see, and handle the world. We strive for our work to reflect this diversity. We research extensively and collaborate closely only with those who share a vision of inclusivity and accessibility for all.
                        </p>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default About