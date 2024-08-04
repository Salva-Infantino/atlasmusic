"use client"

import React, { useEffect } from 'react';
import '../styles/sphere.css';

const Sphere3d = () => {
    useEffect(() => {
        const sphere = document.getElementById('sphere');
        const rows = [];

        for(let i = 0; i < 180; i += 7) {
            rows.push(`<div class="line" style="transform: rotateY(${i}deg);"></div>`);
        }

        if (sphere) {
            sphere.innerHTML = rows.join("");
        }
    }, []); // Le tableau vide [] signifie que ce useEffect se déclenche seulement après le montage initial

    return (
        <div className="scene">
            <div className="wrapper">
                <div id="sphere" className="sphere">

                </div>
            </div>
        </div>
    );
}

export default Sphere3d;
