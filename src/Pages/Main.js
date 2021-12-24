import { useState } from 'react';
// import { Link } from "react-router-dom";
import '../Pages/PageCSS/Main.scss';

import JourneyMapping from '../Asset/Home/Journey_Mapping.svg';
import UserTesting from '../Asset/Home/User_Test.svg';
import Prototype from '../Asset/Home/Prototype.svg';
import UIDesign from '../Asset/Home/UI_Design.svg';
import AODA from '../Asset/Home/AODA_Compliant.svg';
import Agile from '../Asset/Home/Agile_Project_Facilitator.svg';

import BuyAgain from '../Asset/Projects/Buy_Again.png';
import OnlineToolRental from '../Asset/Projects/Online_Tool_Rental.png';
import LocalPro from '../Asset/Projects/Local_Pro_App-Cirect_Jobs.png';

import LinkedIn from '../Asset/Footer/linkedin.svg';



export default function Main (){

    const [year, setYear] = useState(new Date().getFullYear())
    

    return (
        <main className='main'>
            <section className='main__hero'>
                <div className='main__hero__title-container'>
                    <p className='main__hero__title-container__text'>Hello, I’m Jodi.</p>
                    <p className='main__hero__title-container__text'>I’m a UX Designer and strategist.</p>
                </div>
                <button className='main__hero__button'>View My Portfolio</button>
            </section>
            <section className='main__competencies'>
                <div className='main__competencies__top'>
                    <h1 className='main__competencies__top__title'>Competencies</h1>
                </div>
                <div className='main__competencies__middle'>
                    <article className='main__competencies__middle__skills'>
                        <img src={JourneyMapping} className='main__competencies__middle__skills__img'/>
                        <p className='main__competencies__middle__skills__title'>Journey Mapping</p>
                        <p className='main__competencies__middle__skills__text'>Visualizes the target user’s journey in order to understand how they think, feel and speak in order to empathize with the users and extrapolate their pain points and needs.</p>
                    </article>
                    <article className='main__competencies__middle__skills'>
                        <img src={UserTesting} className='main__competencies__middle__skills__img'/>
                        <p className='main__competencies__middle__skills__title'>Usability Testing</p>
                        <p className='main__competencies__middle__skills__text'>Creates moderated and unmoderated usability test scripts; Gathers and analyzes insights through infinity mapping to influence and validate design decisions.</p>
                    </article>
                    <article className='main__competencies__middle__skills'>
                        <img src={AODA} className='main__competencies__middle__skills__AODA'/>
                        <p className='main__competencies__middle__skills__title'>AODA Compliant</p>
                        <p className='main__competencies__middle__skills__text'>Understands AODA and WCAG 2.0 guidelines to analyze and fix existing experiences while also designing new and future projects to be compliant.</p>
                    </article>
                    <article className='main__competencies__middle__skills'>
                        <img src={Prototype} className='main__competencies__middle__skills__img'/>
                        <p className='main__competencies__middle__skills__title'>Prototyping</p>
                        <p className='main__competencies__middle__skills__text'>Understands AODA and WCAG 2.0 guidelines to analyze and fix existing experiences while also designing new and future projects to be compliant.</p>
                    </article>
                    <article className='main__competencies__middle__skills'>
                        <img src={UIDesign} className='main__competencies__middle__skills__img'/>
                        <p className='main__competencies__middle__skills__title'>UI Design</p>
                        <p className='main__competencies__middle__skills__text'>Creates UI mocks and layout with look, feel and interactivity in mind to ensure the user is able to go through the experience as intended.</p>
                    </article>
                    <article className='main__competencies__middle__skills'>
                        <img src={Agile} className='main__competencies__middle__skills__img'/>
                        <p className='main__competencies__middle__skills__title'>Agile Project Facilitator</p>
                        <p className='main__competencies__middle__skills__text'>Creates UI mocks and layout with look, feel and interactivity in mind to ensure the user is able to go through the experience as intended.</p>
                    </article>
                </div>
                <div className='main__competencies__bottom'/>
            </section>
            <section className='main__works'>
                <h1 className='main__works__title'>My Top Works</h1>
                <div className='main__works__container'>
                    <article className='main__works__card'>
                        <img src={OnlineToolRental} className='main__works__card__img'/>
                        <p className='main__works__card__description'>The Home Depot: Online Tool Rental</p>
                    </article>
                    <article className='main__works__card'>
                        <img src={BuyAgain} className='main__works__card__img'/>
                        <p className='main__works__card__description'>The Home Depot: Buy Again</p>
                    </article>
                    <article className='main__works__card'>
                        <img src={LocalPro} className='main__works__card__img'/>
                        <p className='main__works__card__description'>The Home Depot: Local Pro App - Direct Jobs</p>
                    </article>
                </div>
            </section>
            <section className='main__footer'>
                <img src={LinkedIn} className='main__footer__img'/>
                <p>{` © ${year} Jodi Lam`}</p>
            </section>
        </main>
    )
}