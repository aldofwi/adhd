import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '../../typings';
import { urlFor } from '../../sanity';
import Link from 'next/link';

type Props = {
    projects: Project[]
}

function Projects({ projects }: Props) {

    // const projects = [1, 2, 3, 4, 5];

  return (

    <motion.div 
        initial=    {{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition= {{ duration: 1.5 }}
        className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
            Projects
        </h3>

        <div className="relative w-full flex overflow-x-scroll overflow-y-hidden
        snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
            
            {projects.map((project, index) => (
                <div 
                    key={project._id} 
                    className="max-h-2xl max-w-2xl flex-shrink-0 snap-center flex flex-col 
                        space-y-5 items-center justify-center p-1 md:p-20">
                    <motion.img
                        initial={{
                            y: -300,
                            opacity: 0,
                        }}
                        transition={{ duration: 1.2 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        src={urlFor(project?.image).url()} alt=""
                        className="h-min w-min relative p-6 flex-col"
                        />
                    
                    <div className='space-y-10 px-0 md:px-10 max-w-4xl'>
                        <h4 className='text-2xl font-semibold text-center'>
                            <span>
                                Project N°{index+1} / {projects.length}: 
                            </span> {" "}

                            <span 
                                className='underline decoration-[#F7AB0A]/50'
                                onClick={() => (window.location.href = project?.linkToBuild)}>
                                    {project?.title}
                            </span>
                            
                        </h4>

                        <div className='flex items-center space-x-2 justify-center'>
                        {project?.technologies.map( technology => (
                            <img 
                                className='h-10 w-10 rounded-full'
                                key={technology._id}
                                src={urlFor(technology.image).url()}
                                alt=""
                            />
                        ))}
                        </div>

                        <p className='text-lg text-center md:text-left'>
                            {project?.summary}
                        </p>
                    </div>
                </div>
            ))}

            {/* Projects */}
            {/* Projects */}
            {/* Projects */}
            {/* Projects */}
        </div>

        <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>

  )

}

export default Projects