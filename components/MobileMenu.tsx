import React, { type FC, type Dispatch } from "react"
import { AnimatePresence, motion } from "framer-motion"
import {AiOutlineClose} from 'react-icons/ai'
import Image from "next/image"
import Link from "next/link"
import {Link as Anchor} from 'react-scroll'
import { useRouter } from "next/router"
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai"

const MobileMenu: FC<{toggle: Dispatch<React.SetStateAction<boolean>>, show: boolean}> = ({toggle, show}) => {
    const router = useRouter();
    return (
        <AnimatePresence>
            {show && (
            <motion.div className="fixed top-0 left-0 z-[999] w-screen h-screen bg-black/90 backdrop-blur-lg flex flex-col md:hidden"
            initial={{
                opacity: 0,
                x: "100%"
            }}
            animate={{
                opacity: 1,
                x: 0,
            }}
            exit={{
                opacity: 0,
                x: "100%"
            }}
            transition={{
                type: "easeInOut",
                duration: .2
            }}>
                <div className="w-full flex justify-between p-5">
                    <button className='btn btn-ghost btn-square'>
                        <Image width={35} height={35} src="/logo.svg" alt="Jordan Freeman Developer Logo"/>
                    </button>
                    <button className='btn btn-ghost btn-square' onClick={() => toggle(false)}>
                        <AiOutlineClose className='text-2xl text-white'/>
                    </button>
                </div>
                <div className="p-6">
                <ul className='flex flex-col tracking-wider items-center justify-center gap-6 font-medium text-md text-blue-100/80 transition-all'>
                    <li className='hover:text-yellow-300/80 cursor-pointer' >
                    {router.route !== "/" ? (
                            <Link href="/" onClick={() => toggle(false)}>
                                {"// HOME"}
                            </Link>
                        ) : (
                            <Anchor to="hero" smooth={true} onClick={() => toggle(false)}>
                                {"//  HOME"}
                            </Anchor>
                        )}
                    </li>
                    <li className='hover:text-yellow-300/80 cursor-pointer'>
                        {router.route !== "/" ? (
                            <Link href="/#about" onClick={() => toggle(false)}>
                                {"// ABOUT"}
                            </Link>
                        ) : (
                            <Anchor to="about" smooth={true} onClick={() => toggle(false)}>
                                {"//  ABOUT"}
                            </Anchor>
                        )}
                    </li>
                    <li className='hover:text-yellow-300/80 cursor-pointer'>
                        {router.route !== "/" ? (
                            <Link href="/#skills" onClick={() => toggle(false)}>
                                {"// SKILLS"}
                            </Link>
                        ) : (
                            <Anchor to="skills" smooth={true} onClick={() => toggle(false)}>
                                {"//  SKILLS"}
                            </Anchor>
                        )}
                    </li>
                    <li className='hover:text-yellow-300/80 cursor-pointer'>
                        {router.route !== "/" ? (
                            <Link href="/#work" onClick={() => toggle(false)}>
                                {"// WORK"}
                            </Link>
                        ) : (
                            <Anchor to="work" smooth={true} onClick={() => toggle(false)}>
                                {"//  WORK"}
                            </Anchor>
                        )}
                    </li>
                    <li className='hover:text-yellow-300/80 cursor-pointer'>
                        {router.route !== "/" ? (
                            <Link href="/#projects" onClick={() => toggle(false)}>
                                {"// PROJECTS"}
                            </Link>
                        ) : (
                            <Anchor to="projects" smooth={true} onClick={() => toggle(false)}>
                                {"//  PROJECTS"}
                            </Anchor>
                        )}
                    </li>
                </ul>
                <div className='w-full flex justify-center items-center gap-4 mt-6'>
                    <a href="https://www.linkedin.com/in/jordan-freeman-36417a218/" target="_blank" rel='noopener noreferrer' >
                        <AiFillLinkedin className="text-2xl cursor-pointer hover:scale-105 hover:text-yellow-300"/>
                    </a>
                    <a href="https://github.com/JordanSol" target="_blank" rel='noopener noreferrer'>
                        <AiFillGithub className="text-2xl cursor-pointer hover:scale-105 hover:!text-yellow-300"/>
                    </a>
                    {router.route !== "/" ? (
                        <Link href="/#contact" onClick={() => toggle(false)}>
                            <span className='btn btn-sm btn-outline btn-primary-content'>
                                CONTACT
                            </span>
                        </Link>
                    ) : (
                        <Anchor to="contact" smooth={true} className='btn btn-sm btn-outline btn-primary-content' onClick={() => toggle(false)}>
                            CONTACT
                        </Anchor>
                    )}
                </div>
                </div>
            </motion.div>
            )}
        </AnimatePresence>
    )
}

export default MobileMenu