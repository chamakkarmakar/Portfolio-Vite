import React from 'react'
import chamak from "../assets/chamak.png"
import { FaArrowRightLong ,FaFacebook,FaLinkedin } from "react-icons/fa6";
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className="flex min-h-[600px] w-full items-center justify-center px-8">
            <div className="flex w-full max-w-6xl gap-10 md:flex-row flex-col md:items-center md:justify-between justify-start mt-36">
                <div className="w-md md:space-y-6 space-y-4 md:mt-0 mt-10">
                    <h1 className="uppercase md:text-5xl text-3xl font-bold leading-tight">Hay!</h1>
                    <h1 className='md:text-4xl text-3xl font-bold text-cyan-600 flex items-start'>
                        <TypeAnimation
                            sequence={[

                                "I'm Chamak Karmakar",
                                1000,
                                "I'm a Frontend Developer",
                                1000,
                                "I'm a MERN Stack Developer",
                                1000,

                            ]}
                            speed={10}

                            repeat={Infinity}
                        />
                    </h1>
                        <div className="flex items-center space-x-10 ">
                            <button className="group uppercase relative flex w-44 items-center rounded-lg border-2 border-sky-400 p-4 text-sky-300 font-semibold"><span>Get in Touch</span>
                                <span className="absolute right-3 box-content flex w-1/6 h-3/6 justify-center items-center rounded-md bg-sky-400 duration-300 group-hover:w-5/6 group-hover:h-5/6">
                                    <FaArrowRightLong className='text-white w-10 h-10 p-1 text-center' />
                                </span>
                            </button>
                            <div className='flex space-x-4 '>
                                <Link to="https://www.facebook.com/chamak.karmakar/" target='_blank' className='hover:-translate-y-0.5 transition-all duration-200 ease-linear'>
                                <FaFacebook className='w-8 h-8 text-sky-600 border-2 border-white rounded-full'/>
                                </Link>
                                <Link to="https://www.linkedin.com/in/chamak-karmakar-911522176/" target='_blank' className='hover:-translate-y-0.5 transition-all duration-200 ease-linear'>
                                <FaLinkedin  className='w-8 h-8 text-sky-600 border-2 border-white rounded-md'/>
                                </Link>
                            </div>
                        </div>
                </div>
                <div className="flex items-center justify-center">
                    <img src={`${chamak}`} className="md:h-[500px] h-[300px]  md:w-[400px] w-[300px] bg-transparent rounded-b-full" alt="Chamak" />
                </div>
            </div>
        </section>
    )
}

export default Hero
