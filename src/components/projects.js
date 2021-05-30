import React from 'react';
import gatimeow from '../assets/gatimeow.png';
import github from '../assets/github.png'
import net from '../assets/net.png'

const Project = () => {
    return ( 
        <div class='div-about' id='About'>
            <h2 class='header-text' style={{marginTop: 0}}>Who am i?</h2>
            <div class='text' style={{zIndex: 5}}>
                <div class='text-holder' id='text-holder'>
                    <p class='about-text'>I am a graduate in computer engineering,
                        Throughout my career I was able to know the different areas of
                        the profession, being the most attractive for me, the web programming.
                        Both as front-end and back-end.</p>
                </div>
            </div>
            <div class='div-projects' style={{zIndex: 2}}>
                <h2 class='header-text'>Projects</h2>
                <div class='projectCards'>
                <div class='projectCard'>
                    <div class='projectBottom'>
                        <div className='name-div'>
                        <p>GatiMeow!</p>
                        <p>React</p>
                        </div>
                        <div className='link-icons' >
                        <a href='https://github.com/JEuroN/Gatimeow'><img src={github} alt='github'></img></a>
                        <a href='https://jeuron.github.io/Gatimeow/'><img src={net} alt='internet'></img></a>
                        </div>
                    </div>
                    <img class='projectImg' src={gatimeow} alt='gatimeow'/>
                </div>
            </div>
        </div>
    </div>
     );
}
 
export default Project;