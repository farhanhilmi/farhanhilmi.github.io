import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import NavBar from './NavBar';

import '../assets/css/App.css';
import '../assets/css/mediaQuery.css';

import projectData from '../projectData';
import Contact from './Contact';

const ProjectItem = ({ id, title, img, tools, description }) => {
  const history = useHistory();
  const detailProjHandler = (id) => {
    const project = projectData.filter((proj) => proj.id === id);
    history.push(`/portfolio/${project[0].id}`);
    window.scrollTo(0, 0);
  };

  return (
    <div className='portfolio-list' onClick={() => detailProjHandler(id)}>
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
          {projectData.map((project) => {
            return (
              <ProjectItem
                key={project.id}
                id={project.id}
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
