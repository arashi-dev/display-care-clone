import React from 'react'
import Container from '../Container'

const Header: React.FC = () => {
  return (
    <Container className="flex">
        <div className="">display.care (CLONE)</div>

        <div className="uppercase ml-5">a care oriented DESIGNS STUDIO</div>

        <a className='ml-auto'>Contact</a>
    </Container>
  )
}

export default Header