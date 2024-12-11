import { useEffect, useState } from 'react';
import '../Pages/PageCSS/ConfigServer.scss';
import SideBar from '../Components/SideBar';
import ResponsiveContainer from '../Components/ResponsiveContainer';
import { Modal } from '../Components/Modal';

//images
import MainImage from '../Asset/ConfigServer/Samsung_Config_Server_Project_Hero_Photo.svg';
import DesignProcess from '../Asset/ConfigServer/Samsung_Config_Server_Design_Process.svg';

// Discovery Research: Understanding the Problem
import DiscoveryResearchCurrentUserJourney from '../Asset/ConfigServer/D&R_current_user_journey_map.svg';
import DiscoveryResearchUnderstandConfigPossiblility1 from '../Asset/ConfigServer/D&R_understanding_config_possiblility_1.svg';
import DiscoveryResearchUnderstandConfigPossiblility2 from '../Asset/ConfigServer/D&R_understanding_config_possiblility_2.svg';
import DiscoveryResearchMappingCurrentAndFutureUsers from '../Asset/ConfigServer/D&R_mapping_current_vs_future_users.svg';

// Ideation
import Ideation_1 from '../Asset/ConfigServer/Ideation1.svg';
import Ideation_2 from '../Asset/ConfigServer/Ideation2.svg';
import Ideation_3 from '../Asset/ConfigServer/Ideation3.svg';
import Ideation_4 from '../Asset/ConfigServer/Ideation4.svg';
import Ideation_Lofi from '../Asset/ConfigServer/Ideation_lo-fi.svg';



// Design Process and Testing
import DesignProcessTesting1 from '../Asset/ConfigServer/designProcessTesting1.svg';
import DesignProcessTesting2 from '../Asset/ConfigServer/designProcessTesting2.svg';
import DesignProcessTesting3 from '../Asset/ConfigServer/designProcessTesting3.svg';
import DesignProcessTesting4 from '../Asset/ConfigServer/designProcessTesting4.svg';
import DesignProcessTesting5 from '../Asset/ConfigServer/designProcessTesting5.svg';

// Iteration
import Iteration1 from '../Asset/ConfigServer/Iteration1.svg';

// Country Listing - Create New
import CountryListingA from '../Asset/ConfigServer/CountryListingA.svg';
import CountryListingB from '../Asset/ConfigServer/CountryListingB.svg';
import CountryListingC from '../Asset/ConfigServer/CountryListingC.svg';
import CountryListingD from '../Asset/ConfigServer/CountryListingD.svg';

// Custom Edit
import CustomEditA from '../Asset/ConfigServer/CustomEditA.svg';
import CustomEditB from '../Asset/ConfigServer/CustomEditB.svg';
import CustomEditC from '../Asset/ConfigServer/CustomEditC.svg';
import CustomEditD from '../Asset/ConfigServer/CustomEditD.svg';
import CustomEditE from '../Asset/ConfigServer/CustomEditE.svg';
import CustomEditF from '../Asset/ConfigServer/CustomEditF.svg';

// Batch Edit - By Country and Ad Type
import BatchEditA from '../Asset/ConfigServer/BatchEditA.svg';
import BatchEditB from '../Asset/ConfigServer/BatchEditB.svg';
import BatchEditC from '../Asset/ConfigServer/BatchEditC.svg';
import BatchEditD from '../Asset/ConfigServer/BatchEditD.svg';

// Single Edit
import SingleEditA from '../Asset/ConfigServer/SingleEditA.svg';
import SingleEditB from '../Asset/ConfigServer/SingleEditB.svg';
import SingleEditC from '../Asset/ConfigServer/SingleEditC.svg';
import SingleEditD from '../Asset/ConfigServer/SingleEditD.svg';

//Batch Edit - B`
import BatchEditFunctionA from '../Asset/ConfigServer/BatchEditFunctionA.svg';
import BatchEditFunctionB from '../Asset/ConfigServer/BatchEditFunctionB.svg';
import BatchEditFunctionC from '../Asset/ConfigServer/BatchEditFunctionC.svg';
import BatchEditFunctionD from '../Asset/ConfigServer/BatchEditFunctionD.svg';

