"use client"

import { type Variants, motion } from 'framer-motion'
import { QuoteUp } from 'iconsax-react'
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
    "Born with a vision to innovate",
    "where it matters the most."
]

const Vision: React.FC = () => {
    return (
        <Container className="my-32">
            <div className="ml-auto md:w-3/4">
                <QuoteUp size={120} className="text-teal-500 mx-auto md:mx-0" variant="Bold" />

                <motion.div
                    initial="initial"
                    whileInView="animate"
                    exit="initial"
                    viewport={{ once: true, amount: .5 }}
                    transition={{ staggerChildren: .1, delayChildren: 1 }}
                    className="mt-6"
                >
                    {textLines.map(line => (
                        <p key={line} className="overflow-hidden">
                            <motion.span
                                variants={fadeUpVariants}
                                transition={{ duration: .5, ease: "easeOut" }}
                                className='block font-serif text-zinc-700 text-[3.5rem]/none whitespace-pre-wrap'

                            >
                                {line}
                            </motion.span>
                        </p>
                    ))}
                </motion.div>
            </div>

            <div className="mt-32 flex flex-col md:flex-row">
                <div className="flex-1 bg-orange-100 relative mb-24 md:mb-0">
                    <video className="scale-75" src="/videos/vision-animation.webm" controls={false} autoPlay muted loop />
                </div>

                <div className="md:w-1/3 md:pl-20 mb-16 flex md:flex-col gap-5">
                    <p className="font-serif text-8xl text-zinc-700 font-semibold">15%</p>

                    <div className="w-1/2 md:w-auto">
                        <p className="font-sans text-zinc-500 text-[.9rem]">Of the world’s population experience some form of disability. This number will double by 2050.</p>

                        <span className="block w-full h-px md:bg-zinc-200 mt-12 md:my-16" />

                        <p className="font-sans text-zinc-500 mt-5 text-[.9rem]">
                            Innovation in the care and disability sectors can have a direct impact on a person&apos;s quality of life.
                            <br />
                            <br />
                            We do what we do because we believe design and technology can improve outcomes for those who need it most.
                        </p>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Vision