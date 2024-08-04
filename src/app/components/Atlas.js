'use client'

import { TypeAnimation } from 'react-type-animation';
import Image from 'next/image';
import logo from '../imgs/logo.png';

const Atlas = () => {
    return (
        <section id="Atlas" className='flex-col text-white'>
            <video autoPlay muted loop id="myVideo" className='absolute -z-50 w-full grayscale'>
                <source src="../doc/party.mp4" type="video/mp4"/>
                Your browser does not support HTML5 video.
            </video>
            <Image src={logo} width={500} height={500} alt="Atlas Music" />
            <div>&nbsp;
            <TypeAnimation
                sequence={[
                    // Same substring at the start will only be typed out once, initially
                    'Live DJ sets',
                    1000, // wait 1s
                    'Music Production',
                    1000,
                    'Events',
                    1000,
                    'Promotion of young artists',
                    1000
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                preRenderFirstString={false}
                cursor={false}/>   
            &nbsp;</div>
        </section>
    )
}

export default Atlas;