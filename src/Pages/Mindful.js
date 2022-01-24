import { useState, useEffect } from 'react';
// import { Link } from "react-router-dom";
import '../Pages/PageCSS/Mindful.scss';

//images
// import Final5 from '../Asset/Mindful/Final 5 1.png';
import Final5 from '../Asset/Mindful/Final 5 1.svg';
import DesignProcess from '../Asset/Mindful/DesignProcess.png';
import Hypothesis from '../Asset/Mindful/hypothesis 1.svg';
import ReseachGoal from '../Asset/Mindful/Goal 1.svg';
import IntervieweeCriteria  from '../Asset/Mindful/Find 1.svg';
import Hassle  from '../Asset/Mindful/hassle 1 1.svg';
import Laziness  from '../Asset/Mindful/lazy 1.svg';
// import Confusion  from '../Asset/Mindful/confuse 1.svg';
import Confusion  from '../Asset/Mindful/confuse.png';
import LackOfInitiative  from '../Asset/Mindful/lack 1.svg';
import NotIntuitive  from '../Asset/Mindful/not intuitive 1.svg';
import LackKnowledge  from '../Asset/Mindful/lack knowledge 1.svg';
import Persona  from '../Asset/Mindful/12.svg';
import JourneyMap  from '../Asset/Mindful/13.svg';
import PrimaryTask  from '../Asset/Mindful/Primary Task 1.svg';
import SecondTask  from '../Asset/Mindful/Second Task 1.svg';
import MockUp1  from '../Asset/Mindful/Crazy 8 1.svg';
import MockUp2  from '../Asset/Mindful/chosen sketches 1.svg';
import Challenge1  from '../Asset/Mindful/a1.png';
import Challenge2  from '../Asset/Mindful/a2.png';
import Challenge3  from '../Asset/Mindful/a3.png';
import Challenge4  from '../Asset/Mindful/a4.png';
import Visual1  from '../Asset/Mindful/visual 1 2.svg';
import Visual2  from '../Asset/Mindful/visual 2 2.svg';
import WordBubble  from '../Asset/Mindful/words 2.svg';
import ColorPalette  from '../Asset/Mindful/colour 2.svg';
// import WordMark  from '../Asset/Mindful/wordmark 1.png';
// import ChosenLogo  from '../Asset/Mindful/chosen 1.png';
// import AppLogo  from '../Asset/Mindful/app 1.png';
import WordMark  from '../Asset/Mindful/logo 1.svg';
import ChosenLogo  from '../Asset/Mindful/chosen 2.svg';
import AppLogo  from '../Asset/Mindful/app 2.svg';

//GIFs
import Verson1 from '../Asset/Mindful/GIFS/Version 1.gif';
import Verson2 from '../Asset/Mindful/GIFS/Version 2.gif';
import Verson3 from '../Asset/Mindful/GIFS/Version 3.gif';
import Verson4 from '../Asset/Mindful/GIFS/Version 4.gif';
import MindfulAnimation1 from '../Asset/Mindful/GIFS/Mindful Animation 1.gif';
import MindfulAnimation2 from '../Asset/Mindful/GIFS/Mindful Animation 2.gif';
import MindfulAnimation3 from '../Asset/Mindful/GIFS/Mindful Animation 3.gif';
import MindfulAnimation4 from '../Asset/Mindful/GIFS/Mindful Animation 4.gif';

