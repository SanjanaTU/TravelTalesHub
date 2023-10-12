import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const TouristRandom = () => {
  const { touristId } = useParams();
  const [tourist, setTourist] = useState(null);
  const [previousTourist, setPreviousTourist] = useState([]);

  const fetchRandomTourist = async () => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/tourist`);
    const allTourist = await response.json();

    const availableTourist = allTourist.filter(
      (tourist) => !previousTourist.includes(tourist.id)
    );

    if (availableTourist.length > 0) {
      const randomIndex = Math.floor(Math.random() * availableTourist.length);
      const randomTourist = availableTourist[randomIndex];
      setTourist(randomTourist);
      setPreviousTourist([...previousTourist, randomTourist.id]);
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

  return tourist ? (
    <Link to={`/tourist/${tourist.id}`}>
      <div className="Randomtourist">
        <>
          <img
            src={tourist.placeImage}
                            style={{ width: "210px", height: "150px" , borderRadius:'25px'}}
            alt={tourist.placeName}
          />
          <p>{tourist.placeName}</p>
        </>
      </div>
    </Link>
  ) : null;
};

export default TouristRandom;
