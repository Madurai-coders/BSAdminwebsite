
import './App.css';
import LandingPage from "./components/LandingPage/landingpage";
import TurfListedProcess from "./components/TurfListedProcess/turflistedprocess";
import AboutEnturf from "./components/AboutEnturf/about";
import SmartTurf from './components/SmartTurf/smartturf';
import Contact from './components/ContactForm/contact';
function App() {
  return (
    <>
      <LandingPage></LandingPage>
      <TurfListedProcess></TurfListedProcess>
      <AboutEnturf></AboutEnturf>
      <SmartTurf></SmartTurf>
      <Contact></Contact>
    </>
  );
}

export default App;
