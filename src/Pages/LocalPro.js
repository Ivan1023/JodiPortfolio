import { useEffect, useState } from 'react';
import '../Pages/PageCSS/LocalPro.scss';
import SideBar from '../Components/SideBar';
import ResponsiveContainer from '../Components/ResponsiveContainer';
import { Modal } from '../Components/Modal';

//images
import MainImage from '../Asset/LocalPro/Main Image 2a 1.svg'
import DesignProcess from '../Asset/LocalPro/OverviewDesign.svg'
import DesignSprint1 from '../Asset/LocalPro/DesignSprint1AB.svg'
import DesignSprint2 from '../Asset/LocalPro/DesignSprint2.svg'
import DesignSprint3 from '../Asset/LocalPro/DesignSprint3.svg'
import CompetitiveBenchmarking1 from '../Asset/LocalPro/CompetitiveBenchmarking1.svg'
import CompetitiveBenchmarking2 from '../Asset/LocalPro/CompetitiveBenchmarking2.svg'
import CompetitiveBenchmarking3 from '../Asset/LocalPro/CompetitiveBenchmarking3.svg'
import CompetitiveBenchmarking4 from '../Asset/LocalPro/CompetitiveBenchmarking4.svg'
import IdeationDotVotingEmail from '../Asset/LocalPro/IdeationDotVotingEmail.svg'
import IdeationDotVotingNotification from '../Asset/LocalPro/IdeationDotVotingNotification.svg'
import IdeationDotVotingInvitePage from '../Asset/LocalPro/IdeationDotVotingInvitePage.svg'
import IdeationDotVotingGettingHourlyRate from '../Asset/LocalPro/IdeationDotVotingGettingHourlyRate.svg'
import IdeationDotVotingGettingHours from '../Asset/LocalPro/IdeationDotVotingGettingHours.svg'
import IdeationDotVotingGST from '../Asset/LocalPro/IdeationDotVotingGST.svg'
import IdeationDotVotingDirectDeposit from '../Asset/LocalPro/IdeationDotVotingDirectDeposit.svg'
import IdeationDotVotingProfilePic from '../Asset/LocalPro/IdeationDotVotingProfilePic.svg'
import IdeationDotVotingProfileSetting from '../Asset/LocalPro/IdeationDotVotingProfileSetting.svg'
import IdeationDotVotingProfileSettingTransact from '../Asset/LocalPro/IdeationDotVotingProfileSettingTransact.svg'
import IdeationDotVotingGoals from '../Asset/LocalPro/IdeationDotVotingGoals.svg'
import IterationWireframe1A from '../Asset/LocalPro/IterationWireframe1A.svg'
import IterationWireframe1B from '../Asset/LocalPro/IterationWireframe1B.svg'
import IterationWireframe1C from '../Asset/LocalPro/IterationWireframe1C.svg'
import IterationWireframe2A from '../Asset/LocalPro/IterationWireframe2A.svg'
import IterationWireframe2B from '../Asset/LocalPro/IterationWireframe2B.svg'
import IterationWireframe2C from '../Asset/LocalPro/IterationWireframe2C.svg'
import IterationWireframe3 from '../Asset/LocalPro/IterationWireframe3.svg'
import UserTestResults1 from '../Asset/LocalPro/UserTestResults1.svg'
import UserTestResults2 from '../Asset/LocalPro/UserTestResults2.svg'
import UserTestResults3 from '../Asset/LocalPro/UserTestResults3.svg'
import UserTestResults4 from '../Asset/LocalPro/UserTestResults4.svg'
import UserTestResults5 from '../Asset/LocalPro/UserTestResults5.svg'
import UserTestResults6 from '../Asset/LocalPro/UserTestResults6.svg'
import UserTestResults7 from '../Asset/LocalPro/UserTestResults7.svg'

//GIFS
import Final1 from '../Asset/LocalPro/GIFS/LPT2 final.gif'
import Final2 from '../Asset/LocalPro/GIFS/LPT2 Final2.gif'

