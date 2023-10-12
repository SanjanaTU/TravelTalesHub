import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import '../Pages/TouristDetail.css'
import Footer from "../components/Footer";

const TouristDetail = () => {
  const{touristId} = useParams()
  const [tourist, setTourist] = useState([]);

  const fetchAllTourist = async () => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/tourist/${touristId}`);
    if (response.ok) {
      const allTourist = await response.json();
      setTourist(allTourist);
      console.log(allTourist);
    }
  };

  useEffect(() => {
    fetchAllTourist();
  }, []);
  return (
    <div>
      <Link to={`/tourist/${tourist?.id}`}></Link>
      {tourist && (
        <div className="Tourist">
          <h1>{tourist.placeName}</h1>
          <img
            src={tourist.placeImage}
            alt={tourist.placeName}
            style={{ width: "300px", height: "350px" }}
          />
            <p>{tourist.description}</p>
        </div>
      )}
       <Footer />
    </div>
   
  );
};

export default TouristDetail;
