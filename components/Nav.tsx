import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {FaBars} from 'react-icons/fa'

const Nav = () => {
    const [color, setColor] = useState(false);

    const changeColor = () => {
        if (window.scrollY >= 150) {
            setColor(true);
        } else {
            setColor(false);
        }
    }

    useEffect(() => {
        if (typeof window !== undefined) {
            window.addEventListener("scroll", changeColor)
        }
    },[])



    return (
            <div className={`flex justify-between items-center gap-4 p-4 z-[99] fixed top-0 left-0 w-full transition-all ease-out duration-200 ${color && "bg-[#08060a]/90 backdrop-blur-md"}`}>
                <Link scroll={false} href="/#hero" className='cursor-pointer'>
                    <button className='btn btn-ghost btn-square'>
                        <Image width={35} height={35} src="/logo.svg" alt="Jordan Freeman Developer Logo"/>
                    </button>
                </Link>
                <ul className='hidden md:flex tracking-wider items-center justify-center gap-6 font-medium text-xs text-blue-100/80 transition-all'>
                    <li className='hover:text-yellow-300/80'>
                        <Link href="/">
                            {"//  HOME"}
                        </Link>
                    </li>
                    <li className='hover:text-yellow-300/80'>
                        <Link href="/">
                            {"//  SKILLS"}
                        </Link>
                    </li>
                    <li className='hover:text-yellow-300/80'>
                        <Link href="/">
                            {"//  WORK"}
                        </Link>
                    </li>
                    <li className='hover:text-yellow-300/80'>
                        <Link href="/">
                            {"//  EXPERIENCE"}
                        </Link>
                    </li>
                </ul>
                <button className="btn btn-square btn-ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                </button>
            </div>
    )
}

export default Nav