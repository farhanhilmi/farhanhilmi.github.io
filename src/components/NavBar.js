import { Link as LinkPage, useLocation } from 'react-router-dom';

import { Link } from 'react-scroll';

const NavItemHome = () => {
  return (
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

const NavItemPortfolio = () => {
  return (
    <ul>
      <li>
        <LinkPage to='/'>Back to home</LinkPage>
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
  return (
    <nav className='topNavbar' id='navBar'>
      <h3>
        <LinkPage to='/' className='homeName'>
          Farhan <span>Hilmi</span>
        </LinkPage>
      </h3>
      {location.pathname === '/portfolio' ? NavItemPortfolio() : NavItemHome()}
    </nav>
  );
};

export default NavBar;
