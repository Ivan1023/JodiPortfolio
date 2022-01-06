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
                <p className='about__textContainer__text'>Hi, I’m Jodi. I’m a UX Designer and Strategist.</p>
                <p className='about__textContainer__text'>I come from a design background with a Bachelor of Design from OCAD University, as well as customer service, graphic design and UX strategy work experiences. My customer service work experience helps me emphasize with users, while my graphic design experience conditions me with an eye for well designed visual elements and layouts.</p>
                <p className='about__textContainer__text'>My experience as a UX strategist builds out skills on facilitating a UX project from beginning to end, design thinking and critical thinking skills in an agile environment while working with multiple cross functioning departments and holding stakeholder’s best interests in mind.</p>
            </section>
        </main>
    )
}