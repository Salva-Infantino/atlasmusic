"use client"

import { useState } from 'react';
import Carousel from './Carousel';

const Events = ({ sectionRef }) => {

    const events = [
        {
            name: "Sphere Edition 1",
            artists: ["D-Nasty", "DJ Oleg", "Dj Khaled", "Vladimir Chauchemar"],
            date: "7 Oct 2024",
            start: "20:00",
            end: "4:30",
            place: "DarkCube, Liège",
            img: '../doc/visual2.jpg'
        },
        {
            name: "Sphere Edition 2",
            artists: ["DJ Snake", "DJ Oleg", "Patrick Truel", "Vladimir Chauchemar"],
            date: "7 Octobre 2024",
            start: "20:00",
            end: "4:30",
            place: "DarkCube, Liège",
            img: '../doc/visual3.jpg'
        },
        {
            name: "Bass Night",
            artists: ["Knock2", "DJ Oleg", "Patrick Sebastien", "Vladimir Rêve"],
            date: "7 Octobre 2024",
            start: "20:00",
            end: "4:30",
            place: "DarkCube, Liège",
            img: '../doc/visual4.jpeg'
        },
        {
            name: "Festiville",
            artists: ["Jauz", "DJ Oleg", "The Weeknd", "Le Grand Jojo"],
            date: "7 Octobre 2024",
            start: "20:00",
            end: "4:30",
            place: "DarkCube, Liège",
            img: '../doc/visual5.webp'
        }
    ]

    const [currentIndex, setCurrentIndex] = useState(0);

    const artistClass = (i) => {
        switch (i) {
        case 0:
            return 'text-9xl m-0 font-black'
            break;
        case 1:
            return 'text-6xl m-0 font-medium'
            break;
        case 2:
            return 'text-5xl font-light'
            break;
        default:
            return 'text-3xl mt-4 font-light'
        }
    } 

    return (
        <section id="Events" className='text-white' ref={sectionRef}>
            <div className="w-full h-full flex">
                <Carousel events={events} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />
                <div className="h-full w-1/2 flex flex-col justify-center items-center bg-slate-600 text-black opacity-70">
                    {events[currentIndex].artists.map((artist, i) => {return <p key={i} className={artistClass(i)}>{artist}</p>})}
                </div>
            </div>
        </section>
    )
}

export default Events;