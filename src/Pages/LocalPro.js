import { useEffect, useState } from 'react';
import '../Pages/PageCSS/LocalPro.scss';

//images
import MainImage from '../Asset/LocalPro/Main Image 2a 1.svg'
import DesignProcess from '../Asset/LocalPro/Group 23.svg'
import DesignSprint1 from '../Asset/LocalPro/LPT2 sprint 1 1.svg'
import DesignSprint2 from '../Asset/LocalPro/LPT2 sprint 2 1.svg'
import DesignSprint3 from '../Asset/LocalPro/LPT2 sprint 3 1.svg'
import DesignSprint4 from '../Asset/LocalPro/LPT2 sprint 4 1.svg'
import DesignSprint5 from '../Asset/LocalPro/LPT2 sprint 5 1.svg'
import DesignSprint1AND2 from '../Asset/LocalPro/Group 61.svg'
import DesignSprint4AND5 from '../Asset/LocalPro/Group 62.svg'
import Jiffy1 from '../Asset/LocalPro/Comp Jiffy 1 1.svg'
import Jiffy2 from '../Asset/LocalPro/Comp Jiffy 2 1.svg'
import Jiffy3 from '../Asset/LocalPro/Comp Jiffy 3 1.svg'
import Jiffy4 from '../Asset/LocalPro/Comp Jiffy 4 1.svg'
import Fasttask1 from '../Asset/LocalPro/Comp Fasttask 1 1.svg'
import Fasttask2 from '../Asset/LocalPro/Comp Fasttask 2 1.svg'
import Taskrabbit1 from '../Asset/LocalPro/Comp Taskrabbit 1 1.svg'
import Taskrabbit2 from '../Asset/LocalPro/Comp Taskrabbit 2 1.svg'
import Taskrabbit3 from '../Asset/LocalPro/Comp Taskrabbit 3 1.svg'
import Summary1 from '../Asset/LocalPro/Comp Summary 1 1.svg'
import Summary2 from '../Asset/LocalPro/Comp Summary 2 1.svg'
import Summary3 from '../Asset/LocalPro/Comp Summary 3 1.svg'
import Summary4 from '../Asset/LocalPro/Comp Summary 4 1.svg'
import DesignSprint6 from '../Asset/LocalPro/LPT2 sprint 6 1.svg'
import DesignSprint7 from '../Asset/LocalPro/LPT2 sprint 7 1.svg'
import DesignSprint8 from '../Asset/LocalPro/LPT2 sprint 8 1.svg'
import DesignSprint9 from '../Asset/LocalPro/LPT2 sprint 9 after sketch 1.svg'
import DesignSprint10 from '../Asset/LocalPro/LPT2 sprint 10 after sketch 1.svg'
import DesignSprint11 from '../Asset/LocalPro/LPT2 sprint 11 after sketch 1.svg'
import DesignSprint12 from '../Asset/LocalPro/LPT2 sprint 12 after sketch 1.svg'
import DesignSprint13 from '../Asset/LocalPro/LPT2 sprint 13 after sketch 1.svg'
import LoFi1 from '../Asset/LocalPro/LPT2 Lo Fi 1 1.svg'
import LoFi2 from '../Asset/LocalPro/LPT2 Lo Fi 2 1.svg'
import LoFi3 from '../Asset/LocalPro/LPT2 Lo Fi 3 1.svg'
import LoFi4 from '../Asset/LocalPro/LPT2 Lo Fi 4 1.svg'
import LoFi5 from '../Asset/LocalPro/LPT2 Lo Fi 5 1.svg'
import LoFi6 from '../Asset/LocalPro/LPT2 Lo Fi 6 1.svg'
import Insights1 from '../Asset/LocalPro/insights 1 1.svg'
import Insights2 from '../Asset/LocalPro/insights 2 1.svg'
import Insights3 from '../Asset/LocalPro/insights 3 1.svg'
import Insights4 from '../Asset/LocalPro/insights 4 1.svg'
import Insights5 from '../Asset/LocalPro/insights 5 1.svg'
import Insights6 from '../Asset/LocalPro/insights 6 1.svg'
import Insights7 from '../Asset/LocalPro/insights 7 1.svg'

//GIFS
import Final1 from '../Asset/LocalPro/GIFS/LPT2 final.gif'
import Final2 from '../Asset/LocalPro/GIFS/LPT2 Final2.gif'

