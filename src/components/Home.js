import '../assets/css/App.css';

const LeftSide = () => {
  return (
    <section className='one'>
      <div>
        <p>Software Engineer</p>
      </div>
      <div>
        <h1>I am a student and developer based in Indonesia.</h1>
        <p>
          In this modern era it is impossible for you not to work with
          developers. As a Software Developer, it is imperative to provide the
          best solution for your problem.
        </p>
      </div>
      <button className='btn text-underline'>Let's chat with me</button>
    </section>
  );
};

const RightSide = () => {
  return (
    <section className='two'>
      <h2>Right Side</h2>
    </section>
  );
};

function Home() {
  return (
    <section className='home-section' id='home'>
      <LeftSide />
      <RightSide />
    </section>
  );
}

export default Home;
