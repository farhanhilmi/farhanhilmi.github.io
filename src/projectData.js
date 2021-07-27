import imgMeal from './assets/img/mealapp.png';
import imgNetflix from './assets/img/netflixclone.png';
import imgHobby from './assets/img/findhobby.png';
import imgChat from './assets/img/chatapp.png';

const projectItems = [
  {
    id: 1,
    title: 'Meal App SPA',
    img: imgMeal,
    tools: 'JavaScript, Bootstrap, Webpack',
    description:
      'Single Page Application based platform to find all kinds of food around the world you are looking for, developed using Bootstrap, Vanilla JavaScript and Webpack and also take API from themealdb.',
  },
  {
    id: 2,
    title: 'Find Hobby',
    img: imgHobby,
    tools: 'Python, Django, MySQL, JavaScript, Bootstrap',
    description:
      'Platform to accommodate people who have interests or hobbies but do not have a supportive environment then on these platforms they can get together. developed using Django on the backend, the database using MySQL, and the front-end using Vanilla JavaScript & Bootstrap',
  },
  {
    id: 3,
    title: 'Netflix Clone ReactJS',
    img: imgNetflix,
    tools: 'JavaScript, ReactJS, Bootstrap, Firebase',
    description:
      'A clone website application from the Netflix website that is made as close as possible to the original, in application development using ReactJS as a front-end tool and also with the Bootstrap framework and API from TMDB',
  },
  {
    id: 4,
    title: 'Chat App',
    img: imgChat,
    tools: 'JavaScript, CSS, Bootstrap',
    description:
      'A website-based chat UI application by applying a glass design. The application developed is still in the UI or front-end stage using Vanilla JavaScript and Bootstrap CSS',
  },
];

export default projectItems;
