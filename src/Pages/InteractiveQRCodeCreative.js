import { useEffect } from 'react';
import '../Pages/PageCSS/InteractiveQRCodeCreative.scss';

import MainImage from '../Asset/InteractiveQRCodeCreative/Interactive_QR_Code_Creative_Main_Image.svg';
import DesignProcess from '../Asset/InteractiveQRCodeCreative/Interactive_QR_Code_Creative_Design_Process.svg';
import ProductKickoff1 from '../Asset/InteractiveQRCodeCreative/Interactive_QR_Code_Creative_Product_Kickkoff_1.svg';
import ProductKickoff2 from '../Asset/InteractiveQRCodeCreative/Interactive_QR_Code_Creative_Product_Kickkoff_2.svg';
import CompetitiveBrenchmarking1 from '../Asset/InteractiveQRCodeCreative/Interactive_QR_Code_Creative_Competitive_Benchmark_1.svg';
import CompetitiveBrenchmarking2 from '../Asset/InteractiveQRCodeCreative/Interactive_QR_Code_Creative_Competitive_Benchmark_2.svg';
import CompetitiveBrenchmarking3 from '../Asset/InteractiveQRCodeCreative/Interactive_QR_Code_Creative_Competitive_Benchmark_3.svg';
import CreativeForm1A from '../Asset/InteractiveQRCodeCreative/Interactive_QR_Code_Creative_Creative_Form_1A.svg';
import CreativeForm1B from '../Asset/InteractiveQRCodeCreative/Interactive_QR_Code_Creative_Creative_Form_1B.svg';
import ExplorativeLayout1A from '../Asset/InteractiveQRCodeCreative/Interactive_QR_Code_Creative_Explorative_Layouts_1A.svg';
import ExplorativeLayout1B from '../Asset/InteractiveQRCodeCreative/Interactive_QR_Code_Creative_Explorative_Layouts_1B.svg';
import ExplorativeLayout1C from '../Asset/InteractiveQRCodeCreative/Interactive_QR_Code_Creative_Explorative_Layouts_1C.svg';
import ExplorativeLayout2 from '../Asset/InteractiveQRCodeCreative/Interactive_QR_Code_Creative_Explorative_Layouts_2.svg';
import LayoutFinalization from '../Asset/InteractiveQRCodeCreative/Interactive_QR_Code_Creative_Layout_Finalization.svg';
import Hifi from '../Asset/InteractiveQRCodeCreative/Interactive_QR_Code_Creative_Hifi.svg';
import OverallFormLayout1 from '../Asset/InteractiveQRCodeCreative/Interactive_QR_Code_Creative_Overall_Form_Layout_1.svg';
import OverallFormLayout2 from '../Asset/InteractiveQRCodeCreative/Interactive_QR_Code_Creative_Overall_Form_Layout_2.svg';
import BackgroundSettingGradient from '../Asset/InteractiveQRCodeCreative/Interactive_QR_Code_Creative_Background_Setting_Gradient.svg';
import BackgroundSettingCustomImage from '../Asset/InteractiveQRCodeCreative/Interactive_QR_Code_Creative_Background_Setting_Custom_Image.svg';
import BackgroundSettingVideo from '../Asset/InteractiveQRCodeCreative/Interactive_QR_Code_Creative_Background_Setting_Video.svg';
import BackgroundSettingAdvertiserLogo from '../Asset/InteractiveQRCodeCreative/Interactive_QR_Code_Creative_Background_Setting_Advertiser_Logo.svg';
import BackgroundSettingHeadline from '../Asset/InteractiveQRCodeCreative/Interactive_QR_Code_Creative_Background_Setting_Headline.svg';
import BackgroundSettingQRCodeURL from '../Asset/InteractiveQRCodeCreative/Interactive_QR_Code_Creative_Background_Setting_QR_Code_URL.svg';
import BackgroundSettingQRCodeLabel from '../Asset/InteractiveQRCodeCreative/Interactive_QR_Code_Creative_Background_Setting_QR_Code_Label.svg';


