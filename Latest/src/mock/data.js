import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Apoorv Tomar',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: `Created multiple web apps starting with requirements gathering, designing, developing, refactoring, and code implementation
            Implemented the redesigned user dashboard with better UX and performance using JavaScript.Created multiple landing
            pages using popular frontend frameworks like Angular, library like ReactJS and Backend using Nodejs.Facilitate
            team performance on current tasks`,
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://drive.google.com/file/d/1zljvG3F9nqw5MG1AwDJr9fFmIXH8Shx8/view', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project1.jpg',
    title: 'So Delhi Website',
    info:
      'SO DELHI, it is top guide to New Delhi curated by local experts covering Food, Event, LifeStyle etc.',
    info2: '',
    url: 'https://so.city/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project2.jpg',
    title: 'So Share Website',
    info:
      'So Share is a collaborative co-working space for those in the creative, content & digital space.',
    info2: '',
    url: 'https://www.soshare.in/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project3.png',
    title: 'JSON differentiator',
    info: 'This is a project in which you can compare two JSON files.',
    info2: '',
    url: 'https://json-differentiator.web.app/',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'apoorv_tomar2222@yahoo.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    // {
    //   id: nanoid(),
    //   name: 'twitter',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'whatsapp',
      url: 'https://api.whatsapp.com/send?phone=+919899948270&text=Hi+Apoorv+How+are+you&source&data&app_absent&lang=en',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/apoorvtomar/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/apoorvtomar2222',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
