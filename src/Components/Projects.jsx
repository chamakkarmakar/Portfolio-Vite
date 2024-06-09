import React from 'react'
import jobly from "../assets/Jobly.jpg"
import law from "../assets/law.jpg"
import bookworm from "../assets/bookworm.jpg"

const Projects = () => {
    const projectsDetails = [
        {
            title: "Jobly",
            description: "Job searching website",
            live: "https://career-hub-jobly-09.netlify.app/",
            img: `${jobly}`
        },
        {
            title: "BookWorm",
            description: "Book review and recommendation website",
            live: "https://book-review-app-d78cf.web.app/",
            img: `${bookworm}`
        },
        {
            title: "Attorney@Law",
            description: "This is a legal consultation project",
            live: "https://independent-service-provider-1.web.app/",
            img: `${law}`
        },
       
    ]
    return (
        <div className='container mx-auto'>
            <h1 className="text-3xl text-center mb-16">
                My Works
            </h1>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-y-8 justify-items-center text-black">
                {
                    projectsDetails.map((project, index) =>
                        <div key={index} className="max-w-[350px] space-y-4 rounded-lg bg-sky-900 text-white p-6 shadow-lg md:w-[350px]">
                            <img width={200} height={200} className="h-[275px] w-[350px] rounded-lg hover:scale-75 transition duration-300 ease-in-out" src={project.img} alt={project.title} />
                            <div className="grid gap-2 justify-items-center">
                                <h1 className="text-lg font-semibold ">{project.title}</h1>
                                <p className="text-sm text-gray-300 dark:text-white/60">{project.description}</p>
                            </div>
                            <div className="flex gap-4 items-center justify-center">
                                <a href={project.live} target='_blank'>
                                <button type="submit" className="h-12 w-40 origin-top transform rounded-lg border-2 border-sky-500 text-lg text-sky-50 before:absolute before:top-0 before:block before:h-0 before:w-full before:duration-500 hover:text-white hover:before:absolute hover:before:left-0 hover:before:-z-10 hover:before:h-full hover:before:bg-sky-600">Live Demo</button>
                                </a>

                            </div>
                        </div>
                    )
                }
            </div>

        </div>
    )
}

export default Projects
