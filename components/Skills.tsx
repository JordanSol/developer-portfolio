import React, {useRef} from 'react'
import Image from 'next/image'
import {useInView, motion} from 'framer-motion'
const Skills = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true, margin: '-100px'});
    return (
        <section id="skills" className='w-screen bg-gradient-to-b from-slate-900 to-transparent'>
            <div className={`min-h-screen w-full  py-20 px-4 flex flex-col justify-center items-center h-full main-content`} ref={ref}>
                {isInView && (
                    <motion.div
                    className="relative"
                    initial={{
                        opacity: 0,
                        y: 200
                    }}
                    animate={{
                        opacity:1,
                        y: 0
                    }}
                    exit={{
                        opacity: 0,
                        y: 200
                    }}
                    transition={{
                        duration: 0.6,
                        type: 'spring',
                        delay: .8
                    }}>
                        <h2 className='text-5xl sm:text-7xl md:text-[4rem] lg:text-[5rem] leading-[50px] md:leading-[60px] lg:leading-[80px] text-center'>
                            My {" "}
                            <span className='text-yellow-300 '>
                            Skills
                            </span>
                        </h2>
                        <div className='h-4 lg:h-8'/>
                        <div className='grid grid-cols-1 lg:grid-cols-6 tracking-wide'>
                            <div className='border-b lg:col-span-2 lg:border-r lg:border-b-0 border-gray-600/80 p-8 flex flex-col items-center justify-start gap-4'>
                                <div className='flex gap-4 items-center'>
                                    <figure className='aspect-square flex items-center justify-center shrink-0'>
                                        <Image src="/ts.svg" width={40} height={40} alt="TypeScript Logo"/>
                                    </figure>
                                    <h4 className='text-xl md:text-2xl underline-heading '>
                                        TypeScript
                                    </h4>
                                </div>
                                <div className='flex gap-4 items-center'>
                                    <div className='h-full flex flex-col justify-between gap-2 items-center opacity-20 text-xs italic'>
                                        <span>
                                            {"<p>"}
                                        </span>
                                        <div className="border-r grow min-h-6" />
                                        <span>
                                            {"</p>"}
                                        </span>
                                    </div>
                                    <p>
                                        Experienced in OOP in a multitude of industry-standard languages including TypeScript, JavaScript, and Python. Developing Full-Stack applications.
                                    </p>
                                </div>
                            </div>
                            <div className='border-b lg:col-span-2 lg:border-r lg:border-b-0 border-gray-600/80 p-8 flex flex-col items-center lg:items-start justify-start gap-4'>
                                <div className='flex gap-4 items-center'>
                                    <figure className='aspect-square flex items-center justify-center shrink-0'>
                                        <Image src="/next.svg" width={40} height={40} alt="NextJs Logo"/>
                                    </figure>
                                    <h4 className='text-xl md:text-2xl underline-heading-teal'>
                                        React / NextJs
                                    </h4>
                                </div>
                                <div className='flex gap-4 items-center'>
                                    <div className='h-full flex flex-col justify-between gap-2 items-center opacity-20 text-xs italic'>
                                        <span>
                                            {"<p>"}
                                        </span>
                                        <div className="border-r grow min-h-6" />
                                        <span>
                                            {"</p>"}
                                        </span>
                                    </div>
                                    <p className=''>
                                        Dedicated to creating beautiful, responsive web applications. 
                                        Over 2 years of experience using NextJs, React, HTML, CSS, and TypeScript.
                                    </p>
                                </div>
                            </div>
                            <div className=' p-8  gap-4 border-b lg:border-b-0 border-gray-600/80 lg:col-span-2 flex flex-col items-center lg:items-start justify-start'>
                                <div className='flex gap-4 items-center'>
                                    <figure className='aspect-square flex items-center justify-center shrink-0'>
                                        <Image src="/sol.png" width={40} height={35} alt="Solana Logo"/>
                                    </figure>
                                    <h4 className='text-xl md:text-2xl leading-tight  underline-heading-gradient'>
                                        Web3 Integration
                                    </h4>
                                </div>
                                <div className='flex gap-4 items-center'>
                                    <div className='h-full flex flex-col justify-between gap-2 items-center opacity-20 text-xs italic'>
                                        <span>
                                            {"<p>"}
                                        </span>
                                        <div className="border-r grow min-h-6" />
                                        <span>
                                            {"</p>"}
                                        </span>
                                    </div>
                                    <p>
                                        Seamless integration of Web3 technologies. Developing Web3 utilities on the Solana & Ethereum blockchains for over a year and a half.
                                    </p>
                                </div>
                            </div>
                            <div className='border-b lg:col-span-3 lg:border-r lg:border-b-0 border-gray-600/80 p-8 flex flex-col items-center justify-start gap-4'>
                                <div className='flex gap-4 items-center'>
                                    <figure className='aspect-square flex items-center justify-center shrink-0'>
                                        <Image src="/wp.svg" width={40} height={40} alt="TypeScript Logo"/>
                                    </figure>
                                    <h4 className='text-xl md:text-2xl underline-heading-wp'>
                                        WordPress
                                    </h4>
                                </div>
                                <div className='flex gap-4 items-center'>
                                    <div className='h-full flex flex-col justify-between gap-2 items-center opacity-20 text-xs italic'>
                                        <span>
                                            {"<p>"}
                                        </span>
                                        <div className="border-r grow min-h-6" />
                                        <span>
                                            {"</p>"}
                                        </span>
                                    </div>
                                    <p>
                                        I am experienced in building and maintaining WordPress websites and e-commerce stores in a professional setting.
                                    </p>
                                </div>
                            </div>
                            <div className='lg:col-span-3 p-8 flex flex-col items-center lg:items-start justify-start gap-4'>
                                <div className='flex gap-4 items-center w-full justify-center'>
                                    <figure className='aspect-square flex items-center justify-center shrink-0'>
                                        <Image src="/figma.svg" width={50} height={50} alt="NextJs Logo"/>
                                    </figure>
                                    <h4 className='text-xl md:text-2xl underline-heading-figma'>
                                        Web Design
                                    </h4>
                                </div>
                                <div className='flex gap-4 items-center'>
                                    <div className='h-full flex flex-col justify-between gap-2 items-center opacity-20 text-xs italic'>
                                        <span>
                                            {"<p>"}
                                        </span>
                                        <div className="border-r grow min-h-6" />
                                        <span>
                                            {"</p>"}
                                        </span>
                                    </div>
                                    <p className=''>
                                        Strong fundamentals in Web Design, using design tools like Figma for prototyping, then executing on the exact design.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='absolute top-0 w-full h-full flex items-center justify-center z-0 blur-[1px] opacity-20'>
                            <Image src="/code-sample.png" width={599} height={462} alt="Silly Background"/>
                        </div>
                    </motion.div>
                )}
            </div>
        </section>
    )
}

export default Skills