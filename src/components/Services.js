import '../assets/css/App.css';
import logoFrontEnd from '../assets/logo/frontend.png';
import logoUX from '../assets/logo/ux.png';
import logoBackEnd from '../assets/logo/code.png';

const cardServices = [
  {
    id: 1,
    title: 'Front-End',
    img: logoFrontEnd,
    text: 'I develop front-end with mobile first principle, to ensure responsiveness across all devices.',
    margin: 70,
  },
  {
    id: 2,
    title: 'Back-End',
    img: logoBackEnd,
    text: 'Every app needs someone who is responsible for your data flow and data organization. I ensuring everything on the server-side actually works.',
    margin: 70,
  },
  {
    id: 3,
    title: 'UI/UX Design',
    img: logoUX,
    text: 'Designing digital software products to increase your customer satisfaction',
    margin: 0,
  },
];

const Card = ({ title, text, img, margin }) => {
  // console.log(margin);
  return (
    <div className='card' style={{ marginRight: `${margin}px` }}>
      <div className='circle'>
        <div></div>
      </div>
      <div class='card-img'>
        <img src={img} alt='' srcSet='' />
      </div>

      <div className='card-title'>
        <h2>{title}</h2>
        <hr />
      </div>

      <div class='card-text'>
        <p>{text}</p>
      </div>
    </div>
  );
};

const Service = () => {
  return (
    <section id='services' className='services-section'>
      <div className='nameTwoLine'>
        <p>Services</p>
      </div>
      <h1 class='titleSection'>What I Do?</h1>
      <div className='services-card'>
        {cardServices.map((services) => {
          return (
            <Card
              key={services.id}
              title={services.title}
              img={services.img}
              text={services.text}
              margin={services.margin}
            />
          );
        })}
        {/* <FrontEnd
          title='Front-End'
          text='I develop front-end with mobile first principle, to ensure
          responsiveness across all devices.'
        />
        <BackEnd
          title='Back-End'
          text='Every app needs someone who is responsible for your data flow and data organization. I ensuring everything on the server-side actually works.'
        /> */}
      </div>
    </section>
  );
};

export default Service;
