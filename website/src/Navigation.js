import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import About from './About.js';
import Projects from './Projects.js';
import Contact from './Contact.js';

const Navigation = () => {
  return (
    <Router>
      <div id='mainContainer'>
        <div id='about'>
          <Link to='/about'>About</Link>
        </div>
        <div id='projects'>
        <Link to='/projects'>Projects</Link>
        </div>
        <div id='contact'>
        <Link to='/contact'>Contact</Link>
        </div>
      </div>

      <Switch>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/projects'>
          <Projects />
        </Route>
        <Route path='/contact'>
          <Contact />
        </Route>
      </Switch>
    </Router>
  )
}


export default Navigation;