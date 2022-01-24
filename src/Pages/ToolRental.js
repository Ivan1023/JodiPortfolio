import { useEffect } from 'react';
import '../Pages/PageCSS/ToolRental.scss';

//images
import MainImage from '../Asset/ToolRental/Main Image 2 1.svg';
import DesignProcess from '../Asset/ToolRental/Group 23.svg';
import CurrentState1 from '../Asset/ToolRental/tool rental US current state 1 1.svg';
import CurrentState2 from '../Asset/ToolRental/tool rental US current state 2 1.svg';
import CurrentState3 from '../Asset/ToolRental/tool rental US current state 3 1.svg';
import CurrentState4 from '../Asset/ToolRental/tool rental US current state 4 1.svg';
import CurrentState5 from '../Asset/ToolRental/tool rental US current state 5 1.svg';
import CurrentState6 from '../Asset/ToolRental/tool rental US current state 6 1.svg';
import CurrentState7 from '../Asset/ToolRental/tool rental US current state 7 1.svg';
import CurrentState8 from '../Asset/ToolRental/tool rental US current state 8 1.svg';
import CurrentState9 from '../Asset/ToolRental/tool rental US current state 9 1.svg';
import CurrentStateMobile1 from '../Asset/ToolRental/tool rental US current state mobile 1 1.svg';
import CurrentStateMobile2 from '../Asset/ToolRental/tool rental US current state mobile 2 1.svg';
import CanadianTire1  from '../Asset/ToolRental/Comp Canadian Tire 1 1.svg';
import CanadianTire2 from '../Asset/ToolRental/Comp Canadian Tire 2 1.svg';
import HomeHardware1 from '../Asset/ToolRental/Comp Home Hardware 1 1.svg';
import HomeHardware2 from '../Asset/ToolRental/Comp Home Hardware 2 1.svg';
import HomeHardware3 from '../Asset/ToolRental/Comp Home Hardware 3 1.svg';
import Lowes1 from '../Asset/ToolRental/Comp Lowes 1 1.svg';
import Lowes2 from '../Asset/ToolRental/Comp Lowes 2 1.svg';
import Lowes3 from '../Asset/ToolRental/Comp Lowes 3 1.svg';
import Lowes4 from '../Asset/ToolRental/Comp Lowes 4 1.svg';
import RentalTabOrder1 from '../Asset/ToolRental/Current Rental Tab Order 1.svg';
import RentalTabOrder2 from '../Asset/ToolRental/current Rental alt text 1.svg';
import RentalTabOrder3 from '../Asset/ToolRental/Current PIP tab 1.svg';
import RentalTabOrder4 from '../Asset/ToolRental/Current PIP screen 1.svg';
import RentalTabOrder5 from '../Asset/ToolRental/current PIP alt 1.svg';
import RentalTabOrder6 from '../Asset/ToolRental/Current PIP dup 1.svg';
import RentalTabOrder7 from '../Asset/ToolRental/current pip clicks 1.svg';
import RentalTabOrder8 from '../Asset/ToolRental/Wireframe price 1.svg';
import LoFiReview1 from '../Asset/ToolRental/tool rental PIP 1 1.svg';
import LoFiReview2 from '../Asset/ToolRental/tool rental PIP 2 1.svg';
import LoFiReview3 from '../Asset/ToolRental/Wireframe 2 1.svg';
import LoFiReview4 from '../Asset/ToolRental/Wireframe 3 1.svg';
import LoFiReview5 from '../Asset/ToolRental/Wireframe 4 1.svg';
import LoFiReview6 from '../Asset/ToolRental/Wireframe 5 1.svg';
import LoFiReview7 from '../Asset/ToolRental/Wireframe 6 1.svg';
import FinalUI1 from '../Asset/ToolRental/Final 1 3.svg';
import FinalUI2 from '../Asset/ToolRental/Final 2 3.svg';
import FinalUI3 from '../Asset/ToolRental/Final 3 1.svg';
import FinalUI4 from '../Asset/ToolRental/Final 4 1.svg';
import FinalUI5 from '../Asset/ToolRental/Final 5 2.svg';
import Result1 from '../Asset/ToolRental/Tool Rental Data important 1.svg';
import Result2 from '../Asset/ToolRental/Tool Rental Data important 2 1.svg';

//GIFS
import FinalUI6 from '../Asset/ToolRental/GIFS/Vehicle Rental mid GIF.gif';

