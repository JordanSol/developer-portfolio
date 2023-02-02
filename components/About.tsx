import React, {type FC, useState, useEffect, useRef} from 'react'
import Image from 'next/image';
import {BsCodeSlash, BsTools} from 'react-icons/bs'
import {MdOutlineWorkOutline} from 'react-icons/md'
import { AnimatePresence, motion } from 'framer-motion';
import { useInView } from 'framer-motion';

import Loader from './Loader';

const About:FC = () => {
    const [imageHovered, setImageHovered] = useState(false);
    const [showContent, setShowContent] = useState(false);
    const containerRef = useRef<HTMLDivElement | null>(null);
    const isInView= useInView(containerRef, {margin: "-100px ", once: true})

    return (
        <div className="w-full h-min min-h-screen relative flex flex-col justify-center py-20 px-4 main-content" ref={containerRef}>
            <AnimatePresence>
            {isInView && (
                <>
                    <motion.h2 className='text-5xl text-center lg:text-start sm:text-7xl md:text-[4rem] lg:text-[5rem] leading-[50px] md:leading-[60px] lg:leading-[80px] text-yellow-300 mb-4 md:mb-6'
                    initial={{
                        opacity: 0,
                        x: -100
                    }}
                    animate={{
                        opacity:1,
                        x: 0
                    }}
                    exit={{
                        opacity: 0,
                        x: -100
                    }}
                    transition={{
                        duration: 0.6,
                        type: 'spring',
                        delay: .8
                    }}
                    >
                    <span className='text-white'>About</span> Me
                    </motion.h2>
                    <div className='flex flex-col-reverse sm:grid sm:grid-cols-2 gap-8 md:gap-12'>
                        <motion.div
                        initial={{
                            opacity: 0,
                            x: -100
                        }}
                        animate={{
                            opacity:1,
                            x: 0
                        }}
                        exit={{
                            opacity: 0,
                            x: -100,
                        }}
                        transition={{
                            duration: 0.6,
                            type: 'spring',
                            delay: .8
                        }}>
                            <div>
                                <h3 className='text-xl'>{"// "}Full-Stack Web Developer</h3>
                                
                                    <p>
                                        Hey there! I&apos;m Jordan, and I love to create beautiful web-based experiences.
                                        My passion for web development began at the beginning of the pandemic in 2019, when I decided that I wanted 
                                        a line of work that better fit my skills and personality. As it turns out, my love for development has only grown as time has passed.
                                    </p>
                                    <br/>
                                    <p>
                                        Nowadays I have the priviledge of building full-stack applications for thousands of people to enjoy, with the help of my team at{" "}
                                        <a className='link' href="https://hydralaunchpad.com/" target="_blank" rel="noopener noreferrer">
                                            Hydra Launchpad.
                                        </a>
                                        {" "}
                                        My main focus here is to architect, project-manage, and lead the development of our top-priority product, ArenaX, an online money-match platform for the most popular e-sports,
                                        allowing competitive teams to practice their gameplay with stakes.
                                    </p>
                                
                                <br/>
                                <h5 className='text-xl mb-2'>{"// "}Fun Facts</h5>
                                <p>
                                    I have many hobbies, but I have a competitive nature at heart, so I regularly compete in Super Smash Brothers Ultimate tournaments! I also have a burning love for the game of chess, I often compare it to coding, as I view the game
                                    as a creative logic puzzle.
                                </p>
                                <br/>
                                <p>
                                    Another passion of mine is photography, it offers a lovely balance to my life to be able to go outside and pay attention to simpler things.
                                </p>
                            </div>
                            <br/>
                            <h5 className='text-xl mb-2'>{"// "}Learn More</h5>
                            <div className='grid grid-cols-3 gap-2'>
                                <div className='cursor-pointer text-center border border-white/20 p-2 text-white rounded-sm hover:bg-yellow-300/10 hover:-translate-y-1 transition-all'>
                                    <BsCodeSlash className='text-4xl text-center w-full'/>
                                    <span className='md:text-lg'>Skills</span>
                                </div>
                                <div className='cursor-pointer text-center border border-white/20 p-2 text-white rounded-sm hover:bg-yellow-300/10 hover:-translate-y-1 transition-all'>
                                    <MdOutlineWorkOutline className='text-4xl text-center w-full'/>
                                    <span className='md:text-lg'>My Work</span>
                                </div>
                                <div className='cursor-pointer text-center border border-white/20 p-2 text-white rounded-sm hover:bg-yellow-300/10 hover:-translate-y-1 transition-all'>
                                    <BsTools className='text-4xl text-center w-full'/>
                                    <span className='md:text-lg'>Projects</span>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div className='flex items-center'
                        initial={{
                            opacity: 0,
                            x: 100
                        }}
                        animate={{
                            opacity:1,
                            x: 0
                        }}
                        exit={{
                            opacity: 0,
                            x: 100,
                        }}
                        transition={{
                            duration: 0.6,
                            type: 'spring',
                            delay: 1
                        }}>
                            <div className='aspect-square w-full sm:w-64 md:w-96 relative rounded-md' onMouseEnter={() => setImageHovered(true)} onMouseLeave={() => setImageHovered(false)}>
                                <div className={`absolute ${imageHovered ? "-bottom-3 -right-3 sm:-bottom-10 sm:-right-10" : "-bottom-2 -right-2 sm:-bottom-8 sm:-right-8"} border-4 rounded-md border-yellow-300 w-full h-full transition-all`}/>
                                <figure className='w-full aspect-square overflow-hidden rounded-md relative'>
                                    <Image src="https://i.imgur.com/5bMfR6g.jpg" alt="Portrait" layout="fill" className='grayscale hover:grayscale-0 transition-all'/>
                                </figure>
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
            </AnimatePresence>
        </div>
    )
};

export default About