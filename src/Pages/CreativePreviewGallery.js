import { useEffect, useState } from 'react';
import '../Pages/PageCSS/CreativePreviewGallery.scss';
import SideBar from '../Components/SideBar';
import ResponsiveContainer from '../Components/ResponsiveContainer';
import { Modal } from '../Components/Modal';

import MainImage from '../Asset/CreativePreviewGallery/Creative_preview_gallery_hero_photo.svg';
import DesignProcess from '../Asset/CreativePreviewGallery/Creative_preview_gallery_design_process.svg';
import Discovery1 from '../Asset/CreativePreviewGallery/Creative_preview_gallery_understanding_problem_1.svg';
import Discovery2 from '../Asset/CreativePreviewGallery/Creative_preview_gallery_understanding_problem_4.svg';
import CompetitiveBrenchmarking1 from '../Asset/CreativePreviewGallery/Creative_preview_gallery_competitive_benchmarking_1.svg';
import CompetitiveBrenchmarking2 from '../Asset/CreativePreviewGallery/Creative_preview_gallery_competitive_benchmarking_2.svg';
import Ideation1 from '../Asset/CreativePreviewGallery/Creative_preview_gallery_mapping_info_2B.svg';
import Ideation2A from '../Asset/CreativePreviewGallery/Creative_preview_lofi_2A.svg';
import Ideation2B from '../Asset/CreativePreviewGallery/Creative_preview_lofi_3B.svg';
import Ideation2C from '../Asset/CreativePreviewGallery/Creative_preview_lofi_3C.svg';
import Testing1A from '../Asset/CreativePreviewGallery/Creative_preview_hifi_1A.svg';
import Testing1B from '../Asset/CreativePreviewGallery/Creative_preview_hifi_1B.svg';
import Testing2 from '../Asset/CreativePreviewGallery/Creative_preview_hifi_2.svg';
import Testing3 from '../Asset/CreativePreviewGallery/Creative_preview_hifi_3.svg';
import Testing4 from '../Asset/CreativePreviewGallery/Creative_preview_hifi_4.svg';
import Testing5 from '../Asset/CreativePreviewGallery/Creative_preview_hifi_5.svg';
import Iteration from '../Asset/CreativePreviewGallery/Creative_preview_reiteration_1.svg';
import FinalSolution1A from '../Asset/CreativePreviewGallery/Creative_preview_final_handoff_1A.svg';
import FinalSolution1B from '../Asset/CreativePreviewGallery/Creative_preview_final_handoff_1B.svg';
import FinalSolution2A from '../Asset/CreativePreviewGallery/Creative_preview_final_handoff_2A.svg';
import FinalSolution2B from '../Asset/CreativePreviewGallery/Creative_preview_final_handoff_2B.svg';
import FinalSolution3A from '../Asset/CreativePreviewGallery/Creative_preview_final_handoff_3A.svg';
import FinalSolution3B from '../Asset/CreativePreviewGallery/Creative_preview_final_handoff_3B.svg';
import FinalSolution4A from '../Asset/CreativePreviewGallery/Creative_preview_final_handoff_4A.svg';
import FinalSolution4B from '../Asset/CreativePreviewGallery/Creative_preview_final_handoff_4B.svg';

const sections = [
    { id: 'section1', label: 'Overview of Design Process', description: 'The overview of the design process for this project.' },
    { id: 'section2', label: 'Discovery', description: 'Discover the current user journey and the issues with the current form' },
    { id: 'section3', label: 'Ideation', description: 'Exploration on information architecture and layouts via low fidelity sketches' },
    { id: 'section4', label: 'Testing', description: 'Taking the low fidelity sketch and turn into high fidelity mocks and prototype to user test' },
    { id: 'section5', label: 'Iteration', description: 'Translating user test findings into design changes' },
    { id: 'section6', label: 'Final Solution', description: 'The final high fidelity mocks and prototype' },
    { id: 'section7', label: 'Reflection and Results', description: 'What I learned from the project and how it has influenced my design approach' },
  ];

const Section = ({ id, children }) => {
    return (
      <div id={id} style={{ display: 'flex', justifyContent: 'center', marginBottom: '30px' }}>
        {children}
      </div>
    );
};

