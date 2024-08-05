import { useEffect } from 'react';
import '../Pages/PageCSS/ConfigServer.scss';

//images
import MainImage from '../Asset/ConfigServer/Samsung_Config_Server_Project_Hero_Photo.svg';
import DesignProcess from '../Asset/ConfigServer/Samsung_Config_Server_Design_Process.svg';

// Discovery Research: Understanding the Problem
import UnderstandingProblem1 from '../Asset/ConfigServer/Samsung_Config_Server_Understanding_Problem_1 2.51.05 PM.svg';
import UnderstandingProblem2 from '../Asset/ConfigServer/Samsung_Config_Server_Understanding_Problem_2.svg';
// import UnderstandingProblem2A from '../Asset/ConfigServer/Samsung_Config_Server_Understanding_Problem_2A 2.51.05 PM.svg';
// import UnderstandingProblem2B from '../Asset/ConfigServer/Samsung_Config_Server_Understanding_Problem_2B 2.51.05 PM.svg';
import UnderstandingProblem3 from '../Asset/ConfigServer/Samsung_Config_Server_Understanding_Problem_3.svg';
// import UnderstandingProblem3B from '../Asset/ConfigServer/Samsung_Config_Server_Understanding_Problem_3B 2.51.05 PM.svg';
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
import LofiWireFrame11 from '../Asset/ConfigServer/Samsung_Config_Server_LoFi_Wire_Frame_11 2.51.05 PM.svg';
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
import SingleEdit3A from '../Asset/ConfigServer/Samsung_Config_Server_Final_Hand_Off_Single_Edit_16A 2.51.05 PM.svg';
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


// -------------
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

