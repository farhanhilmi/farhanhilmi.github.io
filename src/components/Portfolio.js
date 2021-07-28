import React from 'react';

import NavBar from './NavBar';

import '../assets/css/App.css';
import '../assets/css/mediaQuery.css';

import projectItems from '../projectData';
import Contact from './Contact';

const ProjectItem = ({ title, img, tools, description }) => {
  return (
    <div className='portfolio-list'>
      <div className='img-portfolio'>
        <img src={img} alt='' />
      </div>

      <div className='body-portfolio'>
        <h2>{title}</h2>
        <div className='tool-portfolio'>
          <h3>Tools &amp; Languages</h3>
          <p>{tools}</p>
        </div>
        <div className='description-portfolio'>
          <h3>Description</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

const Portfolio = () => {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <main style={{ width: '100%' }}>
        <section className='section-portfolio'>
          <h1 className='titleSection'>Projects I've worked on</h1>
          {projectItems.map((project) => {
            return (
              <ProjectItem
                key={project.id}
                title={project.title}
                img={project.img}
                tools={project.tools}
                description={project.description}
              />
            );
          })}
          <h2 class='tagline'>Many amazing things are coming</h2>
        </section>
        <Contact />
      </main>
      {/* <Link to={`${match.url}/rendering`}>Rendering with React</Link>{' '}
      <Route path={`${match.url}/:topicId`} component={Home} /> */}
    </div>
  );
};

export default Portfolio;
