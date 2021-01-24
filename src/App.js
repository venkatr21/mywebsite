import React from 'react';
import MyNav from './components/NavbarComp';
import Leadtitle from './components/LeadTitle';
import Pageender from './components/PageEnder';
import ContactFoot from './components/ContactAndFoot';
import Educat from './components/Education';
import About from './components/Aboutme';
import Proj from './components/Myprojects';
import Extras from './components/Contests'
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div id='container wrap'>
    <div id='container-fluid' id='leadp'>
    <div className="container" id='homep'>
      <MyNav />
      <br/>
      <br/>
      <Leadtitle/>
      <Pageender />
    </div>
    </div>
    <div id='about'>
    <br/><br/>
      <About />
    </div>
    <div id='education'>
    <br/>
    < Educat />
    </div>
    <div id='projects'>
    <br/>
    < Proj />
    <br/>
    <br/>
    </div>
    <div align="center" id='contests'>
    <br/>
    < Extras />
    <br/>
    <br/>
    </div>
    <div id='footer'>
    <br/>
      <ContactFoot />
    </div>
    </div>

  );
}

export default App;
