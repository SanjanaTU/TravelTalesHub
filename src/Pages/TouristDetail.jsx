import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const TouristDetail = () => {
    
    const [tourist,setTourist] = useState([])

    const fetchAllTourist = async () =>{
        const response = await fetch(`${import.meta.env.VITE_API_URL}/tourist`)
       if(response.ok){
        const allTourist = await response.json()
        setTourist(allTourist)
        console.log(allTourist)
       }
    
    }

    useEffect(()=>{
        fetchAllTourist()
    },[])
  return (
    <div>
  <Link to={`/tourist/${tourist?.id}`}>
      <div className="Tourist">
        {tourist && (
          <>
            <img src={tourist.placeImage} style={{ width: '210px', height: '150px' }}  alt={tourist.placeName} />
            <p>{tourist.placeName}</p>
            <p>{tourist.description}</p>
          </>
        )}
      </div>
    </Link>
    </div>
  )
}

export default TouristDetail