export default function LocalPro() {

    // const [state, setState] = useState(localStorage.getItem('LocalPro'))
    const [state, setState] = useState(true)
    const [passwordCheck, setPasswordCheck] = useState('') 
    const [error, setError] = useState(false)

    const password = 'lpt2invitation'
    
    const handleClick = (value)=> {
        if(value === password){
            setState(true)
        } else {
            setError(true)
        }
    }

    useEffect(()=>{
        window.scrollTo(0, 0);
    },[])
        

    return(
        <main className='local-pro'>
            <h1 className='local-pro__title'>The Home Depot:</h1>
            <h1 className='local-pro__title'>Local Pro App - Invitation</h1>
            {
                state === true ? 
                <>
                    <section className='local-pro__intro'> 
                        <p className='local-pro__intro__text'>The Local Pro app is an app designed for local contractors that are signed up with Home Depot to receive referral jobs to local customers.</p>
                        <p className='local-pro__intro__text'>In an initiative that allows Home Depot to become the facilatator between the contractor and the customer with a set market rate, Local Pro Transact was introduced. Local Pro Transact is a 4 phased approach. The first phase is “Account Creation”, which is the native app experience of allowing the user to sign up to become a “Local Pro”.</p>
                        <p className='local-pro__intro__text'>The second phase is “Invitation”, which is the native app experience that invites eligible Local Pros to enroll in this new benefit called “Direct Jobs”.</p>
                        <p className='local-pro__intro__text'>The third phase is “Using”, which is the Local Pro facing experience of the app that enables the Local Pro to receive new Direct Jobs, track their schedule, communicate with customers, update job details and complete the job to get paid via direct deposit.</p>
                        <p className='local-pro__intro__text'>The fourth phase of this project is the “.ca experience”, which is the consumer facing experience that allows consumers to add “Local Pro Service” to cart along with an associated product.</p>
                        <p className='local-pro__intro__text'>This page will showcase the case study of phase 2 “Invitation” of the Local Pro Transact.</p>
                        <img src={MainImage} alt='final product image' className='local-pro__intro__img'/>
                        <div className='local-pro__intro__list'>
                            <p className='local-pro__intro__list__text'>Role: UX Strategist</p>
                            <p className='local-pro__intro__list__text'>Timeline: 4 weeks</p>
                            <p className='local-pro__intro__list__text'>Tools: Sketch, miro, InVision, Abstract</p>
                            <p className='local-pro__intro__list__text'>Platform: e-commerce website (desktop + mobile)</p>
                        </div>
                    </section>
                    <section className='local-pro__design-process'>
                        <h1 className='local-pro__design-process__title'>Overview of Design Process</h1>
                        <img src={DesignProcess} alt='design process image' className='local-pro__design-process__img'/>
                    </section>
                    <section className='local-pro__questions'>
                        <h1 className='local-pro__questions__title'>What</h1>
                        <p className='local-pro__questions__text'>An invitation to eligible Local Pros (contractors that signed up with home depot for getting referral jobs) for the new benefit called “Direct Job” (During the project it was once called “Priority Local Pro”.</p>
                        <h1 className='local-pro__questions__title'>Who</h1>
                        <p className='local-pro__questions__text'>All eligible Local Pros that have above 4 stars rating with Home Depot.</p>
                        <h1 className='local-pro__questions__title'>Where</h1>
                        <p className='local-pro__questions__text'>On the Home Depot Local Pro app.</p>
                        <h1 className='local-pro__questions__title'>How</h1>
                        <p className='local-pro__questions__text'>Introducing what “Local Pro Transact” is, and enticing these Local Pros to enroll through a form.</p>
                        <h1 className='local-pro__questions__title'>Goals</h1>
                        <p className='local-pro__questions__text'>The goal is to provide an enticing value proposition to these Local Pros in an easy to understand manner that will lead them to enroll in Local Pro Transact (Priority Local Pro). The enrollment has to be very simple to go through, and the benefits needs to be easily scannable and understood.</p>
                        <h1 className='local-pro__questions__title'>Constraint Considerations</h1>
                        <p className='local-pro__questions__text'>• Need to capture all necessary informations outlined by the business team</p>
                        <p className='local-pro__questions__text'>• Need to capture responses for a survey to help the business team to determine average market rate in the future phase, while not confusing the Local Pros that we are asking for a survey, and their responses will not be the rate they make</p>
                        <p className='local-pro__questions__text'>• The survey has a cap in the range of market rate, which we have to ensure the users do not raise the answer to the maximum to skew results</p>
                    </section>
                    <section className='local-pro__sprint'>
                        <h1 className='local-pro__sprint__title'>Design Sprint</h1>
                        <p className='local-pro__sprint__text'>A design sprint was held with the stakeholders shortly after the product kickoff. During the sprint, we went through problem &amp; opportunity, overall ask, what is and is not in scope, competitor analysis, how might we questions, participant sketches, voting round and ongoing discussions.</p>
                        <p className='local-pro__sprint__text'>I facilitated this design sprint on a miro board, and divided the sessions in 2 days with the stakeholders until the sketches and voting round.</p>
                        <img src={DesignSprint1} alt='design sprint image 1' className='local-pro__sprint__img-mobile1'/>
                        <img src={DesignSprint2} alt='design sprint image 2' className='local-pro__sprint__img-mobile1'/>
                        <div className='local-pro__sprint__imgContainer-group1'>
                            <img src={DesignSprint1AND2} className='local-pro__sprint__imgContainer-group1__img'/>
                        </div>
                        <img src={DesignSprint3} alt='design sprint image 3' className='local-pro__sprint__img'/>
                        <img src={DesignSprint4} alt='design sprint image 4' className='local-pro__sprint__img-mobile2'/>
                        <img src={DesignSprint5} alt='design sprint image 5' className='local-pro__sprint__img-mobile2'/>
                        <div className='local-pro__sprint__imgContainer-group2'>
                            <img src={DesignSprint4AND5} className='local-pro__sprint__imgContainer-group2__img'/>
                        </div>
                        <h1 className='local-pro__sprint__title'>Competitive Analysis</h1>
                        <p className='local-pro__sprint__text'>With the limitations of not having an actual business number or business insurance number, I tried to research on the invitation/enrollment stage of competitor apps as best I could. I reviewed both the customer facing and contractor facing experience to get the most thorough details, up until a business number or payment was required.</p>
                        <img src={Jiffy1} alt='Jiffy image 1' className='local-pro__sprint__img'/>
                        <img src={Jiffy2} alt='Jiffy image 2' className='local-pro__sprint__img'/>
                        <img src={Jiffy3} alt='Jiffy image 3' className='local-pro__sprint__img'/>
                        <img src={Jiffy4} alt='Jiffy image 4' className='local-pro__sprint__img'/>
                        <img src={Fasttask1} alt='Fast Track image 1' className='local-pro__sprint__img'/>
                        <img src={Fasttask2} alt='Fast Track image 2' className='local-pro__sprint__img'/>
                        <img src={Taskrabbit1} alt='Task Rabbit image 1' className='local-pro__sprint__img'/>
                        <img src={Taskrabbit2} alt='Task Rabbit image 2' className='local-pro__sprint__img'/>
                        <img src={Taskrabbit3} alt='Task Rabbit image 3' className='local-pro__sprint__img'/>
                        <img src={Summary1} alt='Summary image 1' className='local-pro__sprint__img'/>
                        <img src={Summary2} alt='Summary image 2' className='local-pro__sprint__img'/>
                        <img src={Summary3} alt='Summary image 3' className='local-pro__sprint__img'/>
                        <img src={Summary4} alt='Summary image 4' className='local-pro__sprint__img'/>
                    </section>
                    <section className='local-pro__sketches'>
                        <h1 className='local-pro__sketches__title'>Day 2 of Sprint: Sketches</h1>
                        <p className='local-pro__sketches__text'>After walking through the project asks, opportunities, competitive analysis and How Might We questions, we gave the sketches out as homework. Those who participate will post their sketches of this invitation experience on the miro board, and on Day 2 the rest of the team will perfom a silent gallery exercise before each participant will walkthrough their sketches. </p>
                        <div className='local-pro__sketches__container'>
                            <p className='local-pro__sketches__text'>The sketches should consist the experience to:</p>
                            <p className='local-pro__sketches__text'>1. Introduce the benefits of Local Pro Transact</p>
                            <p className='local-pro__sketches__text'>2. Capture Banking Information</p>
                            <p className='local-pro__sketches__text'>3. Capture the Local Pro’s Services</p>
                            <p className='local-pro__sketches__text'>4. Capture a profile picture</p>
                            <p className='local-pro__sketches__text'>5. Capture a survey that asks for what the user’s honest opinion of their occupation’s market rate (which also has a capped range)</p>
                        </div>
                        <img src={DesignSprint6} alt='design sprint image 6' className='local-pro__sketches__img'/>
                        <img src={DesignSprint7} alt='design sprint image 7' className='local-pro__sketches__img'/>
                        <img src={DesignSprint8} alt='design sprint image 8' className='local-pro__sketches__img'/>
                        <p className='local-pro__sketches__text'>Once all the participants walked through their sketches, two voting rounds were held. The first round is to vote for most preferred features of the sketches with project requirements in mind, and the second round is to vote for only one set of sketches.</p>
                        <p className='local-pro__sketches__text'>At the end, I arranged all the sketches in terms of requirements, and looked at areas that received votes. By organizing this way, the UX team can holistically look at all the needed steps with areas of opportunity and concerns.</p>
                        <img src={DesignSprint9} alt='design sprint image 9' className='local-pro__sketches__img'/>
                        <img src={DesignSprint10} alt='design sprint image 10' className='local-pro__sketches__img'/>
                        <img src={DesignSprint11} alt='design sprint image 11' className='local-pro__sketches__img'/>
                        <img src={DesignSprint12} alt='design sprint image 12' className='local-pro__sketches__img'/>
                        <img src={DesignSprint13} alt='design sprint image 13' className='local-pro__sketches__img'/>
                    </section>
                    <section className='local-pro__wireframe'>
                        <h1 className='local-pro__wireframe__title'>Wireframing</h1>
                        <p className='local-pro__wireframe__text'>The UX team looked at the organized summary of votes that happened during Day 2 of the sprint, and began to brainstorm and wireframe.</p>
                        <p className='local-pro__wireframe__text'>Paying attention to the features of the sketches that received votes, and keeping in mind of existing components on the app and stakeholder’s requirements, the wireframes began to take shape.</p>
                        <p className='local-pro__wireframe__text'>With a moderated user test in mind, the UX team is also mindful of marking down questions that we want to ask. The most important question the UX team has in mind is whether the users will understand that during the survey step, the answers these users enter will not equal to their market rate paid to them at the end.</p>
                        <p className='local-pro__wireframe__text'>These wireframes are taken in front of stakeholders and reviewed. Notes were gathered as the UX team continued to work with these wireframes to turn into a prototype for moderated usability testing.</p>
                        <img src={LoFi1} alt='lo fi image 1' className='local-pro__wireframe__img'/>
                        <img src={LoFi2} alt='lo fi image 2' className='local-pro__wireframe__img'/>
                        <img src={LoFi3} alt='lo fi image 3' className='local-pro__wireframe__img'/>
                        <img src={LoFi4} alt='lo fi image 4' className='local-pro__wireframe__img'/>
                        <img src={LoFi5} alt='lo fi image 5' className='local-pro__wireframe__img'/>
                        <img src={LoFi6} alt='lo fi image 6' className='local-pro__wireframe__img'/>
                        <p className='local-pro__wireframe__text'>The biggest concern was how to display the survey to ask users what they believe their occupation’s average market rate is, and what they believe certain services durations are. As per business requirement, we also need to input a cap in the range these answers can be. For example, the answer for “What do you think the average market rate for an Electrician in your area is?” can only have answer values between $50 - $80.</p>
                        <p className='local-pro__wireframe__text'>The challenge is how to present this in a way so the users will not automatically push their answer all the way to the maximum, which will skew the answer pool.</p>
                        <p className='local-pro__wireframe__text'>The version 1 the UX team presented as seen above is a stepper that defaults to the mid range of the cap. The version 2 has a slidder approach.</p>
                        <p className='local-pro__wireframe__text'>Version 1 hides the capped range until the user makes the conscious effort to make enough clicks to push to either the maximum or minimum. However a lot of clicks will be needed for the user to enter their answer if it is farther away from the default mid range.</p>
                        <p className='local-pro__wireframe__text'>Version 2 introduce a more seamless experience for the user to input their answer. No matter what the input is, it will only require one slide. However the downside is that we will be presenting the minimum and maximum range right in the beginning. Moreover, depending on how large the capped range is, the slider may also become very sensitive for the average user’s finger touch.</p>
                        <p className='local-pro__wireframe__text'>In summary, the stakeholders and UX team decided to go with Version 1 using the stepper instead of slider since we won’t show the entire range, and every dollar increase/decrease is a click so user will put more thoughts (though user can also select the input box and enter an amount).</p>
                    </section>
                    <section className='local-pro__user-testing'>
                        <h1 className='local-pro__user-testing__title'>Prototype for User Test</h1>
                        <p className='local-pro__user-testing__text'>A prototype was created for a moderated usability test for this project. An email was sent to a list of Local Pros signed up with Home Depot with a 4 or above star ratings. Each participant was in a 1 hour session with the UX researcher, with the UX team sitting in on the background as the test went on.</p>
                        <p className='local-pro__user-testing__text'>The research objective is to explore and understand the overall usability of the Local Pro Transact sign up experience, known as “Invitation”.</p>
                        <p className='local-pro__user-testing__text'>The participants were 6 Local Pros that the UX researcher recruited via email with a rating of 4+ and review count of +1. The profession list includes handyperson, electrician, plumber and painter. There were 6 usability tests performed.</p>
                        <h1 className='local-pro__user-testing__title'>Infinity Mapping and Insights Sharing</h1>
                        <p className='local-pro__user-testing__text'>Throughout the usability tests, the UX team was present to take notes. After all the tests were performed, the UX team gathered to hold an infinity session to organize the notes and extract useful insights to validate design decisions and influence new changes. A presentation was put together by the UX researcher to outline the insights to the stakeholders.</p>
                        <img src={Insights1} alt='insight image 1' className='local-pro__user-testing__img'/>
                        <img src={Insights2} alt='insight image 2' className='local-pro__user-testing__img'/>
                        <img src={Insights3} alt='insight image 3' className='local-pro__user-testing__img'/>
                        <img src={Insights4} alt='insight image 4' className='local-pro__user-testing__img'/>
                        <img src={Insights5} alt='insight image 5' className='local-pro__user-testing__img'/>
                        <img src={Insights6} alt='insight image 6' className='local-pro__user-testing__img'/>
                        <img src={Insights7} alt='insight image 7' className='local-pro__user-testing__img'/>
                        <h1 className='local-pro__user-testing__title'>Summary of Insights</h1>
                        <p className='local-pro__user-testing__text-bold'>Home Page</p>
                        <p className='local-pro__user-testing__text'>Consider changing the treatment of the NEW callout. Other than that the banner was well received by the user test participants.</p>
                        <p className='local-pro__user-testing__text-bold'>Enroll Drawer</p>
                        <p className='local-pro__user-testing__text'>Consider providing FAQ on how the pricing works.</p>
                        <p className='local-pro__user-testing__text-bold'>Direct Deposit (Banking Information)</p>
                        <p className='local-pro__user-testing__text'>No usability issues</p>
                        <p className='local-pro__user-testing__text-bold'>Profile Photo</p>
                        <p className='local-pro__user-testing__text'>Headshot and business logo should both be accepted.</p>
                        <p className='local-pro__user-testing__text-bold'>Survey</p>
                        <p className='local-pro__user-testing__text'>Consider tweaking the copy to allow Local Pros to think about what they should keep in mind while inputting their answers. (example: should they include travel time within the duration of a service?)</p>
                    </section>
                    <section className='local-pro__final'>
                        <h1 className='local-pro__final__title'>Final Hand Off</h1>
                        <p className='local-pro__final__text'>Taking all the insights from the moderated usability tests, the UX team went back to tweak the designs before handing off to the developers.</p>
                        <p className='local-pro__final__text'> A visual of what the final designs that was handed off to the developers:</p>
                        <div className='local-pro__final__container'>
                            <img src={Final1} alt='final product image 1' className='local-pro__final__img'/>
                            <img src={Final2} alt='final product image 2' className='local-pro__final__img'/>
                        </div>
                    </section>
                    <section className='local-pro__reflection'>
                        <h1 className='local-pro__reflection__title'>Reflections and Next Steps</h1>
                        <p className='local-pro__reflection__text'>Looking back at this “Invitation” phase of the initiative, the UX team really appreciated the allowed funding for a moderated usability test with the target audience. Although it would have been more beneficial to recruit the targeted personas amongst the entire pool of Local Pros, the team still received a lot of valuable feedback, especially when it comes to their expectations for this new benefit.</p>
                        <p className='local-pro__reflection__text'>I learned a lot about helping set context in a moderated usability test and the testing script, because it matters a lot when we are trying to extract useful insights from the target audience through their tone, words and thoughts. When the context is set properly, insights become clearer.</p>
                        <p className='local-pro__reflection__text'>The next step for this “Invitation” phase will be to track the data after it is launched, so the UX team can monitor the rate of sign up successions, view heat maps and click rates.</p>
                    </section>
                </>
                : 
                <section className='local-pro__check'>
                    <p className='local-pro__check__text'>Please enter the password given by Jodi to view this portfolio page.</p>
                    <div className='local-pro__check__container'>
                        <label className='local-pro__check__container__label'>Enter Password to View:</label>
                        <input type="password" name="password" className={error === true ? 'local-pro__check__container__input-error' :'local-pro__check__container__input'} onChange={(e)=>{setPasswordCheck(e.target.value)}} />
                        {
                            error === true ? <p className='local-pro__check__container__error-text'>Incorrect password. Please try again, or reach out to Jodi via the Contact page if you wish to view this portfolio page.</p>: null
                        }
                        <button onClick={()=>handleClick(passwordCheck)} className='local-pro__check__container__btn'>Proceed</button>
                    </div>
                </section>
            }
        </main>
    )
}