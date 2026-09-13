

import chatlyImage from '../assets/projects/chatly.png'
import weatherImage from '../assets/projects/weather.png'
import portfolioImage from '../assets/projects/portfolio.png'
import emberOliveImage from '../assets/projects/ember-olive.jpeg'

const projects = [
  {
    id: 1,
    title: 'Chatly - Chat Application',
    type: 'Full-Stack Project',
    description:
      'A full-stack chat application with user authentication, one-to-one messaging, groups, status updates and media features.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    image: chatlyImage,
    liveUrl: 'https://chat-application-pi-lemon.vercel.app',
    githubUrl: 'https://github.com/Sanojkumarchauhan/Chatly',
  },

  {
    id: 2,
    title: 'Weather App',
    type: 'Web Application',
    description:
      'A responsive weather application that allows users to search for a city and view weather information and upcoming weather conditions.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Weather API'],
    image: weatherImage,
    liveUrl: 'https://sanojkumarchauhan.github.io/Weather-app/',
    githubUrl: 'https://github.com/Sanojkumarchauhan/Weather-app',
  },

  {
    id: 3,
    title: 'Personal Portfolio',
    type: 'Personal Project',
    description:
      'A modern responsive portfolio website showcasing my skills, services and projects as a MERN Stack Developer.',
    tech: ['React.js', 'Vite', 'JavaScript', 'CSS3'],
    image: portfolioImage,
    liveUrl: 'https://sanojkumarchauhan.github.io/sanoj-portfolio/',
    githubUrl: 'https://github.com/Sanojkumarchauhan/sanoj-portfolio',
  },

  {
    id: 4,
    title: 'Ember & Olive - Restaurant Website',
    type: 'Client Showcase Project',
    description:
      'A premium responsive restaurant website concept designed to showcase modern dining experiences, menu, gallery and table reservation flow.',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    image: emberOliveImage,
    liveUrl: 'https://restaurant-showcase-lemon.vercel.app',
    githubUrl: 'https://github.com/Sanojkumarchauhan/ember-olive-restaurant',
  },

]

export default projects