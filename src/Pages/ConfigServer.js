import { useEffect, useState } from 'react';
import '../Pages/PageCSS/ConfigServer.scss';
import SideBar from '../Components/SideBar';

//images
import MainImage from '../Asset/ConfigServer/Samsung_Config_Server_Project_Hero_Photo.svg';
import DesignProcess from '../Asset/ConfigServer/Samsung_Config_Server_Design_Process.svg';

// Discovery Research: Understanding the Problem
import UnderstandingProblem1 from '../Asset/ConfigServer/Samsung_Config_Server_Understanding_Problem_1 2.51.05 PM.svg';
import UnderstandingProblem2 from '../Asset/ConfigServer/Samsung_Config_Server_Understanding_Problem_2.svg';
import UnderstandingProblem3 from '../Asset/ConfigServer/Samsung_Config_Server_Understanding_Problem_3.svg';
import UnderstandingProblem4 from '../Asset/ConfigServer/Samsung_Config_Server_Understanding_Problem_4 2.51.05 PM.svg';
import UnderstandingProblem5A from '../Asset/ConfigServer/Samsung_Config_Server_Understanding_Problem_5A 2.51.05 PM.svg';
import UnderstandingProblem5B from '../Asset/ConfigServer/Samsung_Config_Server_Understanding_Problem_5B 2.51.05 PM.svg';
import UnderstandingProblem6A from '../Asset/ConfigServer/Samsung_Config_Server_Understanding_Problem_6A 2.51.05 PM.svg';
import UnderstandingProblem6B from '../Asset/ConfigServer/Samsung_Config_Server_Understanding_Problem_6B 2.51.05 PM.svg';
import UnderstandingProblem7 from '../Asset/ConfigServer/Samsung_Config_Server_Understanding_Problem_7 2.51.05 PM.svg';
import UnderstandingProblem8 from '../Asset/ConfigServer/Samsung_Config_Server_Understanding_Users_Stakeholders_1 2.51.05 PM.svg';

// Clarifications and Use Case Scenarios

import ClarificationsUseCase from '../Asset/ConfigServer/Samsung_Config_Server_Clarification_Use_Case_1 2.51.05 PM.svg';

// Defining MVP and Future Scopes
import DefiningMVP from '../Asset/ConfigServer/Samsung_Config_Server_Defining_MVP_1 2.51.05 PM.svg';

// Information Arthitect Exploration
import InformationArthitectExploration from '../Asset/ConfigServer/Config_Server_Infomation_architect_exploration.svg'

// Low Fidelity Wire frames and Information Architect Explorations
import LofiWireFrame1 from '../Asset/ConfigServer/Samsung_Config_Server_LoFi_Wire_Frame_1 2.51.05 PM.svg';
import LofiWireFrame2 from '../Asset/ConfigServer/Samsung_Config_Server_LoFi_Wire_Frame_2 2.51.05 PM.svg';
import LofiWireFrame3 from '../Asset/ConfigServer/Samsung_Config_Server_LoFi_Wire_Frame_3 2.51.05 PM.svg';
import LofiWireFrame4 from '../Asset/ConfigServer/Samsung_Config_Server_LoFi_Wire_Frame_4 2.51.05 PM.svg';
import LofiWireFrame5 from '../Asset/ConfigServer/Samsung_Config_Server_LoFi_Wire_Frame_5 2.51.05 PM.svg';
import LofiWireFrame6A from '../Asset/ConfigServer/Samsung_Config_Server_LoFi_Wire_Frame_6A 2.51.05 PM.svg';
import LofiWireFrame6B from '../Asset/ConfigServer/Samsung_Config_Server_LoFi_Wire_Frame_6B 2.51.05 PM.svg';
import LofiWireFrame7A from '../Asset/ConfigServer/Samsung_Config_Server_LoFi_Wire_Frame_7A 2.51.05 PM.svg';
import LofiWireFrame7B from '../Asset/ConfigServer/Samsung_Config_Server_LoFi_Wire_Frame_7B 2.51.05 PM.svg';
import LofiWireFrame8A from '../Asset/ConfigServer/Samsung_Config_Server_LoFi_Wire_Frame_8A 2.51.05 PM.svg';
import LofiWireFrame8B from '../Asset/ConfigServer/Samsung_Config_Server_LoFi_Wire_Frame_8B 2.51.05 PM.svg';
import LofiWireFrame9A from '../Asset/ConfigServer/Samsung_Config_Server_LoFi_Wire_Frame_9A 2.51.05 PM.svg';
import LofiWireFrame9B from '../Asset/ConfigServer/Samsung_Config_Server_LoFi_Wire_Frame_9B 2.51.05 PM.svg';
import LofiWireFrame9C from '../Asset/ConfigServer/Samsung_Config_Server_LoFi_Wire_Frame_9C 2.51.05 PM.svg';
import LofiWireFrame10A from '../Asset/ConfigServer/Samsung_Config_Server_LoFi_Wire_Frame_10A 2.51.05 PM.svg';
import LofiWireFrame10B from '../Asset/ConfigServer/Samsung_Config_Server_LoFi_Wire_Frame_10B 2.51.05 PM.svg';
import LofiWireFrame11 from '../Asset/ConfigServer/Group 79.svg';
import LofiWireFrame12 from '../Asset/ConfigServer/Samsung_Config_Server_LoFi_Wire_Frame_12 2.51.05 PM.svg';

