import React from 'react';
import { Link } from 'react-router-dom';

import '../assets/css/App.css';

import projectItems from '../projectData';

class ListProject extends React.Component {
  render() {
    return (
      <>
        <div className='cardProject'>
          <div>
            <img src={this.props.img} alt='' />
          </div>
          <h4>{this.props.title}</h4>
        </div>
      </>
    );
  }
}

const Project = () => {
  return (
    <section className='project-section' id='projects'>
      <div className='nameTwoLine'>
        <p>Projects</p>
      </div>
      <h1 className='titleSection'>Projects I've worked on</h1>
      <div className='listProject'>
        {projectItems.map((project) => {
          return (
            <ListProject
              key={project.id}
              title={project.title}
              img={project.img}
            />
          );
        })}
      </div>

      <Link
        to='/portfolio'
        className='btnProj'
        onClick={() => window.scrollTo(0, 0)}
      >
        <button className='btn'>See more projects</button>
      </Link>
    </section>
  );
};

export default Project;
