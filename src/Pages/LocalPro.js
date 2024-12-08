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
import DesignSprint3B from '../Asset/LocalPro/DesignSprint3B.svg'
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
    { id: 'section2', label: 'Project Details', description: 'Project details outlining the problem and scope constraints.' },
    { id: 'section3', label: 'Design Sprint', description: 'Prepared and facilitated a Design sprint held for 2 days involving all stakeholders.' },
    { id: 'section4', label: 'Competitive Benchmarking', description: 'Observing other competitors and highlighting key features.' },
    { id: 'section5', label: 'Ideation Sketches and Dot Voting', description: 'Rough sketches were presented to kickstart discussions and concept explorations.' },
    { id: 'section6', label: 'Iteration', description: 'Iterations were done after taking the results from the Design Sprint dot voting to further finalize design direction.' },
    { id: 'section7', label: 'User Test Results', description: 'Moderated user test was conducted with real contractors' },
    { id: 'section8', label: 'Final Solution', description: 'Showcasing the prototype of the final solution released on the mobile app.' },
    { id: 'section9', label: 'Reflection and Results', description: 'What I learned to improve my design process and outcome.' },
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
        setModalState({ isOpen: true, imageUrl });
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
                            <h1 className='local-pro__content__title'>What</h1>
                            <p className='local-pro__content__text'>An invitation to eligible Local Pros (contractors that signed up with home depot for getting referral jobs) for the new benefit called “Direct Job” (once called “Priority Local Pro”).</p>
                            <h1 className='local-pro__content__title'>Who</h1>
                            <p className='local-pro__content__text'>All eligible Local Pros that have above 4 stars rating with Home Depot.</p>
                            <h1 className='local-pro__content__title'>How</h1>
                            <p className='local-pro__content__text'>Introducing what “Local Pro Transact” is, and enticing these Local Pros to enroll through a form.</p>
                            <h1 className='local-pro__content__title'>Goals</h1>
                            <p className='local-pro__content__text'>The goal is to provide an enticing value proposition to these Local Pros in an easy to understand manner that will lead them to enroll in Local Pro Transact (Priority Local Pro). The enrollment has to be very simple to go through, and the benefits needs to be easily scannable and understood.</p>
                        </section>
                    </Section>
                    <Section id="section3">
                        <section className='local-pro__section'>
                            <h1 className='local-pro__content__title'>Sprint Information</h1>
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
                    <Section id="section4">
                        <section className='local-pro__section'>
                            <p className='local-pro__content__text'>With the limitations of not having an actual business number or business insurance number, I tried to research on the invitation/enrollment stage of competitor apps as best I could. I reviewed both the customer facing and contractor facing experience to get the most thorough details, up until a business number or payment was required.</p>
                            <img src={CompetitiveBenchmarking1} alt='ideation image 5' className='local-pro__content__img margin-top' onClick={() => openModal(CompetitiveBenchmarking1)} />
                            <img src={CompetitiveBenchmarking2} alt='ideation image 5' className='local-pro__content__img' onClick={() => openModal(CompetitiveBenchmarking2)} />
                            <img src={CompetitiveBenchmarking3} alt='ideation image 5' className='local-pro__content__img' onClick={() => openModal(CompetitiveBenchmarking3)} />
                            <img src={CompetitiveBenchmarking4} alt='ideation image 5' className='local-pro__content__img' onClick={() => openModal(CompetitiveBenchmarking4)} />
                        </section>
                    </Section>
                    <Section id="section5">
                        <section className='local-pro__section'>
                            <h1 className='local-pro__content__title'>This exercise sketches should consist the experience to:</h1>
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
                    <Section id="section6">
                        <section className='local-pro__section'>
                            <h1 className='local-pro__content__title'>Wireframing</h1>
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
                    <Section id="section7">
                        <section className='local-pro__section'>
                            <h1 className='local-pro__content__title'>Moderated Usability Test</h1>
                            <p className='local-pro__content__text'>A prototype was created for a moderated usability test for this project. An email was sent to a list of Local Pros signed up with Home Depot with a 4 or above star ratings. Each participant was in a 1 hour session with the UX researcher, with the UX team sitting in on the background as the test went on.</p>
                            <img src={UserTestResults1} alt='ideation image 5' className='local-pro__content__img' onClick={() => openModal(UserTestResults1)} />
                            <img src={UserTestResults2} alt='ideation image 5' className='local-pro__content__img' onClick={() => openModal(UserTestResults2)} />
                            <img src={UserTestResults3} alt='ideation image 5' className='local-pro__content__img' onClick={() => openModal(UserTestResults3)} />
                            <img src={UserTestResults4} alt='ideation image 5' className='local-pro__content__img' onClick={() => openModal(UserTestResults4)} />
                            <img src={UserTestResults5} alt='ideation image 5' className='local-pro__content__img' onClick={() => openModal(UserTestResults5)} />
                            <img src={UserTestResults6} alt='ideation image 5' className='local-pro__content__img' onClick={() => openModal(UserTestResults6)} />
                            <img src={UserTestResults7} alt='ideation image 5' className='local-pro__content__img' onClick={() => openModal(UserTestResults7)} />
                        </section>
                    </Section>
                    <Section id="section8">
                        <section className='local-pro__section'>
                            <h1 className='local-pro__content__title'>Final Hand Off</h1>
                            <p className='local-pro__content__text'>Taking all the insights from the moderated usability tests, the UX team went back to tweak the designs before handing off to the developers.</p>
                            <p className='local-pro__content__text'>A visual of the final prototype:</p>
                            <div className='local-pro__img-text-container__wrapper'>
                                <img src={Final1} alt='ideation image 4' className='local-pro__img-text-container__wrapper__img margin-right'/>
                                <img src={Final2} alt='ideation image 4' className='local-pro__img-text-container__wrapper__img'/>
                            </div>
                        </section>
                    </Section>
                    <Section id="section9">
                        <section className='local-pro__section margin-page-end'>
                            <h1 className='local-pro__content__title'>What could have went better and what I learned</h1>
                            <p className='local-pro__content__text'>• it would have been more beneficial to recruit the targeted personas amongst the entire pool of Local Pros, especially when it comes to their expectations for this new benefit (focus on a few occupations)</p>
                            <p className='local-pro__content__text'>• I learned a lot about helping set context in a moderated usability test and the testing script, because it matters a lot when we are trying to extract useful insights from the target audience through their tone, words and thoughts. When the context is set properly, insights become clearer.</p>
                            <h1 className='local-pro__content__title'>Business Impact after launch</h1>
                            <p className='local-pro__content__text'>• Improved the app rating on Google Play Store from 2.8 to 4 stars</p>
                            <p className='local-pro__content__text'>• Recruited a 500+ local contractors to join the Local Pro Direct Job initiative within the first 6 months</p>
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