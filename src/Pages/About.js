import { useState } from 'react';
import '../Pages/PageCSS/About.scss';
import Photo from '../Asset/Profile/Jodi_Photo.png';

export default function About(){

    return (
        <main className='about'>
            <section className='about__imgContainer'>
                <img src={Photo} className='about__imgContainer__img'/>
            </section>
            <section className='about__textContainer'>
                <p className='about__textContainer__text'>Hi, I’m Jodi. I’m a Product Designer and Strategist.</p>
                <p className='about__textContainer__text'>With over 5 years of experience as a Senior Product Designer in B2C and B2B Ad Tech SaaS, I am eager to bring my expertise in user-centered design and my passion for creating impactful digital experiences to your innovative team.</p>
                <p className='about__textContainer__text'>I have a proven track record of collaborating with senior designers, product managers, engineers, and other stakeholders to align on project goals, ensuring that designs not only meet user expectations but also drive business growth. Additionally, my strong portfolio showcases several design projects where I have played a pivotal role in creating workflows that simplify complex systems and enhance usability.</p>
            </section>
        </main>
    )
}