import Sphere3D from "./Sphere3d";
import { FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa";
import profil1 from '../imgs/profil1.jpg';
import profil2 from '../imgs/profil2.jpg';
import profil3 from '../imgs/profil3.jpg';
import Image from 'next/image';

const Sphere = ({ sectionRef }) => {
    return (
        <section id="Sphere" className="bg-black text-white px-20" ref={sectionRef}>
            <div className="flex w-full">
                <div>
                    <Sphere3D />
                </div>
                <div className="w-full flex flex-col justify-center">
                    <h2 className="text-7xl mb-8">Sphere</h2>
                    <div>The ultimate electronic music experience from Liege.</div>

                    <div className="flex justify-between text-center mt-10">
                        <div className="flex flex-col items-center">
                            <Image src={profil1} alt="profil" width={200} height={200} className='rounded-full size-36 object-cover' />
                            <h3 className='text-4xl my-4'>Nom</h3>
                            <div className='text-base'>The ultimate electronic music experience from Liege</div>
                            <p className='flex justify-center items-center text-base mt-4'>
                                <a href='' className='mx-2 social-media'><FaInstagram /></a>
                                <a href='' className='mx-2 social-media'><FaFacebook /></a>
                                <a href='' className='mx-2 social-media'><FaTiktok /></a>
                            </p>
                        </div>
                        <div className="flex flex-col items-center">
                            <Image src={profil2} alt="profil" width={200} height={200} className='rounded-full size-36 object-cover' />
                            <h3 className='text-4xl my-4'>Nom</h3>
                            <div className='text-base'>The ultimate electronic music experience from Liege</div>
                            <p className='flex justify-center items-center text-base mt-4'>
                                <a href='' className='mx-2 social-media'><FaInstagram /></a>
                                <a href='' className='mx-2 social-media'><FaFacebook /></a>
                                <a href='' className='mx-2 social-media'><FaTiktok /></a>
                            </p>
                        </div>
                        <div className="flex flex-col items-center">
                            <Image src={profil3} alt="profil" width={200} height={200} className='rounded-full size-36 object-cover' />
                            <h3 className='text-4xl my-4'>Nom</h3>
                            <div className='text-base'>The ultimate electronic music experience from Liege</div>
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
