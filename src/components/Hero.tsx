import Image from 'next/image';
import React from 'react'
import a_fb from '../assets/A_FB.jpg'
import logoA from '../assets/logoA_trans.png'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles';
import Link from 'next/link';
import { PageInfo } from '../../typings';
import { urlFor } from '../../sanity';

type Props = {
    pageInfo: PageInfo
}

function Hero({ pageInfo }: Props) {

    // https://scontent-mia3-1.xx.fbcdn.net/v/t31.18172-8/334883_110145272426521_1364936393_o.jpg?_nc_cat=101&ccb=1-7&_nc_sid=de6eea&_nc_ohc=9h34NjUHRV0AX8oIPQl&_nc_ht=scontent-mia3-1.xx&oh=00_AfBaxBhBbNq0MaEzyD8fYjJCmvc_U-FCv45zFAY2atWbYQ&oe=6478FBA3

    const [text, count] = useTypewriter({
        words: [
            `Hello, I am ${pageInfo?.name}`,
            "Apple-Juice-Lover.tsx",
            "<OldSchoolCoder />",
        ],
        loop: true,
        delaySpeed: 2000,
    });

  return (

    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        <BackgroundCircles />
        <img 
            className='relative rounded-full h-32 w-32 mx-auto object-cover'
            src={urlFor(pageInfo.heroImage).url()}
            alt="" />
        <div className='z-20'>
            <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>{pageInfo?.role}</h2>
            <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
                <span className='mr-3'>{text}</span>
                <Cursor cursorColor='#F7AB0A' />
            </h1>

            <div className='pt-5'>
                <Link href="#about"><button className='heroButton'>About</button></Link>
                <Link href="#experience"><button className='heroButton'>Experience</button></Link>
                <Link href="#skills"><button className='heroButton'>Skills</button></Link>
                <Link href="#projects"><button className='heroButton'>Projects</button></Link>
            </div>
        </div>
    </div>

  )
}

export default Hero