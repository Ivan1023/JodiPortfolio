import { useEffect, useState } from 'react';
import '../Pages/PageCSS/InteractiveQRCodeCreative.scss';
import SideBar from '../Components/SideBar';
import ResponsiveContainer from '../Components/ResponsiveContainer';
import { Modal } from '../Components/Modal';

import MainImage from '../Asset/InteractiveQRCodeCreative/Interactive_QR_Code_Creative_Main_Image.svg';
import DesignProcess from '../Asset/InteractiveQRCodeCreative/Interactive_QR_Code_Creative_Design_Process.svg';
import ProductKickoff1 from '../Asset/InteractiveQRCodeCreative/Interactive_QR_Code_Creative_Product_Kickkoff_1.svg';
import ProductKickoff2 from '../Asset/InteractiveQRCodeCreative/Interactive_QR_Code_Creative_Product_Kickkoff_2.svg';
import CompetitiveBrenchmarking1 from '../Asset/InteractiveQRCodeCreative/Interactive_QR_Code_Creative_Competitive_Benchmark_2.svg';
import CompetitiveBrenchmarking2 from '../Asset/InteractiveQRCodeCreative/Interactive_QR_Code_Creative_Competitive_Benchmark_3.svg';
import CreativeForm1A from '../Asset/InteractiveQRCodeCreative/Interactive_QR_Code_Creative_Creative_Form_1A.svg';
import CreativeForm1B from '../Asset/InteractiveQRCodeCreative/Interactive_QR_Code_Creative_Creative_Form_1B.svg';
import ExplorativeLayout1A from '../Asset/InteractiveQRCodeCreative/Interactive_QR_Code_Creative_Explorative_Layouts_1A.svg';
import ExplorativeLayout1B from '../Asset/InteractiveQRCodeCreative/Interactive_QR_Code_Creative_Explorative_Layouts_1B.svg';
import ExplorativeLayout1C from '../Asset/InteractiveQRCodeCreative/Interactive_QR_Code_Creative_Explorative_Layouts_1C.svg';
import ExplorativeLayout2 from '../Asset/InteractiveQRCodeCreative/Interactive_QR_Code_Creative_Explorative_Layouts_2.svg';
import LayoutFinalization from '../Asset/InteractiveQRCodeCreative/Interactive_QR_Code_Creative_Layout_Finalization.svg';
import Gradient from '../Asset/InteractiveQRCodeCreative/Gradient.svg';
import CustomImage from '../Asset/InteractiveQRCodeCreative/CustomImage.svg';
import ContentSettingsVideo from '../Asset/InteractiveQRCodeCreative/ContentSettingsVideo.svg';
import ContentSettingsAdvertiserLogo from '../Asset/InteractiveQRCodeCreative/ContentSettingsAdvertiserLogo.svg';
import ContentSettingsHeadline from '../Asset/InteractiveQRCodeCreative/ContentSettingsHeadline.svg';
import ContentSettingsQRCodeURL from '../Asset/InteractiveQRCodeCreative/ContentSettingsQRCodeURL.svg';
import ContentSettingsQRCodeLabel from '../Asset/InteractiveQRCodeCreative/ContentSettingsQRCodeLabel.svg';
import CreativeDetailsPagePreview from '../Asset/InteractiveQRCodeCreative/CreativeDetailsPagePreview.svg';
import Hifi from '../Asset/InteractiveQRCodeCreative/Interactive_QR_Code_Creative_Hifi.svg';

const sections = [
    { id: 'section1', label: 'Overview of Design Process', description: 'The overview of the design process for this project.' },
    { id: 'section2', label: 'Product Requirements', description: 'Project details outlining the problem and scope constraints.' },
    { id: 'section3', label: 'Competitive Benchmarking', description: 'Competitive benchmarking on how other creative forms display the creative in real time.' },
    { id: 'section4', label: 'Current User Journey', description: 'Showcases the current state of a creative form.' },
    { id: 'section5', label: 'Layout Ideation', description: 'Ideation done for layout explorations.' },
    { id: 'section6', label: 'Iteration & Implementation', description: 'Iterated from the exploration and finalized on the layout.' },
    { id: 'section7', label: 'Final Solution', description: 'Final mocks and prototypes for the creative form.' },
    { id: 'section8', label: 'Reflection', description: 'What I learned to improve my design process and outcome' },
  ];

