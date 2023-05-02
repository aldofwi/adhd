import React from 'react'
import { motion } from 'framer-motion'
import logoA from '../assets/logoA_trans.png'

type Props = {}

function About({}: Props) {

    // https://scontent-mia3-2.xx.fbcdn.net/v/t1.18169-9/12308832_904213029686404_1611694340108501295_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=WOCsy3KwKz0AX-btGhQ&_nc_ht=scontent-mia3-2.xx&oh=00_AfDpt1t3clhZIlmAFzWZlTlytWlo8mnMvDJ8BV80EaW69w&oe=64790F73

  return (

    <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>About</h3>

        <motion.img 
            initial={{
                x: -200,
                opacity: 0,
            }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            src="https://scontent-mia3-1.xx.fbcdn.net/v/t31.18172-8/334883_110145272426521_1364936393_o.jpg?_nc_cat=101&ccb=1-7&_nc_sid=de6eea&_nc_ohc=9h34NjUHRV0AX8oIPQl&_nc_ht=scontent-mia3-1.xx&oh=00_AfBaxBhBbNq0MaEzyD8fYjJCmvc_U-FCv45zFAY2atWbYQ&oe=6478FBA3"
            className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]'
        />
        <div className='space-y-10 px-0 md:px-10'>
            <h4 className='text-4xl font-semibold'>Here is a <span className='underline decoration-[#F7AB0A]/50'>little</span>{" "} background.</h4>
        
            <p className='text-base'>Computer science engineering graduate, with around 12 years of working experience. I completed my graduation in 2006 from Velizy Technological University near Versailles and also in 2009 from University of Paris XII ESIAG. Started my career at one of the biggest french Bank. (2006-2010), currently working as a Full Stack Engineer (NextJS) in Freelance.</p>
        </div>
    </motion.div>

  )
}

export default About