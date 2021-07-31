import React, { useState, Fragment } from 'react';
import { useParams } from 'react-router-dom';

import NavBar from './NavBar';

import '../assets/css/App.css';
import '../assets/css/mediaQuery.css';

import projectData from '../projectData';
import Contact from './Contact';

import photos1 from '../assets/img/findhobby-1.png';
import photos2 from '../assets/img/findhobby-2.png';
import photos3 from '../assets/img/findhobby-3.png';
import closeBtn from '../assets/logo/close.png';

const ZoomImg = ({ image }) => {
  const closeOverlay = () => {
    document.getElementById('overlayImg').classList.add('hidden');
    document.querySelector('html').classList.remove('overflowHidden');
  };

  return (
    <div className='overlay hidden' id='overlayImg' onClick={closeOverlay}>
      <div className='img-container' onClick={(e) => e.stopPropagation()}>
        <img src={image} alt='' />
      </div>
      <img className='closeBtn' src={closeBtn} alt='' onClick={closeOverlay} />
    </div>
  );
};

const ProjectItem = ({ title, img, tools, description }) => {
  const [currentImg, setCurrentImg] = useState(img);
  const [previewImgs, setPreviewImgs] = useState([photos1, photos2, photos3]);

  const switchImg = (photos) => {
    const imgIndex = previewImgs.findIndex((item) => item === photos);
    const newPreview = [...previewImgs];
    newPreview[imgIndex] = currentImg;
    setCurrentImg(photos);
    setPreviewImgs(newPreview);
  };

  const openOverlay = () => {
    document.getElementById('overlayImg').classList.remove('hidden');
    window.scrollTo(0, 0);
    document.querySelector('html').classList.add('overflowHidden');
  };

  return (
    <Fragment>
      <ZoomImg image={currentImg} />

      <div className='portfolioDetail'>
        <div className='topBody'>
          <div className='img-portfolio'>
            <img src={currentImg} alt='' onClick={openOverlay} />
          </div>

          <div className='body-portfolio'>
            <h2>{title}</h2>
            <div className='tool-portfolio'>
              <h3>Tools &amp; Languages</h3>
              <p>{tools}</p>
            </div>
            <div className='photos'>
              <div>
                <img
                  src={previewImgs[0]}
                  alt=''
                  onClick={() => switchImg(previewImgs[0])}
                />
              </div>
              <div>
                <img
                  src={previewImgs[1]}
                  alt=''
                  onClick={() => switchImg(previewImgs[1])}
                />
              </div>
              <div>
                <img
                  src={previewImgs[2]}
                  alt=''
                  onClick={() => switchImg(previewImgs[2])}
                />
              </div>
            </div>
          </div>
        </div>

        <div className='description-portfolio'>
          <h3>Description</h3>
          <p>
            Platform to accommodate people who have interests or hobbies but do
            not have a supportive environment then on these platforms they can
            get together. developed using Django on the backend, the database
            using MySQL, and the front-end using Vanilla JavaScript &amp;
            Bootstrap Platform to accommodate people who have interests or
            hobbies but do not have a supportive environment then on these
            platforms they can get together. developed using Django on the
            backend, the database using MySQL, and the front-end using Vanilla
            JavaScript &amp; Bootstrap Platform to accommodate people who have
            interests or hobbies but do not have a supportive environment then
            on these platforms they can get together. developed using Django on
            the backend, the database using MySQL, and the front-end using
            Vanilla JavaScript &amp; Bootstrap.
            <br />
            <br />
            Platform to accommodate people who have interests or hobbies but do
            not have a supportive environment then on these platforms they can
            get together. developed using Django on the backend, the database
            using MySQL, and the front-end using Vanilla JavaScript &amp;
            Bootstrap Platform to accommodate people who have interests or
            hobbies but do not have a supportive environment then on these
            platforms they can get together. developed using Django on the
            backend, the database using MySQL, and the front-end using Vanilla
            JavaScript &amp; Bootstrap Platform to accommodate people who have
            interests or hobbies but do not have a supportive environment then
            on these platforms they can get together. developed using Django on
            the backend, the database using MySQL, and the front-end using
            Vanilla JavaScript &amp; Bootstrap
          </p>
          <button
            className='btn'
            onClick={() =>
              window.open(
                'https://github.com/farhanhilmi',
                '_blank',
                'noopener noreferrer',
              )
            }
          >
            <i className='fab fa-github fa-lg'></i>Github Repository
          </button>
        </div>
      </div>
    </Fragment>
  );
};

const PortfolioDetail = () => {
  const { id } = useParams();
  const project = projectData.filter((proj) => proj.id === +id);

  return (
    <div>
      <header>
        <NavBar />
      </header>
      <main style={{ width: '100%' }}>
        <section className='section-portfolio'>
          {/* <h1 className='titleSection'>Projects I've worked on Detail</h1> */}
          <ProjectItem
            key={project[0].id}
            title={project[0].title}
            img={project[0].img}
            tools={project[0].tools}
            description={project[0].description}
          />
          {/* <h2 class='tagline'>Many amazing things are coming</h2> */}
        </section>
        <Contact />
      </main>
    </div>
  );
};

export default PortfolioDetail;
