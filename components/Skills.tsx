import React from 'react'
import Image from 'next/image'

const Skills = () => {
    return (
        <section className='w-full bg-[rgb(8,6,10)] py-20 px-4 flex flex-col justify-center items-center h-full min-h-screen'>
            <h2 className='text-5xl sm:text-7xl md:text-[4rem] lg:text-[5rem] leading-[50px] md:leading-[60px] lg:leading-[80px]'>
                My {" "}
                <span className='text-yellow-300 '>
                Skills
                </span>
            </h2>
            <div className='h-4 lg:h-8'/>
            <div className='grid grid-cols-1 lg:grid-cols-3 tracking-wide'>
                <div className='border-b lg:border-r lg:border-b-0 border-gray-600/80 p-8 flex flex-col items-center justify-start gap-4'>
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
                            Experienced in OOP in a multitude of industry-standard languages including TypeScript, JavaScript, and Python. 
                        </p>
                    </div>
                </div>
                <div className='border-b lg:border-r lg:border-b-0 border-gray-600/80 p-8 flex flex-col items-center lg:items-start justify-start gap-4'>
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
                <div className=' p-8  gap-4 flex flex-col items-center lg:items-start justify-start'>
                    <div className='flex gap-4 items-center'>
                        <figure className='aspect-square flex items-center justify-center shrink-0'>
                            <Image src="/sol.png" width={40} height={35} alt="Solana Logo"/>
                        </figure>
                        <h4 className='text-xl md:text-2xl leading-tight md:leading-normal underline-heading-gradient'>
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
            </div>
            <div className='z-0 -mt-60 blur-[2px] opacity-10'>
                <Image src="/code-sample.png" width={599} height={462} alt="Silly Background"/>
            </div>
        </section>
    )
}

export default Skills