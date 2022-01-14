import { useState } from 'react';
import '../Components/ComponentCSS/Footer.scss';
import LinkedIn from '../Asset/Footer/linkedin.svg';



export default function Footer (){

    const [year, setYear] = useState(new Date().getFullYear())
    
    const handleClick = () => {
        window.open("https://www.linkedin.com/in/jodi-lam/");
    };

    return (
        <main className='footer'>
            <img src={LinkedIn} onClick={()=>handleClick()} className='footer__img'/>
            <p>{` © ${year} Jodi Lam`}</p>
        </main>
    )
}