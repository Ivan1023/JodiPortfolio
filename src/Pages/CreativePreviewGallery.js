import { useEffect } from 'react';
import '../Pages/PageCSS/CreativePreviewGallery.scss';

import MainImage from '../Asset/CreativePreviewGallery/Creative_preview_gallery_hero_photo.svg';
import DesignProcess from '../Asset/CreativePreviewGallery/Creative_preview_gallery_design_process.svg';
import UnderstandingProblem1 from '../Asset/CreativePreviewGallery/Creative_preview_gallery_understanding_problem_1.svg';
import UnderstandingProblem2 from '../Asset/CreativePreviewGallery/Creative_preview_gallery_understanding_problem_2.svg';
import UnderstandingProblem3A from '../Asset/CreativePreviewGallery/Creative_preview_gallery_understanding_problem_3A.svg';
import UnderstandingProblem3B from '../Asset/CreativePreviewGallery/Creative_preview_gallery_understanding_problem_3B.svg';
import UnderstandingProblem4 from '../Asset/CreativePreviewGallery/Creative_preview_gallery_understanding_problem_4.svg';
import CompetitiveBrenchmarking1 from '../Asset/CreativePreviewGallery/Creative_preview_gallery_competitive_benchmarking_1.svg';
import CompetitiveBrenchmarking2 from '../Asset/CreativePreviewGallery/Creative_preview_gallery_competitive_benchmarking_2.svg';
import MappingInfo1A from '../Asset/CreativePreviewGallery/Creative_preview_gallery_mapping_info_1A.svg';
import MappingInfo1B from '../Asset/CreativePreviewGallery/Creative_preview_gallery_mapping_info_1B.svg';
import MappingInfo2A from '../Asset/CreativePreviewGallery/Creative_preview_gallery_mapping_info_2A.svg';
import MappingInfo2B from '../Asset/CreativePreviewGallery/Creative_preview_gallery_mapping_info_2B.svg';
import Lofi1A from '../Asset/CreativePreviewGallery/Creative_preview_lofi_1A.svg';
import Lofi1B from '../Asset/CreativePreviewGallery/Creative_preview_lofi_1B.svg';
import Lofi1C from '../Asset/CreativePreviewGallery/Creative_preview_lofi_1C.svg';
import Lofi2A from '../Asset/CreativePreviewGallery/Creative_preview_lofi_2A.svg';
import Lofi2B from '../Asset/CreativePreviewGallery/Creative_preview_lofi_2B.svg';
import Lofi2C from '../Asset/CreativePreviewGallery/Creative_preview_lofi_2C.svg';
import Lofi3A from '../Asset/CreativePreviewGallery/Creative_preview_lofi_3A.svg';
import Lofi3B from '../Asset/CreativePreviewGallery/Creative_preview_lofi_3B.svg';
import Lofi3C from '../Asset/CreativePreviewGallery/Creative_preview_lofi_3C.svg';
import HiFi1A from '../Asset/CreativePreviewGallery/Creative_preview_hifi_1A.svg';
import HiFi1B from '../Asset/CreativePreviewGallery/Creative_preview_hifi_1B.svg';
import HiFi2 from '../Asset/CreativePreviewGallery/Creative_preview_hifi_2.svg';
import HiFi3 from '../Asset/CreativePreviewGallery/Creative_preview_hifi_3.svg';
import HiFi4 from '../Asset/CreativePreviewGallery/Creative_preview_hifi_4.svg';
import HiFi5 from '../Asset/CreativePreviewGallery/Creative_preview_hifi_5.svg';
import HiFi6 from '../Asset/CreativePreviewGallery/Creative_preview_hifi_6.svg';
import Reiteration from '../Asset/CreativePreviewGallery/Creative_preview_reiteration_1.svg';
import FinalHandOff1A from '../Asset/CreativePreviewGallery/Creative_preview_final_handoff_1A.svg';
import FinalHandOff1B from '../Asset/CreativePreviewGallery/Creative_preview_final_handoff_1B.svg';
import FinalHandOff2A from '../Asset/CreativePreviewGallery/Creative_preview_final_handoff_2A.svg';
import FinalHandOff2B from '../Asset/CreativePreviewGallery/Creative_preview_final_handoff_2B.svg';
import FinalHandOff3A from '../Asset/CreativePreviewGallery/Creative_preview_final_handoff_3A.svg';
import FinalHandOff3B from '../Asset/CreativePreviewGallery/Creative_preview_final_handoff_3B.svg';
import FinalHandOff4A from '../Asset/CreativePreviewGallery/Creative_preview_final_handoff_4A.svg';
import FinalHandOff4B from '../Asset/CreativePreviewGallery/Creative_preview_final_handoff_4B.svg';

