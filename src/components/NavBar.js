import { Link as LinkPage, useLocation } from 'react-router-dom';

import { Link } from 'react-scroll';

const NavItemHome = (closeNav) => {
  return (
    <ul className='nav-links'>
      <li>
        <Link
          onClick={closeNav}
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
          onClick={closeNav}
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
          onClick={closeNav}
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
          onClick={closeNav}
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
          onClick={closeNav}
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
      <li>
        <a
          href='https://bit.ly/frhnmiiCV'
          target='_blank'
          rel='noopener noreferrer'
          className='downloadCV'
        >
          Download CV
        </a>
      </li>
    </ul>
  );
};

const NavItemPortfolio = (closeNav) => {
  return (
    <ul className='nav-links'>
      <li>
        <LinkPage onClick={closeNav} to='/'>
          Back to home
        </LinkPage>
      </li>

      <li>
        <a
          href='https://bit.ly/frhnmiiCV'
          target='_blank'
          rel='noopener noreferrer'
          className='downloadCV'
        >
          Download CV
        </a>
      </li>
    </ul>
  );
};

const NavBar = () => {
  const location = useLocation();

  const closeNav = () => {
    let checkBoxState = document.querySelector('#nav-check').checked;
    if (checkBoxState) {
      document.getElementsByTagName('header')[0].className = 'nav-normal';
      document.querySelector('#nav-check').checked = false;
    }
  };

  const checkNav = () => {
    if (document.querySelector('#nav-check').checked) {
      document.getElementsByTagName('header')[0].className = 'nav-mobile';
    } else {
      document.getElementsByTagName('header')[0].className = 'nav-normal';
    }
  };

  return (
    <nav className='topNavbar' id='navBar'>
      <input type='checkbox' id='nav-check' onClick={checkNav} />
      <h3>
        <LinkPage to='/' className='homeName'>
          Farhan <span>Hilmi</span>
        </LinkPage>
      </h3>
      <div class='nav-btn'>
        <label htmlFor='nav-check'>
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>
      {location.pathname === '/'
        ? NavItemHome(closeNav)
        : NavItemPortfolio(closeNav)}
    </nav>
  );
};

export default NavBar;
