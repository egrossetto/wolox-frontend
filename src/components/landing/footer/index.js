import React from 'react'
import './styles.css';
import Logo from '../assets/Ic_Wolox_Footer.svg'
export default function Footer() {

    const redirect = () => {
        window.open('https://www.wolox.com.ar/')
    }

    return (
        <div className='footer'>
            <h1 className='title_footer'>Gracias por <span className='blue_text'>completar este ejercicio</span></h1>
            <h3 className='title_footer'>Te invitamos a ver mas información</h3>
            <button className='footer_button' onClick={redirect}>Conocer más</button>
            <img src={Logo} alt='Wolox' className='footer_logo'/>
        </div>
    )
}