"use client"

import React, { useContext } from 'react'
import Container from '../Container'
import { LayoutContext } from '../LayoutNavbar/contexts'
import { useElementSize } from '@mantine/hooks'

const HeaderContainer: React.FC<React.PropsWithChildren> = ({ children }) => {
    const { width } = useContext(LayoutContext)
    const element = useElementSize();

    return (
        <>
            <div style={{ height: element.height }} className="mt-16" />
            
            <Container ref={element.ref} className="fixed top-14 flex items-center" style={{ width }}>
                {children}
            </Container>
        </>
    )
}

export default HeaderContainer