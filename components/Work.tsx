import React from 'react'
import Image from 'next/image'
import Tags from './Tags'

const Work = () => {
    return (
        <section className='w-full h-full min-h-screen flex flex-col justify-center py-20 px-4'>
            <h2 className='text-5xl text-center lg:text-start sm:text-7xl md:text-[4rem] lg:text-[5rem] leading-[50px] md:leading-[60px] lg:leading-[80px] text-yellow-300'>
               Past Work
            </h2>
            <div className='flex flex-col-reverse md:flex-row'>
                <div className='md:w-1/2 flex flex-col justify-center'>
                    <h4 className=' text-2xl'>
                        NFT Staking Platforms
                    </h4>
                    <div className='flex gap-4 items-center'>
                        <Tags text="p"/>
                        <p>
                            Amazing projects I{"'"}ve had the honor of taking part in.
                        </p>
                    </div>
                </div>
                <div className='md:w-1/2'>
                    <Image src="/staking.png" width={700} height={700} alt="Staking Preview" />
                </div>
            </div>
        </section>
    )
}

export default Work