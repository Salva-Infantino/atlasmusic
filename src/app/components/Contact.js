import { FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa";

const Contact = ({ sectionRef }) => {
    return (
        <section id="Contact" className="bg-black text-white px-20 flex-col relative" ref={sectionRef}>
            <div className="flex w-full">
                <div className="p-8 w-full flex flex-col justify-center">
                    <h2 className="text-7xl mb-8">Contact us !</h2>
                    <div>The ultimate electronic music experience from Liege. Our aim is to produce the best in large-scale shows & festivals nationally.</div>
                </div>
                <form className="p-8 w-full">
                    <div className="flex">
                        <div className="flex flex-col items-start text-base w-full mb-8 mr-4">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" className="w-full text-black px-2 py-1" />
                        </div>
                        <div className="flex flex-col items-start text-base w-full mb-8 ml-4">
                            <label htmlFor="firstname">Firstname</label>
                            <input type="text" id="firstname" className="w-full text-black px-2 py-1" />
                        </div>
                    </div>
                    <div className="flex">
                        <div className="flex flex-col items-start text-base w-full mb-8 mr-4">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" className="w-full text-black px-2 py-1" />
                        </div>
                        <div className="flex flex-col items-start text-base w-full mb-8 ml-4">
                            <label htmlFor="phone">Phone</label>
                            <input type="tel" id="phone" pattern="[0-9]{3}-[0-9]" className="w-full text-black px-2 py-1" />
                        </div>
                    </div>
                    <div className="flex flex-col items-start text-base mb-8">
                        <label htmlFor="subject">Subject</label>
                        <select type="tel" id="subject" className="w-full text-black px-2 py-1" defaultValue="">
                            <option value="" disabled>Select your option</option>
                            <option value="dj">Je suis un DJ</option>
                            <option value="organisateur">Je suis un organisateur</option>
                            <option value="sponsor">Je suis un sponsor</option>
                            <option value="autres">autres</option>
                        </select>
                    </div>
                    <div className="flex flex-col items-start text-base mb-8">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" className="w-full text-black px-2 py-1 h-40" />
                    </div>
                    <input type="submit" value="Envoyer" />
                </form>
            </div>
            <footer className="flex justify-between items-center w-full bg-slate-600 absolute bottom-0 text-base px-4 py-2">
                <small>
                    &copy; Atlas Music - 2024
                </small>
                <div className="flex justify-center items-center">
                    <a href='' className='mx-2 social-media'><FaInstagram /></a>
                    <a href='' className='mx-2 social-media'><FaFacebook /></a>
                    <a href='' className='mx-2 social-media'><FaTiktok /></a>
                </div>
            </footer>
        </section>
    )
}

export default Contact;