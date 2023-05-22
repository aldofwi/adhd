import React from 'react'
import { motion } from 'framer-motion'
import logoA from '../assets/logoA_trans.png'
import Image from 'next/image'
import { Experience } from '../../typings'
import { urlFor } from '../../sanity'

type Props = {
    experience: Experience
}

function ExperienceCard({ experience }: Props) {

  return (

    <article className='flex flex-col rounded-lg items-center space-y-2 flex-shrink-0 
    h-fit w-fit md:w-[250px] xl:w-[400px] pt-10 snap-center bg-[#292929] p-5 hover:opacity-100 
    opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'> 
        <motion.img 
            initial={{
                y: -100,
                opacity: 0,
            }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            src={urlFor(experience?.companyImage).url()}
            className="w-min h-min rounded-full xl:w-[100px] xl:h-[100px] object-cover object-center"
            alt=""
        />
        <div className='px-0 md:px-10 h-min'>
            <h4 className='text-4xl font-light'>{experience.jobTitle}</h4>
            <p className='font-bold text-2xl mt-1'>{experience.company}</p>
            <div className='flex space-x-2 my-2'>
                {
                    experience.technologies.map((technology) => (
                        <img 
                            key={technology._id}
                            className='h-10 w-10 rounded-full' 
                            src={urlFor(technology.image).url()}
                            alt="" />
                    ))        
                    
                }
            </div>
            <p className='uppercase py-5 text-gray-300'>
                {new Date(experience.dateStarted).toDateString()} - {" "}
                {experience.isCurrentlyWorkingHere ? "Present"
                    : new Date(experience.dateEnded).toDateString()
                }
            </p>

            <ul className='list-disc space-y-2 ml-5 text-lg h-52 pr-10 overflow-y-scroll'>
                {experience.points.map((point, i) => (
                    <li key={i}>{point}</li>
                ))}

            </ul>
        </div>
    </article>

  )
}

export default ExperienceCard