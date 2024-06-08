import React from 'react'
import chamak from "../assets/chamak.png"
import { FaArrowRightLong } from "react-icons/fa6";
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
    return (
        <section className="flex min-h-[600px] w-full items-center justify-center px-8">
            <div className="flex w-full max-w-6xl gap-10 md:flex-row flex-col md:items-center md:justify-between justify-start">
                <div className="w-md md:space-y-6 space-y-4">
                    <h1 className="uppercase md:text-5xl text-3xl font-bold leading-tight">Hay!</h1>
                    <h1 className='md:text-4xl text-3xl font-bold text-cyan-600 flex items-start'>
                        <TypeAnimation
                            sequence={[

                                "I'm Chamak",
                                1000,
                                "I'm a Frontend Developer",
                                1000,
                                "I'm a MERN Stack Developer",
                                1000,

                            ]}
                            speed={30}
                      
                            repeat={Infinity}
                        />
                    </h1>
                    <div className="flex space-x-4">
                        <button className="group relative flex w-36 items-center rounded-lg border-2 border-sky-400 p-4 text-sky-300"><span>Get Start</span>
                            <span className="absolute right-3 box-content flex w-1/6 h-3/6 justify-center items-center rounded-md bg-sky-400 duration-300 group-hover:w-5/6 group-hover:h-5/6">
                                <FaArrowRightLong className='text-white w-10 h-10 text-center' />
                            </span>
                        </button>

                    </div>
                    {/* <p className="text-sm text-gray-500">Trusted by 5000+ Users</p> */}
                </div>
                <div className="flex items-center justify-center md:mt-0 mt-20">
                    <img src={`${chamak}`} className="md:h-[500px] h-[300px]  md:w-[400px] w-[300px] bg-transparent rounded-b-full" alt="hero navigate ui" />
                </div>
            </div>
        </section>
    )
}

export default Hero