// PSID Edit
import PSIDEditA from '../Asset/ConfigServer/PSIDEditA.svg';
import PSIDEditB from '../Asset/ConfigServer/PSIDEditB.svg';
import PSIDEditC from '../Asset/ConfigServer/PSIDEditC.svg';
import PSIDEditD from '../Asset/ConfigServer/PSIDEditD.svg';

// Reflection
import ReflectionA from '../Asset/ConfigServer/ReflectionA.svg';

// // Results After Launch
import ResultAfterLaunch1A from '../Asset/ConfigServer/ResultAfterLaunch1A.svg';
import ResultAfterLaunch1B from '../Asset/ConfigServer/ResultAfterLaunch1B.svg';
import ResultAfterLaunch2 from '../Asset/ConfigServer/ResultAfterLaunch2.svg';

const sections = [
    { id: 'section1', label: 'Overview of Design Process', description: 'The overview of the design process for this project.' },
    { id: 'section2', label: 'Discovery & Research', description: 'User journey mapping and understanding all the variables.' },
    { id: 'section3', label: 'Ideation', description: 'Exploration via information architect and low fidelity sketches before finalizing on one design direction' },
    { id: 'section4', label: 'Iteration & Testing', description: 'Iterating based on findings to create a new set of sketches before turning into a high fidelity prototype to user test.' },
    { id: 'section5', label: 'Implementation & Final Solution', description: 'Final Mocks and Prototypes and the reasoning behind the design approach.' },
    { id: 'section6', label: 'Reflection', description: 'What I learned from the project and how it has influenced my design approach' },
    { id: 'section7', label: 'Results After Launch', description: 'Impact of finished product after launch' },
  ];

const Section = ({ id, children }) => {
    return (
      <div id={id} style={{ display: 'flex', justifyContent: 'center', marginBottom: '30px' }}>
        {children}
      </div>
    );
};

