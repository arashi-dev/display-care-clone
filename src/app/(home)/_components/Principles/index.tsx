"use client"

import React from 'react'
import Container from '~/app/_components/Container'
import { Icon1, Icon2, Icon3, Icon4 } from './icons'
import { useViewportSize } from '@mantine/hooks';

type ItemData = {
    icon: React.ComponentType<{ className?: string; }>;
    label: string;
    text: string;
}

const items: ItemData[] = [
    {
        icon: Icon1,
        label: "Our participants needs are paramount",
        text: "Our focus is always on understanding your needs in everything that we do.",
    },
    {
        icon: Icon2,
        label: "Stay open and learn from mistakes.",
        text: "Mistakes are where we learn the most. We listen, iterate and collaborate to overcome obstacles and improve outcomes for all involved.",
    },
    {
        icon: Icon3,
        label: "Design for accessibility always.",
        text: "Research, refine, share and learn in the fields of usability and accessibility. Design universally.",
    },
    {
        icon: Icon4,
        label: "Innovate to improve outcomes.",
        text: "We believe innovation is the best way to improve outcomes for those in care.",
    }
]

const ItemRow: React.FC<ItemData> = ({ icon: Icon, label, text }) => {
    return (
        <li className="border-b-2 border-b-zinc-300 flex gap-7 lg:gap-14 lg:py-14 py-7 items-center">
            <div className="flex-[1] block"><Icon className="w-3/4" /></div>
            <p className="flex-[2] text-zinc-600 font-serif text-xl lg:text-3xl">{label}</p>
            <p className="flex-[1.5] text-zinc-500 font-sans text-xs lg:text-base">{text}</p>
        </li>
    )
}

const ItemSquare: React.FC<ItemData> = ({ icon: Icon, label }) => {
    return (
        <li className="w-full h-60">
            <div className="bg-orange-50 h-32 aspect-square rounded-bl-3xl rounded-tr-3xl flex items-center justify-center">
                <Icon className="w-3/4" />
            </div>

            <p className="text-zinc-500 font-serif text-xs mt-5 block">{label}</p>
        </li>
    )
}

const Principles: React.FC = () => {
    const { width } = useViewportSize()

    return (
        <Container className="py-32 md:bg-[hsla(42,50%,96%,.7)]">
            <h2 className="font-serif text-[2.5rem]/none md:text-[3.25rem]/none">
                <span className="text-zinc-800">Principles</span><br />
                <span className="text-rose-400">which guide us</span>
            </h2>

            <ul className="list-none lg:ml-20 lg:mr-5 lg:mt-14 md:mt-7 mt-14 gap-x-5 columns-2 md:columns-1">
                {items.map(data => (
                    width >= 768
                        ? <ItemRow key={data.label} {...data} />
                        : <ItemSquare key={data.label} {...data} />
                ))}
            </ul>
        </Container>
    )
}

export default Principles