// High Fidelity Mocks, User Test, Changes
import HifiMock1 from '../Asset/ConfigServer/Samsung_Config_Server_HiFi_Mocks_1 2.51.05 PM.svg';
import HifiMock2 from '../Asset/ConfigServer/Samsung_Config_Server_HiFi_Mocks_2 2.51.05 PM.svg';

// Final Hand Off
import FinalHandOff1 from '../Asset/ConfigServer/Samsung_Config_Server_Final_Hand_Off_1.svg';
import FinalHandOff2 from '../Asset/ConfigServer/Samsung_Config_Server_Final_Hand_Off_2.svg';

// Country Listing - Create New
import CountryListing1 from '../Asset/ConfigServer/Samsung_Config_Server_Final_Hand_Off_3 2.51.05 PM.svg';
import CountryListing2A from '../Asset/ConfigServer/Samsung_Config_Server_Final_Hand_Off_4A 2.51.05 PM.svg';
import CountryListing2B from '../Asset/ConfigServer/Samsung_Config_Server_Final_Hand_Off_4B 2.51.05 PM.svg';
import CountryListing3A from '../Asset/ConfigServer/Samsung_Config_Server_Final_Hand_Off_5A 2.51.05 PM.svg';
import CountryListing3B from '../Asset/ConfigServer/Samsung_Config_Server_Final_Hand_Off_5B 2.51.05 PM.svg';

// Custom Edit
import CustomEdit1A from '../Asset/ConfigServer/Samsung_Config_Server_Final_Hand_Off_Custom_Edit_6A 2.51.05 PM.svg';
import CustomEdit1B from '../Asset/ConfigServer/Samsung_Config_Server_Final_Hand_Off_Custom_Edit_6B 2.51.05 PM.svg';
import CustomEdit2A from '../Asset/ConfigServer/Samsung_Config_Server_Final_Hand_Off_Custom_Edit_7A 2.51.05 PM.svg';
import CustomEdit2B from '../Asset/ConfigServer/Samsung_Config_Server_Final_Hand_Off_Custom_Edit_7B 2.51.05 PM.svg';
import CustomEdit3A from '../Asset/ConfigServer/Samsung_Config_Server_Final_Hand_Off_Custom_Edit_8A 2.51.05 PM.svg';
import CustomEdit3B from '../Asset/ConfigServer/Samsung_Config_Server_Final_Hand_Off_Custom_Edit_8B 2.51.05 PM.svg';
import CustomEdit4A from '../Asset/ConfigServer/Samsung_Config_Server_Final_Hand_Off_Custom_Edit_9A 2.51.05 PM.svg';
import CustomEdit4B from '../Asset/ConfigServer/Samsung_Config_Server_Final_Hand_Off_Custom_Edit_9B 2.51.05 PM.svg';
import CustomEdit5A from '../Asset/ConfigServer/Samsung_Config_Server_Final_Hand_Off_Custom_Edit_10A 2.51.05 PM.svg';
import CustomEdit5B from '../Asset/ConfigServer/Samsung_Config_Server_Final_Hand_Off_Custom_Edit_10B 2.51.05 PM.svg';


// Batch Edit - By Country and Ad Type
import BatchEdit1A from '../Asset/ConfigServer/Samsung_Config_Server_Final_Hand_Off_Batch_Edit_1A 2.51.05 PM.svg';
import BatchEdit1B from '../Asset/ConfigServer/Samsung_Config_Server_Final_Hand_Off_Batch_Edit_11B 2.51.05 PM.svg';
import BatchEdit2A from '../Asset/ConfigServer/Samsung_Config_Server_Final_Hand_Off_Batch_Edit_12A 2.51.05 PM.svg';
import BatchEdit2B from '../Asset/ConfigServer/Samsung_Config_Server_Final_Hand_Off_Batch_Edit_12B 2.51.05 PM.svg';
import BatchEdit3A from '../Asset/ConfigServer/Samsung_Config_Server_Final_Hand_Off_Batch_Edit_13A 2.51.05 PM.svg';
import BatchEdit3B from '../Asset/ConfigServer/Samsung_Config_Server_Final_Hand_Off_Batch_Edit_13B 2.51.05 PM.svg';

