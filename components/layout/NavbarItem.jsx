import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const NavbarItem = ({src, width, height, text}) => {
    return (
        <Link href="">
            <div className='text-white w-fit flex flex-row items-center justify-start gap-[1.2em] pl-4 pr-8 py-3 rounded-[3em] hover:bg-blackContrast'>
            {/* // Default width heigth (28,28) */}
            <Image src={src} width={width?width:28} height={height?height:28} />
            <span className='text-[1.15em]'>{text}</span>
            </div>
        </Link>
  )
}

export default NavbarItem