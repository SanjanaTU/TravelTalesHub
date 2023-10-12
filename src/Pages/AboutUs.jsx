import React from 'react';
import '../Pages/AboutUs.css';
import image1 from '../assets/me(1).jpeg';
import NavBar from '../components/NavBar';
import img2 from '../assets/img2.jpeg';
import Footer from '../components/Footer';

const AboutUs = () => {
  return (

  
   
    <div className="about-us-container">
         <NavBar />
                 <div className="about-me-container">
        <div className="about-me-card">
                    <div className="image-container">
            <img src={image1} alt="Image 1" className="profile-image" />
          </div>
          <h3>Sushma</h3>
          <div className="about-me-text" >
          <p >
            Thanks for visiting! I'm Sushma, and this is our travel blog project created during our web development course. I was born and raised in India, but I made the big move to the Netherlands just six months ago with my son and husband. This transition was particularly challenging for me as I had never been away from my parents and siblings before.
          </p>
          <p>
            My educational background includes a Bachelor of Technology (B.Tech), though I didn't work extensively in the coding field. 
          </p>
          <p>
            If you're looking for travel inspiration, our project is here to help you discover amazing tourist destinations.We're dedicated to sharing our travel experiences, tips, and recommendations to make your journeys truly memorable.
          </p>
          </div>
        </div>

        <div className="partner-card">
          
          <div className="image-container">
            <img src={img2} alt="Img2" className="profile-image" />
          </div>
          <h3>Sanjana TU</h3>
          <div className="about-me-text">
          <p >
            Greetings! I am Sanjana, a dedicated professional with a Master's degree in Computer Applications. My family and I embarked on an exciting journey to the Netherlands in November 2022. I extend my heartfelt gratitude for taking the time to explore our travel blog project, which is a product of our web development course at Ironhack.
          </p>
          <p>
            This endeavor is a testament to our passion for travel inspiration and our desire to share valuable insights about the incredible places we encounter along the way. We are committed to providing informative and engaging content to help fellow travelers discover the wonders of the world. Thank you for joining us on this enriching voyage of exploration and discovery.
          </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