// Single Edit
import SingleEdit1A from '../Asset/ConfigServer/Samsung_Config_Server_Final_Hand_Off_Single_Edit_14A 2.51.05 PM.svg';
import SingleEdit1B from '../Asset/ConfigServer/Samsung_Config_Server_Final_Hand_Off_Single_Edit_14B 2.51.05 PM.svg';
import SingleEdit2A from '../Asset/ConfigServer/Samsung_Config_Server_Final_Hand_Off_Single_Edit_15A 2.51.05 PM.svg';
import SingleEdit2B from '../Asset/ConfigServer/Samsung_Config_Server_Final_Hand_Off_Single_Edit_15B 2.51.05 PM.svg';
import SingleEdit3A from '../Asset/ConfigServer/Samsung_Config_Server_Final_Hand_Off_Single_Edit_16A.svg';
import SingleEdit3B from '../Asset/ConfigServer/Samsung_Config_Server_Final_Hand_Off_Single_Edit_16B 2.51.05 PM.svg';

//Batch Edit - B
import BatchEditB1A from '../Asset/ConfigServer/Samsung_Config_Server_Final_Hand_Off_Batch_Edit_B1A 2.51.05 PM.svg';
import BatchEditB1B from '../Asset/ConfigServer/Samsung_Config_Server_Final_Hand_Off_Batch_Edit_B1B 2.51.05 PM.svg';
import BatchEditB2A from '../Asset/ConfigServer/Samsung_Config_Server_Final_Hand_Off_Batch_Edit_B2A 2.51.05 PM.svg';
import BatchEditB2B from '../Asset/ConfigServer/Samsung_Config_Server_Final_Hand_Off_Batch_Edit_B2B 2.51.05 PM.svg';

// PSID Edit
import PSIDEdit1A from '../Asset/ConfigServer/Samsung_Config_Server_Final_Hand_Off_PSID_1A 2.51.05 PM.svg';
import PSIDEdit1B from '../Asset/ConfigServer/Samsung_Config_Server_Final_Hand_Off_PSID_1B 2.51.05 PM.svg';
import PSIDEdit2A from '../Asset/ConfigServer/Samsung_Config_Server_Final_Hand_Off_PSID_2A 2.51.05 PM.svg';
import PSIDEdit2B from '../Asset/ConfigServer/Samsung_Config_Server_Final_Hand_Off_PSID_2B 2.51.05 PM.svg';
import PSIDEdit3A from '../Asset/ConfigServer/Samsung_Config_Server_Final_Hand_Off_PSID_3A 2.51.05 PM.svg';
import PSIDEdit3B from '../Asset/ConfigServer/Samsung_Config_Server_Final_Hand_Off_PSID_3B 2.51.05 PM.svg';

// Results After Launch
import ResultAfterLaunch1 from '../Asset/ConfigServer/Samsung_Config_Server_Result_After_Launch_1.svg';
import ResultAfterLaunch2A from '../Asset/ConfigServer/Samsung_Config_Server_Result_After_Launch_2A.svg';
import ResultAfterLaunch2B from '../Asset/ConfigServer/Samsung_Config_Server_Result_After_Launch_2B.svg';

