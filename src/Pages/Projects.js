import { useEffect } from 'react';
import { Link } from "react-router-dom";
import '../Pages/PageCSS/Projects.scss';

import BuyAgain from '../Asset/Projects/Buy_Again.png';
import OnlineToolRental from '../Asset/Projects/Online_Tool_Rental.png';
import LocalPro from '../Asset/Projects/Local_Pro_App-Cirect_Jobs.png';
import ConfigServer from '../Asset/ConfigServer/Samsung_Config_Server_Project_Icon_Photo.png';
import CreativePreviewGallery from '../Asset/CreativePreviewGallery/Creative_preview_icon.png';
import InteractiveQRCodeCreative from '../Asset/InteractiveQRCodeCreative/Interactive_QR_Code_Creative_Icon.png'

import ProjectTitleCard from '../Components/ProjectTitleCard';

export default function Projects (){    

    useEffect(()=>{
        window.scrollTo(0, 0);
    },[])

    return (
        <main className='main'>
            <section className='main__works'>
                <h1 className='main__works__title'>Portfolio</h1>
                <p className='main__works__text'>I have worked as the UX Designer and UX Strategist for several projects. I have experience in handling UX projects in both web and mobile app platforms.</p>
                <div className='main__works__container'>
                    <Link to={'/ConfigServer'}>
                        <ProjectTitleCard titleImg={ConfigServer} description={'Samsung Ads: Config Server'} />
                    </Link>
                    <Link to={'/CreativePreviewGallery'}>
                        <ProjectTitleCard titleImg={CreativePreviewGallery} description={'Samsung Ads: Creative Preview Gallery'} />
                    </Link>
                    <Link to={'/InteractiveQRCodeCreative'}>
                        <ProjectTitleCard titleImg={InteractiveQRCodeCreative} description={'Samsung Ads: Interactive QR Code Creative'} />
                    </Link>
                    <Link to={'/ToolRental'}>
                        <ProjectTitleCard titleImg={OnlineToolRental} description={'The Home Depot: Online Tool Rental'} />
                    </Link>
                    <Link to={'/BuyAgain'}>
                        <ProjectTitleCard titleImg={BuyAgain} description={'The Home Depot: Buy Again'} />
                    </Link>
                    <Link to={'/LocalPro'}>
                        <ProjectTitleCard titleImg={LocalPro} description={'The Home Depot: Local Pro App - Direct Jobs'} />
                    </Link>
                </div>
            </section>
        </main>
    )
}