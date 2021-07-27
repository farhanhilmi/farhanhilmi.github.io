import '../assets/css/App.css';

const LeftSide = () => {
  return (
    <section className='one'>
      <div className='nameLine'>
        <p>About Me</p>
      </div>
      <h1>Hello! I’m Farhan Hilmi</h1>
      <h3>Good cooperation begin with a good introduction</h3>
      <p>
        I am currently in my third year of college, at university I joined
        Enterprise Data Engineering Laboratory as Data Engineer and Enterprise
        System Development as Software Development &amp; Research Lab Assistant.
        I've worked on freelance projects as well as personal projects. I always
        believe in what I do, curious about in many things, and always trying to
        improve the quality of my work.
      </p>
      <button className='btn cv hidden'>
        <i className='fas fa-file '></i>Download CV
      </button>
      <div className='about-button-social'>
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
          <i className='fab fa-github fa-lg'></i>Github
        </button>
        <button
          className='btn'
          onClick={() =>
            window.open(
              'https://www.linkedin.com/in/farhan-hilmi/',
              '_blank',
              'noopener noreferrer',
            )
          }
        >
          <i className='fab fa-linkedin fa-lg'></i>LinkedIn
        </button>
      </div>
    </section>
  );
};

const RightSide = () => {
  return (
    <section className='two'>
      <div className='nameLine'>
        <p>Skills</p>
      </div>
      <p>Some of the languages and tool I use</p>
      <div className='listSkill'>
        <div>
          <ul>
            <li>JavaScript</li>
            <li>Python</li>
            <li>PHP</li>
            <li>Java</li>
            <li>Dart</li>
          </ul>
        </div>

        <div>
          <ul>
            <li>NodeJS</li>
            <li>ReactJS</li>
            <li>MongooDB</li>
            <li>MySQL</li>
            <li>Flutter</li>
            <li>Figma</li>
            <li>Adobe XD</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id='about' className='about-section'>
      <LeftSide />
      <RightSide />
    </section>
  );
};

export default About;
