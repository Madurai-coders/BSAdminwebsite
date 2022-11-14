
import './App.css';
import LandingPage from "./components/LandingPage/landingpage";
import AIsmartturf from './components/AIsmartturf/AIsmartturf';
import React, { Component }  from 'react';
import Advantage from './components/Advantageofenturf/advantage';
import Smartturf from './components/Aboutsmartturf/smartturf';
import ContactForm from './components/ContactForm/contact'
function App() {
  return (
    <>
    <div className='bg'>
      <LandingPage></LandingPage>
 <AIsmartturf></AIsmartturf>
 <Advantage></Advantage>
 <Smartturf></Smartturf>
 <ContactForm></ContactForm>
      </div>
    </>
  );
}

export default App;
