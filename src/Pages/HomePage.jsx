import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import './HomePage.css';
import video from '../assets/waves.mp4';
import RandomCountries from './RandomCountries';
import img1 from '../assets/BBCTravel.jpg';
import img2 from '../assets/R.png';
import img3 from '../assets/usa.png';
import img4 from '../assets/travel.png'
import Footer from '../components/Footer';








const HomePage = () => {
  const [selectCountry, setSelectCountry] = useState([]);
  const [selectedCountryId, setSelectedCountryId] = useState('');
  
 
  const fetchCountry = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/countries`);
      if (response.ok) {
        const countries = await response.json();
        setSelectCountry(countries);
        console.log(countries)
      }
    } catch (error) {
      console.log('Error:', error);
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
    <div className="video-container">
      <video src={video} muted autoPlay loop type="video/mp4"></video>
     <div className="content">
     <h1 className='smallText'>EXPLORE.DREAM.DISCOVER</h1>
      <h3>"The best view comes after the hardest climb."</h3>
      <h6>This is a Travel tales featuring beautiful destinations,new experinences,hidden gems around the world...</h6>
    <br/>
    <h6>Please tag along!
    </h6>
    <section className="home">
    <select onChange={handleChange} value={selectedCountryId} className="select">
      <option className='option' value="">Select Country</option>
      {selectCountry.map((country) => (
       
       <option key={country.id} value={country.id}>
        {country.name}
        </option>
        
      
      ))}
  </select>
  <Link to={`/countries/${selectedCountryId}`}>
    <button type="button" style={{background:'white',color:'black',border:'1px solid black'}} className="btn btn-outline-dark">Continue</button>
  </Link>
 
  </section>

     </div>
   
    </div>
    
    <div className='featured_f'>
      <div style={{flex: 2, height: '3px', backgroundColor: 'black'}} />
        <h1 >Featured</h1>
       <div style={{flex: 2, height: '3px', backgroundColor: 'black'}} />
  <section className='image_container'>
  <img src={img1} alt="Image 1" />
  <img src={img2} alt="Image 2" />
  <img src={img3} alt="Image 3" />
  <img src={img4} alt="Image 4" />
  </section>
  
</div>

  <div className='destination_dm'>
  <div style={{flex: 1, height: '3px', backgroundColor: 'black'}} />
    <h1>MOST VISTED DESTINATION</h1>
    <div style={{flex: 1, height: '3px', backgroundColor: 'black'}} />
    <div className='random_container'>

      
      <RandomCountries /> 
      <RandomCountries />
      <RandomCountries />
      <RandomCountries />
      
      
    
    </div>
   

  </div>
  <Footer />
  

    </>
  
);
    
}

export default HomePage
