import React from 'react'
import chamak9490 from "../assets/chamak9490.jpg"
import { FiDownload } from "react-icons/fi";

const About = () => {
    return (
        <div className='w-[95%] my-60 flex md:flex-row justify-around flex-col mx-auto'>
            <div className='md:w-1/4 md:mx-20 w-3/4 mx-auto'>
                <img src={`${chamak9490}`} alt="chamak" className='' />
            </div>
            <div className='md:w-1/2 w-full'>
                <h1 className='uppercase md:text-justify font-semibold text-cyan-500 text-center text-xl mb-10 md:mt-0 mt-20'>About Me</h1>
                <h1 className='uppercase md:text-5xl text-3xl mb-10 md:text-left text-center font-bold'>I'm Available for Frontend Design Projects</h1>
                <p className='px-10'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto quod mollitia quis repellendus sapiente consectetur dignissimos enim repellat maiores repudiandae velit quasi id, totam distinctio voluptatum aliquam soluta expedita. Alias neque veniam ratione unde necessitatibus recusandae error, id rem atque fugit cupiditate tempora. Impedit vitae quam rerum porro! Non, maiores recusandae cum ipsa tempora porro esse laboriosam omnis possimus quae adipisci, odio numquam aspernatur illum fugit deserunt sed repellat quidem nostrum. Autem aperiam itaque repellat pariatur provident praesentium dolorem nam.</p>

                <div className='flex md:justify-start justify-center'>
                    <button className="mt-10 text-xl box-border border-4 border-sky-900 w-48 h-14 rounded-lg bg-sky-600 text-white relative group">
                        <span className="pr-8">Download</span>
                        <span className="bg-sky-900 absolute right-0 top-0  h-full flex items-center justify-center px-1 group-hover:duration-300 group-hover:w-full w-10 duration-300">
                            <FiDownload className='w-10 h-10' />
                        </span>
                    </button>
                </div>


            </div>

        </div>
    )
}

export default About
