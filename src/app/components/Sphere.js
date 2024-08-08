"use client"

import { useState, useEffect, useMousePosition } from "react";

import Sphere3D from "./Sphere3d";
import { FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa";
import ippo from '../imgs/ippo.jpg';
import dario from '../imgs/dario.jpg';
import salva from '../imgs/salva.jpg';
import Image from 'next/image';

const Sphere = ({ sectionRef }) => {

    return (
        <section id="Sphere" className="text-white px-20" ref={sectionRef}>
            <div className="flex w-full">
                <div className="w-1/2">
                    <Sphere3D />
                </div>
                <div className="w-1/2 flex flex-col justify-center p-8">
                    <h2 className="text-7xl mb-8 gradient-text">Sphere</h2>
                    <div className="gradient-text">The ultimate electronic music experience from Liege.</div>

                    <div className="flex justify-between text-center mt-10">
                        <div className="flex flex-col items-center">
                            <Image src={ippo} alt="profil" width={200} height={200} className='rounded-full size-36 object-cover grayscale' />
                            <h3 className='text-4xl my-4'>Ippo</h3>
                            {/* <div className='text-base'>The ultimate electronic music experience from Liege</div> */}
                            <p className='flex justify-center items-center text-base mt-4'>
                                <a href='' className='mx-2 social-media'><FaInstagram /></a>
                                <a href='' className='mx-2 social-media'><FaFacebook /></a>
                                <a href='' className='mx-2 social-media'><FaTiktok /></a>
                            </p>
                        </div>
                        <div className="flex flex-col items-center">
                            <Image src={dario} alt="profil" width={200} height={200} className='rounded-full size-36 object-cover grayscale' />
                            <h3 className='text-4xl my-4'>Dario</h3>
                            {/* <div className='text-base'>The ultimate electronic music experience from Liege</div> */}
                            <p className='flex justify-center items-center text-base mt-4'>
                                <a href='' className='mx-2 social-media'><FaInstagram /></a>
                                <a href='' className='mx-2 social-media'><FaFacebook /></a>
                                <a href='' className='mx-2 social-media'><FaTiktok /></a>
                            </p>
                        </div>
                        <div className="flex flex-col items-center">
                            <Image src={salva} alt="profil" width={200} height={200} className='rounded-full size-36 object-cover grayscale' />
                            <h3 className='text-4xl my-4'>Salva</h3>
                            {/* <div className='text-base'>The ultimate electronic music experience from Liege</div> */}
                            <p className='flex justify-center items-center text-base mt-4'>
                                <a href='' className='mx-2 social-media'><FaInstagram /></a>
                                <a href='' className='mx-2 social-media'><FaFacebook /></a>
                                <a href='' className='mx-2 social-media'><FaTiktok /></a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Sphere;
