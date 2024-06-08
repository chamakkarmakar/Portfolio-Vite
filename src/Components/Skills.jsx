import React from 'react'
import { RiJavascriptFill } from "react-icons/ri";
import { GrReactjs } from "react-icons/gr";
import { FaNode } from "react-icons/fa";
import { SiExpress, SiMongodb, SiCss3, SiTailwindcss, SiBootstrap ,SiRedux } from "react-icons/si";
import { TiHtml5 } from "react-icons/ti";
const Skills = () => {
    const iconsItems = [
        {
            icon: <RiJavascriptFill className='w-20 h-20 text-yellow-400' />,
            title: "JavaScript"
        },
        {
            icon: <GrReactjs className='w-20 h-20 text-cyan-600' />,
            title: "React.JS"
        },
        {
            icon: <SiRedux  className='w-20 h-20 text-indigo-600' />,
            title: "Redux"
        },
        {
            icon: <FaNode className='w-20 h-20 text-green-700' />,
            title: "Node.JS"
        },
        {
            icon: <SiExpress className='w-20 h-20 bg-black text-white' />,
            title: "Express.JS"
        },
        {
            icon: <SiMongodb className='w-20 h-20 text-green-800' />,
            title: "MongoDB"
        },
        {
            icon: <TiHtml5 className='w-20 h-20 text-orange-500' />,
            title: "HTML5"
        },
        {
            icon: <SiCss3 className='w-20 h-20 text-blue-500' />,
            title: "CSS3"
        },
        {
            icon: <SiTailwindcss className='w-20 h-20 text-sky-700' />,
            title: "Tailwind"
        },
        {
            icon: <SiBootstrap className='w-20 h-20 text-indigo-700' />,
            title: "Bootstrap"
        }
    ]
    return (
        <div className='md:w-3/4 mx-auto mb-60'>
            <h1 className="text-5xl text-center mb-10">Skills</h1>

            <div className="grid md:grid-cols-5 grid-cols-3 gap-y-10 justify-items-center">
                {
                    iconsItems.map((item, index) =>
                        <div key={index} className="group relative mx-auto my-14 flex h-10 w-max cursor-pointer justify-center">
                            <div key={index}>{item.icon}</div>
                            {/* Hover Text */}
                            <div className="absolute -top-12 cursor-pointer whitespace-nowrap opacity-0 duration-500 hover:hidden group-hover:-top-16 group-hover:opacity-100  ">
                                <p className="h-fit shadow-[0px_0px_10px_0px_#0EA5E9] rounded-md bg-[#0EA5E9] px-3 py-2 text-white"> {item.title}</p>
                                <span className="absolute shadow-[0px_0px_10px_0px_#0EA5E9] -bottom-2 left-[50%] h-0 w-0 -translate-x-1/2 rotate-[135deg] border-b-[20px] border-r-[20px] border-b-transparent border-r-[#0EA5E9]"></span>
                            </div>
                            {/* Hover button */}
                        </div>
                    )
                }
            </div>


        </div>
    )
}

export default Skills