const sections = [
    { id: 'section1', label: 'Overview of Design Process', description: 'The overview of the design process for this project.' },
    { id: 'section2', label: 'Project Details', description: 'Project details summary received from the product manager outlining the requirements.' },
    { id: 'section3', label: 'Discovery', description: 'In order to understand the process and complexity, I scheduled several meetings with the back-end developer (sole user) and UX researcher to fully understand all the use cases and current user journey.' },
    { id: 'section4', label: 'Understanding Stakeholders & Users', description: 'In order to further understand how this configuration is being used, or the future scope of how it will be used, it is important to do a deep dive of current and future users.' },
    { id: 'section5', label: 'Use Case Scenarios', description: 'Due to the complexity and the number of combinations, it is essential to understand all use cases and possible combinations of configurations. These are some questions and clarifications the UX Researcher and I noted out.' },
    { id: 'section6', label: 'Defining MVP and Future Scopes', description: 'Since this feature is an essential function to the organization, in an agile approach there needs to be an MVP scope and a future scope to release the product that is aligned with the Product Manager and engineers.' },
    { id: 'section7', label: 'Information Architect Explorations', description: 'After understanding the current state along with their issues, the requirements, stakeholders and scope, I began to explore via low fidelity wireframes to try different combination of information architect, and different ways to present the information. This was done while in constant communication with the UX researcher and current user.' },
    { id: 'section8', label: 'Low Fidelity Explorations', description: 'These are the low fidelity sketches of the platform using various combinations of information architecture. They were reviewed and evaluated with Pros and Cons with fellow designers in the team.' },
    { id: 'section9', label: 'Tweaking Requirements for User Test', description: 'After reviewing the concept designs with stakeholders, some requirements were also tweaked before user test was conducted. As a result, edits were made before turning mocks into high fidelity.' },
    { id: 'section10', label: 'User Test Results', description: 'Overall the user test went relatively well with proven success on the core functionalities. Some adjustments are required on certain details based on user test results.' },
    { id: 'section11', label: 'Iteration and Final Hand Off', description: 'The designs were updated based on user test results, and final mockups and prototypes were handed off to the product manager and engineers.' },
    { id: 'section12', label: 'Results After Launch', description: 'Key Benefits and Business Success after launch' },
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

    useEffect(()=>{
        window.scrollTo(0, 0);
    },[])

    const checkIsSticky = (value) => {
        setIsStickyColumn(value)
    }

    return (
        <main className='config-server'>
            <div className='hero-section'>
                <h1 className='config-server__title'>Samsung Ads: Config Server</h1>
                <p className='config-server__description'>The objective of this project is to design and deliver a platform for backend developers to monitor, analyze and manage any number of TV models. The Configuration Server determines if a particular TV is enabled to show ads or not based on the critical information such as product type, country and model code.</p>
                <img src={MainImage} alt='finished product image' className='config-server__img'/>
                <div className='config-server__list'>
                    <p className='config-server__item'>Role: Product Designer II</p>
                    <p className='config-server__item'>Timeline: 12 weeks</p>
                    <p className='config-server__item'>Tools: Figma, Figjam</p>
                    <p className='config-server__item'>Platform: B2B SaaS on website</p>
                </div>
            </div>
            <div style={{display: 'flex'}}>
                <SideBar sections={sections} checkIsSticky={checkIsSticky} />
                <div style={isStickyColumn ? { width: '100%', marginLeft: '360px' } : { width: '100%', marginLeft: '15px' } }>
                    <Section id="section1">
                        <section style={{ width: '100%' }} className='config-server__section'>
                            <img className='config-server__design-process__img' src={DesignProcess} alt='Design Process Image'/>
                        </section>
                    </Section>
                    <Section id="section2">
                        <section style={{ width: '100%' }} className='config-server__section-start'>
                            <h1 className='config-server__questions__title'>Problem</h1>
                            <p className='config-server__questions__text'>Since there was no previous platform or UI to perform the intended tasks, the problem is that all changes were dependent on only one backend developer for all configuration changes. This task alone is very manual and takes hours to perform one change.</p>
                            <h1 className='config-server__questions__title'>What</h1>
                            <p className='config-server__questions__text'>A platform that allows users with permission to quickly view and modify ad configurations in production without requiring a production release. A platform to allow users (ie business, sales, product, engineering) to quickly understand ad configurations for different device groupings around the regions of the world and manage changes in real time.</p>
                            <h1 className='config-server__questions__title'>Who</h1>
                            <p className='config-server__questions__text'>All backend developers should be able to view and edit, and all users with granted permission should be able to view and export the data.</p>
                            <h1 className='config-server__questions__title'>How</h1>
                            <p className='config-server__questions__text'>Features that allow users to categorize and analyze data. Features that allow single and batch edits in multiple level and combinations to allow the most advance edits in TV configurations with a recorded history.</p>
                            <h1 className='config-server__questions__title'>Goals</h1>
                            <p className='config-server__questions__text'>To drastically reduce the turn-around time from days to minutes and reduces the chances of error in the requests for Configuration changes and the actual changes being made.</p>
                            <h1 className='config-server__questions__title'>Scope Constraints</h1>
                            <p className='config-server__questions__text'>• The requirements are ambiguous as there are no previous platforms to perform the intended actions</p>
                            <p className='config-server__questions__text'>• The request was to leverage as much existing components as possible without much flexibility</p>
                            <p className='config-server__questions__text'>• User testing was done only with 1 participant as there was only one sole user available for feedback</p>
                        </section>
                    </Section>
                    <Section id="section3">
                        <section className='config-server__section'>
                            <img src={UnderstandingProblem2} alt='current state image 2' className='config-server__research__img'/>
                            <img src={UnderstandingProblem3} alt='current state image 3' className='config-server__research__img'/>
                            <img src={UnderstandingProblem4} alt='current state image 4' className='config-server__research__img'/>
                            <div className='config-server__paired-image'>
                                <img src={UnderstandingProblem6A} alt='current state image 6a' className='config-server__paired-image__img'/>
                                <img src={UnderstandingProblem6B} alt='current state image 6b' className='config-server__paired-image__img'/>
                            </div>
                            <img src={UnderstandingProblem7} alt='current state image 7' className='config-server__research__img'/>
                        </section>
                    </Section>
                    <Section id="section4">
                        <section className='config-server__section'>
                            <img src={UnderstandingProblem8} alt='current state image 8' className='config-server__research__img'/>
                        </section>
                    </Section>
                    <Section id="section5">
                        <section className='config-server__section'>
                            <img src={ClarificationsUseCase} alt='current state image 9' className='config-server__research__img'/>
                        </section>
                    </Section>
                    <Section id="section6">
                        <section className='config-server__section'>
                            <img src={DefiningMVP} alt='current state image 9' className='config-server__research__img'/>
                        </section>
                    </Section>
                    <Section id="section7">
                        <section className='config-server__section-start'>
                            <p className='config-server__questions__text'>Different possible arrangement by the below 4 categories:</p>
                            <img src={InformationArthitectExploration} alt='info architect image 1' />
                        </section>
                    </Section>
                    <Section id="section8">
                        <section className='config-server__section-start'>
                            <div className='config-server__img-text-container'>
                                <div className='config-server__img-text-container__wrapper'>
                                    <img src={LofiWireFrame6A} alt='current state image 6a' className='config-server__img-text-container__wrapper__img margin'/>
                                    <img src={LofiWireFrame6B} alt='current state image 6a' className='config-server__img-text-container__wrapper__img'/>
                                </div>
                                <div className='config-server__img-text-container__wrapper'>
                                    <div className='config-server__img-text-container__wrapper__text margin margin padding'> 
                                        <h1 className='config-server__img-text-container__wrapper__title'>Pros</h1>
                                        <p className='config-server__questions__point-text'>• Summary shows the available ad types at a glance</p>
                                        <p className='config-server__questions__point-text'>• Dimension being model category and country on the side can reduce space required</p>
                                    </div>
                                    <div className='config-server__img-text-container__wrapper__text'>
                                        <h1 className='config-server__img-text-container__wrapper__title'>Cons</h1>
                                        <p className='config-server__questions__point-text'>• Can only show only one model category at once (Hi Medium or Low)</p>
                                        <p className='config-server__questions__point-text'>• Since we are only showing 2 dimensions, there may be repeats causing the list to be very long</p>
                                    </div>
                                </div>
                            </div>
                            <div className='config-server__section-divider' />
                            <div className='config-server__img-text-container'>
                                <div className='config-server__img-text-container__wrapper'>
                                    <img src={LofiWireFrame7A} alt='current state image 7a'  className='config-server__img-text-container__wrapper__img margin'/>
                                    <img src={LofiWireFrame7B} alt='current state image 7a' className='config-server__img-text-container__wrapper__img'/>
                                </div>
                                <div className='config-server__img-text-container__wrapper'>
                                    <div className='config-server__img-text-container__wrapper__text margin margin padding'> 
                                        <h1 className='config-server__img-text-container__wrapper__title'>Pros</h1>
                                        <p className='config-server__questions__point-text'>• You can freely arrange the Axis using the 3 main categories for a more customized display of data</p>
                                    </div>
                                    <div className='config-server__img-text-container__wrapper__text'>
                                        <h1 className='config-server__img-text-container__wrapper__title'>Cons</h1>
                                        <p className='config-server__questions__point-text'>• A lot of work needs to be done by the user every time</p>
                                        <p className='config-server__questions__point-text'>• If Country is in the X Axis, then the horizontal scroll is going to be very long</p>
                                    </div>
                                </div>
                            </div>
                            <div className='config-server__section-divider' />
                            <div className='config-server__img-text-container'>
                                <div className='config-server__img-text-container__wrapper'>
                                    <img src={LofiWireFrame8A} alt='current state image 8a' className='config-server__img-text-container__wrapper__img margin'/>
                                    <img src={LofiWireFrame8B} alt='current state image 8a' className='config-server__img-text-container__wrapper__img'/>
                                </div>
                                <div className='config-server__img-text-container__wrapper'>
                                    <div className='config-server__img-text-container__wrapper__text margin margin padding'> 
                                        <h1 className='config-server__img-text-container__wrapper__title'>Pros</h1>
                                        <p className='config-server__questions__point-text'>• You can have a comprehensive view of each individual country</p>
                                    </div>
                                    <div className='config-server__img-text-container__wrapper__text'>
                                        <h1 className='config-server__img-text-container__wrapper__title'>Cons</h1>
                                        <p className='config-server__questions__point-text'>• The country list can get very long, causing the horizontal scroll to be long</p>
                                        <p className='config-server__questions__point-text'>• The number of PSID can be in the thousands, so this will not be feasible</p>
                                        <p className='config-server__questions__point-text'>• Confirmed with developer that PSID cannot exist in the same UI as the models</p>
                                    </div>
                                </div>
                            </div>
                            <div className='config-server__section-divider' />
                            <div className='config-server__img-text-container'>
                                <div className='config-server__img-text-container__wrapper'>
                                    <img src={LofiWireFrame9A} alt='current state image 9a' className='config-server__img-text-container__wrapper__three-img margin'/>
                                    <img src={LofiWireFrame9B} alt='current state image 9b' className='config-server__img-text-container__wrapper__three-img margin'/>
                                    <img src={LofiWireFrame9C} alt='current state image 9c' className='config-server__img-text-container__wrapper__three-img'/>
                                </div>
                                <div className='config-server__img-text-container__wrapper'>
                                    <div className='config-server__img-text-container__wrapper__text margin margin padding'> 
                                        <h1 className='config-server__img-text-container__wrapper__title'>Pros</h1>
                                        <p className='config-server__questions__point-text'>• You can customize different levels arrangement</p>
                                        <p className='config-server__questions__point-text'>• The first level is the most precise since you can change it by tabs</p>
                                    </div>
                                    <div className='config-server__img-text-container__wrapper__text'>
                                        <h1 className='config-server__img-text-container__wrapper__title'>Cons</h1>
                                        <p className='config-server__questions__point-text'>• User has to configure it themselves form the start</p>
                                        <p className='config-server__questions__point-text'>• Different stakeholders may have different ways to customize, may cause confusions when in discussion with each other</p>
                                    </div>
                                </div>
                            </div>
                            <div className='config-server__section-divider' />
                            <div className='config-server__img-text-container'>
                                <div className='config-server__img-text-container__wrapper'>
                                    <img src={LofiWireFrame10A} alt='current state image 8a' className='config-server__img-text-container__wrapper__img margin'/>
                                    <img src={LofiWireFrame10B} alt='current state image 8a' className='config-server__img-text-container__wrapper__img'/>
                                </div>
                                <div className='config-server__img-text-container__wrapper'>
                                    <div className='config-server__img-text-container__wrapper__text margin margin padding'> 
                                        <h1 className='config-server__img-text-container__wrapper__title'>Pros</h1>
                                        <p className='config-server__questions__point-text'>• Only 2 dimensions showing at one time can reduce complexity</p>
                                        <p className='config-server__questions__point-text'>• Can see from a summary point of view how many models are turned ON</p>
                                    </div>
                                    <div className='config-server__img-text-container__wrapper__text'>
                                        <h1 className='config-server__img-text-container__wrapper__title'>Cons</h1>
                                        <p className='config-server__questions__point-text'>• After expanding, the list of models have become too long</p>
                                    </div>
                                </div>
                            </div>
                            <div className='config-server__section-divider' />
                            <p className='config-server__questions__text'>Other low fidelity explorations done at a glance:</p>
                            <img src={LofiWireFrame11} alt='Lo-Fi Review image 11' className='config-server__lo-fi__img'/>
                        </section>
                    </Section>
                    <Section id="section9">
                        <section className='config-server__section-start'>
                            <p className='config-server__questions__text'>After much conversations with the end user and product managers, we have narrowed down the list of “Must” requirements:</p>
                            <p className='config-server__questions__point-text'>• Show by country and ad types</p>
                            <p className='config-server__questions__point-text'>• PSID needs to be on a separate page/UI since they are completely different from TV Models</p>
                            <p className='config-server__questions__point-text'>• On and Off models need to be shown separately due to “Special Models”. If there are 100 models, if 50 are ON, does not mean 50 are off</p>
                            <p className='config-server__questions__point-text'>• There needs to be a “Change Reason” to be logged in a history log</p>
                            <p className='config-server__questions__point-text'>• Users need to be able to download the data in a CSV format</p>
                            <p className='config-server__questions__point-text'>• There needs to be a view for users with permission to edit, and one to just view</p>
                        </section>
                    </Section>
                    <Section id="section10">
                        <section style={{ width: '100%' }} className='config-server__section-start'>
                            <img src={HifiMock1} alt='Hi-Fi Review image 1' className='config-server__lo-fi__img'/>
                            <img src={HifiMock2} alt='Hi-Fi Review image 2' className='config-server__lo-fi__img'/>
                            <h1 className='config-server__questions__title'>Needs Some Attention</h1>
                            <p className='config-server__questions__point-text'>• Summary Chart not as useful all the time, depending on the user’s needs</p>
                            <p className='config-server__questions__point-text'>• The On and Off switch was not as noticeable on the table as user wasn’t sure if they were looking at On or Off</p>
                            <p className='config-server__questions__point-text'>• Missing functionality for choosing a country group (customizing it)</p>
                            <h1 className='config-server__questions__title'>Successful</h1>
                            <p className='config-server__questions__point-text'>• Custom Edit was a success, no usability issues</p>
                            <p className='config-server__questions__point-text'>• User find the step to step instruction to be clear</p>
                            <p className='config-server__questions__point-text'>• The review before confirm is essential</p>
                            <p className='config-server__questions__point-text'>• Custom Edit and Normal Edit covers all use cases</p>
                        </section>
                    </Section>
                    <Section id="section11">
                        <section style={{ width: '100%' }} className='config-server__section-start'>
                            <p className='config-server__final__text-bold'>Final Dashboard</p>
                            <p className='config-server__questions__point-text'>• The summary chart and Model Availability table are separated by accordions, allowing users to easily collapse the summary when not needed</p>
                            <p className='config-server__questions__point-text'>• New Country Group Listing is introduced</p>
                            <p className='config-server__questions__point-text'>• Added “On” or “Off” in the table itself to remind users what status they are looking at for affordability</p>
                            <img src={FinalHandOff1} alt='Final handoff image 1' className='config-server__lo-fi__img'/>
                            <div className='config-server__section-divider' />
                            <p className='config-server__final__text-bold'>Final Edit Functions:</p>
                            <p className='config-server__questions__point-text'>• Custom Edit allows configuration of any combination between model, country and ad types. This only allows edits to be made on the model status</p>
                            <p className='config-server__questions__point-text'>• Normal edit by Country + Ad Type allows selection of models, but can edit any combination of model status, real time ad status, blank server URL and Ad Server URL</p>
                            <img src={FinalHandOff2} alt='Final handoff image 2' className='config-server__lo-fi__img'/>
                            <div className='config-server__section-divider' />
                            <p className='config-server__final__text-bold'>Create and View Custom Country Listing Function::</p>
                            <p className='config-server__questions__point-text'>• Users are able to select common country groupings by regions</p>
                            <p className='config-server__questions__point-text'>• Users can also create their own country groupings to allow easy batch edits</p>
                            <img src={CountryListing1} alt='country listing image 1' className='config-server__lo-fi__img'/>
                            <div className='config-server__paired-image'>
                                <img src={CountryListing2A} alt='country listing image 2a' className='config-server__paired-image__img'/>
                                <img src={CountryListing2B} alt='country listing image 2b' className='config-server__paired-image__img'/>
                            </div>
                            <div className='config-server__paired-image'>
                                <img src={CountryListing3A} alt='country listing image 2a' className='config-server__paired-image__img'/>
                                <img src={CountryListing3B} alt='country listing image 2b' className='config-server__paired-image__img'/>
                            </div>
                            <div className='config-server__section-divider' />
                            <p className='config-server__final__text-bold'>Custom Edit Function:</p>
                            <p className='config-server__questions__point-text'>• When the use case involves more complex configuration, “Custom Edit” becomes an essential feature</p>
                            <p className='config-server__questions__point-text'>• In “Custom Edit”, you can decide which exact groupings of models, countries and ad type to select</p>
                            <p className='config-server__questions__point-text'>• These selections are always requested by HQ to be performed precisely</p>
                            <p className='config-server__questions__point-text'>• Once the user has made the selections and entered the “Change Reason”, it goes into a review state where the user is then able to complete the edits</p>
                            <div className='config-server__paired-image'>
                                <img src={CustomEdit1A} alt='custom edit image 1a' className='config-server__paired-image__img'/>
                                <img src={CustomEdit1B} alt='custom edit image 1b' className='config-server__paired-image__img'/>
                            </div>
                            <div className='config-server__paired-image'>
                                <img src={CustomEdit2A} alt='custom edit image 2a' className='config-server__paired-image__img'/>
                                <img src={CustomEdit2B} alt='custom edit image 2b' className='config-server__paired-image__img'/>
                            </div>
                            <div className='config-server__paired-image'>
                                <img src={CustomEdit3A} alt='custom edit image 3a' className='config-server__paired-image__img'/>
                                <img src={CustomEdit3B} alt='custom edit image 3b' className='config-server__paired-image__img'/>
                            </div>
                            <div className='config-server__paired-image'>
                                <img src={CustomEdit4A} alt='custom edit image 4a' className='config-server__paired-image__img'/>
                                <img src={CustomEdit4B} alt='custom edit image 4b' className='config-server__paired-image__img'/>
                            </div>
                            <div className='config-server__paired-image'>
                                <img src={CustomEdit5A} alt='custom edit image 5a' className='config-server__paired-image__img'/>
                                <img src={CustomEdit5B} alt='custom edit image 5b' className='config-server__paired-image__img'/>
                            </div>
                            <div className='config-server__section-divider' />
                            <p className='config-server__final__text-bold'>Batch Edit Function - By Country and Ad Type:</p>
                            <p className='config-server__questions__point-text'>• Users are able to perform filter on the Model Availability before selecting multiple or all line items</p>
                            <p className='config-server__questions__point-text'>• Since they are on the “Model On” status, batch editing them will turn them off, and user need to input a “Change Reason”</p>
                            <div className='config-server__paired-image'>
                                <img src={BatchEdit1A} alt='custom edit image 1a' className='config-server__paired-image__img'/>
                                <img src={BatchEdit1B} alt='custom edit image 1b' className='config-server__paired-image__img'/>
                            </div>
                            <div className='config-server__paired-image'>
                                <img src={BatchEdit2A} alt='custom edit image 2a' className='config-server__paired-image__img'/>
                                <img src={BatchEdit2B} alt='custom edit image 2b' className='config-server__paired-image__img'/>
                            </div>
                            <div className='config-server__paired-image'>
                                <img src={BatchEdit3A} alt='custom edit image 3a' className='config-server__paired-image__img'/>
                                <img src={BatchEdit3B} alt='custom edit image 3b' className='config-server__paired-image__img'/>
                            </div>
                            <div className='config-server__section-divider' />
                            <p className='config-server__final__text-bold'>Single Edit - By A country’s Ad Type</p>
                            <p className='config-server__questions__point-text'>• Users can go into a particular country’s ad type, and make batch or single edits to the Ad Server URL, Blank Server Url, Model Status or Real Time Ad Status</p>
                            <p className='config-server__questions__point-text'>• Once a status has been chosen to be edited, the line item is selected where you can choose to edit the other status or URL</p>
                            <p className='config-server__questions__point-text'>• Once all the edits have been made, user will need to review before committing to the change</p>
                            <div className='config-server__paired-image'>
                                <img src={SingleEdit1A} alt='single edit image 1a' className='config-server__paired-image__img'/>
                                <img src={SingleEdit1B} alt='single edit image 1b' className='config-server__paired-image__img'/>
                            </div>
                            <div className='config-server__paired-image'>
                                <img src={SingleEdit2A} alt='single edit image 2a' className='config-server__paired-image__img'/>
                                <img src={SingleEdit2B} alt='single edit image 2b' className='config-server__paired-image__img'/>
                            </div>
                            <div className='config-server__paired-image'>
                                <img src={SingleEdit3A} alt='single edit image 3a' className='config-server__paired-image__img'/>
                                <img src={SingleEdit3B} alt='signle edit image 3b' className='config-server__paired-image__img'/>
                            </div>
                            <div className='config-server__section-divider' />
                            <div style={{padding: '20px 0'}}>
                                <p className='config-server__final__text-bold'>Batch Edit - By A country’s Ad Type</p>
                                <p className='config-server__questions__point-text'>• Users can go into a particular country’s ad type, and make batch edit to a status or URL</p>
                            </div>
                            <div className='config-server__paired-image'>
                                <img src={BatchEditB1A} alt='batch edit image 1a' className='config-server__paired-image__img'/>
                                <img src={BatchEditB1B} alt='batch edit image 1b' className='config-server__paired-image__img'/>
                            </div>
                            <div className='config-server__paired-image'>
                                <img src={BatchEditB2A} alt='batch edit image 2a' className='config-server__paired-image__img'/>
                                <img src={BatchEditB2B} alt='batch edit image 2b' className='config-server__paired-image__img'/>
                            </div>
                            <div className='config-server__section-divider' />
                            <p className='config-server__final__text-bold'>PSID Edit</p>
                            <p className='config-server__questions__point-text'>• Since PSID is a completely different entity than a Model, they require separate UI</p>
                            <p className='config-server__questions__point-text'>• For PSID the categorizations are simpler, ther fore it involves less complex steps to edit</p>
                            <p className='config-server__questions__point-text'>• You can edit a single PSID, or batch edit multiple PSIDs at once</p>
                            <div className='config-server__paired-image'>
                                <img src={PSIDEdit1A} alt='PSID edit image 1a' className='config-server__paired-image__img'/>
                                <img src={PSIDEdit1B} alt='PSID edit image 1b' className='config-server__paired-image__img'/>
                            </div>
                            <div className='config-server__paired-image'>
                                <img src={PSIDEdit2A} alt='PSID edit image 2a' className='config-server__paired-image__img'/>
                                <img src={PSIDEdit2B} alt='PSID edit image 2b' className='config-server__paired-image__img'/>
                            </div>
                            <div className='config-server__paired-image'>
                                <img src={PSIDEdit3A} alt='PSID edit image 3a' className='config-server__paired-image__img'/>
                                <img src={PSIDEdit3B} alt='PSID edit image 3b' className='config-server__paired-image__img'/>
                            </div>
                        </section>
                    </Section>
                    <Section id="section12">
                        <section style={{ width: '100%' }} className='config-server__section-end'>
                            <p className='config-server__final__text-bold'>Key benefits</p>
                            <p className='config-server__questions__point-text'>• Provides users (ie business, sales, product, engineering) a convenient UI to quickly understand ad configurations for different device groupings around the regions of the world.</p>
                            <p className='config-server__questions__point-text'>• Allows users with the proper credentials to manage changes in real time. It drastically reduces the turn-around time from days to minutes and reduces the chances of error in the requests for Configuration changes and the actual changes being made.</p>
                            <p className='config-server__questions__point-text'>• Allows users with permission to quickly modify ad configurations in production without requiring a production release.</p>
                            <p className='config-server__questions__point-text'>• Allows multiple teams (ad ops, ad client, back end) teams to move quicker and will save a large amount of time dedicated to requests and verifying.</p>
                            <p className='config-server__questions__point-text'>• A wide array of dashboards and monitoring systems have also been proactively added.</p>
                            <div style={{paddingTop: '15px'}} >
                                <p className='config-server__final__text-bold'>What TV Traffic Volume Configuration Server is handling?</p>
                                <p className='config-server__questions__text'>Samsung TVs around the global are making average 1 million requests every minute, average 1.4 billion requests every day, to the Configuration Server. The current latency is about 2ms per request.</p>
                            </div>
                            <p className='config-server__final__text-bold'>Results</p>
                            <p className='config-server__questions__point-text'>• reduced Blank Impressions occurance by 30%</p>
                            <p className='config-server__questions__point-text'>• New RTAC logic delivers 15% more impressions</p>
                            <div className='config-server__paired-image'>
                                <img src={ResultAfterLaunch2A} alt='result image 3a' className='config-server__paired-image__img'/>
                                <img src={ResultAfterLaunch2B} alt='result image 3b' className='config-server__paired-image__img'/>
                            </div>
                            <img src={ResultAfterLaunch1} alt='result launch 1' className='config-server__result__img'/>
                        </section>
                    </Section>
                </div>
            </div>
        </main>
    )
}