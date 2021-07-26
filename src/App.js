import React, { Suspense, lazy, useState, useCallback } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from 'react-scroll';

import './assets/css/App.css';

import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';

// const ScrollLink = Scroll.ScrollLink;

// function Home() {
//   return <h2>Home</h2>;
// }

const NavBar = () => {
  return (
    <nav className='topNavbar'>
      <h3>
        Farhan <span>Hilmi</span>
      </h3>
      <ul>
        <li>
          <Link
            activeClass='active'
            to='home'
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            activeClass='active'
            to='about'
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            activeClass='active'
            to='services'
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            activeClass='active'
            to='projects'
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            activeClass='active'
            to='journey'
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            My Journey
          </Link>
        </li>
        <li>
          <Link
            activeClass='active'
            to='contact'
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

function App() {
  return (
    // <Router>
    //   <Suspense fallback={<div>Loading...</div>}>
    //     <Switch>
    //       <Route exatch path='/' component={Home} />
    //       {/* <Route path='/about' component={About} /> */}
    //     </Switch>
    //   </Suspense>
    // </Router>
    // <Router>
    <div>
      <header>
        <NavBar />
      </header>
      <main>
        <Home />
        <About />
        <Services />
      </main>
      {/* <Switch> */}
      {/* <Route path='/about'>
            <About />
          </Route>
          <Route path='/users'>
            <Users />
          </Route> */}
      {/* <Route path='/'>
            <Home />
          </Route> */}
      {/* </Switch> */}
    </div>
    // </Router>
  );
}

export default App;