export default function Mindful (){    

    useEffect(()=>{
        window.scrollTo(0, 0);
    },[])


    return (
        <main className='mindful'>
            <h1 className='mindful__title'>Case Study: Mindful App</h1>
            <p className='mindful__description'>A mobile app that enables busy young professionals to easily understand, access and utilize their work place benefits.</p>
            <img src={Final5} alt='finished app image' className='mindful__img'/>
            <div className='mindful__list'>
                <p className='mindful__list__item'>Role: UX Designer</p>
                <p className='mindful__list__item'>Timeline: 10 Weeks</p>
                <p className='mindful__list__item'>Tools: Sketch, POP, InVision, Principle</p>
                <p className='mindful__list__item'>Design Platform: Android</p>
            </div>
            <section className='mindful__design-process'>
                <h1 className='mindful__design-process__title'>Overview of Design Process</h1>
                <img className='mindful__design-process__img' src={DesignProcess} alt='Design Process Image'/>
            </section>
            <section className='mindful__problem-space'>
                <h1 className='mindful__problem-space__title'>Overview of Design Process</h1>
                <p className='mindful__problem-space__text'>Workplace benefits are underused due to confusion, forgetfulness and lack of initiative.</p>
                <p className='mindful__problem-space__text'>Study shows that employee’s knowledge of the health benefits offered at work has dropped to 24% in 2017 [1]. Also, over 50% of employees say they cannot access their benefits in their preferred way [2]. The confusion and lack of support for accessing and using workplace benefits has led to low usage.</p>
                <p className='mindful__problem-space__question'>How might we help young adults reduce the complexity of understanding, using and tracking their workplace benefits?</p>
            </section>
            <section className='mindful__project-overview'>
                <h1 className='mindful__project-overview__title'>Project Overview</h1>
                <article className='mindful__project-overview__list'>
                    <p className='mindful__project-overview__list__text-bold'>Target Audience:</p>
                    <p className='mindful__project-overview__list__text'>Young adults (age 18 - 35) who are most likely receiving workplace benefits for the first time</p>
                </article>
                <article className='mindful__project-overview__list'>
                    <p className='mindful__project-overview__list__text-bold'>Key Stakeholders:</p>
                    <p className='mindful__project-overview__list__text'>Benefit companies, Work companies, practitioners, employees who co-pay for their benefits</p>
                </article>
                <article className='mindful__project-overview__list'>
                    <p className='mindful__project-overview__list__text-bold'>Required Tools and Resources:</p>
                    <p className='mindful__project-overview__list__text'>Benefit plans; company information, practitioner information, suggested routine check ups/medications</p>
                </article>
                <article className='mindful__project-overview__list'>
                    <p className='mindful__project-overview__list__text-bold'>Technical Constraints:</p>
                    <p className='mindful__project-overview__list__text-init'>1. Development of showing usage of benefits from their benefit plans in real time</p>
                    <p className='mindful__project-overview__list__text'>2. Development of linking user’s benefits plan details to digital solution</p>
                </article>
                <article className='mindful__project-overview__list'>
                    <p className='mindful__project-overview__list__text-bold'>Business Constraints:</p>
                    <p className='mindful__project-overview__list__text'>1. Practitioner’s willingness to participate in the solution as a recommended registered practitioner</p>
                </article>
            </section>
            <section className='mindful__project-goal'>
                <h1 className='mindful__project-goal__title'>Project Goals</h1>
                <p className='mindful__project-goal__text'>Provide an easy way for users to link their workplace benefits to their healthcare.</p>
                <p className='mindful__project-goal__text'>Create a convenient and intuitive app experience for users to improve workplace benefits usage.</p>
                <p className='mindful__project-goal__text'>To improve the awareness and experience of young adults towards their health benefits by reducing the complexity of using and tracking them.</p>
            </section>
            <section className='mindful__research-insight'>
                <h1 className='mindful__research-insight__title'>Key Research Insights</h1>
                <p className='mindful__research-insight__text'>To better understand the pain points and opportunities of this problem space, a user interview was conducted with 5 people. </p>
                <p className='mindful__research-insight__text'>All 5 interviews were conducted in person to analyze their real time emotion, body language and tone of voice while answering the questions to get the most accurate findings.</p>
                <div className='mindful__research-insight__insight-container'>
                    <article className='mindful__research-insight__box'>
                        <img src={Hypothesis} alt='thinking bubble image' />
                        <p className='mindful__research-insight__box__title'>Hypothesis</p>
                        <p className='mindful__research-insight__box__text'>Users do not have the time or interest to look through their entire booklet.</p>
                        <p className='mindful__research-insight__box__text'>Users will only try to understand their coverage when they need to use it.</p>
                        <p className='mindful__research-insight__box__text'>Confusion decreases usage.</p>
                    </article>
                    <article className='mindful__research-insight__box'>
                        <img src={ReseachGoal} alt='target with arrow image' />
                        <p className='mindful__research-insight__box__title'>Research Goals</p>
                        <p className='mindful__research-insight__box__text'>Understand the knowledge level of benefits</p>
                        <p className='mindful__research-insight__box__text'>How young adults learn and claim benefits</p>
                        <p className='mindful__research-insight__box__text'>Pain points for young adults to use their benefit</p>
                    </article>
                    <article className='mindful__research-insight__box'>
                        <img src={IntervieweeCriteria} alt='magnifying glass image' />
                        <p className='mindful__research-insight__box__title'>Interviewee Criteria</p>
                        <p className='mindful__research-insight__box__text'>Age 18 - 35</p>
                        <p className='mindful__research-insight__box__text'>Workplace offers a benefit package</p>
                        <p className='mindful__research-insight__box__text'>Need to have used their benefits at least once</p>
                    </article>
                </div>
                <h1 className='mindful__research-insight__title'>User Interview Findings</h1>
                <div className='mindful__research-insight__finding-container'>
                    <article className='mindful__research-insight__box'>
                        <img src={Hassle} alt='hassle image' className='mindful__research-insight__box__img'/>
                        <p className='mindful__research-insight__box__title'>Hassle</p>
                        <p className='mindful__research-insight__box__text'>Users will avoid claims that are a hassle to understand and submit.</p>
                    </article>
                    <article className='mindful__research-insight__box'>
                        <img src={Laziness} alt='Laziness image' className='mindful__research-insight__box__img'/>
                        <p className='mindful__research-insight__box__title'>Laziness</p>
                        <p className='mindful__research-insight__box__text'>Users under-utilize their workplace benefits due to laziness and lack of time.</p>
                    </article>
                    <article className='mindful__research-insight__box'>
                        <img src={Confusion} alt='Confusion image' className='mindful__research-insight__box__img-confusion'/>
                        <p className='mindful__research-insight__box__title'>Confusion</p>
                        <p className='mindful__research-insight__box__text'>Claiming process for extensive coverage is often confusing on existing platform.</p>
                    </article>
                    <article className='mindful__research-insight__box'>
                        <img src={LackOfInitiative} alt='Lack Of Initiative image' className='mindful__research-insight__box__img'/>
                        <p className='mindful__research-insight__box__title'>Lack of Initiative</p>
                        <p className='mindful__research-insight__box__text'>Young adults usually will only try to understand their benefits when it is needed.</p>
                    </article>
                    <article className='mindful__research-insight__box'>
                        <img src={NotIntuitive} alt='Not Intuitive image' className='mindful__research-insight__box__img'/>
                        <p className='mindful__research-insight__box__title'>Not Intuitive</p>
                        <p className='mindful__research-insight__box__text'>Existing access of information is not intuitive, especially for checking usage.</p>
                    </article>
                    <article className='mindful__research-insight__box'>
                        <img src={LackKnowledge} alt='Lack Knowledge image' className='mindful__research-insight__box__img'/>
                        <p className='mindful__research-insight__box__title'>Lack of Timely Knowledge</p>
                        <p className='mindful__research-insight__box__text'>Users lack the timely knowledge of what and when they should be using their benefits for.</p>
                    </article>
                </div>
                <h1 className='mindful__research-insight__title'>Key Realization</h1>
                <p className='mindful__research-insight__text'>Instead of trying to improve the introduction of benefits and how the user is educated about their benefits plan on their first day of work, users are more attracted to a simplified process of checking benefits details.</p>
                <p className='mindful__research-insight__text'>Why? Because interview findings show that users will only check their benefits when they need it. There is no use in educating them about the entire benefits plan if they don’t need it yet.</p>
                <p className='mindful__research-insight__text'>Linking eligible benefits with available health care services will make it more enticing for users. </p>
                <p className='mindful__research-insight__text'>Why? Because my interview findings show that users don’t realize what they can do with their benefits. When those steps are already done and all the user has to do it book the appointment, they are more likely to action on it.</p>
            </section>
            <section className='mindful__persona'>
                <h1 className='mindful__persona__title'>Persona</h1>
                <p className='mindful__persona__text'>Gathering the key insights from user interviews, I created a persona. Amanda is going to represent my target demographic, and all of my design decisions will be based on this persona’s goals, motivations, frustrations and pain points.</p>
                <img src={Persona} alt='persona image' className='mindful__persona__img'/>
                <h1 className='mindful__persona__title'>User Journey Map - Current State</h1>
                <img src={JourneyMap} alt='Journey map image' className='mindful__persona__img'/>
            </section>
            <section className='mindful__user-story'>
                <h1 className='mindful__user-story__title'>User Story Selection</h1>
                <p className='mindful__user-story__title-bold'>As a young adult user, I want to link my personalized health care suggestions to benefits that I’m eligible to claim for, so that it is more convenient and enticing for me to use my benefits.</p>
                <p className='mindful__user-story__text'>As the key realization after user interviews, users just want to know what they need instead of being educated about the entirety of their benefits. By sending out suggestions that the user can and should claim, I will also be subtlety teaching them of the benefits that they can use, therefore eliminating this step of the user having to find out what they can do for a shorter and easier process.</p>
                <h1 className='mindful__user-story__title'>Task Flows</h1>
                <img src={PrimaryTask} alt='task flow image' className='mindful__user-story__img'/>
                <p className='mindful__user-story__title-bold'>Primary: Checking Seasonal Dental Suggestions </p>
                <p className='mindful__user-story__text'>WHY: because by flushing out the task flow of a user receiving a suggested service and checking the coverage will help paint the narrative of how this solution will work and the simplicity of this function can entice and increase benefits usage.</p>
                <img src={SecondTask} alt='task flow 2 image' className='mindful__user-story__img'/>
                <p className='mindful__user-story__title-bold'>Secondary: Book Appointments From Suggestion </p>
                <p className='mindful__user-story__text'>WHY: By introducing a booking feature right after the user checks a service’s eligibility, this allows the user to action on the benefit right away without having to do it on another time or platform, therefore reducing bounce rate.</p>
            </section>
            <section className='mindful__mock-up'>
                <h1 className='mindful__mock-up__title'>Mid Fidelity Mock Up</h1>
                <p className='mindful__mock-up__text'>After doing research and gathering inspirations from existing UI elements, I sketched out a series of exploratory sketches for the primary and secondary task flows. Below are some of the sketches in relation to the inspirations:</p>
                <img src={MockUp1} alt='first mock up image' className='mindful__mock-up__img'/>
                <p className='mindful__mock-up__text'>The exploratory sketches were turned into a paper prototypes using POP. These were shown to 3 users to gather feedback to see which screens were most well received in relation to its functions.</p>
                <img src={MockUp2} alt='second mock up image' className='mindful__mock-up__img'/>
            </section>
            <section className='mindful__user-testing'>
                <h1 className='mindful__user-testing__title'>User Testing</h1>
                <p className='mindful__user-testing__text'>A round of user testing for 5 people were conducted for every version of the mi-fidelity prototypes. </p>
                <p className='mindful__user-testing__text'>The tester will be given the background of the app, as well as persona. They will be tasked to go through the primary and secondary tasks. These questions were asked to get a better understanding of their emotions and thought process during the test: </p>
                <p className='mindful__user-testing__text'>Imagine you are looking for suggestions for you, where would you click?</p>
                <p className='mindful__user-testing__text'>What do you expect to see when you click “My Suggestion”?</p>
                <p className='mindful__user-testing__text'>Tell me how you will go about changing your suggestion preference?</p>
                <p className='mindful__user-testing__text'>Imagine if you need to add another reason to your visit, how would you add?</p>
                <p className='mindful__user-testing__text'>Where do you get your benefits ID information to process a benefit claim?</p>
                <p className='mindful__user-testing__text'>If you need to edit your appointment date or time, where would you go?</p>
            </section>
            <section className='mindful__iterations'>
                <h1 className='mindful__iterations__title'>Iterations</h1>
                <p className='mindful__iterations__text'>After each round of testings, I documented all the pros, cons and confusion areas of the prototype before I went back to the drawing board to reiterate a new version. This process repeated from Version 1 to Version 4.</p>
                <p className='mindful__iterations__text-bold'>Version 1 User Testing Conclusion</p>
                <div className='mindful__iterations__container'>
                    <img src={Verson1} alt='gif of user testing 1' className='mindful__iterations__img'/>
                    <div className='mindful__iterations__container__sub'>
                        <p className='mindful__iterations__text-bold'>Overall What Worked:</p>
                        <p className='mindful__iterations__text'>• Insurance information right at the home page</p>
                        <p className='mindful__iterations__text'>• Usage details were helpful</p>
                        <p className='mindful__iterations__text'>• The family doctor being placed on top is convenient</p>
                        <p className='mindful__iterations__text'>• All user were able to complete the main tasks</p>
                        <p className='mindful__iterations__text-bold'>Improvement Opportunities for Version 2:</p>
                        <p className='mindful__iterations__text'>• Cut down number of buttons on home page</p>
                        <p className='mindful__iterations__text'>• Flu shot is free, change it to another service</p>
                        <p className='mindful__iterations__text'>• Change wording on “Suggestion” button to indicate they are for the user</p>
                        <p className='mindful__iterations__text'>• Cut down on the text on the details page</p>
                        <p className='mindful__iterations__text'>• Change the usage presentation to show balance</p>
                        <p className='mindful__iterations__text'>• Change the wording on “Good Job” as it sounds weird to say to adults</p>
                    </div>
                </div>
                <p className='mindful__iterations__text-bold'>Version 2 User Testing Conclusion</p>
                <div className='mindful__iterations__container'>
                    <img src={Verson2} alt='gif of user testing 2' className='mindful__iterations__img'/>
                    <div className='mindful__iterations__container__sub'>
                        <p className='mindful__iterations__text-bold'>Overall What Worked:</p>
                        <p className='mindful__iterations__text'>• Landing home page details are nice with the benefits informatione</p>
                        <p className='mindful__iterations__text'>• “80% covered” on top at the teeth cleaning details page is helpful</p>
                        <p className='mindful__iterations__text'>• Donut graph of remaining dental balance</p>
                        <p className='mindful__iterations__text'>• All users were able to go through tasks easily, and think the process is very straightforward</p>
                        <p className='mindful__iterations__text-bold'>Improvement Opportunities for Version 3:</p>
                        <p className='mindful__iterations__text'>• Cut down number of buttons on home page</p>
                        <p className='mindful__iterations__text'>• Cut down on text on teeth cleaning details page</p>
                        <p className='mindful__iterations__text'>• Emphasize on “Last Appointment Date”</p>
                        <p className='mindful__iterations__text'>• Change the term “Family Dentist”</p>
                        <p className='mindful__iterations__text'>• Change the edit button on suggestion preference and on the appointment reason</p>
                        <p className='mindful__iterations__text'>• Clarify that users can show home page as their insurance information to clinics to process claims</p>
                    </div>
                </div>
                <p className='mindful__iterations__text-bold'>Version 3 User Testing Conclusion</p>
                <div className='mindful__iterations__container'>
                    <img src={Verson3} alt='gif of user testing 3' className='mindful__iterations__img'/>
                    <div className='mindful__iterations__container__sub'>        
                        <p className='mindful__iterations__text-bold'>Overall What Worked:</p>
                        <p className='mindful__iterations__text'>• Home page with less CTA buttons</p>
                        <p className='mindful__iterations__text'>• “Suggestions For Me” functions matches users expectations</p>
                        <p className='mindful__iterations__text'>• The reminder for teeth cleaning is helpful</p>
                        <p className='mindful__iterations__text'>• The coverage and usage details</p>
                        <p className='mindful__iterations__text'>• Overall process for both tasks are straightforward</p>
                        <p className='mindful__iterations__text-bold'>Improvement Opportunities for Version 4:</p>
                        <p className='mindful__iterations__text'>• Add CTA to view upcoming suggestions or history when there is no new suggestions</p>
                        <p className='mindful__iterations__text'>• Remove the “80% covered” after the first time</p>
                        <p className='mindful__iterations__text'>• For clinic suggestion, add a map or a + button in case user wants to filter or add practitioner</p>
                        <p className='mindful__iterations__text'>• Move the edit/add reason to earlier</p>
                        <p className='mindful__iterations__text'>• Make sure prototype adheres to the android system guidelines of material design and 8pt grid</p>
                    </div>
                </div>
                <p className='mindful__iterations__text-bold'>Version 4 User Testing Conclusion</p>
                <div className='mindful__iterations__container'>
                    <img src={Verson4} alt='gif of user testing 4' className='mindful__iterations__img'/>
                    <div className='mindful__iterations__container__sub'>        
                        <p className='mindful__iterations__text-bold'>Version 4 Changes:</p>
                        <p className='mindful__iterations__text'>• Hamburger menu now only lives on home page</p>
                        <p className='mindful__iterations__text'>• adjusted back and exit buttons appropriately</p>
                        <p className='mindful__iterations__text'>• Added a button to view past claims on empty suggestion states</p>
                        <p className='mindful__iterations__text'>• Cut the “80% covered” message after 1st time</p>
                        <p className='mindful__iterations__text'>• Center aligned components for consistency</p>
                        <p className='mindful__iterations__text'>• Changed the clinic selection element to a card design that users can expand to view details</p>
                        <p className='mindful__iterations__text'>• Added a page for users to pick appointment details right after selecting a clinic</p>
                        <p className='mindful__iterations__text'>• Changed the “edit appointment reason” from a bottom right circle button to plain text so it can be easily viewed by users</p>
                    </div>
                </div>
            </section>
            <section className='mindful__challenges'>
                <h1 className='mindful__challenges__title'>Challenges</h1>
                <p className='mindful__challenges__text'>The challenge I encounter was when 2 users will find one area confusing, while 2 users find it clear and the last user did not have an opinion. At that point, I revisited what made the element confusing to the 2 users and why the other 2 users thought it was clear. From that point, I had to make a decision as the designer to choose one path to move on.</p>
                <p className='mindful__challenges__text'>This challenge was encountered on the component in the “Suggestions For Me” page where it informs users that the suggestions are based on their preferences and claim history.</p>
                <div className='mindful__challenges__container'>
                    <div className='mindful__challenges__container__box'>
                        <img src={Challenge1} alt='text message 1 image' className='mindful__challenges__img'/>
                        <p className='mindful__challenges__text-bold'>Version 1</p>
                        <p className='mindful__challenges__text'>From the user testings on Version 1, 2/5 users found the edit button to be confusing, while 3/5 users did not. I decided to keep the design as is.</p>
                    </div>
                    <div className='mindful__challenges__container__box'>
                        <img src={Challenge2} alt='text message 2 image' className='mindful__challenges__img'/>
                        <p className='mindful__challenges__text-bold'>Version 2</p>
                        <p className='mindful__challenges__text'>On V2 user testing rounds, again 3 users found the edit button to be confusing while 2 users did not. I decided to change the wording on the message and get rid of the edit button for V3.</p>
                    </div>
                    <div className='mindful__challenges__container__box'>
                        <img src={Challenge3} alt='text message 3 image' className='mindful__challenges__img'/>
                        <p className='mindful__challenges__text-bold'>Version 3</p>
                        <p className='mindful__challenges__text'>For V3 user testing rounds, all the users were able to understand the functionality of this message, and understand where to change preference.</p>
                    </div>
                    <div className='mindful__challenges__container__box'>
                        <img src={Challenge4} alt='text message 4 image' className='mindful__challenges__img'/>
                        <p className='mindful__challenges__text-bold'>Version 4</p>
                        <p className='mindful__challenges__text'>Only line spacing was changed on this version for better visibility.</p>
                    </div>
                </div>
            </section>
            <section className='mindful__visual-identity'> 
                <h1 className='mindful__visual-identity__title'>Visual Identity</h1>
                <p className='mindful__visual-identity__text'>A list was created to help create a visual identity for this app experiene, which I used to brainstorm words that will convey the brand’s meaning.</p>
                <div className='mindful__visual-identity__container'>
                    <img src={Visual1} alt='visual 1' className='mindful__visual-identity__img-group'/>
                    <img src={Visual2} alt='visual 2' className='mindful__visual-identity__img-group'/>
                </div>
                <img src={WordBubble} alt='word bubble image' className='mindful__visual-identity__img'/>
                <p className='mindful__visual-identity__text-bold'>Chosen App Name: Mindful</p>
                <p className='mindful__visual-identity__text'>Why? Because this app helps young adults to be mindful of what they have as workplace benefits, and be mindful of taking care of their wellbeing.</p>
                <p className='mindful__visual-identity__text'>I also think the word “Mindful” is very simple and easily understandable. I believe it conveys my app very well in terms of functionality as well as branding.</p>
            </section>
            <section className='mindful__colour-palette'>
                <h1 className='mindful__colour-palette__title'>Colour Palette</h1>
                <p className='mindful__colour-palette__text'>I begin from collecting images that convey the feeling I want my app to convey. From the images collected in the mood board, I then extracted and injected the various colours into the mid-fidelity home screen for a better visualization before deciding on the colour palette for Mindful.</p>
                <p className='mindful__colour-palette__text'>The colours were chosen with also accessibility guidelines (AODA and WCAG) in mind.</p>
                <img src={ColorPalette} alt='color palette image' className='mindful__colour-palette__img'/>
            </section>
            <section className='mindful__wordmark'>
                <h1 className='mindful__wordmark__title'>Wordmark and Logo</h1>
                <p className='mindful__wordmark__text'>Now that I have decided on the application name, I continued to explore the different font types, styles, size and weight.</p>
                <p className='mindful__wordmark__text'>I have decided that I want to have a softer look for the wordmark, hence I chose to go with the font “Quicksand” as the primary font. It has rounded edges that gives a soft feeling, but still remains very easy to read.</p>
                <img src={WordMark} alt='word mark image' className='mindful__wordmark__img'/>
                <img src={ChosenLogo} alt='word mark image' className='mindful__wordmark__img' />
                <img src={AppLogo} alt='word mark image' className='mindful__wordmark__img' />
            </section>
            <section className='mindful__typography'>
                <h1 className='mindful__typography__title'>Typography Font Pairing</h1>
                <p className='mindful__typography__text-bold'>Quicksand SemiBold as the Header Font</p>
                <p className='mindful__typography__text'>This font was chosen as the font used for the logo design. I want my app to have a soft, comfortable and simple feeling, hence why I went with a font that has soft rounded edges. Quicksand is also easy to read, conveying a simple and easy feeling.</p>
                <p className='mindful__typography__text-bold'>Open Sans Light as the body font</p>
                <p className='mindful__typography__text'>After pairing several different fonts with Quicksand, I have chosen to go with Open Sans. This is because this font is also very easy to read to have a clean and informative feel. The character traits are different enough from Quicksand, but visually still pair very well together. </p>
            </section>
            <section className='mindful__high-fidelity'>
                <h1 className='mindful__high-fidelity__title'>High Fidelity Prototype</h1>
                <p className='mindful__high-fidelity__text'>After developing the brand identity of Mindful, I began to build the high fidelity prototype from Version 4. After the high fidelity prototype was finished, I went through one round of peer review before making iteration.</p>
                <img src={Final5} alt='final prototype' className='mindful__high-fidelity__main-img'/>
                <div className='mindful__high-fidelity__container'>
                    <img src={MindfulAnimation1} alt='final prototype 1' className='mindful__high-fidelity__img'/>
                    <div className='mindful__high-fidelity__container__sub'>
                        <p className='mindful__high-fidelity__text-bold'>Check Personalized Suggestions</p>
                        <p className='mindful__high-fidelity__text'>“Suggestions For Me” is the biggest button to show hierarchy as the main feature of the app.</p>
                        <p className='mindful__high-fidelity__text'>Profile page merged into the hamburger menu, while benefit card is reduced to the navigation bar to reduce cognitive load.</p>
                        <p className='mindful__high-fidelity__text'>The empty stage for both medical and vision suggestion page has a button for the user to view past claims.</p>
                        <p className='mindful__high-fidelity__text'>Suggestions are based on the user’s preference and claim history message is on top in plain text for lower hierarchy like in previous versions.</p>
                    </div>
                </div>
                <div className='mindful__high-fidelity__container'>
                <img src={MindfulAnimation2} alt='final prototype 2' className='mindful__high-fidelity__img'/>
                    <div className='mindful__high-fidelity__container__sub'>
                        <p className='mindful__high-fidelity__text-bold'>Check Coverage Details</p>
                        <p className='mindful__high-fidelity__text'>Dental Suggestion notification is a card that can be expanded with the options to view details or dismiss.</p>
                        <p className='mindful__high-fidelity__text'>Eligible coverage in percentage is on top, then why the user should action on this suggestion, their last appointment for this service, and lastly a coverage &amp; usage details button.</p>
                        <p className='mindful__high-fidelity__text'>On coverage &amp; usage details page, users can see their dental coverage details and usage balance presented in a visual donut graph. This page will also show the average price of this service versus the price the user has to pay after claiming their benefits.</p>
                    </div>
                </div>
                <div className='mindful__high-fidelity__container'>
                <img src={MindfulAnimation3} alt='final prototype 3' className='mindful__high-fidelity__img'/>
                    <div className='mindful__high-fidelity__container__sub'>
                        <p className='mindful__high-fidelity__text-bold'>Booking Appointment</p>
                        <p className='mindful__high-fidelity__text'>The booking page will showcase the user’s preferred practitioner/clinic on the very top in a card format in which the user can expand to view more details.</p>
                        <p className='mindful__high-fidelity__text'>Once expanded, the card will showcase the open hours, option to favourite, check for directions button, as well as the book appointment button.</p>
                        <p className='mindful__high-fidelity__text'>Once the user clicks “book appointment”, the app will go to a reason for appointment page. The selections are broken down into general categories.</p>
                        <p className='mindful__high-fidelity__text'>Selected reason will be highlighted to show good visibility and system status feedback.</p>
                    </div>
                </div>
                <div className='mindful__high-fidelity__container'>
                <img src={MindfulAnimation4} alt='final prototype 4' className='mindful__high-fidelity__img'/>
                    <div className='mindful__high-fidelity__container__sub'>
                        <p className='mindful__high-fidelity__text-bold'>Complete Booking</p>
                        <p className='mindful__high-fidelity__text'>After a reason is selected, the user will be shown a calendar of available dates to pick from.</p>
                        <p className='mindful__high-fidelity__text'>After the date is picked, which will be highlighted, available time slots will be shown.</p>
                        <p className='mindful__high-fidelity__text'>After a time slot is picked, which will be highlighted, a “next” button will show.</p>
                        <p className='mindful__high-fidelity__text'>A review page is shown for user to confirm the appointment. The user can always go back to edit their choices.</p>
                        <p className='mindful__high-fidelity__text'>Once the user confirms the appointment, a success state will show up. The page will also indicate that an email confirmation will be sent to the user, as well as a reminder.</p>
                    </div>
                </div>
            </section>
            <section className='mindful__conclusion'>
                <h1 className='mindful__conclusion__title'>Conclusion: Design Impact</h1>
                <p className='mindful__conclusion__text'>Mindful solves the problem space initially presented. It caters to the key insights found during user interviews, in which the problem lies in users being lazy, confused and unbothered. By introducing a suggestion feature that will automatically inform the user of what they should be using via their workplace benefits, while showing them all the information they need in a minimal and easy to understand way, the users are more willing to action on these suggestions. This leads to more usage of their workplace benefits, and a better upkeep of their health.</p>
                <h1 className='mindful__conclusion__title'>Key Learning Outcome</h1>
                <p className='mindful__conclusion__text'>The key learning from this design process is to adapt to the findings from user testing. Don’t be afraid to go back to the drawing board to review the task flow or prototype to flush out or add new functions in order to provide a value that caters to the problem space I set out to conquer. </p>
                <p className='mindful__conclusion__text'>If a component doesn’t solve the problem in an impactful way, it is important to realize where the issue is and steer in a different direction. I had trouble seeing if certain aspects of my solution provides value to my targeted demographic, but through user feedback, research and reiterations, I was able to better present value to solve the problem space.</p>
                <h1 className='mindful__conclusion__title'>Next Steps</h1>
                <p className='mindful__conclusion__text'>The next step is to introduce the on-boarding process to flush out what types of questions will be needed to determine the suggestion preference that will make up the suggestions being sent to the user. </p>
                <p className='mindful__conclusion__text'>The challenge will be to come up with a solution that will capture the necessary information in a way that will not be too long and boring for the user to avoid bounce rate. Another task that I want to explore is the way Mindful will notify users to claim their benefits after an appointment has happened.</p>
                <a className='mindful__conclusion__text mindful__conclusion__click' href='https://www.hrdive.com/news/aflac-workers-have-a-false-sense-of-confidence-about-their- benefits/506878/'>[1] https://www.hrdive.com/news/aflac-workers-have-a-false-sense-of-confidence-about-their- benefits/506878/</a>
                <a className='mindful__conclusion__text mindful__conclusion__click' href='https://hrtechweekly.com/2018/08/07/earn-employee-loyalty-through-benefits-technology/'>[2] https://hrtechweekly.com/2018/08/07/earn-employee-loyalty-through-benefits-technology/</a>
                <a className='mindful__conclusion__text mindful__conclusion__click' href='https://www.flaticon.com/'>Icons from https://www.flaticon.com/</a>
            </section>
        </main>
    )
}