import React from 'react'
import { Link } from 'react-router-dom';
import { projects } from '../constants';


const Projects = () => {
    return (
        <section className='max-container'>
            <h1 className="head-text">
                My <span className='blue-gradient_text font-semibold
                drop-shadow'>Projects</span>
            </h1>

            <div className='mt-5 flex flex-col gap-3 text-slate-500'>
                <p>Over the years I have worked on numerous moblie and web application projects, below are some of the projects
                    that I have completed with links to their github or deployed live link. Feel free to click the link and
                    explore each project deeper.
                </p>
            </div>

            <div className='flex flex-wrap my-20 gap-16'>
                {projects.map((project) => {
                    return (
                        <div className='lg:w-[400px] w-full' key={project.title}>
                            <div className='block-container w-12 h-12'>
                                <div className={`btn-back rounded-x bg-blue-400`} />
                                <div className='btn-front rounded-xl flex justify-center items-center'>
                                    <img src={project.imageUrl}
                                    alt="Project Icon"
                                    className='w-1/2 h-1/2 object-contain ' />
                                </div>
                            </div>

                            <div className='mt-5 flex flex-col'>
                                <h4 className='text-2xl font-poppins font-semibold'>
                                    {project.title}
                                </h4>
                                <p className='mt-2 text-slate-500'>
                                    {project.description}
                                </p>
                                <div className='mt-5 flex items-center gap-2 font-poppins'>
                                    <Link
                                        to={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="font-semibold text-blue-600"
                                    >
                                        Live Link
                                    </Link>
                                </div>

                            </div>
                        </div>
                    )

                }

                )}

            </div>
        </section>

    )
}


export default Projects;
