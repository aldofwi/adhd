import React from 'react'
import { motion } from 'framer-motion'
import logoA from '../assets/logoA_trans.png'
import Image from 'next/image'

type Props = {}

function ExperienceCard({}: Props) {

  return (

    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center 
    bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
        <motion.img 
            initial={{
                y: -100,
                opacity: 0,
            }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            src="https://avatars.githubusercontent.com/u/42814580?s=400&u=af24853f7c5f08390e4f0f0437239f46e3326aea&v=4"
            className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
            alt=""
        />
        <div className='px-0 md:px-10'>
            <h4 className='text-4xl font-light'>CEO of ADHD</h4>
            <p className='font-bold text-2xl mt-1'>ADHD</p>
            <div className='flex space-x-2 my-2'>
                <img className='h-10 w-10 rounded-full' src="https://raw.githubusercontent.com/github/explore/5b3600551e122a3277c2c5368af2ad5725ffa9a1/topics/java/java.png" alt="" />
                <img className='h-10 w-10 rounded-full' src="https://raw.githubusercontent.com/github/explore/5b3600551e122a3277c2c5368af2ad5725ffa9a1/topics/java/java.png" alt="" />
                <img className='h-10 w-10 rounded-full' src="https://raw.githubusercontent.com/github/explore/5b3600551e122a3277c2c5368af2ad5725ffa9a1/topics/java/java.png" alt="" />
            </div>
            <p className='uppercase py-5 text-gray-300'>Started work ... - Ended ... </p>

            <ul className='list-disc space-y-4 ml-5 text-lg'>
                <li>Summary points Summary points Summary points Summary points Summary points Summary points</li>
                <li>Summary points Summary points Summary points Summary points Summary points Summary points</li>
                <li>Summary points Summary points Summary points Summary points Summary points Summary points</li>
                <li>Summary points Summary points Summary points Summary points Summary points Summary points</li>
                <li>Summary points Summary points Summary points Summary points Summary points Summary points</li>
            </ul>
        </div>
    </article>

  )
}

export default ExperienceCard