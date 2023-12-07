import React from 'react';
import './About.css';

import profile_img from '../../media/profile.jpg'

const About = () => {
  return (
    <>
        <div className='about-master-container'>
            <div className='about-title-container'>
                <h4>About</h4>
                <div className='linea-about'></div>
            </div>
            <div className='about-me-description'>
                <img src={profile_img} alt='Profile'></img>
                <h5>Nice to meet you!</h5>
                <p>I'm Alejandro Quiles. Designer with over 2 years of experience working in a printing. 
After realizing my love for the design, I decided to seek for new 
horizons studying UX/UI Design.</p>
            </div>
        </div>
    </>
  )
}

export default About