export default function CreativePreviewGallery() {

    useEffect(()=>{
        window.scrollTo(0, 0);
    },[])

    return (
        <main className='creative-preview-gallery'>
            <h1 className='creative-preview-gallery__title'>Samsung Ads: Creative Preview Gallery</h1>
            <p className='creative-preview-gallery__description'>The objective of this project is to design and deliver a platform for first time and self serve clients for Samsung Ads. In producing a campaign to launch, the client must submit a creative. Since Samsung offers a complex number of available creatives, it may be confusing and overwhelming for users. The goal of this project is to design an introductory gallery to advertise Samsung’s available creative template inventory.</p>
            <img src={MainImage} alt='finished product image' className='creative-preview-gallery__img'/>
            <div className='creative-preview-gallery__list'>
                <p className='creative-preview-gallery__item'>Role: Product Designer II</p>
                <p className='creative-preview-gallery__item'>Timeline: 12 weeks</p>
                <p className='creative-preview-gallery__item'>Tools: Figma, Figjam</p>
                <p className='creative-preview-gallery__item'>Platform: B2B SaaS on website</p>
            </div>
            <section style={{ width: '100%' }} className='creative-preview-gallery__section'>
                <h1 className='creative-preview-gallery__design-process__title'>Overview of Design Process</h1>
                <img className='creative-preview-gallery__design-process__img' src={DesignProcess} alt='Design Process Image'/>
            </section>
            <section className='creative-preview-gallery__section'>
                <h1 className='creative-preview-gallery__questions__title'>Problem</h1>
                <p className='creative-preview-gallery__questions__text'>The current state of choosing a creative template is to communicate with an Ad Ops Sales and rely on them to recommend a creative type. This is taking up hours of the Ad Ops Sales’ time and Samsung want to streamline this process better. The goal is to also advertise all the available inventory types to entice more sales.</p>
                <h1 className='creative-preview-gallery__questions__title'>What</h1>
                <p className='creative-preview-gallery__questions__text'>A platform that allows users to clearly understand the available inventory offerings, along with all the required information in order to complete the creative inventory for campaign submission.</p>
                <h1 className='creative-preview-gallery__questions__title'>Who</h1>
                <p className='creative-preview-gallery__questions__text'>All first time or self serve clients.</p>
                <h1 className='creative-preview-gallery__questions__title'>How</h1>
                <p className='creative-preview-gallery__questions__text'>A proper categorization of Samsung’s inventory offerings, along with proper information about the required fields and assets for each inventory.</p>
                <h1 className='creative-preview-gallery__questions__title'>Goals</h1>
                <p className='creative-preview-gallery__questions__text'>To reduce the turn-around time from Ad Ops Sales to the clients just to choose a creative inventory type. To allow self serve users more freedom and opportunities to try out new creative types for their campaigns.</p>
                <h1 className='creative-preview-gallery__questions__title'>Scope Constraints</h1>
                <p className='creative-preview-gallery__questions__text'>• The amount of available inventory is a lot, with a lot of different requirements</p>
                <p className='creative-preview-gallery__questions__text'>• Alignment with different teams within Samsung like Marketing, Sales and Campaign Speacialists</p>
            </section>
            <section className='creative-preview-gallery__section'>
                <h1 className='creative-preview-gallery__research__title'>Discovery Research: Understanding the Problem</h1>
                <p className='creative-preview-gallery__research__text'>As show in the visual below, we are presenting the list of available creative inventory types in a drop down list format, where there are no explanation or visual to what they are. This is meant for experienced clients, but for first time or self serve users this drop down list provide little to no indication of what they are. If you choose a creative, it navigates you directly to the form. In case you want to understand what the creative is, how it looks like or to know what inputs are required, you will have to go back a page to select a different creative.</p>
                <img src={UnderstandingProblem1} alt='current state image 1' className='creative-preview-gallery__research__img'/>
                <img src={UnderstandingProblem2} alt='current state image 2' className='creative-preview-gallery__research__img'/>
                <p className='creative-preview-gallery__research__text'>Understanding the current state, I had to look into each and every single available creative inventory type. It is important to understand how the creative ad works on the TV, each field that is required, the media assets required along with all the click actions. Below is only one of many documentations I read over, and also consulted a SME and Ad Op in order to truly understand how the creative works, and how it looks like on live production TV.</p>
                <div className='creative-preview-gallery__paired-image'>
                    <img src={UnderstandingProblem3A} alt='current state image 3' className='creative-preview-gallery__paired-image__img'/>
                    <img src={UnderstandingProblem3B} alt='current state image 4' className='creative-preview-gallery__paired-image__img'/>
                </div>
                <img src={UnderstandingProblem4} alt='current state image 4' className='creative-preview-gallery__research__img'/>
                <h1 className='creative-preview-gallery__research__title'>Understand who the users are</h1>
                <p className='creative-preview-gallery__questions__text'>With the help of the UX Researcher, we were able to speak with several end users, which were self serve clients:</p>
                <p className='creative-preview-gallery__questions__text'>• Most use case they already have the main media asset ready (either video or image)</p>
                <p className='creative-preview-gallery__questions__text'>• Not sure what input fields are required, and where their placements are on the creative itself when shown on TV</p>
                <p className='creative-preview-gallery__questions__text'>• Not sure what other possible creative templates exist other than what the Ad Ops recommend</p>
                <h1 className='creative-preview-gallery__research__title'>Competitive Benchmarking</h1>
                <p className='creative-preview-gallery__questions__text'>I also went to competitor’s creative library to see how other B2B Ads platform display or introduce their inventories. Below is an overall screenshot of all the competitive benchmarking I’ve done, with Roku as a highlight.</p>
                <img src={CompetitiveBrenchmarking1} alt='CompetitiveBrenchmarking1' className='creative-preview-gallery__research__img'/>
                <img src={CompetitiveBrenchmarking2} alt='CompetitiveBrenchmarking2' className='creative-preview-gallery__research__img'/>
                <h1 className='creative-preview-gallery__research__title'>Mapping the Information</h1>
                <p className='creative-preview-gallery__questions__text'>After understanding each creative inventory type, I began to map out how the information architect can be organized. I took each exploration to the UX Researcher, several end users and SME, where we collaborated and worked on refining the information architect and organized them in a way that made sense. </p>
                <div className='creative-preview-gallery__paired-image'>
                    <img src={MappingInfo1A} alt='MappingInfo1A' className='creative-preview-gallery__paired-image__img'/>
                    <img src={MappingInfo1B} alt='MappingInfo1B' className='creative-preview-gallery__paired-image__img'/>
                </div>
                <div className='creative-preview-gallery__paired-image'>
                    <img src={MappingInfo2A} alt='MappingInfo2A' className='creative-preview-gallery__paired-image__img'/>
                    <img src={MappingInfo2B} alt='MappingInfo2B' className='creative-preview-gallery__paired-image__img'/>
                </div>
                <p className='creative-preview-gallery__final__text-bold'>Summary</p>
                <p className='creative-preview-gallery__questions__text'>• The organization with Mobile, TV, Displays and OLV/CTV made the most sense as they are all types of platforms</p>
                <p className='creative-preview-gallery__questions__text'>• Only Video and Images did not make sense as “TV” did not fit in the same category, but required its own section due to business needs</p>
                <p className='creative-preview-gallery__questions__text'>• Hosted by 3rd Party or Samsung, through user feedback, did not matter too much to require it’s own category</p>
            </section>
            <section className='creative-preview-gallery__section'>
                <h1 className='creative-preview-gallery__lo-fi__title'>Low Fidelity Layout Wireframes + Concept Review</h1>
                <p className='creative-preview-gallery__lo-fi__text'>After completing the information architect, I began working on exploring the entry point and the layout of the platform. Below are some of the explorations done:</p>
                <div className='creative-preview-gallery__img-text-container'>
                    <div className='creative-preview-gallery__img-text-container__wrapper'>
                        <img src={Lofi1A} alt='Lofi1A' className='creative-preview-gallery__img-text-container__wrapper__three-img margin'/>
                        <img src={Lofi1B} alt='Lofi1B' className='creative-preview-gallery__img-text-container__wrapper__three-img margin'/>
                        <img src={Lofi1C} alt='Lofi1C' className='creative-preview-gallery__img-text-container__wrapper__three-img'/>
                    </div>
                    <div className='creative-preview-gallery__img-text-container__wrapper'>
                        <div className='creative-preview-gallery__img-text-container__wrapper__text margin margin padding'> 
                            <h1 className='creative-preview-gallery__img-text-container__wrapper__title'>Pros</h1>
                            <p className='creative-preview-gallery__questions__text'>• Users can still see the context of the creatives library in the background without completing jumping to a new page</p>
                        </div>
                        <div className='creative-preview-gallery__img-text-container__wrapper__text'>
                            <h1 className='creative-preview-gallery__img-text-container__wrapper__title'>Cons</h1>
                            <p className='creative-preview-gallery__questions__text'>• Experienced users lose the convenience of clicking straight into the creative from the drop down list</p>
                            <p className='creative-preview-gallery__questions__text'>• If users select a creative to see the details and they want to explore others, they have to click back first from the drawer</p>
                        </div>
                    </div>
                </div>
                <div className='creative-preview-gallery__img-text-container'>
                    <div className='creative-preview-gallery__img-text-container__wrapper'>
                        <img src={Lofi2A} alt='Lofi2A' className='creative-preview-gallery__img-text-container__wrapper__three-img margin'/>
                        <img src={Lofi2B} alt='Lofi2B' className='creative-preview-gallery__img-text-container__wrapper__three-img margin'/>
                        <img src={Lofi2C} alt='Lofi2C' className='creative-preview-gallery__img-text-container__wrapper__three-img'/>
                    </div>
                    <div className='creative-preview-gallery__img-text-container__wrapper'>
                        <div className='creative-preview-gallery__img-text-container__wrapper__text margin margin padding'> 
                            <h1 className='creative-preview-gallery__img-text-container__wrapper__title'>Pros</h1>
                            <p className='creative-preview-gallery__questions__text'>• Experienced users still get the convenience of clicking the creative straight from the drop down list</p>
                            <p className='creative-preview-gallery__questions__text'>• New page to show all creative inventories gives it more space and seem less clutter, good for scalability</p>
                        </div>
                        <div className='creative-preview-gallery__img-text-container__wrapper__text'>
                            <h1 className='creative-preview-gallery__img-text-container__wrapper__title'>Cons</h1>
                            <p className='creative-preview-gallery__questions__text'>• If users select a creative to see the details and they want to explore others, they have to click back first from the drawer</p>
                        </div>
                    </div>
                </div>
                <div className='creative-preview-gallery__img-text-container'>
                    <div className='creative-preview-gallery__img-text-container__wrapper'>
                        <img src={Lofi3A} alt='Lofi3A' className='creative-preview-gallery__img-text-container__wrapper__three-img margin'/>
                        <img src={Lofi3B} alt='Lofi3B' className='creative-preview-gallery__img-text-container__wrapper__three-img margin'/>
                        <img src={Lofi3C} alt='Lofi3C' className='creative-preview-gallery__img-text-container__wrapper__three-img'/>
                    </div>
                    <div className='creative-preview-gallery__img-text-container__wrapper'>
                        <div className='creative-preview-gallery__img-text-container__wrapper__text margin margin padding'> 
                            <h1 className='creative-preview-gallery__img-text-container__wrapper__title'>Pros</h1>
                            <p className='creative-preview-gallery__questions__text'>• When users are exploring the details of one creative, they can easily click on a different choice to view the details without having to navigate back</p>
                        </div>
                        <div className='creative-preview-gallery__img-text-container__wrapper__text'>
                            <h1 className='creative-preview-gallery__img-text-container__wrapper__title'>Cons</h1>
                            <p className='creative-preview-gallery__questions__text'>• Experienced users lose the convenience of clicking straight into the creative from the drop down list</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='creative-preview-gallery__section'>
                <h1 className='creative-preview-gallery__lo-fi__title'>High Fidelity Mocks for User Testing</h1>
                <p className='creative-preview-gallery__questions__text'>We have enabled one detail panel per creative under each of the 4 categories for user testing. In this user test, we are testing the layout, the icons, the interaction, and most importantly the information within the detail panels.</p>
                <p className='creative-preview-gallery__questions__text'>1st Screen Plus was chosen to be the main focus of this user test, since that is the most complex creative inventory Samsung Ads offers.</p>
                <div className='creative-preview-gallery__paired-image'>
                    <img src={HiFi1A} alt='HiFi1A' className='creative-preview-gallery__paired-image__img'/>
                    <img src={HiFi1B} alt='HiFi1B' className='creative-preview-gallery__paired-image__img'/>
                </div>
                <img src={HiFi2} alt='Hi-Fi Review image 1' className='creative-preview-gallery__lo-fi__img'/>
                <img src={HiFi3} alt='Hi-Fi Review image 1' className='creative-preview-gallery__lo-fi__img'/>
                <img src={HiFi4} alt='Hi-Fi Review image 1' className='creative-preview-gallery__lo-fi__img'/>
                <img src={HiFi5} alt='Hi-Fi Review image 1' className='creative-preview-gallery__lo-fi__img'/>
                <img src={HiFi6} alt='Hi-Fi Review image 1' className='creative-preview-gallery__lo-fi__img'/>
                <p className='creative-preview-gallery__questions__text'>These icons were tested with the users, in which they were very well received in terms of understanding and benefiting from them. The TV tile icons were especially well received due to the highlight of the creative placement at a glance.</p>
                <h1 className='creative-preview-gallery__lo-fi__title'>Next Steps</h1>
                <p className='creative-preview-gallery__questions__text'>• Circle back to re-iterate the side panel, and the information displayed for the user (what are the most important information?)</p>
                <p className='creative-preview-gallery__questions__text'>• If the users thought the side panel were a step-to-step to fill in the form, how can we fix this misinterpretation?</p>
            </section>
            <section className='creative-preview-gallery__final'>
                <h1 className='creative-preview-gallery__final__title'>Final Hand Off</h1>
                <p className='creative-preview-gallery__final__text'>Below is part of all the final hand off of the mocks (prototypes were also provided to the engineers to show interactions). Due to the amount of mocks involved, only one example of each category mock is shown.</p>
                <p className='creative-preview-gallery__final__text'>Due to the amount of mocks involved, only one example of each category mock is shown.</p>
                <p className='creative-preview-gallery__final__text-bold'>CTV/OLV</p>
                <div className='creative-preview-gallery__paired-image'>
                    <img src={FinalHandOff1A} alt='FinalHandOff1A' className='creative-preview-gallery__paired-image__img'/>
                    <img src={FinalHandOff1B} alt='FinalHandOff1B' className='creative-preview-gallery__paired-image__img'/>
                </div>
                <p className='creative-preview-gallery__final__text-bold'>Samsung TV Native</p>
                <div className='creative-preview-gallery__paired-image'>
                    <img src={FinalHandOff2A} alt='FinalHandOff2A' className='creative-preview-gallery__paired-image__img'/>
                    <img src={FinalHandOff2B} alt='FinalHandOff2B' className='creative-preview-gallery__paired-image__img'/>
                </div>
                <p className='creative-preview-gallery__final__text-bold'>Samsung Mobile Native</p>
                <div className='creative-preview-gallery__paired-image'>
                    <img src={FinalHandOff3A} alt='FinalHandOff3A' className='creative-preview-gallery__paired-image__img'/>
                    <img src={FinalHandOff3B} alt='FinalHandOff3B' className='creative-preview-gallery__paired-image__img'/>
                </div>
                <p className='creative-preview-gallery__final__text-bold'>Displays</p>
                <div className='creative-preview-gallery__paired-image'>
                    <img src={FinalHandOff4A} alt='FinalHandOff4A' className='creative-preview-gallery__paired-image__img'/>
                    <img src={FinalHandOff4B} alt='FinalHandOff4B' className='creative-preview-gallery__paired-image__img'/>
                </div>
                <h1 className='creative-preview-gallery__lo-fi__title'>Important Finalization</h1>
                <p className='creative-preview-gallery__questions__text'>• Each line of copy had been reviewed and approved by the SME to ensure validity</p>
                <p className='creative-preview-gallery__questions__text'>• For convenience of the user, only one source of truth for information is presented at the external link of “DSP Help Center”, which is maintained by the marketing team (Which will also make updating it easier as it is on one place)</p>
            </section>
            <section className='creative-preview-gallery__result'>
                <h1 className='creative-preview-gallery__result__title'>Results after launch</h1>
                <div style={{padding: '20px 0'}}>
                    <p className='creative-preview-gallery__final__text-bold'>Key benefits</p>
                    <p className='creative-preview-gallery__questions__text'>• Provides self serve users a convenient UI to quickly understand and explore all the available creative inventories Samsung Ads provide</p>
                    <p className='creative-preview-gallery__questions__text'>• Reduces the time for Ad Ops Sales to spend on educating self serve or first time clients about all the available creative inventories</p>
                </div>
            </section>
        </main>
    )
}