import Image from 'next/image';
import profil1 from '../imgs/profil1.jpg';
import profil2 from '../imgs/profil2.jpg';
import profil3 from '../imgs/profil3.jpg';

const About = () => {
    return (
        <section id="About" className="bg-black text-white flex-col px-20">
            <h2 className="text-7xl mb-8">About us</h2>
            <div>The ultimate electronic music experience from Liege. Our aim is to produce the best in large-scale shows & festivals nationally.</div>
            <div className="flex justify-around text-center mt-20">
                <div className="flex flex-col items-center py-4 px-8">
                    <Image src={profil1} alt="profil" width={200} height={200} className='rounded-full size-48 object-cover' />
                    <h3 className='text-5xl my-4'>Nom</h3>
                    <div className='text-base'>The ultimate electronic music experience from Liege</div>
                </div>
                <div className="flex flex-col items-center py-4 px-8">
                    <Image src={profil2} alt="profil" width={200} height={200} className='rounded-full size-48 object-cover' />
                    <h3 className='text-5xl my-4'>Nom</h3>
                    <div className='text-base'>The ultimate electronic music experience from Liege</div>
                </div>
                <div className="flex flex-col items-center py-4 px-8">
                    <Image src={profil3} alt="profil" width={200} height={200} className='rounded-full size-48 object-cover' />
                    <h3 className='text-5xl my-4'>Nom</h3>
                    <div className='text-base'>The ultimate electronic music experience from Liege</div>
                </div>
            </div>
        </section>
    )
}

export default About;