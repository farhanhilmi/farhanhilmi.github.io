// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './assets/css/App.css';
import './assets/css/mediaQuery.css';

import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Project from './components/Project';
import Contact from './components/Contact';

function App() {
  // const divRef = createRef();
  // const dimensions = useRefDimensions(divRef);
  // console.log(`Width: ${dimensions.width}, height: ${dimensions.height}`);

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
      <header className='nav-normal'>
        <NavBar />
      </header>
      <main>
        <Home />
        <About />
        <Services />
        <Project />
        <Contact />
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

window.addEventListener('scroll', (e) => {
  const nav = document.querySelector('#navBar');
  if (window.pageYOffset > 0) {
    nav.classList.add('addShadow');
  } else {
    nav.classList.remove('addShadow');
  }
});

export default App;
