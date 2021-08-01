import imgMeal from './assets/img/mealapp.png';
import imgMeal1 from './assets/img/mealapp-1.png';
import imgMeal2 from './assets/img/mealapp-2.png';

import imgNetflix from './assets/img/netflixclone.png';
import imgNetflix1 from './assets/img/netflixclone-1.png';
import imgNetflix2 from './assets/img/netflixclone-2.png';
import imgNetflix3 from './assets/img/netflixclone-3.png';

import imgHobby from './assets/img/findhobby.png';
import imgHobby1 from './assets/img/findhobby-1.png';
import imgHobby2 from './assets/img/findhobby-2.png';
import imgHobby3 from './assets/img/findhobby-3.png';

import imgChat from './assets/img/chatapp.png';
import imgChat1 from './assets/img/chatapp-1.png';
import imgChat2 from './assets/img/chatapp-2.png';

const projectItems = [
  {
    id: 1,
    title: 'Meal App SPA',
    img: imgMeal,
    tools: 'JavaScript, Bootstrap, Webpack',
    description:
      'Single Page Application based platform to find all kinds of food around the world you are looking for, developed using Bootstrap, Vanilla JavaScript and Webpack and also take API from themealdb.',
    previews: [imgMeal1, imgMeal2],
  },
  {
    id: 2,
    title: 'Find Hobby',
    img: imgHobby,
    tools: 'Python, Django, MySQL, JavaScript, Bootstrap',
    description:
      'Platform to accommodate people who have interests or hobbies but do not have a supportive environment then on these platforms they can get together. developed using Django on the backend, the database using MySQL, and the front-end using Vanilla JavaScript & Bootstrap',
    previews: [imgHobby1, imgHobby2, imgHobby3],
  },
  {
    id: 3,
    title: 'Netflix Clone ReactJS',
    img: imgNetflix,
    tools: 'JavaScript, ReactJS, Bootstrap, Firebase',
    description:
      'A clone website application from the Netflix website that is made as close as possible to the original, in application development using ReactJS as a front-end tool and also with the Bootstrap framework and API from TMDB',
    previews: [imgNetflix1, imgNetflix2, imgNetflix3],
  },
  {
    id: 4,
    title: 'Chat App',
    img: imgChat,
    tools: 'JavaScript, CSS, Bootstrap',
    description:
      'A website-based chat UI application by applying a glass design. The application developed is still in the UI or front-end stage using Vanilla JavaScript and Bootstrap CSS',
    previews: [imgChat1, imgChat2],
  },
];

export default projectItems;
