import React from 'react';
import LandingPage from './components/LandingPage'
import About from './components/About';
import Services from './components/Services';
import Resume from './components/Resume'
import Contact from './components/Contact';


const App = () => {
  return (
    <div>
      <LandingPage/>
      <About/>
      <Resume/>
      <Services/>
      <Contact/>

    </div>
  );
}

export default App;
