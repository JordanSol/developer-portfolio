import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {FaBars} from 'react-icons/fa'
import {Link as Anchor} from 'react-scroll'
import { useRouter } from 'next/router'

const Nav = () => {
    const [color, setColor] = useState(false);
    const router = useRouter();

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
        console.log(router.route )
    },[])



    return (
            <div className={`flex justify-between items-center gap-4 p-4 z-[99] fixed top-0 left-0 w-full transition-all ease-out duration-200 ${color && "bg-[#08060a]/90 backdrop-blur-md"}`}>
                <Link scroll={true} href="/#hero" className='cursor-pointer'>
                    <button className='btn btn-ghost btn-square'>
                        <Image width={35} height={35} src="/logo.svg" alt="Jordan Freeman Developer Logo"/>
                    </button>
                </Link>
                <ul className='hidden md:flex tracking-wider items-center justify-center gap-6 font-medium text-xs text-blue-100/80 transition-all'>
                    <li className='hover:text-yellow-300/80 cursor-pointer'>
                    {router.route !== "/" ? (
                            <Link href="/">
                                {"// HOME"}
                            </Link>
                        ) : (
                            <Anchor to="hero" smooth={true}>
                                {"//  HOME"}
                            </Anchor>
                        )}
                    </li>
                    <li className='hover:text-yellow-300/80 cursor-pointer'>
                        {router.route !== "/" ? (
                            <Link href="/#about">
                                {"// ABOUT"}
                            </Link>
                        ) : (
                            <Anchor to="about" smooth={true}>
                                {"//  ABOUT"}
                            </Anchor>
                        )}
                    </li>
                    <li className='hover:text-yellow-300/80 cursor-pointer'>
                        {router.route !== "/" ? (
                            <Link href="/#skills">
                                {"// SKILLS"}
                            </Link>
                        ) : (
                            <Anchor to="skills" smooth={true}>
                                {"//  SKILLS"}
                            </Anchor>
                        )}
                    </li>
                    <li className='hover:text-yellow-300/80 cursor-pointer'>
                        {router.route !== "/" ? (
                            <Link href="/#work">
                                {"// WORK"}
                            </Link>
                        ) : (
                            <Anchor to="work" smooth={true}>
                                {"//  WORK"}
                            </Anchor>
                        )}
                    </li>
                    <li className='hover:text-yellow-300/80 cursor-pointer'>
                        {router.route !== "/" ? (
                            <Link href="/#projects">
                                {"// PROJECTS"}
                            </Link>
                        ) : (
                            <Anchor to="projects" smooth={true}>
                                {"//  PROJECTS"}
                            </Anchor>
                        )}
                    </li>
                </ul>
                <button className="btn btn-square btn-ghost block md:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                </button>
            </div>
    )
}

export default Nav