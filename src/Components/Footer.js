import { useState } from 'react';
import '../Components/ComponentCSS/Footer.scss';
import LinkedIn from '../Asset/Footer/linkedin.svg';



export default function Footer (){

    const [year, setYear] = useState(new Date().getFullYear())
    

    return (
        <main className='footer'>
            <img src={LinkedIn} className='footer__img'/>
            <p>{` © ${year} Jodi Lam`}</p>
        </main>
    )
}