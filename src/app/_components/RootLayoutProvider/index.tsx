"use client"

import { Book1, MagicStar, Sun1 } from 'iconsax-react'
import type { NavLinkData } from '../LayoutNavbar/types'
import LayoutNavbar from '../LayoutNavbar'

const AboutLink: NavLinkData = { color: "mediumPurple", iconComponent: MagicStar, label: "About", href: '/' }
const ResourcesLink: NavLinkData = { color: "rose", iconComponent: Book1, label: "Resources", href: '/resources' }
const WorksLink: NavLinkData = { color: "lightSalmon", iconComponent: Sun1, label: "Works", href: '/works' }

const links = [
    AboutLink,
    WorksLink,
    ResourcesLink,
]

const RootLayoutProviders: React.FC<React.PropsWithChildren> = ({ children }) => {
    return <LayoutNavbar links={links}>
        {children}
    </LayoutNavbar>
}

export default RootLayoutProviders