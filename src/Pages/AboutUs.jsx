import React from 'react';
import '../Pages/AboutUs.css';
import image from '../assets/me(1).jpeg';
import NavBar from '../components/NavBar'


const AboutUs = () => {
  return (
   
    <div>
    <NavBar/>
    
    <div>
      <img className='about-me-image'/>
      <h1 className='centre-heading'>About Us</h1>
      </div>
      <div className='about-me-card'>
      
        <h2>ABOUT ME</h2>
        <img src={image} alt="Image 1" style={{top:'10px',left:'10px',height:'120px',width:'100px'}}/>
        <h3>Sushma</h3>
        <p className='about-me-text'>
  Thanks for looking! I'm Sushma, and this is our travel blog project for our web development course. I was born and raised in India. I moved to the Netherlands six months ago, and I have a son. Moving to the Netherlands was really challenging for me because I hadn't been away from my parents and siblings until that point.
</p>
<p>
  I have an engineering background (B.Tech) but didn't work in the coding field that much. I had to take a break from work to take care of my son. During that time, I felt depressed being at home, so I decided to study Fashion Designing and opened a boutique. Later, my husband got a job offer here, so we moved to the Netherlands. It's been a roller coaster ride, but I'm still running the boutique from here.
</p>
<p>
  I thought about working in the tech field, so I joined Ironhack. If you had told me six weeks ago that I would be creating a webpage, I wouldn't have believed it. But now, I've done it, and I'm proud of myself.
</p>
<p>
  If you want to travel somewhere, this project will help you discover tourist places. Currently, our website has only a few places, but we will be updating it soon. We are dedicated to sharing our travel experiences, tips, and recommendations to make your journeys memorable.
</p>


      </div>
      <div className='about-me-card'>
        <h2>MY Partner</h2>
        <h3>Sanjana</h3>
      <p className='about-me-text'>
        We believe in delivering high-quality content and services while
        maintaining transparency and user satisfaction.
      </p>
    </div>
    </div>
  );
};

export default AboutUs;
