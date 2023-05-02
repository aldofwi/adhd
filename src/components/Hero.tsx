import Image from 'next/image';
import React from 'react'
import logoA from '../assets/logoA_trans.png'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles';

type Props = {}

function Hero({}: Props) {

    const [text, count] = useTypewriter({
        words: [
            "Hello, I am ΛD",
            "Man-who-adore-Apple-Juice.tsx",
            "<ButLovesCodingMore />",
        ],
        loop: true,
        delaySpeed: 2000,
    });

  return (

    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        <BackgroundCircles />
        <Image 
            className='relative rounded-full h-32 w-32 mx-auto object-cover'
            src={logoA}
            alt="logoA" />
        <h1>
            <span>{text}</span>
            <Cursor cursorColor='#F7AB0A' />
        </h1>
    </div>

  )
}

export default Hero