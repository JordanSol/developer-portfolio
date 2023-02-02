import React, {useRef} from 'react'
import Image from 'next/image'
import {useInView, motion} from 'framer-motion'
import emailjs from 'emailjs-com'
const Contact = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true, margin: '-100px'})

    const sendEmail = (e: any) => {
        e.preventDefault()

        emailjs.sendForm('service_mwti2si', 'template_xnl5t4r', e.target, 'user_ZuXnFjcfJ5N3CUa11HcDz')
        .then((result) => {
            console.log(result.text)
        }, (error) => {
            console.log(error.text)
        })
        e.target.reset()
    }

    return (
        <section id="contact" className='w-screen bg-gradient-to-b from-transparent to-slate-900'>
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
                        <h2 className='text-5xl sm:text-7xl md:text-[4rem] lg:text-[5rem] leading-[50px] md:leading-[60px] lg:leading-[80px] text-center text-yellow-300'>
                            Contact
                        </h2>
                        <div className='h-4 lg:h-8'/>
                        <form onSubmit={sendEmail} className="bg-slate-800 border border-gray-300/20 rounded-md px-10 py-8 form-control flex flex-col gap-2 ">
                            <h3 className="text-2xl">Shoot me an Email!</h3>
                            <input className="input input-bordered" type="hidden"  name="contact_number"/>
                            <input className="input input-bordered" type="text" name="name" placeholder="Name" />
                            <input className="input input-bordered" type="email" name="email" placeholder='Email'/>
                            <textarea className="textarea textarea-bordered" name="message" id="message" placeholder='Message'/>
                            <input className="btn" type="submit" value="Send"/>
                        </form>
                    </motion.div>
                )}
            </div>
        </section>
    )
}

export default Contact