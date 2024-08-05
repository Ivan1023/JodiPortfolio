import { useEffect } from 'react';
import '../Pages/PageCSS/BuyAgain.scss';

//image file
import MainImage from '../Asset/BuyAgain/Main Image 3.svg';
import DesignProcess from '../Asset/BuyAgain/Design_Process.svg';
import ResearchStage1 from '../Asset/BuyAgain/image 1.svg';
import ResearchStage2 from '../Asset/BuyAgain/image 2.svg';
import ResearchStage3 from '../Asset/BuyAgain/image 3.svg';
import Amazon1 from '../Asset/BuyAgain/image 4.svg';
import Amazon2 from '../Asset/BuyAgain/image 5.svg';
import Vistaprint1 from '../Asset/BuyAgain/image 6.svg';
import Vistaprint2 from '../Asset/BuyAgain/image 7.svg';
import Etsy from '../Asset/BuyAgain/image 8.svg';
import UberEats from '../Asset/BuyAgain/image 9.svg';
import Walmart1 from '../Asset/BuyAgain/image 10.svg';
import Walmart2 from '../Asset/BuyAgain/image 11.svg';
import Sephora from '../Asset/BuyAgain/image 12.svg';
import CompetitiveAnalysis1 from '../Asset/BuyAgain/image 13.svg';
import CompetitiveAnalysis2 from '../Asset/BuyAgain/image 14.svg';
import BaymardResearch1 from '../Asset/BuyAgain/image 15.svg';
import BaymardResearch2 from '../Asset/BuyAgain/image 16.svg';
import ValueProposition1 from '../Asset/BuyAgain/1 1.svg';
import ValueProposition2 from '../Asset/BuyAgain/2 1.svg';
import JourneyMap from '../Asset/BuyAgain/image 17.svg';
import HowMightWe from '../Asset/BuyAgain/image 21.svg';
import ExistingTemplates1 from '../Asset/BuyAgain/image 18.svg';
import ExistingTemplates2 from '../Asset/BuyAgain/image 19.svg';
import ExistingTemplates3 from '../Asset/BuyAgain/image 20.svg';
import HappyPath from '../Asset/BuyAgain/image 22.svg';
import BeforeAfter1 from '../Asset/BuyAgain/Group 30.svg';
import BeforeAfter2 from '../Asset/BuyAgain/Group 31.svg';
import BeforeAfter3 from '../Asset/BuyAgain/H2 image 1.svg';
import MultiSelect1 from '../Asset/BuyAgain/image 23.svg';
import Result from '../Asset/BuyAgain/image 24.svg';

//GIFS
import BuyAgainFinal from '../Asset/BuyAgain/GIFS/Buy Again final mid.gif';
import BuyAgainMultiSelect from '../Asset/BuyAgain/GIFS/buy again multi select mid.gif';
import BuyAgainUserTest from '../Asset/BuyAgain/GIFS/Buy again user test mid.gif';

