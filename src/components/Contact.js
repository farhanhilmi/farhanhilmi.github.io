import React from 'react';
import emailjs from 'emailjs-com';
import SweetAlert from 'react-bootstrap-sweetalert';

import '../assets/css/App.css';
import logoPhone from '../assets/logo/phone.png';
import logoChat from '../assets/logo/chat.png';
import logoCoffee from '../assets/logo/coffee.png';

import logoUser from '../assets/logo/user.png';
import logoMsg from '../assets/logo/msg.png';
import logoPencil from '../assets/logo/pencil.png';

import emailjsData from '../emailjsData';

const ItemsContact = ({ title, img, value }) => {
  return (
    <div className='info'>
      <img src={img} alt='' />
      <div>
        <p>{title}</p>
        <h4>{value}</h4>
      </div>
    </div>
  );
};

const listContact = [
  {
    id: 1,
    title: 'Call Me',
    img: logoPhone,
    value: '(+62)89 668 872 106',
  },
  {
    id: 2,
    title: 'Chat With Me',
    img: logoChat,
    value: 'farhanhilmi32@gmail.com',
  },
  {
    id: 1,
    title: 'Meet Me',
    img: logoCoffee,
    value: 'Sumedang, West Java, Indonesia',
  },
];

const LeftSide = () => {
  return (
    <section className='one'>
      <div className='title'>
        <p>Get In Touch</p>
        <h2>Let's Talk Or Meet With Me</h2>
      </div>
      {listContact.map((contact) => {
        return (
          <ItemsContact
            key={contact.id}
            title={contact.title}
            img={contact.img}
            value={contact.value}
          />
        );
      })}
    </section>
  );
};
// service_uwhkdmc;
class RightSide extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
    };
  }

  onNameChange(event) {
    this.setState({ name: event.target.value });
  }

  onEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  onMessageChange(event) {
    this.setState({ message: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
    emailjs
      .sendForm(
        emailjsData.serviceID,
        emailjsData.template,
        event.target,
        emailjsData.userID,
      )
      .then(
        (result) => {
          console.log(result.text);
          alert('Success');

          this.resetForm();
        },
        (error) => {
          console.log(error.text);
        },
      );
  }

  resetForm() {
    this.setState({ name: '', email: '', message: '' });
  }

  render() {
    return (
      <section className='two'>
        <div className='title'>
          <p>Contact Here</p>
          <h2>Tell me your project</h2>
        </div>

        <form
          action=''
          id='contact-form'
          method='POST'
          onSubmit={this.handleSubmit.bind(this)}
        >
          <div className='form'>
            <div className='form-input'>
              <img src={logoUser} alt='' srcset='' />
              <input
                type='text'
                placeholder='Enter your name'
                value={this.state.name}
                name='from_name'
                onChange={this.onNameChange.bind(this)}
              />
            </div>
            <div className='form-input'>
              <img src={logoMsg} alt='' srcset='' />
              <input
                placeholder='Enter your email address'
                value={this.state.email}
                type='email'
                name='from_email'
                onChange={this.onEmailChange.bind(this)}
              />
            </div>
            <div className='form-input'>
              <img src={logoPencil} alt='' srcset='' />
              <textarea
                cols='100'
                id=''
                name='message'
                placeholder='Tell me about yur project or anything you want to ask'
                value={this.state.message}
                onChange={this.onMessageChange.bind(this)}
              ></textarea>
            </div>

            <div className='form-submit'>
              <button type='submit'>Submit</button>
            </div>
          </div>
        </form>
      </section>
    );
  }
}

const Contact = () => {
  return (
    <section id='contact' className='contact-section'>
      <LeftSide />
      <RightSide />
    </section>
  );
};

export default Contact;
