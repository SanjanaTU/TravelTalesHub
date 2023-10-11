import { Route, Routes } from 'react-router-dom'
import './App.css'
import React from 'react'
import Countries from './Pages/Countries'
import HomePage from './Pages/HomePage'
import CountriesDetailPage from './Pages/CountriesDetailPage'
import AddPlaces from './Pages/AddPlaces'
import Login from './Pages/Login'
import TouristPlaces from './Pages/TouristPlaces'
import RandomCountries from './Pages/RandomCountries'
import AboutUs from './Pages/AboutUs'
import OtherCountries from './Pages/otherCountries'






function App() {
    return (
      <div className='App'>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/OtherCountries' element={<OtherCountries />} />
          <Route path='/HomePage' element={<HomePage />} />
          <Route path='/countries' element={<Countries />} />
          <Route path='/countries/:countryId' element={<CountriesDetailPage />}/>
          <Route path='/AddPlaces/:countryId' element={<AddPlaces />} />
          <Route path='/Login' element={<Login />} />
          <Route path="/countries/:countryId/tourist/:touristId"></Route>
          <Route
          path="/countries/:countryId/tourist/:touristId"
          element={<TouristPlaces />} />
          <Route path='/countries/:countryId' element={<RandomCountries />} />
        <Route path="*" element={<h1>You Landed On Wrong Page</h1>} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path='/tourist/:touristId' element={<RandomTourist />} />
        </Routes>
        <Footer />
     
       
       
      </div>
   
    )
  }

  export default App