export default function BuyAgain (){
    
    useEffect(()=>{
        window.scrollTo(0, 0);
    },[])


    return (
        <main className='buyAgain'>
            <h1 className='buyAgain__title'>The Home Depot: Buy Again</h1>
            <p className='buyAgain__description'>The objective of this project is to enable a feature that allows signed in Pro customers to easily purchase products that they have previously bought. Since contractors often need to buy the same products multiple times due to their jobs, this project aims to provide a more convenient and faster buying experience for the contractors.</p>
            <img src={MainImage} alt='buy again main image' className='buyAgain__img'/>
            <div className='buyAgain__list'>
                <p className='buyAgain__list__item'>Role: UX Strategist</p>
                <p className='buyAgain__list__item'>Timeline: 4 weeks</p>
                <p className='buyAgain__list__item'>Tools: Sketch, miro, mural, InVision, Axure, Abstract</p>
                <p className='buyAgain__list__item'>Platform: e-commerce website (desktop + mobile)</p>
            </div>
            <section className='buyAgain__design-process'>
                <h1 className='buyAgain__design-process__title'>Overview of Design Process</h1>
                <img src={DesignProcess} alt='design process image'/>
            </section>
            <section className='buyAgain__questions'>
                <h1 className='buyAgain__questions__title'>What</h1>
                <p className='buyAgain__questions__text'>Introducing a feature to allow contractors to easily and conveniently purchase items they have previously bought. This feature already exists in The Home Depot website in the US.</p>
                <h1 className='buyAgain__questions__title'>Who</h1>
                <p className='buyAgain__questions__text'>All the signed in contractors on the Home Depot Canada website.</p>
                <h1 className='buyAgain__questions__title'>Where</h1>
                <p className='buyAgain__questions__text'>On the Home Depot Canada website.</p>
                <h1 className='buyAgain__questions__title'>How</h1>
                <p className='buyAgain__questions__text'>Surface previously purchased items and allow the ability to buy these items again quickly.</p>
                <h1 className='buyAgain__questions__title'>Goals</h1>
                <p className='buyAgain__questions__text'>The goal is to drive sales velocity from signed in contractors by making it easy for them to find and buy frequently purchased items. We want to help these busy contractors save time by also allowing them to sort and filter through the list in ways are useful to them.</p>
                <h1 className='buyAgain__questions__title'>Scope Constraints</h1>
                <p className='buyAgain__questions__text'>• Timeline is only 3 to 4 weeks</p>
                <p className='buyAgain__questions__text'>• The request was to leverage as much existing components as possible from both the .ca and .com experience without much flexibilities</p>
                <p className='buyAgain__questions__text'>• No time for user testing (although the team was able to squeeze in one session of user test after convincing the other stakeholders)</p>
            </section>
            <section className='buyAgain__research'>
                <h1 className='buyAgain__research__title'>Design Sprint: Research Stage</h1>
                <p className='buyAgain__research__text'>After product team held the product kick off session, I got started on researching about the current state of both the .ca and .com experience. I particularly looked at the .com buy again experience, since that is what the UX team needs to leverage mostly from.</p>
                <img src={ResearchStage1} alt='research stage image 1' className='buyAgain__research__img'/>
                <img src={ResearchStage2} alt='research stage image 2' className='buyAgain__research__img'/>
                <img src={ResearchStage3} alt='research stage image 3' className='buyAgain__research__img'/>
                <h1 className='buyAgain__research__title'>Design Sprint: Competitive Analysis</h1>
                <p className='buyAgain__research__text'>Once research on the current state of buy again on .com experience was finished, I started to look at competitors to see how they are conducting their “buy again” experience. </p>
                <p className='buyAgain__research__text-bold'>Amazon</p> 
                <img src={Amazon1} alt='research stage image 4' className='buyAgain__research__img'/>
                <img src={Amazon2} alt='research stage image 5' className='buyAgain__research__img'/>
                <p className='buyAgain__research__text-bold'>Vistaprint</p> 
                <img src={Vistaprint1} alt='research stage image 6' className='buyAgain__research__img'/>
                <img src={Vistaprint2} alt='research stage image 7' className='buyAgain__research__img'/>
                <p className='buyAgain__research__text-bold'>Etsy</p> 
                <img src={Etsy} alt='research stage image 8' className='buyAgain__research__img'/>
                <p className='buyAgain__research__text-bold'>Uber Eats</p> 
                <img src={UberEats} alt='research stage image 9' className='buyAgain__research__img'/>
                <p className='buyAgain__research__text-bold'>Walmart</p> 
                <img src={Walmart1} alt='research stage image 10' className='buyAgain__research__img'/>
                <img src={Walmart2} alt='research stage image 11' className='buyAgain__research__img'/>
                <p className='buyAgain__research__text-bold'>Sephora</p> 
                <img src={Sephora} alt='research stage image 12' className='buyAgain__research__img'/>
                <p className='buyAgain__research__text-bold'>Competitive Analysis Summary</p> 
                <img src={CompetitiveAnalysis1} alt='research stage image 13' className='buyAgain__research__img'/>
                <img src={CompetitiveAnalysis2} alt='research stage image 14' className='buyAgain__research__img'/>
                <h1 className='buyAgain__research__title'>Design Sprint: Baymard Research</h1> 
                <p className='buyAgain__research__text'>Other than researching on the current state and competitor experiences, I also looked into Baymard for best practices.</p>
                <img src={BaymardResearch1} alt='research stage image 15' className='buyAgain__research__img'/>
                <img src={BaymardResearch2} alt='research stage image 16' className='buyAgain__research__img'/>
                <h1 className='buyAgain__research__title'>Design Sprint: Value Proposition</h1> 
                <p className='buyAgain__research__text'>After gathering the research materials and understanding the product objective, I pieced together a value proposition to  categorize user pains, gains and needs as oppose to the gain creators, services and pain reliever. Doing this helps the team put together how to design an experinece for the target user that will best suit their needs. </p>
                <div className='buyAgain__research__container'>
                    <img src={ValueProposition1} alt='research stage image 1 1' className='buyAgain__research__img'/>
                    <img src={ValueProposition2} alt='research stage image 1 2' className='buyAgain__research__img'/>
                </div>
                <h1 className='buyAgain__research__title'>Design Sprint: User Journey Map</h1>
                <p className='buyAgain__research__text'>I put a journey map together for the Pro that is trying to purchase items that he will frequenty buy on the current .ca website, which has no buy again or any favourite list features.</p>
                <img src={JourneyMap} alt='research stage image 17' className='buyAgain__research__img'/>
                <h1 className='buyAgain__research__title'>Design Sprint: How Might We</h1>
                <p className='buyAgain__research__text'>I also conducted a team exercise during the design sprint, where all the stakeholders had 5 minutes to type in their “How Might We” questions that will help the UX team.</p>
                <img src={HowMightWe} alt='research stage image 21' className='buyAgain__research__img'/>
                <h1 className='buyAgain__research__title'>Design Sprint: Business Goals</h1>
                <p className='buyAgain__research__text'>• MVP (Just add “Buy It Again” button on the top right corner like .com</p>
                <p className='buyAgain__research__text'>• Leverage existing PLP card style template (but with buy it again filters) by date ranges, PO#, Job Name, Store Number, Store Name, sku number</p>
                <p className='buyAgain__research__text'>• Existing filters on purchase history</p>
                <p className='buyAgain__research__text'>• Easy to implement so we can use it on consumer accounts as well</p>
                <p className='buyAgain__research__text'>• Drive sales velocity</p>
                <h1 className='buyAgain__research__title'>Design Sprint: Things to Consider</h1>
                <p className='buyAgain__research__text-bold'>Now</p>
                <p className='buyAgain__research__text'>• Placement of “Buy It Again”</p>
                <p className='buyAgain__research__text'>• Copy of “Buy It Again”</p>
                <p className='buyAgain__research__text'>• Determine user expectations when they see “Buy It Again”</p>
                <p className='buyAgain__research__text'>• The area “Buy It Again” will affect that will require design inputs</p>
                <span className='buyAgain__research__space'/>
                <p className='buyAgain__research__text-bold'>Future</p>
                <p className='buyAgain__research__text'>• Include “Number of times purchased”</p>
                <p className='buyAgain__research__text'>• Add more filters for future iterations</p>
                <p className='buyAgain__research__text'>• Include ability to edit quantity</p>
                <h1 className='buyAgain__research__title'>Design Sprint: Leverage Existing Templates</h1>
                <img src={ExistingTemplates1} alt='research stage image 18' className='buyAgain__research__img'/>
                <img src={ExistingTemplates2} alt='research stage image 19' className='buyAgain__research__img'/>
                <img src={ExistingTemplates3} alt='research stage image 20' className='buyAgain__research__img'/>
                <p className='buyAgain__research__text'>Since the scope of this project was small and we have to leverage existing designs, the team did not go with a sketching and voting session. All the stakeholders discussed during the design sprint and decided which part of available components to leverage, and the UX team will take it back and come up with mid-fidelity mocks for the upcoming UI review.</p>
            </section>
            <section className='buyAgain__happy-path'>
                <h1 className='buyAgain__happy-path__title'>Happy Path</h1>
                <p className='buyAgain__happy-path__text'>The UX team started by putting together the happy path user flow to understand the screens we will need to design for.</p>
                <img src={HappyPath} about='happy path image' className='buyAgain__happy-path__img'/>
                <h1 className='buyAgain__happy-path__title'>Touchbase with Stakeholders</h1>
                <p className='buyAgain__happy-path__text'>Between the design sprint and the first UI Review, I organized touchbase meetings with the stakeholders to ensure all the small details get confirmed. During this time, it was decided to use “Buy Again” instead of “Buy It Again” since it was a shorter copy with the same impact.</p>
            </section>
            <section className='buyAgain__prototype'>
                <h1 className='buyAgain__prototype__title'>Prototype and UI Review</h1>
                <p className='buyAgain__prototype__text'>After touchbase meetings with stakeholders, the team presented a series of UI mocks to all the stakeholders again. As we go through, the team decided to get rid of certain filters  within the Buy Again page, and then aligned on the overall designs.</p>
                <p className='buyAgain__prototype__text'>Once the mid fidelity UI mocks have been aligned, the UX designer will start on prototyping the experience. </p>
                <h1 className='buyAgain__prototype__title'>AODA Review</h1>
                <p className='buyAgain__prototype__text'>As the team designs for the experience, we fo regular checks to ensure the experience adheres to the AODA guidelines. A document is put together to ensure the developers will code the experience with AODA in mind. Generic guidelines like making sure the tab order is natural, all text are readable by screen readers, and images have necessary alt text associated.</p>
            </section>
            <section className='buyAgain__user-test'>
                <h1 className='buyAgain__user-test__title'>User Test</h1>
                <p className='buyAgain__user-test__text'>Due to the scope restraint, the team had to leverage the purchase history filters for the buy again page. However since that was an old experience that was never tested, the team felt some of the existing filters did not make sense. After discussions, we were able to convince the business team to allow an extra week to test the buy again experience to validate some design decisions.</p>
                <p className='buyAgain__user-test__text'>To consolidate the user test due to time constraints, the team decided to disable the purchase history path from the home page and account dashboard, leaving only one available path to test out.</p>
                <p className='buyAgain__user-test__text-bold'>Goal of the user test:</p>
                <p className='buyAgain__user-test__text'>• Do users know how to get to Buy Again?</p>
                <p className='buyAgain__user-test__text'>• What are the user’s expectations when they see “Buy Again”?</p>
                <p className='buyAgain__user-test__text'>• Do users understand that the buy again page defaults on 3 months?</p>
                <p className='buyAgain__user-test__text'>• Do users know that they can choose different sort and filter options? And do they understand what each of those mean?</p>
                <p className='buyAgain__user-test__text-bold'>User Test Flow</p>
                <p className='buyAgain__user-test__text'>After the user opens up the prototype, we will give them a background and context of the home depot website, and get them to tell us what they think of the website. Once we gather insights on how users will buy items they previous purchased before, we will see if and how they get to the Buy Again page.</p>
                <p className='buyAgain__user-test__text'>Once the user gets to the Buy Again page, we will observe how they perceive the page, and if the page matches their expectation. We also observed if the user was able to understand the default date is set to 3 months, and if the user was able to see other filter options and understand what each means.</p>
                <p className='buyAgain__user-test__text'>This user test was conducted on both mobile and desktop. Here is a small glimpse of the flow in mobile:</p>
                <img src={BuyAgainUserTest} alt='user testing gifs' className='buyAgain__user-test__img'/>
                <h1 className='buyAgain__user-test__title'>User Test Results Summary</h1>
                <p className='buyAgain__user-test__text'>The user test was launched on the usertesting.com platform, in both desktop and mobile asking for contractors as criteria. Once we collected 10 videos, the UX team gathered and held an infinity mapping session to extract and organize insights pulled from watching the user test videos.</p>
                <p className='buyAgain__user-test__text-bold'>Summary</p>
                <p className='buyAgain__user-test__text'>• While some customers were able to find and understand the purpose of the Buy Again link on Home page, some customers would gravitate to purchase history to find a list of frequently purchased items</p>
                <p className='buyAgain__user-test__text'>• since link to Buy Again is on available on the side for Purchase History Desktop View, should we surface it as well on the Purchase History page on desktop and mobile? (If so, how? and what is the copy?)</p>
                <p className='buyAgain__user-test__text'>• Given the task to search for a Dewalt drill purchased in the past 5 months, with SKU number (page defaults to past 3 months): Some customers opted to search/filters by SKU number first, without changing date range first. </p>
                <p className='buyAgain__user-test__text'>Few possible reasons why:</p>
                <p className='buyAgain__user-test__text'>1. users may have missed past 3 months call out and did not change date range due to this</p>
                <p className='buyAgain__user-test__text'>2. since users were provided SKU, user may have thought that search would apply to ALL-TIME vs. past 3 months should refresh, user doesn't need to hit search again because filter should remain - to confirm with user stories</p>
                <p className='buyAgain__user-test__text'>• drop down signifier was missing on mobile, so some customers did not realize the label PO/Job name was a drop-down option</p>
                <p className='buyAgain__user-test__text'>• Some customers were confused about the label Store name, stating that store name should always be “Home Depot” (To consider: changing store name to store location)</p>
                <p className='buyAgain__user-test__text'>• Origin as a filter option was not immediately clear to users. “Origin is the manufacturer”, “Where it is originally from?”, one other user thinks its where the product is made, “Would be the store that I purchased it atm on here it says Caledonia” (To consider: remove origin as a filter)</p>
                <p className='buyAgain__user-test__text'>• While users state that we give lots of options to filter/search Buy Again page, there were many users that stated that being able to</p>
                <p className='buyAgain__user-test__text'>• search by Product Name, Product Description would be helpful (To consider: add description as a filter)</p>
            </section>
            <section className='buyAgain__final-hand-off'>
                <h1 className='buyAgain__final-hand-off__title'>Final Hand Off</h1>
                <p className='buyAgain__final-hand-off__text'>After summarizing the insights pulled from user testing, the team made several changes. We were able to add “Description” as a filter, which will really be helpful to the users when they are searching for previously bought products. </p>
                <p className='buyAgain__final-hand-off__text'>We also removed the specific dates stated next to the 3 months filter, since from user testing we reazlied just disaply “3 months” is sufficient.</p>
                <p className='buyAgain__final-hand-off__text'>We also removed “Origin” as a filter since most users during user test did not understand what this filter is, nor was it helpful in finding the products.</p>
                <p className='buyAgain__final-hand-off__text'>We also removed “Compare” feature on this page, since from user testing we see that these users are here to quickly purchase items they already bought, therefore there is no need to compare since they know these products already.</p>
                <p className='buyAgain__final-hand-off__text'>Here are some changes we’ve implemented with the insights we gathered from user test.</p>
                <img src={BeforeAfter1} alt='before after image 1' className='buyAgain__final-hand-off__img'/>
                <p className='buyAgain__final-hand-off__text'>To reduce less clicks, we have combined the date range and search together. As per feedback, we also included the “In Stock Today” feature here as well. Since the date range is defaulted at 3 months, we also bolded that to visually show it was a filter.</p>
                <img src={BeforeAfter2} alt='before after image 2' className='buyAgain__final-hand-off__img'/>
                <p className='buyAgain__final-hand-off__text'>Previously since the date range and search by filters were separate buttons, clicking one will only open up one. Now that we have combined them, click on the “Filter &amp; Search” allows the user to see everything in one screen. We have also added “Description” as a search by option and placed it first as it was the most helpful to the target users.</p>
                <p className='buyAgain__final-hand-off__text'>Here is a short glimpse of the buy again happy path prototype. This experience is also live as of August 2020 for both consumers and signed in contractors on the homedepot.ca website.</p>
                <img src={BuyAgainFinal} alt='before after image 1' className='buyAgain__final-hand-off__gif'/>
                <img src={BeforeAfter3} alt='before after image 3' className='buyAgain__final-hand-off__img'/>
            </section>
            <section className='buyAgain__multi-select'>
                <h1 className='buyAgain__multi-select__title'>Next Steps: Multi-Select</h1>
                <p className='buyAgain__multi-select__text'>As a fast follow up, the UX team proposed to design the experience with a multi-select feature, as user testing shows this feature will be extremely helpful to contractors, since they often buy in bulk.</p>
                <p className='buyAgain__multi-select__text'>I organized another design sprint with new competitor analysis, highlighted the value multi-select will bring, and this time with a sketching exercise as well. </p>
                <img src={MultiSelect1} alt='multi select image' className='buyAgain__multi-select__img'/>
                <p className='buyAgain__multi-select__text'>Understanding the requirements, the UX team came up with 2 different ways to multi-select several products to buy again.</p>
                <p className='buyAgain__multi-select__text'>The first way is to utilize the upper left corner space of the product card that was originally the “compare” feature. The checkbox will allow user to select multiple products at once and add them all to cart. </p>
                <p className='buyAgain__multi-select__text'>The second way is to follow what some competitors like Vistaprint and Amazon has done, where clicking the CTA of the product card will have a “Added to cart” text appear, neglecting the add to cart panel, therefore allowing the user to continuously use a one-click method to add multiple items to cart.</p>
                <p className='buyAgain__multi-select__text'>This user test was performed on both mobile and desktop. Here is a glimpse of the happy path of what we user tested on desktop.</p>
                <img src={BuyAgainMultiSelect} alt='multi select gif' className='buyAgain__multi-select__img'/>
                <h1 className='buyAgain__multi-select__title'>User Test Insights</h1>
                <p className='buyAgain__multi-select__text'>Main question for testing was “is the Select copy beside the checkbox clear for users?”</p>
                <p className='buyAgain__multi-select__text'>Most customers decided to select multiple items by using the checkbox versus adding each item via ATC, which suggests that the combination of the Select copy and checkbox is effectively communicating functionality.</p>
                <p className='buyAgain__multi-select__text'>Assumption: Based on observations, it’s clear to us that the checkbox component on its own communicates to users that multiple items can be selected, regardless of what the following interaction is (whether it be compare on PLPs or mult-select on Buy Again)</p>
                <p className='buyAgain__multi-select__text'>Regardless of which method users chose to select multiple items, users stated that the process was quick and easy to add multiple items. Aligned with what team has observed, no major usability issues when users took either route.</p>
                <p className='buyAgain__multi-select__text'>A couple of users had questions about selecting multiple quantities for an item, i.e., selecting a qty of 10 for a screw</p>
                <h1 className='buyAgain__multi-select__title'>Descoped</h1>
                <p className='buyAgain__multi-select__text'>Unfortunately, this fast follow up enhancement was cut short due to shortage in scope and funding. Regardless, as the UX strategist and UX owner of this project, I made sure to properly document all the findings and work we have done, to ensure that if a future iteration is allowed, the team working on it then will have the proper knowledge.</p>
            </section>
            <section className='buyAgain__result'>
                <h1 className='buyAgain__result__title'>Results after launch</h1>
                <p className='buyAgain__result__text'>2 weeks after launching the Buy Again feature on homedepot.ca, we have raised the conversion rate to 5.24% and gathered $462,255 revenue.</p>
                <img src={Result} alt='final result image' className='buyAgain__result__img'/>
            </section>
        </main>
    )
}