export default function CreativePreviewGallery() {
    const [isStickyColumn, setIsStickyColumn] = useState(false);
    const [modalState, setModalState] = useState({
        isOpen: false,
        imageUrl: "",
      });

    useEffect(()=>{
        window.scrollTo(0, 0);
    },[])

    const checkIsSticky = (value) => {
        setIsStickyColumn(value)
    }

    // Function to open the modal with the selected image
    const openModal = (imageUrl) => {
        if (window.innerWidth >= 1024) {
          setModalState({ isOpen: true, imageUrl });
        } else {
          setModalState({ isOpen: false, imageUrl: "" });
        } 
      };

    // Function to close the modal
    const closeModal = () => {
        setModalState({ isOpen: false, imageUrl: "" });
    };

    return (
        <main className='creative-preview-gallery'>
            <div className='hero-section'>
                <h1 className='creative-preview-gallery__title'>Samsung Ads: Creative Preview Gallery</h1>
                <p className='creative-preview-gallery__description'>The objective of this project is to design and deliver a platform for first time and self serve clients for Samsung Ads. In producing a campaign to launch, the client must submit a creative. Since Samsung offers a complex number of available creatives, it may be confusing and overwhelming for users. The goal of this project is to design an introductory gallery to advertise Samsung’s available creative template inventory.</p>
                <img src={MainImage} alt='finished product image' className='creative-preview-gallery__img'/>
                <div className='creative-preview-gallery__list'>
                    <p className='creative-preview-gallery__item'>Role: Product Designer II</p>
                    <p className='creative-preview-gallery__item'>Timeline: 12 weeks</p>
                    <p className='creative-preview-gallery__item'>Tools: Figma, Figjam</p>
                    <p className='creative-preview-gallery__item'>Platform: B2B SaaS on website</p>
                </div>
                <div className='creative-preview-gallery__section-container'>
                    <section className='creative-preview-gallery__section-start'>
                        <h1 className='creative-preview-gallery__section-container__title'>Problem</h1>
                        <p className='creative-preview-gallery__section-container__text'>• No current UI platform to explore available creative inventories</p>
                        <p className='creative-preview-gallery__section-container__text'>• No visual representation of end results of creative</p>
                        <p className='creative-preview-gallery__section-container__text'>• Not user friendly for first time users</p>
                    </section>
                    <section className='creative-preview-gallery__section-start'>
                        <h1 className='creative-preview-gallery__section-container__title'>Solution</h1>
                        <p className='creative-preview-gallery__section-container__text'>• A Gallery page that showcases all the creative inventory in categories</p>
                        <p className='creative-preview-gallery__section-container__text'>• Simple and easy visuals to showcase how the creatives will look on TV placements</p>
                        <p className='creative-preview-gallery__section-container__text'>• Link to a downloadable marketing PDF that will have all the detailed information on file requirements</p>
                    </section>                    
                </div>
            </div>
            <div style={{display: 'flex'}}>
                <SideBar sections={sections} checkIsSticky={checkIsSticky} />
                <ResponsiveContainer isStickyColumn={isStickyColumn}>
                    <Section id="section1">
                        <section style={{ width: '100%' }} className='creative-preview-gallery__section'>
                            <img className='creative-preview-gallery__design-process__img' src={DesignProcess} alt='Design Process Image'/>
                        </section>
                    </Section>
                    <Section id="section2">
                        <section className='creative-preview-gallery__section-start'>
                            <p className='creative-preview-gallery__section-title'>Discovery</p>
                            <h1 className='creative-preview-gallery__research__title'>Understanding End User</h1>
                            <p className='creative-preview-gallery__questions__point-text'>• Most use case they already have the main media asset ready (either video or image)</p>
                            <p className='creative-preview-gallery__questions__point-text'>• Not sure what input fields are required, and where their placements are on the creative itself when shown on TV</p>
                            <p className='creative-preview-gallery__questions__point-text'>• Not sure what other possible creative templates exist other than what the Ad Ops recommend</p>
                            <h1 style={{marginTop: '15px'}} className='creative-preview-gallery__research__title'>Current User Journey - Pain Points</h1>
                            <p className='creative-preview-gallery__questions__point-text'>• Meant for experienced clients, this drop down list provide little to no indication of their TV placement or visuals</p>
                            <p className='creative-preview-gallery__questions__point-text'>• Upon choosing a creative, it navigates you directly to the form with no descriptions or way to know more</p>
                            <img src={Discovery1} alt='current state image 1' className='creative-preview-gallery__research__img modal-cursor' onClick={() => openModal(Discovery1)}/>
                            <h1 className='creative-preview-gallery__research__title'>Learning about each Creative inventory</h1>
                            <p className='creative-preview-gallery__questions__point-text'>Understanding the current state, I had to look into each and every single available creative inventory type. It is important to understand how the creative ad works on the TV and all the required information.</p>
                            <img src={Discovery2} alt='current state image 2' className='creative-preview-gallery__research__img modal-cursor' onClick={() => openModal(Discovery2)}/>
                        </section>
                    </Section>
                    <Section id="section3">
                        <section className='creative-preview-gallery__section-start'>
                            <p className='creative-preview-gallery__section-title'>Ideation</p>
                            <p className='creative-preview-gallery__final__text-bold'>Information Architecture Exploration - Chosen direction</p>
                            <p className='creative-preview-gallery__questions__point-text'>• The organization with Mobile, TV, Displays and OLV/CTV made the most sense as they are all types of platforms</p>
                            <p className='creative-preview-gallery__questions__point-text'>• Hosted by 3rd Party or Samsung, through user feedback, did not matter too much to require it’s own category</p>
                            <img src={Ideation1} alt='MappingInfo1A' className='creative-preview-gallery__paired-image__img modal-cursor' onClick={() => openModal(Ideation1)}/>
                            <p className='creative-preview-gallery__final__text-bold'>Layout Exploration - Deciding on a direction</p>
                            <p className='creative-preview-gallery__questions__point-text'>• After finalizing how to present the information in terms of hierarchy, layout explorations were done via low fidelity sketches</p>
                            <p className='creative-preview-gallery__questions__point-text'>• It is important to keep experienced and first time users in mind without sacrificing efficiency</p>
                            <p className='creative-preview-gallery__questions__point-text'>• Give experienced users the option to click into the inventory straight away, while lettings first time users the ability to explore</p>
                            <p className='creative-preview-gallery__questions__point-text'>• It is important to keep the options available on the side while exploring the details of the selected inventory to allow easy access back to other options without the user having to do too many clicks</p>
                            <div className='creative-preview-gallery__img-text-container__wrapper'>
                                <img src={Ideation2A} alt='MappingInfo2A' className='creative-preview-gallery__img-text-container__wrapper__img modal-cursor' onClick={() => openModal(Ideation2A)}/>
                                <img src={Ideation2B} alt='MappingInfo2B' className='creative-preview-gallery__img-text-container__wrapper__img modal-cursor' onClick={() => openModal(Ideation2B)}/>
                                <img src={Ideation2C} alt='MappingInfo2B' className='creative-preview-gallery__img-text-container__wrapper__img modal-cursor' onClick={() => openModal(Ideation2C)}/>
                            </div>
                        </section>
                    </Section>
                    <Section id="section4">
                        <section className='creative-preview-gallery__section-start'>
                            <p className='creative-preview-gallery__section-title'>Testing</p>
                            <p className='creative-preview-gallery__final__text-bold'>Test Objectives:</p>
                            <p className='creative-preview-gallery__questions__point-text'>• Information Architecture</p>
                            <p className='creative-preview-gallery__questions__point-text'>• Understanding the provided information</p>
                            <p className='creative-preview-gallery__questions__point-text'>• Ability to explore different creative inventories</p>
                            <p className='creative-preview-gallery__questions__point-text'>• Navigating to complete the form</p>
                            <p className='creative-preview-gallery__final__text-bold'>Test Results Summary:</p>
                            <p className='creative-preview-gallery__questions__point-text'>• Icons and visual representation of how the creative will look was very successful</p>
                            <p className='creative-preview-gallery__questions__point-text'>• Too much information was displayed in too many levels</p>
                            <p className='creative-preview-gallery__questions__point-text'>• Users were confused by the detailed of information and thought the panel itself was a form</p>
                            <div className='creative-preview-gallery__img-text-container__wrapper'>
                                <img src={Testing1A} alt='HiFi1A' className='creative-preview-gallery__img-text-container__wrapper__img modal-cursor' onClick={() => openModal(Testing1A)}/>
                                <img src={Testing1B} alt='HiFi1B' className='creative-preview-gallery__img-text-container__wrapper__img modal-cursor' onClick={() => openModal(Testing1B)}/>
                            </div>
                            <img src={Testing2} alt='Hi-Fi Review image 1' className='creative-preview-gallery__lo-fi__img modal-cursor' onClick={() => openModal(Testing2)}/>
                            <div className='creative-preview-gallery__section-divider' />
                            <img src={Testing3} alt='Hi-Fi Review image 1' className='creative-preview-gallery__lo-fi__img modal-cursor' onClick={() => openModal(Testing3)}/>
                            <img src={Testing4} alt='Hi-Fi Review image 1' className='creative-preview-gallery__lo-fi__img modal-cursor' onClick={() => openModal(Testing4)}/>
                            <img src={Testing5} alt='Hi-Fi Review image 1' className='creative-preview-gallery__lo-fi__img modal-cursor' onClick={() => openModal(Testing5)}/>
                            <div className='creative-preview-gallery__section-divider' />
                            <h1 className='creative-preview-gallery__lo-fi__title'>Next Steps</h1>
                            <p className='creative-preview-gallery__questions__point-text'>• Circle back to re-iterate the side panel, and the information displayed for the user (what are the most important information?)</p>
                            <p className='creative-preview-gallery__questions__point-text'>• If the users thought the side panel were a step-to-step to fill in the form, how can we fix this misinterpretation?</p>
                        </section>
                    </Section>
                    <Section id="section5">
                        <section className='creative-preview-gallery__section-start'>
                        <p className='creative-preview-gallery__section-title'>Iteration</p>
                            <p className='creative-preview-gallery__questions__text'>Since the overall layout was well received, there was no need to change. The side panel was the part that needed the most reiteration.</p>
                            <h1 className='creative-preview-gallery__lo-fi__title'>Translating User Test Findings into Iteration - What I changed and the Reasoning</h1>
                            <ul style={{margin: '0px'}}>
                                <li className='creative-preview-gallery__questions__point-text'>Simplified everything - I scrapped 80% of the information from the design so users will not be overwhelmed and confused</li>
                                <ul>
                                    <li className='creative-preview-gallery__questions__point-text'>Users do not need the fine level of details at this stage since they are exploring the different options at a glance</li>
                                    <li className='creative-preview-gallery__questions__point-text'>Confirmed with the marketing team and aligned with them that there will be a one source of truth PDF provided for all the fine details</li>
                                </ul>
                                <li className='creative-preview-gallery__questions__point-text'>Highlight the visuals - let users know how the TV creative will show up on the TV</li>
                                <li className='creative-preview-gallery__questions__point-text'>Link the one source of truth where all the fine detailed information will be, so users can always refer to that upon exploring the options Samsung provides</li>
                            </ul>
                            <img src={Iteration} alt='Reiteration image 1' className='creative-preview-gallery__lo-fi__img modal-cursor' onClick={() => openModal(Iteration)}/>
                        </section>
                    </Section>
                    <Section id="section6">
                        <section className='creative-preview-gallery__section-start'>
                            <p className='creative-preview-gallery__section-title'>Final Solution</p>
                            <p style={{margin: '0px'}} className='creative-preview-gallery__final__text'>Below is part of all the final hand off of the mocks (prototypes were also provided to the engineers to show interactions).</p>
                            <p style={{margin: '0px'}} className='creative-preview-gallery__final__text'>Due to the amount of mocks involved, only one example of each category mock is shown.</p>
                            <p className='creative-preview-gallery__final__text-bold'>CTV/OLV</p>
                            <div className='creative-preview-gallery__img-text-container__wrapper'>
                                <img src={FinalSolution1A} alt='FinalHandOff1A' className='creative-preview-gallery__img-text-container__wrapper__img modal-cursor' onClick={() => openModal(FinalSolution1A)}/>
                                <img src={FinalSolution1B} alt='FinalHandOff1B' className='creative-preview-gallery__img-text-container__wrapper__img modal-cursor' onClick={() => openModal(FinalSolution1B)}/>
                            </div>
                            <p className='creative-preview-gallery__final__text-bold'>Samsung TV Native</p>
                            <div className='creative-preview-gallery__img-text-container__wrapper'>
                                <img src={FinalSolution2A} alt='FinalHandOff2A' className='creative-preview-gallery__img-text-container__wrapper__img modal-cursor' onClick={() => openModal(FinalSolution2A)}/>
                                <img src={FinalSolution2B} alt='FinalHandOff2B' className='creative-preview-gallery__img-text-container__wrapper__img modal-cursor' onClick={() => openModal(FinalSolution2B)}/>
                            </div>
                            <p className='creative-preview-gallery__final__text-bold'>Samsung Mobile Native</p>
                            <div className='creative-preview-gallery__img-text-container__wrapper'>
                                <img src={FinalSolution3A} alt='FinalHandOff3A' className='creative-preview-gallery__img-text-container__wrapper__img modal-cursor' onClick={() => openModal(FinalSolution3A)}/>
                                <img src={FinalSolution3B} alt='FinalHandOff3B' className='creative-preview-gallery__img-text-container__wrapper__img modal-cursor' onClick={() => openModal(FinalSolution3B)}/>
                            </div>
                            <p className='creative-preview-gallery__final__text-bold'>Displays</p>
                            <div className='creative-preview-gallery__img-text-container__wrapper'>
                                <img src={FinalSolution4A} alt='FinalHandOff4A' className='creative-preview-gallery__img-text-container__wrapper__img modal-cursor' onClick={() => openModal(FinalSolution4A)}/>
                                <img src={FinalSolution4B} alt='FinalHandOff4B' className='creative-preview-gallery__img-text-container__wrapper__img modal-cursor' onClick={() => openModal(FinalSolution4B)}/>
                            </div>
                        </section>
                    </Section>
                    <Section id="section7">
                        <section className='creative-preview-gallery__section-start margin-end'>
                            <p className='creative-preview-gallery__section-title'>Reflection</p>
                            <p className='creative-preview-gallery__final__text-bold'>What I learned that improved my design process</p>
                            <p className='creative-preview-gallery__questions__point-text'>• It is important to weight different types of user persona equally even though the project was meant for improving the user journey for one persona type</p>
                            <p className='creative-preview-gallery__questions__point-text'>• While presenting all crucial information in a clear and easy to navigate way is important, think about whether or not this level of information should be at this stage of the user’s whole journey of creating a campaign</p>
                            <p className='creative-preview-gallery__questions__point-text'>• Do not be afraid to scrap the whole design or delegate where it makes sense (If the user needs to know the intended information at a different step before this UI, communicate with the correct department to align in order to give the best user experience) </p>
                            <p style={{margin: '20px 0 0 0'}} className='creative-preview-gallery__section-title'>Results</p>
                            <p className='creative-preview-gallery__final__text-bold'>Key Benefits</p>
                            <p className='creative-preview-gallery__questions__point-text'>• Provides self serve users a convenient UI to quickly understand and explore all the available creative inventories Samsung Ads provide</p>
                            <p className='creative-preview-gallery__questions__point-text'>• Reduces the time for Ad Ops Sales to spend on educating self serve or first time clients about all the available creative inventories</p>
                            <p className='creative-preview-gallery__questions__point-text'>• Aligned with marketing team to keep a one source of truth PDF for information that will also be easy to update</p>
                        </section>
                    </Section>
                </ResponsiveContainer>  
                <Modal
                    isOpen={modalState.isOpen}
                    imageUrl={modalState.imageUrl}
                    onClose={closeModal}
                />  
            </div>
        </main>
    )
}