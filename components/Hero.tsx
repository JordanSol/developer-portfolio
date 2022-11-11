import React from 'react'
import Model from './Model'
import Nav from './Nav'
import Tags from './Tags'
import NoSsr from './no-ssr'

import Link from 'next/link'

export default function Hero () {
    return (
        <section id="hero" className='w-full h-screen relative  flex flex-col bg-gradient-to-b from-[rgb(16,12,21)] to-[rgb(8,6,10)]'>
            <div className='relative h-full bg-[url("/glow.png")] bg-center bg-cover'>
                <div className='absolute w-full h-full flex flex-col justify-center items-center'>                         
                        <h1 className='font-bold text-6xl sm:text-7xl md:text-[5rem] lg:text-[7rem] leading-[50px] md:leading-[60px] lg:leading-[80px] z-50 text-center font-acier text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-400 main-heading'>
                            JORDAN<br className='md:hidden'/> FREEMAN
                        </h1>\        
                    <h2 className='z-50 font-acier text-yellow-300 text-lg md:text-3xl'>
                        {"//"}Fullstack Web Developer
                    </h2>
                </div>      
                <div className='abolute right-1/2 w-full h-full flex justify-center items-center h-full  overflow-visible'>
                    <div className='w-full md:w-3/4 xl:w-1/2 h-full relative '>                        
                        <NoSsr>
                            <Model/>
                        </NoSsr>
                    </div>                   
                </div> 
            </div>  
            <Link href="/" className="z-24 cursor-pointer" >
                <div className='scroll-down cursor-pointer'></div>
            </Link>

        </section>
    )
}