export default function ConfigServer() {
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
        <main className='config-server'>
            <div className='hero-section'>
                <h1 className='config-server__title'>Samsung Ads: Config Server</h1>
                <p className='config-server__description'>The objective of this project is to design and deliver a platform for backend developers to monitor, analyze and manage any number of TV models. The Configuration Server determines if a particular TV is enabled to show ads or not based on the critical information such as product type, country and model code.</p>
                <img src={MainImage} alt='finished product image' className='config-server__img'/>
                <div className='config-server__list'>
                    <p className='config-server__item'>Role: Product Designer II</p>
                    <p className='config-server__item'>Timeline: 18 weeks</p>
                    <p className='config-server__item'>Tools: Figma, Figjam</p>
                    <p className='config-server__item'>Platform: B2B SaaS on website</p>
                </div>
                <div className='config-server__questions'>
                    <section className='config-server__section'>
                        <p style={{ marginTop: '40px' }} className='config-server__section-title'>Problem</p>
                        <p className='config-server__questions__text'>• No current UI platform to perform edit tasks</p>
                        <p className='config-server__questions__text'>• Long turn around time (up to 2 weeks) for one edit change</p>
                        <p className='config-server__questions__text'>• No documentation for change reason</p>
                        <p className='config-server__questions__text'>• No viewing abilities for Ad Ops (those who are not engineers)</p>
                    </section>
                    <section className='config-server__section'>
                        <p style={{ marginTop: '40px' }} className='config-server__section-title'>Solution</p>
                        <p className='config-server__questions__text'>• A streamlined platform with abilities to edit TV model in any level combination of categories</p>
                        <p className='config-server__questions__text'>• Ability to set custom country listing to view and edit without having to filter every time</p>
                        <p className='config-server__questions__text'>• Separate permission to view and edit</p>
                        <p className='config-server__questions__text'>• Documentation set in place for edits to record change reason</p>
                    </section>                    
                </div>
            </div>
            <div style={{display: 'flex'}}>
                <SideBar sections={sections} checkIsSticky={checkIsSticky} />
                <ResponsiveContainer isStickyColumn={isStickyColumn}>
                    <Section id="section1">
                        <section style={{ width: '100%' }} className='config-server__section-center'>
                            <img className='config-server__design-process__img' src={DesignProcess} alt='Design Process Image'/>
                        </section>
                    </Section>
                    <Section id="section2">
                        <section className='config-server__section'>
                            <p className='config-server__section-title'>Discovery &amp; Research</p>
                            <p className='config-server__research__text'>In order to understand the process and complexity, I scheduled several meetings with the back-end developer and UX researcher to fully understand all the use cases and current user journey.</p>
                            <h1 className='config-server__research__title'>Current User Journey Map</h1>
                            <p className='config-server__research__point-text'>• Very long and time consuming process to code backend</p>
                            <p className='config-server__research__point-text'>• Chances of error and lack of history recording.</p>
                            <img src={DiscoveryResearchCurrentUserJourney} alt='Discovery &amp; Research image 1' className='config-server__research__img modal-cursor' onClick={() => openModal(DiscoveryResearchCurrentUserJourney)}/>
                            <h1 className='config-server__research__title'>Understanding the configuration possibilities</h1>
                            <p className='config-server__research__point-text'>• A single TV model can be composed of product type, ad type, model ID, PSID, country and year</p>
                            <p className='config-server__research__point-text'>• A request to edit a TV model can be in any combination (ex: turning all 2020 TV models in Canada off)</p>
                            <img src={DiscoveryResearchUnderstandConfigPossiblility1} alt='current state image 3' className='config-server__research__img modal-cursor' onClick={() => openModal(DiscoveryResearchUnderstandConfigPossiblility1)}/>
                            <img src={DiscoveryResearchUnderstandConfigPossiblility2} alt='current state image 4' className='config-server__research__img modal-cursor' onClick={() => openModal(DiscoveryResearchUnderstandConfigPossiblility2)}/>
                            <h1 className='config-server__research__title'>Mapping Current VS Future Users</h1>
                            <p className='config-server__research__point-text'>• Current User: Only one engineer and one person from the company HQ</p>
                            <p className='config-server__research__point-text'>• Future State: Allow view and edit permission to multiple engineers and HQ, and view access to Ad Ops and Biz Ops</p>
                            <img src={DiscoveryResearchMappingCurrentAndFutureUsers} alt='current state image 4' className='config-server__research__img modal-cursor' onClick={() => openModal(DiscoveryResearchMappingCurrentAndFutureUsers)}/>
                        </section>
                    </Section>
                    <Section id="section3">
                        <section className='config-server__section'>
                            <p style={{ marginTop: '20px' }} className='config-server__section-title'>Ideation</p>
                            <h1 className='config-server__ideation__title'>Information Architecture Ideation</h1>
                            <ul style={{ margin: '0' }}>
                                <li className='config-server__ideation__point-text'>ideation on how to best visually display the information associated with a TV model</li>
                                <li className='config-server__ideation__point-text'>the 4 main categories were:</li>
                                <ul>
                                    <li className='config-server__ideation__point-text'>Model by year</li>
                                    <li className='config-server__ideation__point-text'>Ad type</li>
                                    <li className='config-server__ideation__point-text'>Country</li>
                                    <li className='config-server__ideation__point-text'>Model category</li>
                                </ul>
                            </ul>
                            <div className='config-server__img-text-container__wrapper'>
                                <img src={Ideation_1} alt='ideation image 1' className='config-server__img-text-container__wrapper__img modal-cursor' onClick={() => openModal(Ideation_1)}/>
                                <img src={Ideation_2} alt='ideation image 2' className='config-server__img-text-container__wrapper__img modal-cursor' onClick={() => openModal(Ideation_2)}/>
                            </div>
                            <div className='config-server__img-text-container__wrapper'>
                                <img src={Ideation_3} alt='ideation image 3' className='config-server__img-text-container__wrapper__img modal-cursor' onClick={() => openModal(Ideation_3)}/>
                                <img src={Ideation_4} alt='ideation image 4' className='config-server__img-text-container__wrapper__img modal-cursor' onClick={() => openModal(Ideation_4)}/>
                            </div>
                            <h1 style={{ marginTop: '40px' }} className='config-server__ideation__title'>Low Fidelity Sketches Exploration - Potential Design Solutions</h1>
                            <p className='config-server__ideation__point-text'>• Displaying different sets of information architecture</p>
                            <p className='config-server__ideation__point-text'>• Ability to customize table charts at the top of the page VS separating into a drawer</p>
                            <p className='config-server__ideation__point-text'>• Having tabs on top of table to add extra level of information</p>
                            <img src={Ideation_Lofi} alt='ideation image 5' className='config-server__ideation__img modal-cursor' onClick={() => openModal(Ideation_Lofi)}/>
                            <h1 style={{ marginTop: '40px' }} className='config-server__ideation__title'>Learnings and Summary after Exploration</h1>
                            <p className='config-server__ideation__point-text'>• The 2 main categories are country and ad type</p>
                            <p className='config-server__ideation__point-text'>• Model year, category and model ID are subcategories within the 2 main dimensions</p>
                            <p className='config-server__ideation__point-text'>• PSID needs to be on a separate page due to legal reasons</p>
                            <p className='config-server__ideation__point-text'>• On and Off models need to be shown separately due to “Special Models”. If there are 100 models, if 50 are ON, does not mean 50 are off</p>
                            <p className='config-server__ideation__point-text'>• There needs to be a “Change Reason” to be logged in a history log</p>
                            <p className='config-server__ideation__point-text'>• Users need to be able to download the data in a CSV format</p>
                            <p className='config-server__ideation__point-text'>• There needs to be a view for users with permission to edit, and one to just view</p>
                        </section>
                    </Section>
                    <Section id="section4">
                        <section className='config-server__section'>
                            <p style={{ marginTop: '40px' }} className='config-server__section-title'>Iteration - Translating findings into new design direction</p>
                            <p className='config-server__design-process-testing__point-text'>• Upon discussions with the stakeholders, a design direction was established</p>
                            <p className='config-server__design-process-testing__point-text'>• A set of new low fidelity sketches were made to accommodate the design direction for concept proving before proceeding with high fidelity mocks and prototype for user testing</p>
                            <div className='config-server__design-process-testing__img-container'>
                                <img src={DesignProcessTesting1} alt='design process testing' className='config-server__design-process-testing__img-container__img modal-cursor' onClick={() => openModal(DesignProcessTesting1)}/>
                                <div className='config-server__design-process-testing__point-container__point-text'>
                                    <p className='config-server__design-process-testing__point-text'>• 2 main dimensions are country and ad type</p>
                                    <p className='config-server__design-process-testing__point-text'>• Models On VS Off now a toggle </p>
                                </div>
                            </div>
                            <div className='config-server__design-process-testing__img-container'>
                                <img src={DesignProcessTesting2} alt='design process testing' className='config-server__design-process-testing__img-container__img modal-cursor' onClick={() => openModal(DesignProcessTesting2)}/>
                                <div className='config-server__design-process-testing__point-container__point-text'>
                                    <p className='config-server__design-process-testing__point-text'>• Other dimensions like ID, year and category are in a sub page</p>
                                </div>
                            </div>
                            <div className='config-server__design-process-testing__img-container'>
                                <img src={DesignProcessTesting3} alt='design process testing' className='config-server__design-process-testing__img-container__img modal-cursor' onClick={() => openModal(DesignProcessTesting3)}/>
                                <div className='config-server__design-process-testing__point-container__point-text'>
                                    <p className='config-server__design-process-testing__point-text'>• Other than editing per ad type and country, offer a more complex way to edit via edge cases</p>
                                    <p className='config-server__design-process-testing__point-text'>• Provide area to add reason</p>
                                </div>
                            </div>
                            <p style={{ marginTop: '40px' }} className='config-server__section-title'>Testing</p>
                            <p className='config-server__design-process-testing__point-text'>• Low fidelity mocks were turned into high fidelity mocks and prototypes to prepare for user testing</p>
                            <p className='config-server__design-process-testing__point-text'>• User Test script was prepared by me and the UX Researcher to test out usability concerns and layout formats</p>
                            <h1 className='config-server__design-process-testing__title'>Testing Objectives</h1>
                            <p className='config-server__design-process-testing__point-text'>• Information architecture (understanding content and available edit functions)</p>
                            <p style={{ marginBottom: '10px' }} className='config-server__design-process-testing__point-text'>• Enable/disable TV models based on requirements</p>
                            <img src={DesignProcessTesting4} alt='ideation image 5' className='config-server__design-process-testing__img modal-cursor' onClick={() => openModal(DesignProcessTesting4)}/>
                            <img src={DesignProcessTesting5} alt='ideation image 5' className='config-server__design-process-testing__img modal-cursor' onClick={() => openModal(DesignProcessTesting5)}/>
                            <p style={{ marginTop: '40px' }} className='config-server__section-title'>Testing Results</p>
                            <h1 style={{ marginTop: '0' }} className='config-server__design-process-testing__title'>Needs Some Attention:</h1>
                            <p className='config-server__design-process-testing__point-text'>• Summary Chart not as useful all the time, depending on the user’s needs</p>
                            <p className='config-server__design-process-testing__point-text'>• The On and Off switch was not as noticeable on the table as user wasn’t sure if they were looking at On or Off</p>
                            <p className='config-server__design-process-testing__point-text'>• Missing functionality for choosing a country group (customizing it)</p>
                            <h1 className='config-server__design-process-testing__title'>Successful:</h1>
                            <p className='config-server__design-process-testing__point-text'>• Custom Edit was a success, no usability issues</p>
                            <p className='config-server__design-process-testing__point-text'>• User find the step to step instruction to be clear</p>
                            <p className='config-server__design-process-testing__point-text'>• The review before confirm is essential</p>
                            <p className='config-server__design-process-testing__point-text'>• Custom Edit and Normal Edit covers all use cases</p>
                        </section>
                    </Section>
                    <Section id="section5">
                        <section className='config-server__section'>
                            <p style={{ marginTop: '40px' }} className='config-server__section-title'>Implementation &amp; Final Solution</p>
                            <h1 style={{ marginTop: '0px' }}className='config-server__iteration-final-solution__title'>Final Dashboard:</h1>
                            <p className='config-server__iteration-final-solution__point-text'>• The summary chart and Model Availability table are separated by accordions, allowing users to easily collapse the summary when not needed</p>
                            <p className='config-server__iteration-final-solution__point-text'>• New Country Group Listing is introduced - This is to allow users to get to the information that matters to them faster</p>
                            <p className='config-server__iteration-final-solution__point-text'>• Added “On” or “Off” in the table itself to remind users what status they are looking at for affordability</p>
                            <h1 className='config-server__iteration-final-solution__title'>Main Edit Features:</h1>
                            <p className='config-server__iteration-final-solution__point-text'>1. Country Group (NEW) - allows user to create custom country listings</p>
                            <p className='config-server__iteration-final-solution__point-text'>2. Custom Edit - allows users to use any combination od ad type, country and or model to batch edit</p>
                            <p className='config-server__iteration-final-solution__point-text'>3. Batch Edit by Country and Ad Type</p>
                            <p style={{ marginBottom: '10px' }}  className='config-server__iteration-final-solution__point-text'>4. Individual Edit within the selected Country and Ad type to edit sub details like Ad Server URL, Blank Server URL, Model Status and Real Time Ad</p>
                            <img src={Iteration1} alt='ideation image 5' className='config-server__iteration-final-solution__img modal-cursor' onClick={() => openModal(Iteration1)}/>
                            <div className='config-server__section-divider' />
                            <h1 className='config-server__iteration-final-solution__title'>01: Create and View Custom Country Listing Function:</h1>
                            <p className='config-server__iteration-final-solution__point-text'>• Users are able to select common country groupings by regions</p>
                            <p className='config-server__iteration-final-solution__point-text'>• Users can also create their own country groupings to allow easy batch edits</p>
                            <p className='config-server__iteration-final-solution__point-text'>• This allows user to only look at countries they care for without having to perform filters every time to reduce time</p>
                            <div className='config-server__img-text-container__wrapper'>
                                <img src={CountryListingA} alt='ideation image 1' className='config-server__img-text-container__wrapper__img modal-cursor' onClick={() => openModal(CountryListingA)}/>
                                <img src={CountryListingB} alt='ideation image 2' className='config-server__img-text-container__wrapper__img modal-cursor' onClick={() => openModal(CountryListingB)}/>
                                <img src={CountryListingC} alt='ideation image 3' className='config-server__img-text-container__wrapper__img modal-cursor' onClick={() => openModal(CountryListingC)}/>
                                <img src={CountryListingD} alt='ideation image 4' className='config-server__img-text-container__wrapper__img modal-cursor' onClick={() => openModal(CountryListingD)}/>
                            </div>
                            <div className='config-server__section-divider' />
                            <h1 className='config-server__iteration-final-solution__title'>02: Custom Edit Function:</h1>
                            <p className='config-server__iteration-final-solution__point-text'>• When the use case involves more complex configuration, “Custom Edit” becomes an essential feature</p>
                            <p className='config-server__iteration-final-solution__point-text'>• In “Custom Edit”, you can decide which exact groupings of models, countries and ad type to select</p>
                            <p style={{ marginBottom: '10px' }} className='config-server__iteration-final-solution__point-text'>• Once the user has made the selections and entered the “Change Reason”, it goes into a review state first</p>
                            <img src={CustomEditD} alt='ideation image 5' className='config-server__iteration-final-solution__img modal-cursor' onClick={() => openModal(CustomEditD)}/>                            
                            <div className='config-server__section-divider' />
                            <h1 className='config-server__iteration-final-solution__title'>03: Batch Edit Function - By Country and Ad Type:</h1>
                            <p className='config-server__iteration-final-solution__point-text'>• Users are able to perform filter on the Model Availability before selecting multiple or all line items</p>
                            <p className='config-server__iteration-final-solution__point-text'>• Since they are on the “Model On” status, batch editing them will turn them off, and user need to input a “Change Reason”</p>
                            <div className='config-server__img-text-container__wrapper'>
                                <img src={BatchEditC} alt='ideation image 3' className='config-server__img-text-container__wrapper__img modal-cursor' onClick={() => openModal(BatchEditC)}/>
                                <img src={BatchEditD} alt='ideation image 4' className='config-server__img-text-container__wrapper__img modal-cursor' onClick={() => openModal(BatchEditD)}/>
                            </div>
                            <div className='config-server__section-divider' />
                            <h1 className='config-server__iteration-final-solution__title'>04a: Single Edit Function - By a single country and ad type:</h1>
                            <p className='config-server__iteration-final-solution__point-text'>• Users can go into a particular country’s ad type, and make batch or single edits to the Ad Server URL, Blank Server Url, Model Status or Real Time Ad Status</p>
                            <p className='config-server__iteration-final-solution__point-text'>• Once a status has been chosen to be edited, the line item is selected where you can choose to edit the other status or URL</p>
                            <p className='config-server__iteration-final-solution__point-text'>• Once all the edits have been made, user will need to review before committing to the change</p>
                            <div className='config-server__img-text-container__wrapper'>
                                <img src={SingleEditC} alt='ideation image 3' className='config-server__img-text-container__wrapper__img modal-cursor' onClick={() => openModal(SingleEditC)}/>
                                <img src={SingleEditD} alt='ideation image 4' className='config-server__img-text-container__wrapper__img modal-cursor' onClick={() => openModal(SingleEditD)}/>
                            </div>
                            <div className='config-server__section-divider' />
                            <h1 className='config-server__iteration-final-solution__title'>04b: Batch Edit Function - By a single country and ad type:</h1>
                            <p className='config-server__iteration-final-solution__point-text'>• Users can go into a particular country’s ad type, and make batch edit to a status or URL</p>
                            <div className='config-server__img-text-container__wrapper'>
                                <img src={BatchEditFunctionC} alt='ideation image 3' className='config-server__img-text-container__wrapper__img modal-cursor' onClick={() => openModal(BatchEditFunctionC)}/>
                                <img src={BatchEditFunctionD} alt='ideation image 4' className='config-server__img-text-container__wrapper__img modal-cursor' onClick={() => openModal(BatchEditFunctionD)}/>
                            </div>
                        </section>
                    </Section>
                    <Section id="section6">
                        <section className='config-server__section-start'>
                            <p style={{ marginTop: '40px' }}className='config-server__section-title'>Reflection</p>
                            <h1 className='config-server__reflection__title'>What I learned and how it influenced my design approach:</h1>
                            <p className='config-server__reflection__point-text'>• An enterprise platform for such an internal tool requires very technical user journey that must be simple yet precise</p>
                            <p className='config-server__reflection__point-text'>• Important to separate complex user flows to reduce confusion (allowing simple edits at the first layer, but also provide the ability to perform intricate level of editing on another page)</p>
                            <p style={{ marginBottom: '10px' }} className='config-server__reflection__point-text'>• Important to advocate for features that will save a lot of time for the users for the MVP stage (Adding a custom Country Listing)</p>
                            <img src={ReflectionA} alt='info architect image 1' className='config-server__reflection__img modal-cursor' onClick={() => openModal(ReflectionA)}/>
                        </section>
                    </Section>
                    <Section id="section7">
                        <section className='config-server__section-start'>
                            <p className='config-server__section-title'>Results</p>
                            <h1 style={{ marginTop: '0px' }} className='config-server__results__title'>Key Benefits</h1>
                            <p className='config-server__results__point-text'>• Provides users (ie business, sales, product, engineering) a convenient UI to quickly understand ad configurations for different device groupings around the regions of the world.</p>
                            <p className='config-server__results__point-text'>• Allows users with the proper credentials to manage changes in real time. <span className='config-server__results__text-bold'>It drastically reduces the turn-around time from days to minutes and reduces the chances of error</span> in the requests for Configuration changes</p>
                            <p className='config-server__results__point-text'>• Allows users with permission to quickly modify ad configurations in production without requiring a production release.</p>
                            <p className='config-server__results__point-text'>• Allows multiple teams (ad ops, ad client, back end) teams to move quicker and will save a large amount of time dedicated to requests and verifying.</p>
                            <p className='config-server__results__point-text'>• A wide array of dashboards and monitoring systems have also been proactively added.</p>
                            <h1 className='config-server__results__title'>KPIs</h1>
                            <div className='config-server__section-container'>
                                <section className='config-server__section-container__center'>
                                    <p className='config-server__section-container__center__title'>30%</p>
                                    <p className='config-server__section-container__center__sub-title'>Reduced Blank Impressions</p>
                                    <p className='config-server__section-container__center__text'>Increase inventory to be sold</p>
                                </section>
                                <section className='config-server__section-container__center'>
                                    <p className='config-server__section-container__center__title'>15%</p>
                                    <p className='config-server__section-container__center__sub-title'>Delivers more RTAC impression</p>
                                    <p className='config-server__section-container__center__text'>Increase revenue by making more ad impressions</p>
                                </section>
                            </div>
                            <div className='config-server__img-text-container__wrapper'>
                                <img src={ResultAfterLaunch1A} alt='ideation image 3' className='config-server__img-text-container__wrapper__img modal-cursor' onClick={() => openModal(ResultAfterLaunch1A)}/>
                                <img src={ResultAfterLaunch1B} alt='ideation image 4' className='config-server__img-text-container__wrapper__img modal-cursor' onClick={() => openModal(ResultAfterLaunch1B)}/>
                            </div>
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