const sections = [
    { id: 'section1', label: 'Overview of Design Process', description: 'The overview of the design process for this project.' },
    { id: 'section2', label: 'Design Sprint', description: 'Prepared and facilitated a Design sprint held for 2 days involving all stakeholders.' },
    { id: 'section3', label: 'Competitive Benchmarking', description: 'Observing other competitors and highlighting key features.' },
    { id: 'section4', label: 'Ideation Sketches and Dot Voting', description: 'Rough sketches were presented to kickstart discussions and concept explorations.' },
    { id: 'section5', label: 'Iteration', description: 'Iterations were done after taking the results from the Design Sprint dot voting to further finalize design direction.' },
    { id: 'section6', label: 'User Test Results', description: 'Moderated user test was conducted with real contractors' },
    { id: 'section7', label: 'Final Solution', description: 'Showcasing the prototype of the final solution released on the mobile app.' },
    { id: 'section8', label: 'Reflection and Results', description: 'What I learned to improve my design process and outcome.' },
  ];


const Section = ({ id, children }) => {
    return (
        <div id={id} style={{ display: 'flex', justifyContent: 'center', marginBottom: '30px' }}>
        {children}
        </div>
    );
};

export default function LocalPro() {
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


    return(
        <main className='local-pro'>
            <div className='hero-section'>
                <h1 className='local-pro__title'>The Home Depot: Local Pro App</h1>
                <p className='local-pro__description'>The Local Pro app connects contractors with Home Depot to receive job referrals from local customers. As part of this, the Local Pro Transact initiative was launched to facilitate job connections with a fixed market rate. This project has four phases:</p>
                <div className='local-pro__container'>
                    <p className='local-pro__description'><span className='local-pro__description__bold'>1. Account Creation: </span>Contractors sign up to become a "Local Pro" in the app.</p>
                    <p className='local-pro__description'><span className='local-pro__description__bold'>2. Invitation:</span> Eligible contractors are invited to enroll in the "Direct Jobs" benefit.</p>
                    <p className='local-pro__description'><span className='local-pro__description__bold'>3. Using:</span>Contractors can receive new jobs, manage their schedules, communicate with customers, and get paid through the app.</p>
                    <p className='local-pro__description'><span className='local-pro__description__bold'>4. .ca Experience:</span>Consumers can add "Local Pro Service" to their cart along with Home Depot products.</p>
                </div>
                <p className='local-pro__description margin-bottom'>This case study focuses on Phase 2, the Invitation experience, which invites eligible contractors to join the "Direct Jobs" program.</p>
                <img src={MainImage} alt='finished product image' className='local-pro__hero-img'/>
                <div className='local-pro__list'>
                    <p className='local-pro__item'>Role: Product Designer II</p>
                    <p className='local-pro__item'>Timeline: 12 weeks</p>
                    <p className='local-pro__item'>Tools: Figma, Figjam</p>
                    <p className='local-pro__item'>Platform: B2B SaaS on website</p>
                </div>
                <div className='local-pro__section-content'>
                    <section className='local-pro__section'>
                        <p style={{ marginTop: '40px' }} className='local-pro__section-title'>Problem</p>
                        <p style={{paddingRight: '40px'}} className='local-pro__content__text'>• Promote the new “Direct Job” features and entice Pros to join</p>
                        <p style={{paddingRight: '40px'}} className='local-pro__content__text'>• The enrollment has to be very simple to go through, and the benefits needs to be easily scannable and understood</p>
                        <p style={{paddingRight: '40px'}} className='local-pro__content__text'>• Business requirements need a way to get Pros to agree to disclose their payment range and average hours depending on the specific job</p>
                    </section>
                    <section className='local-pro__section'>
                        <p style={{ marginTop: '40px' }} className='local-pro__section-title'>Solution</p>
                        <p className='local-pro__content__text'>• An invitation that provides value proposition and introduction to Direct Jobs</p>
                        <p className='local-pro__content__text'>• The form captures all necessary information to kickstart “Direct Job”</p>
                    </section>                    
                </div>
            </div>
            <div style={{display: 'flex'}}>
                <SideBar sections={sections} checkIsSticky={checkIsSticky} />
                <ResponsiveContainer isStickyColumn={isStickyColumn}>
                    <Section id="section1">
                        <section className='local-pro__section-center'>
                            <img src={DesignProcess} alt='Design Process Image'/>
                        </section>
                    </Section>
                    <Section id="section2">
                        <section className='local-pro__section'>
                            <p style={{ marginTop: '40px' }} className='local-pro__section-title'>Design Sprint</p>
                            <h1 style={{ margin: '0' }} className='local-pro__content__title'>Overall Information</h1>
                            <p className='local-pro__content__text'>Preparation and Facilitator: Me</p>
                            <p className='local-pro__content__text'>Participants (stakeholders): Engineers, Product manager, Business Analyst, Legal, UX Researcher, UX Designers, Copy writer</p>
                            <p className='local-pro__content__text'>Duration: 2 days</p>
                            <h1 className='local-pro__content__title'>Content</h1>
                            <p className='local-pro__content__text'>1. Opportunity</p>
                            <p className='local-pro__content__text'>2. Overall ask</p>
                            <p className='local-pro__content__text'>3. What is and is not in scope</p>
                            <p className='local-pro__content__text'>4. Competitor analysis</p>
                            <p className='local-pro__content__text'>5. How might we questions</p>
                            <p className='local-pro__content__text'>6. Participant sketches + voting round</p>
                            <img src={DesignSprint1} alt='ideation image 5' className='local-pro__content__img margin-top' onClick={() => openModal(DesignSprint1)} />
                            <img src={DesignSprint2} alt='ideation image 5' className='local-pro__content__img' onClick={() => openModal(DesignSprint2)} />
                            <img src={DesignSprint3} alt='ideation image 5' className='local-pro__content__img' onClick={() => openModal(DesignSprint3)} />
                        </section>
                    </Section>
                    <Section id="section3">
                        <section className='local-pro__section'>
                            <p style={{ marginTop: '40px' }} className='local-pro__section-title'>Competitive Benchmarking Summary</p>
                            <p className='local-pro__content__text'>With the limitations of not having an actual business number or business insurance number, I tried to research on the invitation/enrollment stage of competitor apps as best I could. I reviewed both the customer facing and contractor facing experience to get the most thorough details, up until a business number or payment was required.</p>
                            <img src={CompetitiveBenchmarking1} alt='ideation image 5' className='local-pro__content__img margin-top' onClick={() => openModal(CompetitiveBenchmarking1)} />
                            <img src={CompetitiveBenchmarking2} alt='ideation image 5' className='local-pro__content__img' onClick={() => openModal(CompetitiveBenchmarking2)} />
                            <img src={CompetitiveBenchmarking3} alt='ideation image 5' className='local-pro__content__img' onClick={() => openModal(CompetitiveBenchmarking3)} />
                            <img src={CompetitiveBenchmarking4} alt='ideation image 5' className='local-pro__content__img' onClick={() => openModal(CompetitiveBenchmarking4)} />
                        </section>
                    </Section>
                    <Section id="section4">
                        <section className='local-pro__section'>
                            <p style={{ marginTop: '40px' }} className='local-pro__section-title'>Ideation Sketches &amp; Dot Voting</p>
                            <h1 style={{ margin: '0' }} className='local-pro__content__title'>This exercise sketches should consist the experience to:</h1>
                            <p className='local-pro__content__text'>1. Introduce the benefits of Local Pro Transact</p>
                            <p className='local-pro__content__text'>2. Capture Banking Information</p>
                            <p className='local-pro__content__text'>3. Capture the Local Pro’s Services</p>
                            <p className='local-pro__content__text'>4. Capture a profile picture</p>
                            <p className='local-pro__content__text'>5. A survey that asks for what the user’s honest opinion of their occupation’s market rate (with a capped range)</p>
                            <h1 className='local-pro__content__title'>Dot Voting Results:</h1>
                            <p className='local-pro__content__text'>After the dot voting ended, I arranged all the sketches in terms of requirements, and looked at areas that received votes. By organizing this way, the UX team can holistically look at all the needed steps with areas of opportunity and concerns.)</p>
                            <div className='local-pro__img-text-container__wrapper'>
                                <img src={IdeationDotVotingEmail} alt='ideation image 3' className='local-pro__img-text-container__wrapper__img' onClick={() => openModal(IdeationDotVotingEmail)}/>
                                <img src={IdeationDotVotingNotification} alt='ideation image 4' className='local-pro__img-text-container__wrapper__img'onClick={() => openModal(IdeationDotVotingNotification)}/>
                                <img src={IdeationDotVotingInvitePage} alt='ideation image 4' className='local-pro__img-text-container__wrapper__img'onClick={() => openModal(IdeationDotVotingInvitePage)}/>
                                <img src={IdeationDotVotingGettingHourlyRate} alt='ideation image 4' className='local-pro__img-text-container__wrapper__img'onClick={() => openModal(IdeationDotVotingGettingHourlyRate)}/>
                                <img src={IdeationDotVotingGettingHours} alt='ideation image 4' className='local-pro__img-text-container__wrapper__img'onClick={() => openModal(IdeationDotVotingGettingHours)}/>
                            </div>
                            <div className='local-pro__img-text-container__wrapper'>
                                <img src={IdeationDotVotingGST} alt='ideation image 4' className='local-pro__img-text-container__wrapper__img'onClick={() => openModal(IdeationDotVotingGST)}/>
                                <img src={IdeationDotVotingDirectDeposit} alt='ideation image 4' className='local-pro__img-text-container__wrapper__img'onClick={() => openModal(IdeationDotVotingDirectDeposit)}/>
                                <img src={IdeationDotVotingProfilePic} alt='ideation image 4' className='local-pro__img-text-container__wrapper__img'onClick={() => openModal(IdeationDotVotingProfilePic)}/>
                                <img src={IdeationDotVotingProfileSetting} alt='ideation image 4' className='local-pro__img-text-container__wrapper__img'onClick={() => openModal(IdeationDotVotingProfileSetting)}/>
                                <img src={IdeationDotVotingProfileSettingTransact} alt='ideation image 4' className='local-pro__img-text-container__wrapper__img'onClick={() => openModal(IdeationDotVotingProfileSettingTransact)}/>
                            </div>
                            <img src={IdeationDotVotingGoals} alt='ideation image 5' className='local-pro__content__img' onClick={() => openModal(IdeationDotVotingGoals)} />
                        </section>
                    </Section>
                    <Section id="section5">
                        <section className='local-pro__section'>
                            <p style={{ marginTop: '40px' }} className='local-pro__section-title'>Iteration - Translating Sprint Findings to Wireframes</p>
                            <h1 style={{ margin: '0' }} className='local-pro__content__title'>Wireframing</h1>
                            <p className='local-pro__content__text'>These wireframes are taken in front of stakeholders and reviewed. Notes were gathered as the UX team continued to work with these wireframes to turn into a prototype for moderated usability testing.</p>
                            <div className='local-pro__img-text-container__wrapper'>
                                <img src={IterationWireframe1A} alt='ideation image 3' className='local-pro__img-text-container__wrapper__img' onClick={() => openModal(IterationWireframe1A)} />
                                <img src={IterationWireframe1B} alt='ideation image 4' className='local-pro__img-text-container__wrapper__img' onClick={() => openModal(IterationWireframe1B)} />
                                <img src={IterationWireframe1C} alt='ideation image 4' className='local-pro__img-text-container__wrapper__img' onClick={() => openModal(IterationWireframe1C)} />
                            </div>
                            <div className='local-pro__img-text-container__wrapper'>
                                <img src={IterationWireframe2A} alt='ideation image 4' className='local-pro__img-text-container__wrapper__img' onClick={() => openModal(IterationWireframe2A)} />
                                <img src={IterationWireframe2B} alt='ideation image 4' className='local-pro__img-text-container__wrapper__img' onClick={() => openModal(IterationWireframe2B)} />
                                <img src={IterationWireframe2C} alt='ideation image 4' className='local-pro__img-text-container__wrapper__img' onClick={() => openModal(IterationWireframe2C)} />
                            </div>
                            <h1 className='local-pro__content__title'>Concerns and Challenges:</h1>
                            <p className='local-pro__content__text'>The biggest concern was how to display the survey to ask users what they believe their occupation’s average market rate is, and what they believe certain services durations are with a capped range as per business requirement. </p>
                            <h1 className='local-pro__content__title'>Version 1</h1>
                            <p className='local-pro__content__text'>• Hides the capped range until the user makes the conscious effort to make enough clicks</p>
                            <p className='local-pro__content__text'>• However a lot of clicks will be needed to enter their answer if it is farther away from the default mid range.</p>
                            <h1 className='local-pro__content__title'>Version 2</h1>
                            <p className='local-pro__content__text'>• No matter what the input is, it will only require one slide</p>
                            <p className='local-pro__content__text'>• Downside is that we will be presenting the minimum and maximum range right in the beginning</p>
                            <p className='local-pro__content__text'>• Depending on how large the capped range is, the slider may also become very sensitive to slide</p>
                            <h1 className='local-pro__content__title'>Decision and Justification</h1>
                            <p className='local-pro__content__text'>• Stakeholders and UX team decided to go with Version 1 using the stepper instead of slider since we won’t show the entire range, and every dollar increase/decrease is a click so user will put more thoughts (though user can also select the input box and enter an amount).</p>
                            <img src={IterationWireframe3} alt='ideation image 5' className='local-pro__content__img margin-top' onClick={() => openModal(IterationWireframe3)} />
                        </section>
                    </Section>
                    <Section id="section6">
                        <section className='local-pro__section'>
                            <p style={{ marginTop: '40px' }} className='local-pro__section-title'>User Test</p>
                            <p className='local-pro__content__text'>A prototype was created for a moderated usability test for this project. An email was sent to a list of Local Pros signed up with Home Depot with a 4 or above star ratings. Each participant was in a 1 hour session with the UX researcher, with the UX team sitting in on the background as the test went on.</p>
                            <h1 className='local-pro__content__title'>Test Objectives</h1>
                            <p className='local-pro__content__text'>• Findability on locating the new feature</p>
                            <p className='local-pro__content__text'>• Usability on completing the form</p>
                            <p className='local-pro__content__text'>• Understanding all the questions requiring an input</p>
                            <h1 className='local-pro__content__title'>Test Results Summary</h1>
                            <ul style={{ margin: '0' }}>
                                <li style={{ margin: '0' }} className='local-pro__content__point-text'>Overall no major issues on the findability or usability</li>
                                <li className='local-pro__content__point-text'>A lot of <span className='local-pro__content__text-bold'>concerns over how the app will charge VS the reality</span> of a contractor job</li>
                                <ul>
                                    <li className='local-pro__content__point-text'>A good number of contractors we tested do not charge per hour</li>
                                    <li className='local-pro__content__point-text'>A lot of variable changes how a job should charge, but the app does not take that in consideration</li>
                                    <li className='local-pro__content__point-text'>Suggestion on setting one price with updates VS hourly (this is to be considered for the next phase)</li>
                                </ul>
                            </ul>
                            <img src={UserTestResults7} alt='ideation image 5' className='local-pro__content__img' onClick={() => openModal(UserTestResults7)} />
                        </section>
                    </Section>
                    <Section id="section7">
                        <section className='local-pro__section'>
                            <p style={{ marginTop: '40px' }} className='local-pro__section-title'>Final Solution</p>
                            <h1 style={{ margin: '0' }} className='local-pro__content__title'>Mocks and Prototype Hand Off</h1>
                            <p className='local-pro__content__text'>Taking all the insights from the moderated usability tests, the UX team went back to tweak the designs before handing off to the developers.</p>
                            <p className='local-pro__content__text'>A visual of the final prototype:</p>
                            <div className='local-pro__img-text-container__wrapper'>
                                <img src={Final1} alt='ideation image 4' className='local-pro__img-text-container__wrapper__img margin-right' onClick={() => openModal(Final1)}/>
                                <img src={Final2} alt='ideation image 4' className='local-pro__img-text-container__wrapper__img' onClick={() => openModal(Final2)}/>
                            </div>
                        </section>
                    </Section>
                    <Section id="section8">
                        <section className='local-pro__section margin-page-end'>
                            <p style={{ marginTop: '40px' }} className='local-pro__section-title'>Reflection &amp; Results</p>
                            <h1 style={{ margin: '0' }}className='local-pro__content__title'>What could have went better and what I learned</h1>
                            <p className='local-pro__content__text'>• it would have been more beneficial to recruit the targeted personas amongst the entire pool of Local Pros, especially when it comes to their expectations for this new benefit (focus on a few occupations)</p>
                            <p className='local-pro__content__text'>• I learned a lot about helping set context in a moderated usability test and the testing script, because it matters a lot when we are trying to extract useful insights from the target audience through their tone, words and thoughts. When the context is set properly, insights become clearer.</p>
                            <h1 className='local-pro__content__title'>KPIs</h1>
                            <div style={{ width: '100%' }} className='config-server__section-container'>
                                <section className='config-server__section-container__center'>
                                    <p className='config-server__section-container__center__title'>4 stars</p>
                                    <p className='config-server__section-container__center__sub-title'>Improvement Rating</p>
                                    <p className='config-server__section-container__center__text'>From 2.8 to 4 stars on Google Play Store</p>
                                </section>
                                <section className='config-server__section-container__center'>
                                    <p className='config-server__section-container__center__title'>200+</p>
                                    <p className='config-server__section-container__center__sub-title'>Sign Ups from Local Pros</p>
                                    <p className='config-server__section-container__center__text'>Within the first month of release</p>
                                </section>
                            </div>
                            <h1 className='local-pro__content__title'>Next Step</h1>
                            <p className='local-pro__content__text'>• Due to the heavy concerns of how the app will charge depending on the jobs, suggestions will be taken to consideration before the next phase of the app (how Direct Job will actually operate) begins</p>
                            <p className='local-pro__content__text'>• Re mapping the business strategy</p>
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