const Section = ({ id, children }) => {
    return (
      <div id={id} style={{ display: 'flex', justifyContent: 'center', marginBottom: '30px' }}>
        {children}
      </div>
    );
};

export default function InteractiveQRCodeCreative() {
    const [isStickyColumn, setIsStickyColumn] = useState(false);
    const [modalState, setModalState] = useState({
        isOpen: false,
        imageUrl: "",
      });
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

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
        <main className='interactive-qr-code-creative'>
            <div className='hero-section'>
                <h1 className='interactive-qr-code-creative__title'>Samsung Ads: Interactive QR Code Creative</h1>
                <p className='interactive-qr-code-creative__description'>The objective of this project is to design and deliver the form that clients have to fill to submit a creative for a campaign. The creative itself has already been designed by another team, and my task is to ensure the form has all the required fields and allow the user to understand how the creative will be presented.</p>
                <img src={MainImage} alt='finished product image' className='interactive-qr-code-creative__img'/>
                <div className='interactive-qr-code-creative__list'>
                    <p className='interactive-qr-code-creative__item'>Role: Product Designer II</p>
                    <p className='interactive-qr-code-creative__item'>Timeline: 3 weeks</p>
                    <p className='interactive-qr-code-creative__item'>Tools: Figma, Figjam</p>
                    <p className='interactive-qr-code-creative__item'>Platform: B2B SaaS on website</p>
                </div>
                <div className='interactive-qr-code-creative__section-container'>
                    <section className='interactive-qr-code-creative__section-container__start'>
                        <p className='interactive-qr-code-creative__section-title'>Problem</p>
                        <p style={{paddingRight: '40px'}} className='interactive-qr-code-creative__section-container__text'>• To create a new form that clients need to fill out to launch the new creative design</p>
                        <p style={{paddingRight: '40px'}} className='interactive-qr-code-creative__section-container__text'>• Current creative forms lack the preview visuals to show real time changes, especially when this new creative has interactive elements</p>
                    </section>
                    <section className='interactive-qr-code-creative__section-container__start'>
                        <p className='interactive-qr-code-creative__section-title'>Solution</p>
                        <p className='interactive-qr-code-creative__section-container__text'>• Introduced preview feature that shows real time edits</p>
                        <p className='interactive-qr-code-creative__section-container__text'>• Introduced a shareable preview after creative is submitted</p>
                    </section>                    
                </div>
            </div>
            <div style={{display: 'flex'}}>
                <SideBar sections={sections} checkIsSticky={checkIsSticky} />
                <ResponsiveContainer isStickyColumn={isStickyColumn}>
                    <Section id="section1">
                        <section className='interactive-qr-code-creative__section'>
                            <img className='interactive-qr-code-creative__design-process__img' src={DesignProcess} alt='Design Process Image'/>
                        </section>
                    </Section>
                    <Section id="section2">
                        <section className='interactive-qr-code-creative__section-start'>
                            <p style={{marginTop: '40px'}} className='interactive-qr-code-creative__section-title'>Product Requirements</p>
                            <p style={{margin: '0'}} className='interactive-qr-code-creative__research__text'>The objective of this project is to design a form for this creative below.</p>
                            <p className='interactive-qr-code-creative__research__text'>This creative involves an interactive element where end users can scan the QR Code on the screen in order to learn more about the advertisement, or to receive certain discount code. This creative has been designed by another team prior already, and I will be collaborating with them to understand each detail and interaction of the creative.</p>
                            <p className='interactive-qr-code-creative__final__text-bold'>The creative will compost of these items:</p>
                            <p style={{marginTop: '0'}} className='interactive-qr-code-creative__questions__point-text'>• 15 to 30 seconds video file (mp4)</p>
                            <p className='interactive-qr-code-creative__questions__point-text'>• Background (Choice of 8 gradient colours or upload a custom image)</p>
                            <p className='interactive-qr-code-creative__questions__point-text'>• Advertiser Logo (png with the intention of legibility on top of dark background)</p>
                            <p className='interactive-qr-code-creative__questions__point-text'>• Option of 2 copy lines</p>
                            <p className='interactive-qr-code-creative__questions__point-text'>• QR Code (URL)</p>
                            <p className='interactive-qr-code-creative__questions__point-text'>• QR Code label</p>
                            <img src={ProductKickoff1} alt='ProductKickoff1' className='interactive-qr-code-creative__research__img modal-cursor' onClick={() => openModal(ProductKickoff1)}/>
                            <img src={ProductKickoff2} alt='ProductKickoff2' className='interactive-qr-code-creative__research__img modal-cursor' onClick={() => openModal(ProductKickoff2)}/>
                        </section>
                    </Section>
                    <Section id="section3">
                        <section className='interactive-qr-code-creative__section-start'>
                            <p style={{marginTop: '40px'}} className='interactive-qr-code-creative__section-title'>Competitive Benchmarking - Preview on a Creative Form</p>
                            <p style={{margin: '0', paddingBottom: '10px'}} className='interactive-qr-code-creative__questions__text'>Competitive benchmarking was done across other ad platforms to see how their creative forms were filled. 4 competitors were highlighted to showcase their ability to show preview as the user completes the form. This gives the users assurance of how the creative will eventually look in production.</p>
                            <img src={CompetitiveBrenchmarking1} alt='CompetitiveBrenchmarking1' className='interactive-qr-code-creative__research__img modal-cursor' onClick={() => openModal(CompetitiveBrenchmarking1)}/>
                            <img src={CompetitiveBrenchmarking2} alt='CompetitiveBrenchmarking2' className='interactive-qr-code-creative__research__img modal-cursor' onClick={() => openModal(CompetitiveBrenchmarking2)}/>
                        </section>
                    </Section>
                    <Section id="section4">
                        <section className='interactive-qr-code-creative__section-start'>
                            <p style={{marginTop: '40px'}} className='interactive-qr-code-creative__section-title'>Current User Journey - Forms</p>
                            <p style={{margin: '0', paddingBottom: '10px'}} className='interactive-qr-code-creative__questions__text'>Below are some examples of how Samsung Ads DSP creative forms currently look. They do not have any preview elements, and is only a long form with input fields where users have to fill out.</p>
                            <div className='interactive-qr-code-creative__paired-image'>
                                <img src={CreativeForm1A} alt='CreativeForm1A' className='interactive-qr-code-creative__paired-image__img modal-cursor' onClick={() => openModal(CreativeForm1A)}/>
                                <img src={CreativeForm1B} alt='MappingInfo2B' className='interactive-qr-code-creative__paired-image__img modal-cursor' onClick={() => openModal(CreativeForm1B)}/>
                            </div>
                        </section>
                    </Section>
                    <Section id="section5">
                        <section className='interactive-qr-code-creative__section-start'>
                            <p style={{marginTop: '40px'}} className='interactive-qr-code-creative__section-title'>Layout Ideation</p>
                            <p style={{margin: '0', paddingBottom: '10px'}} className='interactive-qr-code-creative__lo-fi__text'>I began by working on the scaling of the creative as a preview, and exploring different orientation of the preview with the form. Several layouts were explored.</p>
                            <div className='interactive-qr-code-creative__img-text-container'>
                                <div className='interactive-qr-code-creative__img-text-container__wrapper'>
                                    <img src={ExplorativeLayout1A} alt='ExplorativeLayout1A' className='interactive-qr-code-creative__img-text-container__wrapper__three-img margin  modal-cursor' onClick={() => openModal(ExplorativeLayout1A)}/>
                                    <img src={ExplorativeLayout1B} alt='ExplorativeLayout1B' className='interactive-qr-code-creative__img-text-container__wrapper__three-img margin  modal-cursor' onClick={() => openModal(ExplorativeLayout1B)}/>
                                    <img src={ExplorativeLayout1C} alt='ExplorativeLayout1C' className='interactive-qr-code-creative__img-text-container__wrapper__three-img modal-cursor' onClick={() => openModal(ExplorativeLayout1C)}/>
                                </div>
                            </div>
                            <img src={ExplorativeLayout2} alt='ExplorativeLayout2' className='interactive-qr-code-creative__research__img modal-cursor' onClick={() => openModal(ExplorativeLayout2)}/>
                        </section>
                    </Section>
                    <Section id="section6">
                        <section className='interactive-qr-code-creative__section-start'>
                            <p style={{marginTop: '40px'}} className='interactive-qr-code-creative__section-title'>Iteration &amp; Implementation</p>
                            <p style={{margin: '0'}} className='interactive-qr-code-creative__lo-fi__text'>Preview is on the right side under general settings (as real time  edits only reflect on preview after that section).</p>
                            <p style={{margin: '20px 0 0 0'}} className='interactive-qr-code-creative__final__text-bold'>Size of Preview</p>
                            <p style={{margin: '0'}} className='interactive-qr-code-creative__lo-fi__text'>With consideration of the Samsung Ads design system’s grid and column layout, 31.25% scaled version of the preview is chosen for the optimal size that also ensures everything can be seen clearly.</p>
                            <p style={{margin: '20px 0 0 0'}} className='interactive-qr-code-creative__final__text-bold'>Expandable Feature</p>
                            <p style={{margin: '0'}} className='interactive-qr-code-creative__lo-fi__text'>I have also incorporated an expandable feature in the preview for use cases that users want to see a bigger scaled version.</p>
                            <p style={{margin: '20px 0 0 0'}} className='interactive-qr-code-creative__final__text-bold'>Sticky Feature</p>
                            <p style={{margin: '0'}} className='interactive-qr-code-creative__lo-fi__text'>Since the preview is the essential part of this form, I have designed the preview section to be sticky once the user scrolls past the general settings. This is due to the fact that as user continue to fill out the rest of the form, they can still see the preview above the fold at all times to ensure there are no mistakes.</p>
                            <img src={LayoutFinalization} alt='ExplorativeLayout2' className='interactive-qr-code-creative__research__img modal-cursor' onClick={() => openModal(LayoutFinalization)}/>
                        </section>
                    </Section>
                    <Section id="section7">
                        <section className='interactive-qr-code-creative__section-start'>
                            <p style={{marginTop: '40px'}} className='interactive-qr-code-creative__section-title'>Final Solution</p>
                            <p style={{margin: '0'}} className='interactive-qr-code-creative__final__text-bold'>Final Form Layout</p>
                            <p style={{margin: '0'}} className='interactive-qr-code-creative__questions__point-text'>• General Settings remain unchanged due to scope requirements</p>
                            <p className='interactive-qr-code-creative__questions__point-text'>• Template Settings is disabled by default due to business strategy (this is to advertise that there will be more templates coming soon)</p>
                            <p className='interactive-qr-code-creative__questions__point-text'>• Preview section is on the right of the form below general settings, and is sticky once you scroll past general settings</p>
                            <p className='interactive-qr-code-creative__questions__point-text'>• The input fields go in order to match with the preview from top to bottom, left to right</p>
                            <img src={Hifi} alt='Hifi' className='interactive-qr-code-creative__research__img modal-cursor' onClick={() => openModal(Hifi)}/>
                            
                            <div className='interactive-qr-code-creative__section-divider' />
                            <p style={{marginBottom: '0'}} className='interactive-qr-code-creative__final__text-bold'>Background Settings - Gradient</p>
                            <p style={{marginTop: '0'}} className='interactive-qr-code-creative__questions__point-text'>• Due to the design of the actual creative ad, the user is given 2 choices: either a gradient background or upload a custom image</p>
                            <p className='interactive-qr-code-creative__questions__point-text'>• The gradient background is a drop-down list consisted of the colour swatch, hex code and colour description</p>
                            <p className='interactive-qr-code-creative__questions__point-text'>• As you choose between each colour, the preview on the right will change in real time as well</p>
                            <img src={Gradient} alt='OverallFormLayout1' className='interactive-qr-code-creative__research__img modal-cursor' onClick={() => openModal(Gradient)}/>
                            
                            <div className='interactive-qr-code-creative__section-divider' />
                            <p style={{marginBottom: '0'}} className='interactive-qr-code-creative__final__text-bold'>Background Settings - Custom Image</p>
                            <p style={{marginTop: '0'}} className='interactive-qr-code-creative__questions__point-text'>• The other option for background is for user to upload a custom image</p>
                            <p className='interactive-qr-code-creative__questions__point-text'>• Explained in the tooltip, the uploaded image will have a 50% dark overlay to ensure copy of the creative remains legible</p>
                            <p className='interactive-qr-code-creative__questions__point-text'>• The user can switch back and forth between solid gradient or custom image even after uploading an image</p>
                            <img src={CustomImage} alt='BackgroundSettingGradient' className='interactive-qr-code-creative__research__img modal-cursor' onClick={() => openModal(CustomImage)}/>
                            
                            <div className='interactive-qr-code-creative__section-divider' />
                            <p style={{marginBottom: '0'}} className='interactive-qr-code-creative__final__text-bold'>Content Settings - Video</p>
                            <p style={{marginTop: '0'}} className='interactive-qr-code-creative__questions__point-text'>• The moment user uploads the video, the video will show up in the preview and starts playing in mute</p>
                            <img src={ContentSettingsVideo} alt='BackgroundSettingGradient' className='interactive-qr-code-creative__research__img modal-cursor' onClick={() => openModal(ContentSettingsVideo)}/>
                            
                            <div className='interactive-qr-code-creative__section-divider' />
                            <p style={{marginBottom: '0'}} className='interactive-qr-code-creative__final__text-bold'>Content Settings - Advertiser Logo</p>
                            <p style={{marginTop: '0'}} className='interactive-qr-code-creative__questions__text'>• The moment user uploads the logo, it will show up in the preview</p>
                            <img src={ContentSettingsAdvertiserLogo} alt='BackgroundSettingGradient' className='interactive-qr-code-creative__research__img modal-cursor' onClick={() => openModal(ContentSettingsAdvertiserLogo)}/>
                            
                            <div className='interactive-qr-code-creative__section-divider' />
                            <p style={{marginBottom: '0'}} className='interactive-qr-code-creative__final__text-bold'>Content Settings - Headline</p>
                            <p style={{marginTop: '0'}} className='interactive-qr-code-creative__questions__point-text'>• The two headlines are optional, therefore there was no indication of the placement in the preview by default</p>
                            <p className='interactive-qr-code-creative__questions__point-text'>• Once the user enters a line of headline, it will be vertically center aligned to right of the logo</p>
                            <p className='interactive-qr-code-creative__questions__point-text'>• If the user chooses to enter a second headline, then both headlines will be vertically center aligned to right of the logo</p>                            
                            <img src={ContentSettingsHeadline} alt='BackgroundSettingGradient' className='interactive-qr-code-creative__research__img modal-cursor' onClick={() => openModal(ContentSettingsHeadline)}/>
                            
                            <div className='interactive-qr-code-creative__section-divider' />
                            <p style={{marginBottom: '0'}} className='interactive-qr-code-creative__final__text-bold'>Content Settings - QR Code URL</p>
                            <p style={{marginTop: '0'}} className='interactive-qr-code-creative__questions__point-text'>• The user will need to enter a URL, and the backend system will be able to generate a QR Code to be shown at the preview in real time</p>
                            <img src={ContentSettingsQRCodeURL} alt='BackgroundSettingGradient' className='interactive-qr-code-creative__research__img modal-cursor' onClick={() => openModal(ContentSettingsQRCodeURL)}/>
                            
                            <div className='interactive-qr-code-creative__section-divider' />
                            <p style={{marginBottom: '0'}} className='interactive-qr-code-creative__final__text-bold'>Content Settings - QR Code label</p>
                            <p style={{marginTop: '0'}} className='interactive-qr-code-creative__questions__point-text'>• The user be required to choose a label to go under the QR Code as an action item </p>
                            <p className='interactive-qr-code-creative__questions__point-text'>• The labels are predefined by the marketing team and have set categories like basic, food &amp; beverage etc</p>
                            <img src={ContentSettingsQRCodeLabel} alt='BackgroundSettingGradient' className='interactive-qr-code-creative__research__img modal-cursor' onClick={() => openModal(ContentSettingsQRCodeLabel)}/>
                            
                            <div className='interactive-qr-code-creative__section-divider' />
                            <p style={{marginBottom: '0'}} className='interactive-qr-code-creative__final__text-bold'>Creative Details Page and Preview</p>
                            <p style={{marginTop: '0'}} className='interactive-qr-code-creative__questions__point-text'>• Once all the mandatory fields are filled in, the user can submit the form</p>
                            <p className='interactive-qr-code-creative__questions__point-text'>• The user will be navigated to the Creative Details Page, where it will display a summary of the creative user just submitted</p>
                            <p className='interactive-qr-code-creative__questions__point-text margin-bottom'>• There is the option to view the preview again, but this time it will open up a drawer to show a larger scale of the preview for user to clearly see it</p>
                            <img src={CreativeDetailsPagePreview} alt='BackgroundSettingGradient' className='interactive-qr-code-creative__research__img modal-cursor' onClick={() => openModal(CreativeDetailsPagePreview)}/>
                        </section>
                    </Section>
                    <Section id="section8">
                        <section style={{marginBottom: '400px'}} className='interactive-qr-code-creative__section-start'>
                            <p style={{marginTop: '40px'}} className='interactive-qr-code-creative__section-title'>Reflection - What I advocated for and Why?</p>
                            <p style={{margin: '0'}} className='interactive-qr-code-creative__final__text-bold'>Advocating for QR Code Label to be Mandatory</p>
                            <p style={{margin: '0'}} className='interactive-qr-code-creative__questions__text'>• Originally the QR Code Label was not mandatory as per the Product Manager, but through understand the functionality of the creative, I believe the QR Code label should be made mandatory in order to aid end users to interact with the ad properly</p>
                            <p style={{margin: '0'}} className='interactive-qr-code-creative__questions__text margin-bottom'>• The Product manager was able to understand my point of view and rationalization, therefore the QR Code Label input field was made mandatory</p>
                            <p style={{margin: '0'}} className='interactive-qr-code-creative__final__text-bold'>Advocating for Preview</p>
                            <p style={{margin: '0'}} className='interactive-qr-code-creative__questions__text'>• Originally the creative form was not able to have a preview, however after understanding the functionality of this new creative, I believe a preview was very essentail for the Ad Op as they are filling in the form</p>
                            <p style={{margin: '0'}} className='interactive-qr-code-creative__questions__text'>• I have backed my reasoning with the competitive benchmarking, and the Product Manager was able to work with the engineers to elongate the timeline enough to make this feature feasible</p>
                            <p style={{margin: '0'}} className='interactive-qr-code-creative__questions__text'>• Since the preview function is incorporated in this creative form, all other creative forms can benefit from this as necessary, giving Ad Ops a more comprehensive view of the creative they are filling. This can be turned into an external link for Ad Ops to send over to their clients to review as well.</p>
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