export default function ToolRental() {

    useEffect(()=>{
        window.scrollTo(0, 0);
    },[])

    return (
        <main className='tool-rental'>
            <h1 className='tool-rental__title'>The Home Depot: Tool Rental</h1>
            <p className='tool-rental__description'>The objective of this project is to enable the feature that allows consumer to check availability and reserve tool and vehicle rentals online in advance.</p>
            <img src={MainImage} alt='finished product image' className='tool-rental__img'/>
            <div className='tool-rental__list'>
                <p className='tool-rental__item'>Role: UX Strategist</p>
                <p className='tool-rental__item'>Timeline: 4 weeks</p>
                <p className='tool-rental__item'>Tools: Sketch, miro, InVision, Abstract</p>
                <p className='tool-rental__item'>Platform: e-commerce website (desktop + mobile)</p>
            </div>
            <section className='tool-rental__design-process'>
                <h1 className='tool-rental__design-process__title'>Overview of Design Process</h1>
                <img className='tool-rental__design-process__img' src={DesignProcess} alt='Design Process Image'/>
            </section>
            <section className='tool-rental__questions'>
                <h1 className='tool-rental__questions__title'>What</h1>
                <p className='tool-rental__questions__text'>Introducing a feature to allow consumers to be able to track tools and vehicle availabilities and reserve online in advance.</p>
                <h1 className='tool-rental__questions__title'>Who</h1>
                <p className='tool-rental__questions__text'>All consumers who has an interest in tool and or vehicle rentals.</p>
                <h1 className='tool-rental__questions__title'>Where</h1>
                <p className='tool-rental__questions__text'>On the Home Depot Canada website.</p>
                <h1 className='tool-rental__questions__title'>How</h1>
                <p className='tool-rental__questions__text'>Surface the item stock availability and allow consumer to input information to reserve online.</p>
                <h1 className='tool-rental__questions__title'>Goals</h1>
                <p className='tool-rental__questions__text'>The goal is to provide an online experience for consumers to be able to see available tool and vehicle rentals, and be able to reserve online in advance without having to go to the physical store, especially during a pandemic when store are not necessarily open for consumers.</p>
                <h1 className='tool-rental__questions__title'>Scope Constraints</h1>
                <p className='tool-rental__questions__text'>• Timeline is only 3 to 4 weeks</p>
                <p className='tool-rental__questions__text'>• The request was to lift the feature from .com into .ca using the components on .ca, meaning we do not have a lot of flexibility in design</p>
                <p className='tool-rental__questions__text'>• No time for user testing</p>
            </section>
            <section className='tool-rental__research'>
                <h1 className='tool-rental__research__title'>Research on Current State</h1>
                <p className='tool-rental__research__text'>Due to the limited scope, the UX team has to lift the online Tool Rental experience from the .com experience, therefore we did not hold a proper design sprint session with sketchings. </p>
                <p className='tool-rental__research__text'>Regardless, I looked into the current state of how the .com experience was and compared it with the .ca current experience. Even though they are both the same company, the website experience on .com and .ca uses very different design components. To reduce the timeline for development, I had to ensure we are using the .ca design components even if we are leveraging .com’s user flows.</p>
                <p className='tool-rental__research__text'>The first step is to get familiar with the .com experience.</p>
                <img src={CurrentState1} alt='current state image 1' className='tool-rental__research__img'/>
                <img src={CurrentState2} alt='current state image 2' className='tool-rental__research__img'/>
                <img src={CurrentState3} alt='current state image 3' className='tool-rental__research__img'/>
                <img src={CurrentState4} alt='current state image 4' className='tool-rental__research__img'/>
                <img src={CurrentState5} alt='current state image 5' className='tool-rental__research__img'/>
                <img src={CurrentState6} alt='current state image 6' className='tool-rental__research__img'/>
                <img src={CurrentState7} alt='current state image 7' className='tool-rental__research__img'/>
                <img src={CurrentState8} alt='current state image 8' className='tool-rental__research__img'/>
                <img src={CurrentState9} alt='current state image 9' className='tool-rental__research__img'/>
                <img src={CurrentStateMobile1} alt='current state image mobile 1' className='tool-rental__research__img'/>
                <img src={CurrentStateMobile2} alt='current state image mobile 2' className='tool-rental__research__img'/>
                <p className='tool-rental__research__text'>The .com experience includes a Tool Rental link from the Home Depot website’s global navigation bar, which leads to a tool landing page. After selecting the product, users are able to see a pricing chart dependent on the duration of rental, as well as a CTA to reserve online.</p>
                <p className='tool-rental__research__text'>The experience afterwards is a 4 step form that the user needs to fill out.</p>
                <p className='tool-rental__research__text'>After getting familiar with the experience on .com, I went to look at the current state on the .ca website. The .ca website has a similar tool landing page that calls out tool rental, however it will eventually lead to product page that shows the pricing chart and no CTA to reserve online.</p>
            </section>
            <section className='tool-rental__analysis'>
                <h1 className='tool-rental__analysis__title'>Competitive Analysis</h1>
                <p className='tool-rental__analysis__text'>Even though the scope of the project is to limit the design to leverage from the .com experience, I still looked up competitors to understand how others have their tool rental experience online.</p>
                <p className='tool-rental__analysis__text-bold'>Canadian Tire</p>
                <p className='tool-rental__analysis__text'>Canadian Tire’s tool rental service page, called “Loan a Tool”, was very hard to locate. It was accessible on the website’s footer. However, the filters on the page were very confusing and does not match any user expectations. Moreover, every button yields no result.</p>
                <img src={CanadianTire1} alt='analysis image 1'className='tool-rental__analysis__img'/>
                <img src={CanadianTire2} alt='analysis image 2'className='tool-rental__analysis__img'/>
                <p className='tool-rental__analysis__text-bold'>Home Hardware</p>
                <p className='tool-rental__analysis__text'>For Home Hardware, the rental page was not accessible from it’s home page. The page was only found after searching on Google. The rental page also has no introduction and offered 4 options: Electric and Corded Tools, Gas Powererd Tools, Manual Tools and the last option was to “Request a Quote”. After clicking into the option of Manual Tools, the page presents product cards that look as if we can click into it to find more details, however nothing was clickable. In order to reserve anything, the user has to choose the “Request a Quote” option to go to a form and fill it out, where you also have to maually type in the tool name.</p>
                <img src={HomeHardware1} alt='analysis image 3'className='tool-rental__analysis__img'/>
                <img src={HomeHardware2} alt='analysis image 4'className='tool-rental__analysis__img'/>
                <img src={HomeHardware3} alt='analysis image 5'className='tool-rental__analysis__img'/>
                <p className='tool-rental__analysis__text-bold'>Lowes</p>
                <p className='tool-rental__analysis__text'>Lowes actually partners with Stephenson’s Equipment &amp; Tool Rental. On Lowe’s home page, there is a link for “Services”, which leads to a page that introduce Stephenson’s services. Users can navigate to Stephenson’s website, and view the tools that are available. However the website does not showcase a pricing chart, and the user will have to submit a quote request instead.</p>
                <img src={Lowes1} alt='analysis image 6'className='tool-rental__analysis__img'/>
                <img src={Lowes2} alt='analysis image 7'className='tool-rental__analysis__img'/>
                <img src={Lowes3} alt='analysis image 8'className='tool-rental__analysis__img'/>
                <img src={Lowes4} alt='analysis image 9'className='tool-rental__analysis__img'/>
            </section>
            <section className='tool-rental__aoda'>
                <h1 className='tool-rental__aoda__title'>AODA Review</h1>
                <p className='tool-rental__aoda__text'>Before diving into making low fidelity wireframes for the .ca Tool Rental experience, I reviewed the current experience to see if there are areas to improve in, especially in the accessibility area.</p>
                <p className='tool-rental__aoda__text'>The first page to look at was the Tool Rental landing page. Using programs and screen readers, I determined the existing tab order and alt text. Generally there are no tab order issues on the Tool Rental landing page, however the alt text on certain images can be improved.</p>
                <div className='tool-rental__aoda__imgContainer'>
                    <img src={RentalTabOrder1} alt=' rental order image 1' className='tool-rental__aoda__img'/>
                    <img src={RentalTabOrder2} alt=' rental order image 2' className='tool-rental__aoda__img'/>
                </div>
                <p className='tool-rental__aoda__text'>Secondly, I looked into the existing product page for tools that are available to rent. The tab order was not natural, some images are missing proper alt text, and also images are missing alt text altogether. </p>
                <p className='tool-rental__aoda__text'>After reviewing the AODA issues, I presented these to the stakeholder along with suggestions on how to fix these issues.</p>
                <img src={RentalTabOrder3} alt=' rental order image 3' className='tool-rental__aoda__img'/>
                <img src={RentalTabOrder4} alt=' rental order image 4' className='tool-rental__aoda__img'/>
                <img src={RentalTabOrder5} alt=' rental order image 5' className='tool-rental__aoda__img'/>
                <img src={RentalTabOrder6} alt=' rental order image 6' className='tool-rental__aoda__img'/>
                <img src={RentalTabOrder7} alt=' rental order image 7' className='tool-rental__aoda__img'/>
                <p className='tool-rental__aoda__text'>On the last issue where the price chart gives off the illusion that it can be selected to review an online reserve experience, I went into the data heat and click maps to back up the assumption as well. As seen in the image above, we have a click map that shows multiple users trying to click on the price chart’s most popular choices (4 hours and 1 day duration) as if they expect to open up something.</p>
                <p className='tool-rental__aoda__text'>To tackle this misunderstanding, we have proposed to change the UI of the price chart so that it does not look clickable. Instead of having the duration closed within a card, we are separating them horizontally with a line in between.</p>
                <img src={RentalTabOrder8} alt=' rental order image 8' className='tool-rental__aoda__img-rental-price'/>
            </section>
            <section className='tool-rental__lo-fi'>
                <h1 className='tool-rental__lo-fi__title'>Lo-Fi UI Review</h1>
                <p className='tool-rental__lo-fi__text'>Since the scope was limited to leveraging the .com experience, we jumped straight to making the low fidelity wireframes to review with stakeholders.</p>
                <p className='tool-rental__lo-fi__text'> We also showed the product page with the existing pricing chart, as well as the version of the updated pricing chart.</p>
                <div className='tool-rental__lo-fi__container'>
                    <img src={LoFiReview1} alt='Lo-Fi Review image 1' className='tool-rental__lo-fi__img'/>
                    <img src={LoFiReview2} alt='Lo-Fi Review image 2' className='tool-rental__lo-fi__img'/>
                </div>
                <img src={LoFiReview3} alt='Lo-Fi Review image 3' className='tool-rental__lo-fi__img'/>
                <img src={LoFiReview4} alt='Lo-Fi Review image 4' className='tool-rental__lo-fi__img'/>
                <img src={LoFiReview5} alt='Lo-Fi Review image 5' className='tool-rental__lo-fi__img'/>
                <img src={LoFiReview6} alt='Lo-Fi Review image 6' className='tool-rental__lo-fi__img'/>
                <img src={LoFiReview7} alt='Lo-Fi Review image 7' className='tool-rental__lo-fi__img'/>
                <p className='tool-rental__lo-fi__text'>Stakeholders are okay with the suggested price chart, as well as the suggested changes to fix current AODA and UX issues. The next steps were to discuss the copy and review them with the legal department.</p>
                <p className='tool-rental__lo-fi__text'>Due to the limitation that this MVP only allows customers to make a request to reserve online, and not guranteeing it, we need to ensure to have the proper copy to explain in the experience and in the emails, which also needed legal approval.</p>
                <p className='tool-rental__lo-fi__text'>Since only tools have their own product pages and vehicles do not, the team will put the price chart and availability directly on the general vehicle landing page. Vehicle having individual product pages will be put on the UX backlog for future iterations.</p>
            </section>
            <section className='tool-rental__final'>
                <h1 className='tool-rental__final__title'>Final UI Review</h1>
                <p className='tool-rental__final__text'>Before the final UI Review to hand off, there was an increase in scope to add “Pick up hour” into the form. We have included this in the first step where users pick the date.</p>
                <p className='tool-rental__final__text'>These are the final design in mobile format, and also a short visual of the interaction shown on the desktop platform.</p>
                <div className='tool-rental__final__container'>
                    <img src={FinalUI1} alt='final ui image 1' className='tool-rental__final__img'/>
                    <img src={FinalUI2} alt='final ui image 2' className='tool-rental__final__img'/>
                    <img src={FinalUI3} alt='final ui image 3' className='tool-rental__final__img'/>
                    <img src={FinalUI4} alt='final ui image 4' className='tool-rental__final__img'/>
                    <img src={FinalUI5} alt='final ui image 5' className='tool-rental__final__img'/>
                </div>
                <img src={FinalUI6} alt='final ui image 6' className='tool-rental__final__gif'/>
            </section>
            <section className='tool-rental__result'>
                <h1 className='tool-rental__result__title'>Results after launch</h1>
                <p className='tool-rental__result__text'>This online Tool and Vehicle Rental experience was launched in March of 2021, and especially during the pandemic, had very good conversion rates and feedback as it helped consumer to reserve tools and vehicles online while stores were closed.</p>
                <p className='tool-rental__result__text'>The average conversion rate since March of 2021 was 6.26% (date captured in November 2021), and has over 2.7 million visits.</p>
                <img src={Result1} alt='result launch 1' className='tool-rental__result__img'/>
                <img src={Result2} alt='result launch 2' className='tool-rental__result__img'/>
            </section>
            <section className='tool-rental__next-step'>
                <h1 className='tool-rental__next-step__title'>Next Step</h1>
                <p className='tool-rental__next-step__text'>The next step of this project is to aim to have true reserve online. Currently the experience is to allow customers to make a reservation request, and the order is confirmed only one day prior as the store currently prioritizes walk in customers first, and will only confirm the reservation one day prior. Even though the chances are very low when the tool or vehicle is actually out of stock, the next step is to prevent even the slim chance of a bad experience.</p>
            </section>
        </main>
    )
}