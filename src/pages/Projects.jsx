import React from 'react'
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
                    that I have completed with links to their github for code source. Feel free to click the link and
                    explore each project deeper.
                </p>
            </div>

            <div className='flex flex-wrap my-20 gap1-6'>

            </div>
        </section>

    )
}


export default Projects;
