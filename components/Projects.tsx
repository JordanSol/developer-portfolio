import React, {useRef} from 'react'
import Image from 'next/image'
import Tags from './Tags'
import Link from 'next/link';
import { AiFillGithub, AiOutlineLink } from 'react-icons/ai';
import { BsArrowRight } from 'react-icons/bs'
import { AnimatePresence, motion, useInView } from 'framer-motion';



const Projects = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true, margin: '-100px'});
    return (
        <section id="projects" className='w-screen bg-gradient-to-b from-slate-900 to-transparent'>

            <div className='w-full h-full min-h-screen flex flex-col justify-center py-20 px-4 main-content' ref={ref}>
                <AnimatePresence>
                    {isInView && (
                        <>
                            <motion.h2 className='text-5xl text-center lg:text-end sm:text-7xl md:text-[4rem] lg:text-[5rem] leading-[50px] md:leading-[60px] lg:leading-[80px] text-yellow-300 mb-10'
                            initial={{
                                opacity: 0,
                                y: -100
                            }}
                            animate={{
                                opacity:1,
                                y: 0
                            }}
                            exit={{
                                opacity: 0,
                                y: -100
                            }}
                            transition={{
                                duration: 0.6,
                                type: 'spring',
                                delay: .8
                            }}>
                            <span className='text-white'>My</span> Projects
                            </motion.h2>
                            <motion.div className='flex flex-col md:flex-row justify-between gap-10 mb-16 md:mb-24'
                            initial={{
                                opacity: 0,
                                x: -200
                            }}
                            animate={{
                                opacity:1,
                                x: 0
                            }}
                            exit={{
                                opacity: 0,
                                x: -200
                            }}
                            transition={{
                                duration: 0.6,
                                type: 'spring',
                                delay: 1
                            }}>
                                <div className='flex justify-center items-center md:dots-background md:w-3/4 md:-mr-28'>
                                    <div className='overflow-hidden border border-gray-300/20 rounded-md grayscale hover:grayscale-0 tranition-all w-3/4 md:w-full hover:-translate-y-6 md:hover:translate-y-0 transition-all'>
                                        <Image src="https://i.imgur.com/vv1mh2a.png" layout="responsive" width={1493} height={968} alt="Ultimate Ladder Preview" />
                                    </div>
                                </div>
                                <div className="md:w-3/4 z-10 py-10 md:h-3/4 -mt-36 md:mt-0">
                                    <div className='flex flex-col justify-center px-8 py-4 rounded-md bg-slate-800 border border-gray-300/20'>
                                        <h4 className=' text-2xl'>
                                            Ultimate Ladder
                                        </h4>
                                        <h5 className='text-blue-100/80 subHeading'>
                                            {"//"} Open-Source Smash Bros Ranked System
                                        </h5>
                                        <div className='flex gap-4 items-center'>
                                            <Tags text="p"/>
                                            <p>
                                                Ultimate Ladder is an open-source project created and maintained by myself. It aims to solve the issue in the Super Smash Brothers Ultimate community of a lack of a decent matchmaking / ranked system.
                                            </p>
                                        </div>
                                        <div className='w-full flex justify-between mt-4'>
                                            <div className='flex gap-4 text-slate-300/40 grow flex-wrap'>
                                                <p className="text-inherit">NextJs</p>
                                                <p className="text-inherit">TypeScript</p>
                                                <p className="text-inherit">tRPC</p>
                                                <p className="text-inherit">Prisma</p>
                                                <p className="text-inherit">zod</p>
                                                <p className="text-inherit">NextAuth</p>
                                                <p className="text-inherit">WebSockets</p>
                                            </div>
                                            <div className=" flex gap-2 h-full items-center justify-center text-xl">
                                                <a href="https://github.com/JordanSol/ultimate-ladder" target="_blank" rel='noopener noreferrer'>
                                                    <AiFillGithub className="text-2xl cursor-pointer hover:scale-105 hover:!text-yellow-300"/>
                                                </a>
                                                <a href="https://ultimate-ladder-x.vercel.app/" target="_blank" rel='noopener noreferrer' >
                                                    <AiOutlineLink className="text-2xl cursor-pointer hover:scale-105 hover:text-yellow-300"/>
                                                </a>
                                            </div>
                                        </div>
                                        <Link href="/blog/ultimate-ladder-part-1" className='text-sm text-inherit'>
                                            <span className='text-gray-300/80 flex gap-2 items-center cursor-pointer mt-2'>Check out the first blog post!{""}<BsArrowRight className='inline'/></span>
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                            
                        </>
                    )}
                </AnimatePresence>
            </div>
        </section>
    )
}

export default Projects