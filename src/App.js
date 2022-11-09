
import './App.css';
import LandingPage from "./components/LandingPage/landingpage";
import TurfListedProcess from "./components/TurfListedProcess/turflistedprocess";
import AboutEnturf from "./components/AboutEnturf/about";
import SmartTurf from './components/SmartTurf/smartturf';
import Contact from './components/ContactForm/contact';
import Advantage from './components/Advantageofenturf/advantage';
import React, { Component }  from 'react';

function App() {
  return (
    <>
    <div>
      <LandingPage></LandingPage>
    
      {/* <TurfListedProcess></TurfListedProcess>
      <AboutEnturf></AboutEnturf>
      <SmartTurf></SmartTurf>
      <Advantage></Advantage>
      <Contact></Contact> */}
      </div>
    </>
  );
}

export default App;
