import React from 'react'
import { motion } from 'framer-motion'

type Props = {
    directionLeft?: boolean;
}

function Skill({ directionLeft }: Props) {

  return (
    <div className="group relative flex cursor-pointer">
        <motion.img
            initial={{
                x: directionLeft ? -200 : 200,
                opacity: 1,
            }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            src="https://raw.githubusercontent.com/github/explore/5b3600551e122a3277c2c5368af2ad5725ffa9a1/topics/java/java.png"
            className="rounded-full border-gray-500 object-cover w-24 h-24 md:w-28 md:h-28 
            xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
        />
        <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white 
        w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0 ">
            <div className="flex items-center justify-center h-full">
                <p className='text-3xl font-bold text-black opacity-100'>100%</p>
            </div>
        </div>
        
    </div>
  );
}

export default Skill