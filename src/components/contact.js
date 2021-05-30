import React from 'react';
import mail from '../assets/correo.png'
import linkedin from '../assets/linkedin.png'
import github from '../assets/github.png'

const Contact = () => {
    return ( 
        <div class='div-contact' id='Contact'>
            <div>
                <a class='logo-class' href="mailto:jeuron@hotmail.com"><img src={mail} alt='mail'/></a>
                <a class='logo-class' href="https://www.linkedin.com/in/euro-nava-206312205/"><img src={linkedin} alt='linkedin'/></a>
                <a class='logo-class' href="https://github.com/JEuroN"><img src={github} alt='github'/></a>
            </div>
            <div class='copyright'>EURO NAVA © 2021</div>
        </div>
     );
}
 
export default Contact;