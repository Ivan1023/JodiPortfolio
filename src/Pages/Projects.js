import { useState } from 'react';
import { Link } from "react-router-dom";
import '../Pages/PageCSS/Projects.scss';

import BuyAgain from '../Asset/Projects/Buy_Again.png';
import OnlineToolRental from '../Asset/Projects/Online_Tool_Rental.png';
import LocalPro from '../Asset/Projects/Local_Pro_App-Cirect_Jobs.png';
import Mindful from '../Asset/Projects/Mindful_App.png';

export default function Projects (){    

    return (
        <main className='main'>
            <section className='main__works'>
                <h1 className='main__works__title'>Portfolio</h1>
                <p className='main__works__text'>I have worked as the UX Designer and UX Strategist for several projects. I have experience in handling UX projects in both web and mobile app platforms.</p>
                <div className='main__works__container'>
                    <Link to={'/ToolRental'}>
                        <article className='main__works__card'>
                            <img src={OnlineToolRental} className='main__works__card__img'/>
                            <p className='main__works__card__description'>The Home Depot: Online Tool Rental</p>
                        </article>
                    </Link>
                    <Link to={'/BuyAgain'}>
                        <article className='main__works__card'>
                            <img src={BuyAgain} className='main__works__card__img'/>
                            <p className='main__works__card__description'>The Home Depot: Buy Again</p>
                        </article>
                    </Link>
                    <article className='main__works__card'>
                        <img src={LocalPro} className='main__works__card__img'/>
                        <p className='main__works__card__description'>The Home Depot: Local Pro App - Direct Jobs</p>
                    </article>
                    <Link to={'/Mindful'}>
                        <article className='main__works__card'>
                            <img src={Mindful} className='main__works__card__img'/>
                            <p className='main__works__card__description'>Case Study: Mindful App</p>
                        </article>
                    </Link>
                    
                </div>
            </section>
        </main>
    )
}