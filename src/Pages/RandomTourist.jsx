import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";

const RandomTourist = () => {
  const [tourist, setTourist] = useState(null);
  const [previoustourist, setPreviousTourist] = useState([]);

  const fetchRandomTourist = async () => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/tourist`);
    const alltourist = await response.json();

    
    const availabletourist = alltourist.filter(tourist => !previoustourist.includes(tourist.id));

    if (availabletourist.length > 0) {
      const randomIndex = Math.floor(Math.random() * availabletourist.length);
      const randomtourist = availabletourist[randomIndex];
      setTourist(randomtourist);
      setPreviousTourist([...previoustourist, randomtourist.id]);
    } else {
      
        setPreviousTourist([]);
    }
  };

  useEffect(() => {
    fetchRandomTourist();
    const intervalId = setInterval(() => {
        fetchRandomTourist();
    }, 20000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <Link to={`/tourist/${tourist?.id}`}>
      <div className="Randomtourist">
        {tourist && (
          <>
            <img src={tourist.placeImage} style={{ width: '210px', height: '150px' }}  alt={tourist.placeName} />
            <p>{tourist.placeName}</p>
          </>
        )}
      </div>
    </Link>
  );
};

export default RandomTourist;