export default function InteractiveQRCodeCreative() {

    useEffect(()=>{
        window.scrollTo(0, 0);
    },[])

    return (
        <main className='interactive-qr-code-creative'>
            <h1 className='interactive-qr-code-creative__title'>Samsung Ads: Interactive QR Code Creative</h1>
            <p className='interactive-qr-code-creative__description'>The objective of this project is to design and deliver the form that clients have to fill to submit a creative for a campaign. The creative itself has already been designed by another team, and my task is to ensure the form has all the required fields and allow the user to understand how the creative will be presented.</p>
            <img src={MainImage} alt='finished product image' className='interactive-qr-code-creative__img'/>
            <div className='interactive-qr-code-creative__list'>
                <p className='interactive-qr-code-creative__item'>Role: Product Designer II</p>
                <p className='interactive-qr-code-creative__item'>Timeline: 3 weeks</p>
                <p className='interactive-qr-code-creative__item'>Tools: Figma, Figjam</p>
                <p className='interactive-qr-code-creative__item'>Platform: B2B SaaS on website</p>
            </div>
            <section className='interactive-qr-code-creative__section'>
                <h1 className='interactive-qr-code-creative__design-process__title'>Overview of Design Process</h1>
                <img className='interactive-qr-code-creative__design-process__img' src={DesignProcess} alt='Design Process Image'/>
            </section>
            <section className='interactive-qr-code-creative__section'>
                <h1 className='interactive-qr-code-creative__questions__title'>What</h1>
                <p className='interactive-qr-code-creative__questions__text'>To design a form for clients to fill out for the new creative of Interactive QR Code. The form needs to incorporate all the elements of the creative in a comprehensive way.</p>
                <h1 className='interactive-qr-code-creative__questions__title'>Who</h1>
                <p className='interactive-qr-code-creative__questions__text'>For Samsung Ads’ clients who wishes to use the Interactive QR Code creative.</p>
                <h1 className='interactive-qr-code-creative__questions__title'>How</h1>
                <p className='interactive-qr-code-creative__questions__text'>A form in the DSP platform inside creatives section.</p>
                <h1 className='interactive-qr-code-creative__questions__title'>Goals</h1>
                <p className='interactive-qr-code-creative__questions__text'>Since this is a more complex creative with interactivity from the end user, the goal of this project is to show as close to production as possible during the form stage.</p>
                <h1 className='interactive-qr-code-creative__questions__title'>Scope Constraints</h1>
                <p className='interactive-qr-code-creative__questions__text'>• Need to follow most of the old form structures using the same components</p>
                <p className='interactive-qr-code-creative__questions__text'>• Little wiggle room for new “inventive” components</p>
                <p className='interactive-qr-code-creative__questions__text'>• Technical constraints with showing real time edits as preview</p>
                <p className='interactive-qr-code-creative__questions__text'>• No time for detailed user testing</p>
            </section>
            <section className='interactive-qr-code-creative__section'>
                <h1 className='interactive-qr-code-creative__research__title'>Product Kick Off</h1>
                <p className='interactive-qr-code-creative__research__text'>The objective of this project is to design a form for this creative below.</p>
                <p className='interactive-qr-code-creative__research__text'>This creative involves an interactive element where end users can scan the QR Code on the screen in order to learn more about the advertisement, or to receive certain discount code. This creative has been designed by another team prior already, and I will be collaborating with them to understand each detail and interaction of the creative.</p>
                <p className='interactive-qr-code-creative__final__text-bold'>The creative will compost of these items:</p>
                <p className='interactive-qr-code-creative__questions__text'>• 15 to 30 seconds video file (mp4)</p>
                <p className='interactive-qr-code-creative__questions__text'>• Background (Choice of 8 gradient colours or upload a custom image)</p>
                <p className='interactive-qr-code-creative__questions__text'>• Advertiser Logo (png with the intention of legibility on top of dark background)</p>
                <p className='interactive-qr-code-creative__questions__text'>• Option of 2 copy lines</p>
                <p className='interactive-qr-code-creative__questions__text'>• QR Code (URL)</p>
                <p className='interactive-qr-code-creative__questions__text'>• QR Code label</p>
                <img src={ProductKickoff1} alt='ProductKickoff1' className='interactive-qr-code-creative__research__img'/>
                <img src={ProductKickoff2} alt='ProductKickoff2' className='interactive-qr-code-creative__research__img'/>
                <h1 className='interactive-qr-code-creative__questions__title'>Competitive Benchmark</h1>
                <p className='interactive-qr-code-creative__questions__text'>Competitive benchmarking was done across other ad platforms to see how their creative forms were filled. 4 competitors were highlighted to showcase their ability to show preview as the user completes the form. The preview are always on the right, showing real time edits as the user fills out the form. This gives the users assurance of how the creative will eventually look in production.</p>
                <img src={CompetitiveBrenchmarking1} alt='CompetitiveBrenchmarking1' className='interactive-qr-code-creative__research__img'/>
                <img src={CompetitiveBrenchmarking2} alt='CompetitiveBrenchmarking2' className='interactive-qr-code-creative__research__img'/>
                <h1 className='interactive-qr-code-creative__questions__title'>How current creative forms look</h1>
                <p className='interactive-qr-code-creative__questions__text'>Below are some examples of how Samsung Ads DSP creative forms currently look. They do not have any preview elements, and is only a long form with input fields.</p>
                <div className='interactive-qr-code-creative__paired-image'>
                    <img src={CreativeForm1A} alt='CreativeForm1A' className='interactive-qr-code-creative__paired-image__img'/>
                    <img src={CreativeForm1B} alt='MappingInfo2B' className='interactive-qr-code-creative__paired-image__img'/>
                </div>
            </section>
            <section className='interactive-qr-code-creative__section'>
                <h1 className='interactive-qr-code-creative__lo-fi__title'>Exploration of Layouts</h1>
                <p className='interactive-qr-code-creative__lo-fi__text'>I began by working on the scaling of the creative as a preview, and exploring different orientation of the preview with the form. Several layouts were explored.</p>
                <div className='interactive-qr-code-creative__img-text-container'>
                    <div className='interactive-qr-code-creative__img-text-container__wrapper'>
                        <img src={ExplorativeLayout1A} alt='ExplorativeLayout1A' className='interactive-qr-code-creative__img-text-container__wrapper__three-img margin'/>
                        <img src={ExplorativeLayout1B} alt='ExplorativeLayout1B' className='interactive-qr-code-creative__img-text-container__wrapper__three-img margin'/>
                        <img src={ExplorativeLayout1C} alt='ExplorativeLayout1C' className='interactive-qr-code-creative__img-text-container__wrapper__three-img'/>
                    </div>
                </div>
                <img src={ExplorativeLayout2} alt='ExplorativeLayout2' className='interactive-qr-code-creative__research__img'/>
                <h1 className='interactive-qr-code-creative__lo-fi__title'>Layout Finalization and Justification</h1>
                <p className='interactive-qr-code-creative__lo-fi__text'>Ultimately, I decided to go with the preview on the right side, below the general settings. The reason is because the preview will only have changes shown once they end user starts filling out the form below general settings. Since general settings does not affect the preview, I have decided to place the preview to the right of the section that will have an effect to real time edits. </p>
                <p className='interactive-qr-code-creative__final__text-bold'>Size of Preview</p>
                <p className='interactive-qr-code-creative__lo-fi__text'>With consideration of the Samsung Ads design system’s grid and column layout, 31.25% scaled version of the preview is chosen for the optimal size. This was also confirmed with a quick user review from 5 Ad Ops to ensure they can see all the details in this size without compromises.</p>
                <p className='interactive-qr-code-creative__final__text-bold'>Expandable Feature</p>
                <p className='interactive-qr-code-creative__lo-fi__text'>I have also incorporated an expandable feature in the preview for use cases that users want to see a bigger scaled version.</p>
                <p className='interactive-qr-code-creative__final__text-bold'>Sticky Feature</p>
                <p className='interactive-qr-code-creative__lo-fi__text'>Since the preview is the essential part of this form, I have designed the preview section to be sticky once the user scrolls past the general settings. This is due to the fact that as user continue to fill out the rest of the form, they can still see the preview above the fold at all times to ensure there are no mistakes.</p>
                <img src={LayoutFinalization} alt='ExplorativeLayout2' className='interactive-qr-code-creative__research__img'/>
            </section>
            <section className='interactive-qr-code-creative__section'>
                <h1 className='interactive-qr-code-creative__lo-fi__title'>High Fidelity Mocks for Hand Off</h1>
                <img src={Hifi} alt='Hifi' className='interactive-qr-code-creative__research__img'/>
                <p className='interactive-qr-code-creative__final__text-bold'>Overall Form Layout</p>
                <p className='interactive-qr-code-creative__questions__text'>• General Settings remain unchanged due to scope requirements</p>
                <p className='interactive-qr-code-creative__questions__text'>• Template Settings is disabled by default due to business strategy (this is to advertise that there will be more templates coming soon)</p>
                <p className='interactive-qr-code-creative__questions__text'>• Preview section is on the right of the form below general settings, and is sticky once you scroll past general settings</p>
                <p className='interactive-qr-code-creative__questions__text'>• The input fields go in order to match with the preview from top to bottom, left to right</p>
                <img src={OverallFormLayout1} alt='OverallFormLayout1' className='interactive-qr-code-creative__research__img'/>
                <img src={OverallFormLayout2} alt='OverallFormLayout2' className='interactive-qr-code-creative__research__img'/>
                <p className='interactive-qr-code-creative__final__text-bold'>Background Settings - Gradient</p>
                <p className='interactive-qr-code-creative__questions__text'>• Due to the design of the actual creative ad, the user is given 2 choices: either a gradient background or upload a custom image</p>
                <p className='interactive-qr-code-creative__questions__text'>• The gradient background is a drop-down list consisted of the colour swatch, hex code and colour description</p>
                <p className='interactive-qr-code-creative__questions__text'>• As you choose between each colour, the preview on the right will change in real time as well</p>
                <img src={BackgroundSettingGradient} alt='BackgroundSettingGradient' className='interactive-qr-code-creative__research__img'/>
                <p className='interactive-qr-code-creative__final__text-bold'>Background Settings - Custom Image</p>
                <p className='interactive-qr-code-creative__questions__text'>• The other option for background is for user to upload a custom image</p>
                <p className='interactive-qr-code-creative__questions__text'>• Explained in the tooltip, the uploaded image will have a 50% dark overlay to ensure copy of the creative remains legible</p>
                <p className='interactive-qr-code-creative__questions__text'>• The user can switch back and forth between solid gradient or custom image even after uploading an image</p>
                <img src={BackgroundSettingCustomImage} alt='BackgroundSettingGradient' className='interactive-qr-code-creative__research__img'/>
                <p className='interactive-qr-code-creative__final__text-bold'>Content Settings - Video</p>
                <p className='interactive-qr-code-creative__questions__text'>• The moment user uploads the video, the video will show up in the preview and starts playing in mute</p>
                <img src={BackgroundSettingVideo} alt='BackgroundSettingGradient' className='interactive-qr-code-creative__research__img'/>
                <p className='interactive-qr-code-creative__final__text-bold'>Content Settings - Advertiser Logo</p>
                <p className='interactive-qr-code-creative__questions__text'>• The moment user uploads the logo, it will show up in the preview</p>
                <img src={BackgroundSettingAdvertiserLogo} alt='BackgroundSettingGradient' className='interactive-qr-code-creative__research__img'/>
                <p className='interactive-qr-code-creative__final__text-bold'>Content Settings - Headline</p>
                <p className='interactive-qr-code-creative__questions__text'>• The two headlines are optional, therefore there was no indication of the placement in the preview by default</p>
                <p className='interactive-qr-code-creative__questions__text'>• Once the user enters a line of headline, it will be vertically center aligned to right of the logo</p>
                <p className='interactive-qr-code-creative__questions__text'>• If the user chooses to enter a second headline, then both headlines will be vertically center aligned to right of the logo</p>
                <img src={BackgroundSettingHeadline} alt='BackgroundSettingGradient' className='interactive-qr-code-creative__research__img'/>
                <p className='interactive-qr-code-creative__final__text-bold'>Content Settings - QR Code URL</p>
                <p className='interactive-qr-code-creative__questions__text'>• The user will need to enter a URL, and the backend system will be able to generate a QR Code to be shown at the preview in real time</p>
                <img src={BackgroundSettingQRCodeURL} alt='BackgroundSettingGradient' className='interactive-qr-code-creative__research__img'/>
                <p className='interactive-qr-code-creative__final__text-bold'>Content Settings - QR Code label</p>
                <p className='interactive-qr-code-creative__questions__text'>• The user be required to choose a label to go under the QR Code as an action item </p>
                <p className='interactive-qr-code-creative__questions__text'>• The labels are predefined by the marketing team and have set categories like basic, food &amp; beverage etc</p>
                <img src={BackgroundSettingQRCodeLabel} alt='BackgroundSettingGradient' className='interactive-qr-code-creative__research__img'/>
                <p className='interactive-qr-code-creative__final__text-bold'>Creative Details Page and Preview</p>
                <p className='interactive-qr-code-creative__questions__text'>• Once all the mandatory fields are filled in, the user can submit the form</p>
                <p className='interactive-qr-code-creative__questions__text'>• The user will be navigated to the Creative Details Page, where it will display a summary of the creative user just submitted</p>
                <p className='interactive-qr-code-creative__questions__text'>• There is the option to view the preview again, but this time it will open up a drawer to show a larger scale of the preview for user to clearly see it</p>
                <p className='interactive-qr-code-creative__final__text-bold'>Advocating for QR Code Label to be Mandatory</p>
                <p className='interactive-qr-code-creative__questions__text'>• Originally the QR Code Label was not mandatory as per the Product Manager, but through understand the functionality of the creative, I believe the QR Code label should be made mandatory in order to aid end users to interact with the ad properly</p>
                <p className='interactive-qr-code-creative__questions__text'>• The Product manager was able to understand my point of view and rationalization, therefore the QR Code Label input field was made mandatory</p>
                <p className='interactive-qr-code-creative__final__text-bold'>Advocating for Preview</p>
                <p className='interactive-qr-code-creative__questions__text'>• Originally the creative form was not able to have a preview, however after understanding the functionality of this new creative, I believe a preview was very essentail for the Ad Op as they are filling in the form</p>
                <p className='interactive-qr-code-creative__questions__text'>• I have backed my reasoning with the competitive benchmarking, and the Product Manager was able to work with the engineers to elongate the timeline enough to make this feature feasible</p>
                <p className='interactive-qr-code-creative__questions__text'>• Since the preview function is incorporated in this creative form, all other creative forms can benefit from this as necessary, giving Ad Ops a more comprehensive view of the creative they are filling. This can be turned into an external link for Ad Ops to send over to their clients to review as well.</p>
            </section>
            {/* <section className='interactive-qr-code-creative__final'>
                <h1 className='interactive-qr-code-creative__final__title'>Final Hand Off</h1>
                <p className='interactive-qr-code-creative__final__text'>Below is part of all the final hand off of the mocks (prototypes were also provided to the engineers to show interactions). Due to the amount of mocks involved, only one example of each category mock is shown.</p>
                <p className='interactive-qr-code-creative__final__text'>Due to the amount of mocks involved, only one example of each category mock is shown.</p>
                <p className='interactive-qr-code-creative__final__text-bold'>CTV/OLV</p>
                <div className='interactive-qr-code-creative__paired-image'>
                    <img src={FinalHandOff1A} alt='FinalHandOff1A' className='interactive-qr-code-creative__paired-image__img'/>
                    <img src={FinalHandOff1B} alt='FinalHandOff1B' className='interactive-qr-code-creative__paired-image__img'/>
                </div>
                <p className='interactive-qr-code-creative__final__text-bold'>Samsung TV Native</p>
                <div className='interactive-qr-code-creative__paired-image'>
                    <img src={FinalHandOff2A} alt='FinalHandOff2A' className='interactive-qr-code-creative__paired-image__img'/>
                    <img src={FinalHandOff2B} alt='FinalHandOff2B' className='interactive-qr-code-creative__paired-image__img'/>
                </div>
                <p className='interactive-qr-code-creative__final__text-bold'>Samsung Mobile Native</p>
                <div className='interactive-qr-code-creative__paired-image'>
                    <img src={FinalHandOff3A} alt='FinalHandOff3A' className='interactive-qr-code-creative__paired-image__img'/>
                    <img src={FinalHandOff3B} alt='FinalHandOff3B' className='interactive-qr-code-creative__paired-image__img'/>
                </div>
                <p className='interactive-qr-code-creative__final__text-bold'>Displays</p>
                <div className='interactive-qr-code-creative__paired-image'>
                    <img src={FinalHandOff4A} alt='FinalHandOff4A' className='interactive-qr-code-creative__paired-image__img'/>
                    <img src={FinalHandOff4B} alt='FinalHandOff4B' className='interactive-qr-code-creative__paired-image__img'/>
                </div>
                <h1 className='interactive-qr-code-creative__lo-fi__title'>Important Finalization</h1>
                <p className='interactive-qr-code-creative__questions__text'>• Each line of copy had been reviewed and approved by the SME to ensure validity</p>
                <p className='interactive-qr-code-creative__questions__text'>• For convenience of the user, only one source of truth for information is presented at the external link of “DSP Help Center”, which is maintained by the marketing team (Which will also make updating it easier as it is on one place)</p>
            </section> */}
            {/* <section className='interactive-qr-code-creative__result'>
                <h1 className='interactive-qr-code-creative__result__title'>Results after launch</h1>
                <div style={{padding: '20px 0'}}>
                    <p className='interactive-qr-code-creative__final__text-bold'>Key benefits</p>
                    <p className='interactive-qr-code-creative__questions__text'>• Provides self serve users a convenient UI to quickly understand and explore all the available creative inventories Samsung Ads provide</p>
                    <p className='interactive-qr-code-creative__questions__text'>• Reduces the time for Ad Ops Sales to spend on educating self serve or first time clients about all the available creative inventories</p>
                </div>
            </section> */}
        </main>
    )
}