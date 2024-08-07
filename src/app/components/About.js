import Image from 'next/image';
import profil1 from '../imgs/profil1.jpg';
import profil2 from '../imgs/profil2.jpg';
import profil3 from '../imgs/profil3.jpg';
import { FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa";

const About = ({ sectionRef }) => {
    return (
        <section id="About" className="text-white flex-col px-20" ref={sectionRef}>
            <h2 className="text-7xl mb-8">About us</h2>
            <div>The ultimate electronic music experience from Liege. Our aim is to produce the best in large-scale shows & festivals nationally.</div>
            <div className="flex justify-around text-center mt-20">
                <div className="flex flex-col items-center py-4 px-8">
                    <Image src={profil1} alt="profil" width={200} height={200} className='rounded-full size-48 object-cover' />
                    <h3 className='text-4xl my-4'>Nom</h3>
                    <div className='text-base'>The ultimate electronic music experience from Liege</div>
                    <p className='flex justify-center items-center text-base mt-4'>
                        <a href='' className='mx-2 social-media'><FaInstagram /></a>
                        <a href='' className='mx-2 social-media'><FaFacebook /></a>
                        <a href='' className='mx-2 social-media'><FaTiktok /></a>
                    </p>
                </div>
                <div className="flex flex-col items-center py-4 px-8">
                    <Image src={profil2} alt="profil" width={200} height={200} className='rounded-full size-48 object-cover' />
                    <h3 className='text-4xl my-4'>Nom</h3>
                    <div className='text-base'>The ultimate electronic music experience from Liege</div>
                    <p className='flex justify-center items-center text-base mt-4'>
                        <a href='' className='mx-2 social-media'><FaInstagram /></a>
                        <a href='' className='mx-2 social-media'><FaFacebook /></a>
                        <a href='' className='mx-2 social-media'><FaTiktok /></a>
                    </p>
                </div>
                <div className="flex flex-col items-center py-4 px-8">
                    <Image src={profil3} alt="profil" width={200} height={200} className='rounded-full size-48 object-cover' />
                    <h3 className='text-4xl my-4'>Nom</h3>
                    <div className='text-base'>The ultimate electronic music experience from Liege</div>
                    <p className='flex justify-center items-center text-base mt-4'>
                        <a href='' className='mx-2 social-media'><FaInstagram /></a>
                        <a href='' className='mx-2 social-media'><FaFacebook /></a>
                        <a href='' className='mx-2 social-media'><FaTiktok /></a>
                    </p>
                </div>
            </div>
        </section>
    )
}

export default About;