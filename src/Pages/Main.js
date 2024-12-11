import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
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
import GreyWaveTablet from '../Asset/Home/greyWaveTablet.svg'
import ConfigServer from '../Asset/ConfigServer/Samsung_Config_Server_Project_Icon_Photo.png';
import ProjectTitleCard from '../Components/ProjectTitleCard';
import CreativePreviewGallery from '../Asset/CreativePreviewGallery/Creative_preview_icon.png';

export default function Main (){

    useEffect(()=>{
        window.scrollTo(0, 0);
    },[])

    return (
        <main className='main'>
            <section className='main__hero'>
                <div className='main__hero__title-container'>
                    <p className='main__hero__title-container__text'>I’m a Senior Product Designer with 5 years of experience in B2C and B2B Ad Tech SaaS</p>
                </div>
                <Link to={'/Portfolio'}><button className='main__hero__button'>View My Portfolio</button></Link>
            </section>
            <section className='main__competencies'>
                <img className='main__competencies__svgTop' src={GreyWaveTablet} alt='grey wave desing'/>
                <div className='main__competencies__top'>
                    <div className='main__competencies__top__filler'>.</div>
                    <h1 className='main__competencies__top__title'>Competencies</h1>
                </div>
                <div className='main__competencies__middle'>
                    <article className='main__competencies__middle__skills'>
                        <div className='main__competencies__middle__skills__imgContainer'>
                            <img src={JourneyMapping} className='main__competencies__middle__skills__img'/>
                        </div>
                        
                        <p className='main__competencies__middle__skills__title'>Journey Mapping</p>
                        <p className='main__competencies__middle__skills__text'>Visualizes the target user’s journey in order to understand how they think, feel and speak in order to empathize with the users and extrapolate their pain points and needs.</p>
                    </article>
                    <article className='main__competencies__middle__skills'>
                        <div className='main__competencies__middle__skills__imgContainer'>
                            <img src={UserTesting} className='main__competencies__middle__skills__img'/>    
                        </div>
                        
                        <p className='main__competencies__middle__skills__title'>Usability Testing</p>
                        <p className='main__competencies__middle__skills__text'>Creates moderated and unmoderated usability test scripts; Gathers and analyzes insights through infinity mapping to influence and validate design decisions.</p>
                    </article>
                    <article className='main__competencies__middle__skills'>
                        <div className='main__competencies__middle__skills__imgContainer'>
                            <img src={AODA} className='main__competencies__middle__skills__AODA'/>    
                        </div>
                        
                        <p className='main__competencies__middle__skills__title'>AODA Compliant</p>
                        <p className='main__competencies__middle__skills__text'>Understands AODA and WCAG 2.0 guidelines to analyze and fix existing experiences while also designing new and future projects to be compliant.</p>
                    </article>
                    <article className='main__competencies__middle__skills'>
                        <div className='main__competencies__middle__skills__imgContainer'>
                            <img src={Prototype} className='main__competencies__middle__skills__img'/>  
                        </div>
                        <p className='main__competencies__middle__skills__title'>Prototyping</p>
                        <p className='main__competencies__middle__skills__text'>Creates interactive prototypes with low, mid and high fidelity wireframes using InVision, Sketch and Figma during different stages of the design process.</p>
                    </article>
                    <article className='main__competencies__middle__skills'>
                        <div className='main__competencies__middle__skills__imgContainer'>
                            <img src={UIDesign} className='main__competencies__middle__skills__img'/>
                        </div>
                        
                        <p className='main__competencies__middle__skills__title'>UI Design</p>
                        <p className='main__competencies__middle__skills__text'>Creates UI mocks and layout with look, feel and interactivity in mind to ensure the user is able to go through the experience as intended.</p>
                    </article>
                    <article className='main__competencies__middle__skills'>
                        <div className='main__competencies__middle__skills__imgContainer'>
                            <img src={Agile} className='main__competencies__middle__skills__img' />    
                        </div>
                        <p className='main__competencies__middle__skills__title'>Agile Project Facilitator</p>
                        <p className='main__competencies__middle__skills__text'>Facilitates a UX project from beginning to end while conversing and working together with cross functional departments in an agile environment.</p>
                    </article>
                    <div className='main__competencies__middle__filler'>.</div>
                </div>
                <img className='main__competencies__svgBottom' src={GreyWaveTablet} alt='grey wave desing'/>
            </section>
            <section className='main__works'>
                <h1 className='main__works__title'>My Top 3 Works</h1>
                <p className='main__competencies__middle__skills__text'>To see all of my published case studies and works, please head over to <Link to={'/Portfolio'} style={{color: '#009CDF'}}>Portfolio</Link></p>
                <div className='main__works__container'>
                    <Link to={'/ConfigServer'}>
                        <ProjectTitleCard titleImg={ConfigServer} description={'Samsung Ads: Config Server'} />
                    </Link>
                    <Link to={'/CreativePreviewGallery'}>
                        <ProjectTitleCard titleImg={CreativePreviewGallery} description={'Samsung Ads: Creative Preview Gallery'} />
                    </Link>
                    <Link to={'/LocalPro'}>
                        <ProjectTitleCard titleImg={LocalPro} description={'The Home Depot: Local Pro App - Direct Jobs'} />
                    </Link>
                </div>
            </section>
        </main>
    )
}