export default function ConfigServer() {

    // useEffect(()=>{
    //     window.scrollTo(0, 0);
    // },[])

    return (
        <main className='config-server'>
            <h1 className='config-server__title'>Samsung Ads: Config Server</h1>
            <p className='config-server__description'>The objective of this project is to design and deliver a platform for backend developers to monitor, analyze and manage any number of TV models. The Configuration Server determines if a particular TV is enabled to show ads or not based on the critical information such as product type, country and model code.</p>
            <img src={MainImage} alt='finished product image' className='config-server__img'/>
            <div className='config-server__list'>
                <p className='config-server__item'>Role: Product Designer II</p>
                <p className='config-server__item'>Timeline: 12 weeks</p>
                <p className='config-server__item'>Tools: Figma, Figjam</p>
                <p className='config-server__item'>Platform: B2B SaaS on website</p>
            </div>
            <section className='config-server__section'>
                <h1 className='config-server__design-process__title'>Overview of Design Process</h1>
                <img className='config-server__design-process__img' src={DesignProcess} alt='Design Process Image'/>
            </section>
            <section className='config-server__section'>
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
            <section className='config-server__section'>
                <h1 className='config-server__research__title'>Discovery Research: Understanding the Problem</h1>
                <p className='config-server__research__text'>In order to understand the process and complexity, I scheduled several meetings with the back-end developer (sole user) and UX researcher to fully understand everything and before I can start to explore the different information architecture possibilities. It is important to know all possible use cases.</p>
                <img src={UnderstandingProblem1} alt='current state image 1' className='config-server__research__img'/>
                <img src={UnderstandingProblem2} alt='current state image 2' className='config-server__research__img'/>
                <p className='config-server__research__text'>Understanding the current state: how does the back-end developer currently tackle these configuration changes?</p>
                <img src={UnderstandingProblem3} alt='current state image 3' className='config-server__research__img'/>
                <img src={UnderstandingProblem4} alt='current state image 4' className='config-server__research__img'/>
                <div className='config-server__paired-image'>
                    <img src={UnderstandingProblem5A} alt='current state image 5a' className='config-server__paired-image__img'/>
                    <img src={UnderstandingProblem5B} alt='current state image 5b' className='config-server__paired-image__img'/>
                </div>
                <div className='config-server__paired-image'>
                    <img src={UnderstandingProblem6A} alt='current state image 6a' className='config-server__paired-image__img'/>
                    <img src={UnderstandingProblem6B} alt='current state image 6b' className='config-server__paired-image__img'/>
                </div>
                <img src={UnderstandingProblem7} alt='current state image 7' className='config-server__research__img'/>
                <h1 className='config-server__research__title'>Persona Research: Understanding the Users and Stakeholders</h1>
                <p className='config-server__research__text'>In order to further understand how this configuration is being used, or the future scope of how it will be used, it is important to do a deep dive of current and future users.</p>
                <img src={UnderstandingProblem8} alt='current state image 8' className='config-server__research__img'/>
                <h1 className='config-server__research__title'>Clarifications and Use Case Scenarios</h1>
                <p className='config-server__research__text'>Due to the complexity of the project and the level of combinations, it is essential to understand the different use cases and all possible combinations of configurations. Below are some questions and clarifications the UX Researcher and I noted out.</p>
                <img src={ClarificationsUseCase} alt='current state image 9' className='config-server__research__img'/>
                <h1 className='config-server__research__title'>Defining MVP and Future Scopes</h1>
                <p className='config-server__research__text'>Since this feature is an essential function to the organization, in an agile approach there needs to be an MVP scope and a future scope to release the product. Aligning with the Product Manager and engineer, we have defined proper scopes.</p>
                <img src={DefiningMVP} alt='current state image 9' className='config-server__research__img'/>
            </section>
            <section className='config-server__section'>
                <h1 className='config-server__lo-fi__title'>Low Fidelity Wire frames and Information Architect Explorations</h1>
                <p className='config-server__lo-fi__text'>After understanding the current state along with their issues, the requirements, stakeholders and scope, I began to explore via low fidelity wireframes to try different combination of information architect, and different ways to present the information. This was done while in constant communication with the UX researcher and current user.</p>
                <p className='config-server__lo-fi__text'>Different possible arrangement by the below 4 categories:</p>
                <img src={LofiWireFrame1} alt='Lo-Fi Review image 1' className='config-server__lo-fi__sm-img'/>
                <img src={LofiWireFrame2} alt='Lo-Fi Review image 4' className='config-server__lo-fi__img'/>
                <img src={LofiWireFrame3} alt='Lo-Fi Review image 5' className='config-server__lo-fi__img'/>
                <img src={LofiWireFrame4} alt='Lo-Fi Review image 6' className='config-server__lo-fi__img'/>
                <img src={LofiWireFrame5} alt='Lo-Fi Review image 7' className='config-server__lo-fi__img'/>
                <p className='config-server__lo-fi__text'>These are the low fidelity sketches of the platform using various combinations of information architecture.</p>
                <div className='config-server__paired-image'>
                    <div className='config-server__paired-image__img-with-text margin'>
                        <img src={LofiWireFrame6A} alt='current state image 6a' className='config-server__paired-image__img-with-text'/>
                        <h1 className='config-server__lo-fi__title'>Pros</h1>
                        <p className='config-server__questions__text'>• Summary shows the available ad types at a glance</p>
                        <p className='config-server__questions__text'>• Dimension being model category and country on the side can reduce space required</p>
                    </div>
                    <div className='config-server__paired-image__img-with-text'>
                        <img src={LofiWireFrame6B} alt='current state image 6a' className='config-server__paired-image__img-with-text'/>
                        <h1 className='config-server__lo-fi__title'>Cons</h1>
                        <p className='config-server__questions__text'>• Can only show only one model category at once (Hi Medium or Low)</p>
                        <p className='config-server__questions__text'>• Since we are only showing 2 dimensions, there may be repeats causing the list to be very long</p>
                    </div>
                </div>
                <div className='config-server__paired-image'>
                    <div className='config-server__paired-image__img-with-text margin'>
                        <img src={LofiWireFrame7A} alt='current state image 7a' className='config-server__paired-image__img-with-text'/>
                        <h1 className='config-server__lo-fi__title'>Pros</h1>
                        <p className='config-server__questions__text'>• You can freely arrange the Axis using the 3 main categories for a more customized display of data</p>
                    </div>
                    <div className='config-server__paired-image__img-with-text'>
                        <img src={LofiWireFrame7B} alt='current state image 7a' className='config-server__paired-image__img-with-text'/>
                        <h1 className='config-server__lo-fi__title'>Cons</h1>
                        <p className='config-server__questions__text'>• A lot of work needs to be done by the user every time</p>
                        <p className='config-server__questions__text'>• If Country is in the X Axis, then the horizontal scroll is going to be very long</p>
                    </div>
                </div>
                <div className='config-server__paired-image'>
                    <div className='config-server__paired-image__img-with-text margin'>
                        <img src={LofiWireFrame8A} alt='current state image 8a' className='config-server__paired-image__img-with-text'/>
                        <h1 className='config-server__lo-fi__title'>Pros</h1>
                        <p className='config-server__questions__text'>• You can have a comprehensive view of each individual country</p>
                    </div>
                    <div className='config-server__paired-image__img-with-text'>
                        <img src={LofiWireFrame8B} alt='current state image 8a' className='config-server__paired-image__img-with-text'/>
                        <h1 className='config-server__lo-fi__title'>Cons</h1>
                        <p className='config-server__questions__text'>• The country list can get very long, causing the horizontal scroll to be long</p>
                        <p className='config-server__questions__text'>• The number of PSID can be in the thousands, so this will not be feasible</p>
                        <p className='config-server__questions__text'>• Confirmed with developer that PSID cannot exist in the same UI as the models</p>
                    </div>
                </div>
                <div className='config-server__paired-image__three-img'>
                    <div>
                        <img src={LofiWireFrame9A} alt='current state image 9a' className='config-server__paired-image__three-img__img'/>
                        <img src={LofiWireFrame9B} alt='current state image 9b' className='config-server__paired-image__three-img__img'/>
                        <img src={LofiWireFrame9C} alt='current state image 9c' className='config-server__paired-image__three-img__img'/>
                    </div>
                    <div className='config-server__paired-image__three-text'>
                        <div style={{ width: '50%' }} className='margin'> 
                            <h1 className='config-server__lo-fi__title'>Pros</h1>
                            <p className='config-server__questions__text'>• You can customize different levels arrangement</p>
                            <p className='config-server__questions__text'>• The first level is the most precise since you can change it by tabs</p>
                        </div>
                        <div style={{ width: '50%' }}>
                            <h1 className='config-server__lo-fi__title'>Cons</h1>
                            <p className='config-server__questions__text'>• User has to configure it themselves form the start</p>
                            <p className='config-server__questions__text'>• Different stakeholders may have different ways to customize, may cause confusions when in discussion with each other</p>
                        </div>
                    </div>
                </div>
                <div className='config-server__paired-image'>
                    <div className='config-server__paired-image__img-with-text margin'>
                        <img src={LofiWireFrame10A} alt='current state image 8a' className='config-server__paired-image__img-with-text'/>
                        <h1 className='config-server__lo-fi__title'>Pros</h1>
                        <p className='config-server__questions__text'>• Only 2 dimensions showing at one time can reduce complexity</p>
                        <p className='config-server__questions__text'>• Can see from a summary point of view how many models are turned ON</p>
                    </div>
                    <div className='config-server__paired-image__img-with-text'>
                        <img src={LofiWireFrame10B} alt='current state image 8a' className='config-server__paired-image__img-with-text'/>
                        <h1 className='config-server__lo-fi__title'>Cons</h1>
                        <p className='config-server__questions__text'>• After expanding, the list of models have become too long</p>
                    </div>
                </div>
                <img src={LofiWireFrame11} alt='Lo-Fi Review image 11' className='config-server__lo-fi__img'/>
                <img src={LofiWireFrame12} alt='Lo-Fi Review image 12' className='config-server__lo-fi__img'/>
            </section>
            <section className='config-server__section'>
                <h1 className='config-server__lo-fi__title'>Finalizing the requirements</h1>
                <p className='config-server__questions__text'>After much conversations with the end user and product managers, we have narrowed down the list of “Must” requirements:</p>
                <p className='config-server__questions__text'>• Show by country and ad types</p>
                <p className='config-server__questions__text'>• PSID needs to be on a separate page/UI since they are completely different from TV Models</p>
                <p className='config-server__questions__text'>• On and Off models need to be shown separately due to “Special Models”. If there are 100 models, if 50 are ON, does not mean 50 are off</p>
                <p className='config-server__questions__text'>• There needs to be a “Change Reason” to be logged in a history log</p>
                <p className='config-server__questions__text'>• Users need to be able to download the data in a CSV format</p>
                <p className='config-server__questions__text'>• There needs to be a view for users with permission to edit, and one to just view</p>
            </section>
            <section className='config-server__section'>
                <h1 className='config-server__lo-fi__title'>High Fidelity Mocks, User Test, Changes</h1>
                <p className='config-server__questions__text'>High fidelity mocks were produced for user testing with the end users to enable and disable ads.</p>
                <img src={HifiMock1} alt='Hi-Fi Review image 1' className='config-server__lo-fi__img'/>
                <img src={HifiMock2} alt='Hi-Fi Review image 2' className='config-server__lo-fi__img'/>
                <h1 className='config-server__lo-fi__title'>User Test Summary and Next Steps</h1>
                <p className='config-server__questions__text'>• User was able to view and edit ads with no issue</p>
                <p className='config-server__questions__text'>• The batch edits within “Custom Edits” was a success in fulfilling all the requirements and use cases</p>
                <p className='config-server__questions__text'>• The bar chart summary in the beginning was not as used</p>
                <p className='config-server__questions__text'>• There needs to be a country grouping feature and create custom country group to allow most commonly used batch edits</p>
            </section>
            <section className='config-server__final'>
                <h1 className='config-server__final__title'>Final Hand Off</h1>
                <p className='config-server__final__text'>A vast number of mocks with different use cases, flows and edge cases were required at the final hand off.</p>
                <p className='config-server__final__text-bold'>Final Dashboard</p>
                <p className='config-server__questions__text'>• The summary chart and Model Availability table are separated by accordions, allowing users to easily collapse the summary when not needed</p>
                <p className='config-server__questions__text'>• New Country Group Listing is introduced</p>
                <p className='config-server__questions__text'>• Added “On” or “Off” in the table itself to remind users what status they are looking at for affordability</p>
                <img src={FinalHandOff1} alt='Final handoff image 1' className='config-server__lo-fi__img'/>
                <img src={FinalHandOff2} alt='Final handoff image 2' className='config-server__lo-fi__img'/>
                <div style={{padding: '20px 0'}}>
                    <p className='config-server__final__text-bold'>Country Listing - Create New</p>
                    <p className='config-server__questions__text'>• Users are able to select common country groupings by regions</p>
                    <p className='config-server__questions__text'>• Users can also create their own country groupings to allow easy batch edits</p>
                </div>
                <img src={CountryListing1} alt='country listing image 1' className='config-server__lo-fi__img'/>
                <div className='config-server__paired-image'>
                    <img src={CountryListing2A} alt='country listing image 2a' className='config-server__paired-image__img'/>
                    <img src={CountryListing2B} alt='country listing image 2b' className='config-server__paired-image__img'/>
                </div>
                <div className='config-server__paired-image'>
                    <img src={CountryListing3A} alt='country listing image 2a' className='config-server__paired-image__img'/>
                    <img src={CountryListing3B} alt='country listing image 2b' className='config-server__paired-image__img'/>
                </div>
                <div style={{padding: '20px 0'}}>
                    <p className='config-server__final__text-bold'>Custom Edit</p>
                    <p className='config-server__questions__text'>• When the use case involves more complex configuration, “Custom Edit” becomes an essential feature</p>
                    <p className='config-server__questions__text'>• In “Custom Edit”, you can decide which exact groupings of models, countries and ad type to select</p>
                    <p className='config-server__questions__text'>• These selections are always requested by HQ to be performed precisely</p>
                    <p className='config-server__questions__text'>• Once the user has made the selections and entered the “Change Reason”, it goes into a review state where the user is then able to complete the edits</p>
                </div>
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
                <div style={{padding: '20px 0'}}>
                    <p className='config-server__final__text-bold'>Batch Edit - By Country and Ad Type</p>
                    <p className='config-server__questions__text'>• Users are able to perform filter on the Model Availability before selecting multiple or all line items</p>
                    <p className='config-server__questions__text'>• Since they are on the “Model On” status, batch editing them will turn them off, and user need to input a “Change Reason”</p>
                </div>
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
                <div style={{padding: '20px 0'}}>
                    <p className='config-server__final__text-bold'>Single Edit - By A country’s Ad Type</p>
                    <p className='config-server__questions__text'>• Users can go into a particular country’s ad type, and make batch or single edits to the Ad Server URL, Blank Server Url, Model Status or Real Time Ad Status</p>
                    <p className='config-server__questions__text'>• Once a status has been chosen to be edited, the line item is selected where you can choose to edit the other status or URL</p>
                    <p className='config-server__questions__text'>• Once all the edits have been made, user will need to review before committing to the change</p>
                </div>
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
                <div style={{padding: '20px 0'}}>
                    <p className='config-server__final__text-bold'>Batch Edit - By A country’s Ad Type</p>
                    <p className='config-server__questions__text'>• Users can go into a particular country’s ad type, and make batch edit to a status or URL</p>
                </div>
                <div className='config-server__paired-image'>
                    <img src={BatchEditB1A} alt='batch edit image 1a' className='config-server__paired-image__img'/>
                    <img src={BatchEditB1B} alt='batch edit image 1b' className='config-server__paired-image__img'/>
                </div>
                <div className='config-server__paired-image'>
                    <img src={BatchEditB2A} alt='batch edit image 2a' className='config-server__paired-image__img'/>
                    <img src={BatchEditB2B} alt='batch edit image 2b' className='config-server__paired-image__img'/>
                </div>
                <div style={{padding: '20px 0'}}>
                    <p className='config-server__final__text-bold'>PSID Edit</p>
                    <p className='config-server__questions__text'>• Since PSID is a completely different entity than a Model, they require separate UI</p>
                    <p className='config-server__questions__text'>• For PSID the categorizations are simpler, ther fore it involves less complex steps to edit</p>
                    <p className='config-server__questions__text'>• You can edit a single PSID, or batch edit multiple PSIDs at once</p>
                </div>
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
            <section className='config-server__result'>
                <h1 className='config-server__result__title'>Results after launch</h1>
                <div style={{padding: '20px 0'}}>
                    <p className='config-server__final__text-bold'>Key benefits</p>
                    <p className='config-server__questions__text'>• Provides users (ie business, sales, product, engineering) a convenient UI to quickly understand ad configurations for different device groupings around the regions of the world.</p>
                    <p className='config-server__questions__text'>• Allows users with the proper credentials to manage changes in real time. It drastically reduces the turn-around time from days to minutes and reduces the chances of error in the requests for Configuration changes and the actual changes being made.</p>
                    <p className='config-server__questions__text'>• Allows users with permission to quickly modify ad configurations in production without requiring a production release.</p>
                    <p className='config-server__questions__text'>• Allows multiple teams (ad ops, ad client, back end) teams to move quicker and will save a large amount of time dedicated to requests and verifying.</p>
                    <p className='config-server__questions__text'>• A wide array of dashboards and monitoring systems have also been proactively added.</p>
                </div>
                <img src={ResultAfterLaunch1} alt='result launch 1' className='config-server__result__img'/>
                <div style={{padding: '20px 0'}}>
                    <p className='config-server__final__text-bold'>Key benefits</p>
                    <p className='config-server__questions__text'>• reduced Blank Impressions occurance by 30%</p>
                    <p className='config-server__questions__text'>• New RTAC logic delivers 15% more impressions</p>
                </div>
                <div className='config-server__paired-image'>
                    <img src={ResultAfterLaunch2A} alt='result image 3a' className='config-server__paired-image__img'/>
                    <img src={ResultAfterLaunch2B} alt='result image 3b' className='config-server__paired-image__img'/>
                </div>
            </section>
        </main>
    )
}