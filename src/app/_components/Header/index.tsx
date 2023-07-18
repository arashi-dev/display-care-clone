import React from 'react'
import LogoSvg from './LogoSvg'
import Link from 'next/link'
import { ArrowRight } from 'iconsax-react'
import HeaderContainer from './Container'

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <div>
        <LogoSvg className="inline-block" />

        <p className="ml-5 font-serif inline-block text-3xl font-thin text-slate-700 align-middle">
          Display
          <span className="text-3xs font-bold font-sans align-top absolute -top-0.5 inline-block">TM</span>
        </p>
      </div>

      <div className="uppercase ml-36 font-sans text-2xs/tight font-thin text-gray-500">a care oriented<br />designs studio</div>

      <Link
        href="#"
        className="ml-auto w-max px-6 py-3 rounded-full bg-light-salmon text-white font-sans flex items-center">
        Contact

        <ArrowRight
          className="ml-10"
          size="24"
          color="white"
        />
      </Link>
    </HeaderContainer>
  )
}

export default Header