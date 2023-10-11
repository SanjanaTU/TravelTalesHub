import React, { useState, useEffect } from "react";
import './RandomCountries.css'
import { Link, useParams } from "react-router-dom";

const RandomCountries = () => {
  const [countries, setCountries] = useState(null);
  const [previousCountries, setPreviousCountries] = useState([]);

  const fetchRandomCountry = async () => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/countries`);
    const allCountries = await response.json();

    
    const availableCountries = allCountries.filter(country => !previousCountries.includes(country.id));

    if (availableCountries.length > 0) {
      const randomIndex = Math.floor(Math.random() * availableCountries.length);
      const randomCountry = availableCountries[randomIndex];
      setCountries(randomCountry);
      setPreviousCountries([...previousCountries, randomCountry.id]);
    } else {
      
      setPreviousCountries([]);
    }
  };

  useEffect(() => {
    fetchRandomCountry();
    const intervalId = setInterval(() => {
      fetchRandomCountry();
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <Link to={`/countries/${countries?.id}`}>
      <div className="RandomCountries">
        {countries && (
          <>
            <img src={countries.image} style={{ width: '210px', height: '150px' }}  alt={countries.name} />
            <p>{countries.name}</p>
          </>
        )}
      </div>
    </Link>
  );
};

export default RandomCountries;
