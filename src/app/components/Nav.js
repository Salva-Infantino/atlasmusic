"use client"

import { useEffect } from 'react';

const Nav = ({activeSection}) => {

    const items = ['Events', 'About', 'Sphere', 'Artists', 'Contact'];

    // Utiliser useEffect pour exécuter le code côté client
    useEffect(() => {
        const scrollSmoothTo = (elementId) => {
            var element = document.getElementById(elementId);
            if (element) {
                element.scrollIntoView({ block: 'start', behavior: 'smooth' });
            }
        };

        const handleClick = (event, id) => {
            event.preventDefault();
            scrollSmoothTo(id);
        };

        // Attacher les gestionnaires d'événements aux liens
        const links = document.querySelectorAll('nav a[href^="#"]');
        links.forEach(link => {
            link.addEventListener('click', (event) => handleClick(event, link.getAttribute('href').substring(1)));
        });

        // Nettoyage des gestionnaires d'événements
        return () => {
            links.forEach(link => {
                link.removeEventListener('click', (event) => handleClick(event, link.getAttribute('href').substring(1)));
            });
        };
    }, []);

    return (
        <nav className="flex justify-between fixed w-full z-10">
            {items.map((i, index) => 
                <a
                    key={index}
                    href={'#' + i}
                    className={`text-white no-underline uppercase text-base py-2 px-6 m-4 relative ${index === activeSection - 1 ? 'active' : ''}`}>
                    {i}
                </a>
            )}
            <a href="" id="getTickets" className="text-white no-underline uppercase text-base py-2 px-6 m-4 relative">Get Tickets</a>
        </nav>
    );
}

export default Nav;
