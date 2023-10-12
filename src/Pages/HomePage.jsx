import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import "./HomePage.css";
import video from "../assets/waves.mp4";
import RandomCountries from "./RandomCountries";
import img1 from "../assets/BBCTravel.jpg";
import img2 from "../assets/R.png";
import img3 from "../assets/usa.png";
import img4 from "../assets/travel.png";
import Footer from "../components/Footer";
import TouristRandom from "./TouristRandom";
import NavBar from "../components/NavBar";
import img5 from "../assets/img1.jpeg"
import img6 from '../assets/me(3).jpeg'

const HomePage = () => {
  const [selectCountry, setSelectCountry] = useState([]);
  const [selectedCountryId, setSelectedCountryId] = useState("");

  const fetchCountry = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/countries`);
      if (response.ok) {
        const countries = await response.json();
        setSelectCountry(countries);
        console.log(countries);
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  useEffect(() => {
    fetchCountry();
  }, []);

  const handleChange = (event) => {
    setSelectedCountryId(event.target.value);
  };

  return (
    <>
      <NavBar />
      <div className="video-container">
        <video src={video} muted autoPlay loop type="video/mp4"></video>
        <div className="content">
          <h1 className="smallText">EXPLORE.DREAM.DISCOVER</h1>
          <h3>"The best view comes after the hardest climb."</h3>
          <h6>
            This is a Travel tales featuring beautiful destinations,new
            experinences,hidden gems around the world...
          </h6>
          <br />
          <h6>Please tag along!</h6>
          <section className="home">
            <select
              onChange={handleChange}
              value={selectedCountryId}
              className="select"
            >
              <option className="option" value="">
                Select Country
              </option>
              {selectCountry.map((country) => (
                <option key={country.id} value={country.id}>
                  {country.name}
                </option>
              ))}
            </select>
            <Link to={`/countries/${selectedCountryId}`}>
              <button
                type="button"
                style={{
                  background: "white",
                  color: "black",
                  border: "1px solid black",
                }}
                className="btn btn-outline-dark"
              >
                Continue
              </button>
            </Link>
          </section>
        </div>
      </div>

      <div className="featured_f">
        <h1>
          <span className="line"></span>FEATURED BY
          <span className="line"></span>
        </h1>

        <section className="image_container">
          <img src={img1} alt="Image 1" />
          <img src={img2} alt="Image 2" />
          <img src={img3} alt="Image 3" />
          <img src={img4} alt="Image 4" />
        </section>
      </div>

      <div className="destination_dm">
        <h1>
          <span className="line"></span>DESTINATION
          <span className="line"></span>
        </h1>

        <div className="random_container">
          <RandomCountries />
          <RandomCountries />
          <RandomCountries />
          <RandomCountries />
        </div>
      </div>

      <div className="random_tourist">
        <h1>
          <span className="line"></span>TOURIST PLACES<span className="line"></span>
        </h1>
        <div className="random_t">
          <TouristRandom />
          <TouristRandom />
          <TouristRandom />
          <TouristRandom />
        </div>
      </div>

      <div className="team-container">
  <h1>
    <span className="line"></span>We The Team<span className="line"></span>
  </h1>
  <div className="team-members">
    <div className="team-member">
      <img src={img5} alt='Sanjana' className="team-image" />
    </div>
    <div className="team-member">
      <img src={img6} alt='Sushma' className="team-image" />
    </div>
  </div>
  <div className="team-description">
    <p>We, two remarkable women with diverse backgrounds and a shared passion for travel, have come together to create an inspiring travel blog project. Sushma's journey from India to the Netherlands, along with her family, speaks of her courage and adaptability in the face of change. Her background in technology and fashion designing has added unique dimensions to her life, and now, she's delving into web development at Ironhack. Sanjana, on the other hand, brings a strong educational foundation in Computer Applications and a deep enthusiasm for exploration to the table. Together,we dedicated to sharing our travel experiences, insights, and recommendations, offering a valuable resource for fellow adventurers. Our journey is a testament to the power of passion and the pursuit of new horizons. Join us on our enriching voyage of discovery and inspiration.</p>
  </div>
</div>

     

    

      <div className="newsletter-container">
        <h1>Newsletter</h1>
        <p>
          Subscribe to my newsletter for the latest blog posts, tips, & travel
          guides. Let's stay updated!
        </p>
        <input type="text" placeholder="Enter your email" />
        <button type="submit">SUBSCRIBE</button>
      </div>

      
      <Footer />
    </>
  );
};

export default HomePage;
