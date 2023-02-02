import React, {useRef} from 'react'
import Image from 'next/image'
import Tags from './Tags'
import { Swiper, SwiperSlide} from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { AnimatePresence, motion, useInView } from 'framer-motion';



const Work = () => {
    const ref = useRef(null);
    const isInView = useInView(ref);
    return (
        <section className='w-full h-full min-h-screen flex flex-col justify-center py-20 px-4 main-content' ref={ref}>
            <AnimatePresence>
                {isInView && (
                    <>
                        <motion.h2 className='text-5xl text-center lg:text-start sm:text-7xl md:text-[4rem] lg:text-[5rem] leading-[50px] md:leading-[60px] lg:leading-[80px] text-yellow-300 mb-10'
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
                            duration: 0.4,
                            type: 'spring',
                            delay: .8
                        }}>
                        Past <span className='text-white'>Work</span>
                        </motion.h2>
                        <motion.div className='grid grid-cols-1 md:grid-cols-2 gap-10 mb-16 md:mb-24'
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
                            duration: 0.4,
                            type: 'spring',
                            delay: 1
                        }}>
                            <div className='flex flex-col justify-center'>
                                <h4 className=' text-2xl'>
                                    Hydra Launchpad
                                </h4>
                                <h5 className='text-blue-100/80 subHeading'>
                                    {"//"} Senior Fullstack Web Developer: May 2022 - Present
                                </h5>
                                <div className='flex gap-4 items-center'>
                                    <Tags text="p"/>
                                    <p>
                                        Hydra Launchpad is a Web3 DevShop creating cutting-edge technology on the Solana blockchain while providing developer work to Web3 projects. 
                                        At Hydra, I&apos;ve spearheaded the development of multiple products for clients, bringing in over $100,000 in revenue.<br/><br/>
                                        I am currently projct-managing and leading the development of Hydra&apos;s newest product: ArenaX, an online money-match platform for the most popular E-Sports. 
                                        My duties include managing a team of Frontend and Backend developers, architecting the core systems of the app {"(payment system, backend, frontend, Discord bot, database, WebSocket servers)"}, 
                                        reviewing all code, and building the API. More info will be available soon.
                                    </p>
                                </div>
                            </div>
                            <div className='flex items-center dots-background'>
                                <Swiper
                                    grabCursor={true}
                                    spaceBetween={50}
                                    slidesPerView={1}
                                    modules={[Navigation, Pagination]}
                                    pagination={{clickable: true}}
                                    className='mySwiper'
                                >
                                    <SwiperSlide style={{overflowY: "visible"}}>
                                        <div className='p-3 mb-7'>
                                            <div className="border-2 border-white/20 overflow-hidden rounded-md shadow-md hover:shadow-white/30 hover:-translate-y-1 transition-all shadow-white/20">
                                                <a href="https://hydralaunchpad.com/" target="_blank" rel="noopener noreferrer">
                                                    <Image  src="https://i.imgur.com/0MdOJjt.png" width={1493} height={968} alt="Hydra Preview" layout='responsive' />
                                                </a>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide style={{overflowY: "visible"}}>
                                        <div className='p-3'>
                                            <div className="border-2 border-white/20 overflow-hidden rounded-md shadow-md hover:shadow-white/30 hover:-translate-y-1 transition-all shadow-white/20">
                                                <a href="https://www.hydralaunchpad.com/exploreDtm" target="_blank" rel="noopener noreferrer">
                                                    <Image  src="https://i.imgur.com/KDYla0o.pngg" width={1493} height={968} alt="Hydra DTM Preview" layout='responsive' />
                                                </a>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide style={{overflowY: "visible"}}>
                                        <div className='p-3'>
                                            <div className="border-2 border-white/20 overflow-hidden rounded-md shadow-md hover:shadow-white/30 hover:-translate-y-1 transition-all shadow-white/20">
                                                <a href="https://staking.jikanstudios.io/" target="_blank" rel="noopener noreferrer">
                                                    <Image  src="https://i.imgur.com/Rkf1lfr.png" width={1493} height={968} alt="Staking Preview" layout='responsive' />
                                                </a>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide style={{overflowY: "visible"}}>
                                        <div className='p-3'>
                                            <div className="border-2 border-white/20 overflow-hidden rounded-md shadow-md hover:shadow-white/30 hover:-translate-y-1 transition-all shadow-white/20">
                                                <a href="https://trippinapetribe.xyz/" target="_blank" rel="noopener noreferrer">
                                                    <Image  src="https://i.imgur.com/iRpsis5.png" width={1493} height={968} alt="Staking Preview" layout='responsive' />
                                                </a>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </motion.div>
                        <motion.div className='flex flex-col-reverse md:grid md:grid-cols-2 gap-10 mb-16 md:mb-24'
                        initial={{
                            opacity: 0,
                            x: 200
                        }}
                        animate={{
                            opacity:1,
                            x: 0
                        }}
                        exit={{
                            opacity: 0,
                            x: 200
                        }}
                        transition={{
                            duration: 0.4,
                            type: 'spring',
                            delay: 1.2
                        }}>
                            <div className='dots-background'>
                                <Swiper
                                    grabCursor={true}
                                    spaceBetween={50}
                                    slidesPerView={1}
                                    modules={[Navigation, Pagination]}
                                    pagination={{clickable: true}}
                                    className='mySwiper'
                                >
                                    <SwiperSlide style={{overflowY: "visible"}}>
                                        <div className='p-3 mb-7'>
                                            <div className="border-2 border-white/20 overflow-hidden rounded-md shadow-md hover:shadow-white/30 hover:-translate-y-1 transition-all shadow-white/20">
                                                <a href="https://spottedfoxdigital.com/" target="_blank" rel="noopener noreferrer">
                                                    <Image  src="https://i.imgur.com/aDEBbaf.png" width={1493} height={968} alt="Spotted Fox Digital Preview" layout='responsive' />
                                                </a>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide style={{overflowY: "visible"}}>
                                        <div className='p-3'>
                                            <div className="border-2 border-white/20 overflow-hidden rounded-md shadow-md hover:shadow-white/30 hover:-translate-y-1 transition-all shadow-white/20">
                                                <a href="https://www.concretecoatingsrr.com" target="_blank" rel="noopener noreferrer">
                                                    <Image  src="https://i.imgur.com/DCtv6tt.png" width={1493} height={968} alt="Client Preview" layout='responsive' />
                                                </a>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide style={{overflowY: "visible"}}>
                                        <div className='p-3'>
                                            <div className="border-2 border-white/20 overflow-hidden rounded-md shadow-md hover:shadow-white/30 hover:-translate-y-1 transition-all shadow-white/20">
                                                <a href="https://coloniallawn.com/" target="_blank" rel="noopener noreferrer">
                                                    <Image  src="https://i.imgur.com/lf2D1Vh.png" width={1493} height={968} alt="Client Preview" layout='responsive' />
                                                </a>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide style={{overflowY: "visible"}}>
                                        <div className='p-3'>
                                            <div className="border-2 border-white/20 overflow-hidden rounded-md shadow-md hover:shadow-white/30 hover:-translate-y-1 transition-all shadow-white/20">
                                                <a href="https://phase2electric.net/" target="_blank" rel="noopener noreferrer">
                                                    <Image  src="https://i.imgur.com/hRoqB0i.png" width={1493} height={968} alt="Client Preview" layout='responsive' />
                                                </a>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide style={{overflowY: "visible"}}>
                                        <div className='p-3'>
                                            <div className="border-2 border-white/20 overflow-hidden rounded-md shadow-md hover:shadow-white/30 hover:-translate-y-1 transition-all shadow-white/20">
                                                <a href="https://tlclandscapemanagement.com/" target="_blank" rel="noopener noreferrer">
                                                    <Image  src="https://i.imgur.com/vVI6GCO.png" width={1493} height={968} alt="Client Preview" layout='responsive' />
                                                </a>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide style={{overflowY: "visible"}}>
                                        <div className='p-3'>
                                            <div className="border-2 border-white/20 overflow-hidden rounded-md shadow-md hover:shadow-white/30 hover:-translate-y-1 transition-all shadow-white/20">
                                                <a href="https://richlandyachtclub.com/" target="_blank" rel="noopener noreferrer">
                                                    <Image  src="https://i.imgur.com/GlE7iOK.png" width={1493} height={968} alt="Client Preview" layout='responsive' />
                                                </a>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                            <div className='flex flex-col justify-center'>
                                <h4 className=' text-2xl'>
                                    Spotted Fox Digital Marketing
                                </h4>
                                <h5 className='text-blue-100/80 subHeading'>
                                    {"//"} Web Developer / Designer: October 2021 - May 2022
                                </h5>
                                <div className='flex gap-4 items-center'>
                                    <Tags text="p"/>
                                    <p>
                                        Spotted Fox Digital Marketing is a local digital marketing agency providing a full-suite of digital marketing products to local businesses.
                                        At Spotted Fox, I designed and built beautiful websites for clients, prioratizing effective visual storytelling and strong SEO. Here, I prototyped designs in{" "}
                                        <a href="https://figma.com/" target="_blank" rel="noopener noreferrer" className='link hover:text-yellow-300 transition-colors'>Figma,</a>{" "}
                                        then built out those designs in Wordpress.<br/><br/>
                                        Often times, clients needed custom solutions for various problems, where I got the opportunity to use my JavaScript skills.
                                    </p>
                                </div>
                            </div>
                            
                        </motion.div>
                        <motion.div className='grid grid-cols-1 md:grid-cols-2 gap-10 mb-16 md:mb-24'
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
                            duration: 0.4,
                            type: 'spring',
                            delay: 1.4
                        }}>
                            <div className='flex flex-col justify-center'>
                                <h4 className=' text-2xl'>
                                    Akari Labs
                                </h4>
                                <h5 className='text-blue-100/80 subHeading'>
                                    {"//"} Lead Fullstack Web Developer: February - November 2022
                                </h5>
                                <div className='flex gap-4 items-center'>
                                    <Tags text="p"/>
                                    <p>
                                        Akari Labs was a successful NFT project on the Solana blockchain, innovating the space with a crypto-based Shopify payment solution designed by myself, saving $20,000 in outsourcing costs.
                                        Our brand generated over $1,000,000 in aftermarket sales volume throughout the project&apos;s lifetime.
                                    </p>
                                </div>
                            </div>
                            <div className='flex items-center dots-background'>
                                <Swiper
                                    grabCursor={true}
                                    spaceBetween={50}
                                    slidesPerView={1}
                                    modules={[Navigation, Pagination]}
                                    pagination={{clickable: true}}
                                    className='mySwiper'
                                >
                                    <SwiperSlide style={{overflowY: "visible"}}>
                                        <div className='p-3 mb-7'>
                                            <div className="border-2 border-white/20 overflow-hidden rounded-md shadow-md hover:shadow-white/30 hover:-translate-y-1 transition-all shadow-white/20">
                                                <a href="https://akarilabs.io/" target="_blank" rel="noopener noreferrer">
                                                    <Image  src="https://i.imgur.com/84TU8dK.png" width={1493} height={968} alt="Akari Preview" layout='responsive' />
                                                </a>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide style={{overflowY: "visible"}}>
                                        <div className='p-3'>
                                            <div className="border-2 border-white/20 overflow-hidden rounded-md shadow-md hover:shadow-white/30 hover:-translate-y-1 transition-all shadow-white/20">
                                                <a href="https://www.light-city.io/" target="_blank" rel="noopener noreferrer">
                                                    <Image  src="https://i.imgur.com/z1csHp4.png" width={1493} height={968} alt="Utility Preview" layout='responsive' />
                                                </a>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </section>
    )
}

export default Work