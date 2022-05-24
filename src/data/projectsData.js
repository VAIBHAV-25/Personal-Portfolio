import two from '../assets/svg/projects/two.svg'
import three from '../assets/svg/projects/three.svg'
import four from '../assets/svg/projects/four.svg'
import five from '../assets/svg/projects/five.svg'
import six from '../assets/svg/projects/six.svg'
import seven from '../assets/svg/projects/seven.svg'
import eight from '../assets/svg/projects/eight.svg'
import movie from '../assets/pdf/movie.png'
import portfolio from '../assets/pdf/portfolio.png'
import rubik from '../assets/pdf/rubik.jpg'
import algo from '../assets/pdf/algo.jpeg'
import made from '../assets/pdf/made.png'
import H from '../assets/pdf/H.png'
import git from '../assets/pdf/git.jpg'
export const projectsData = [
    {
        id: 1,
        projectName: 'MoviPidea',
        projectDesc: 'This is a completely responsive web app based on TMDB API, build using React js.',
        tags: ['React', 'CSS', 'Material Ui', 'APIs'],
        code: 'https://github.com/VAIBHAV-25/Movipidea',
        demo: 'https://movipidea.netlify.app',
        image: movie
    },
    {
        id: 2,
        projectName: 'Personal Portfolio',
        projectDesc: 'This is my very own personal portfolio with all neccessary information about me',
        tags: ['React', 'CSS', 'APIs'],
        code: 'https://github.com/VAIBHAV-25?tab=repositories',
        demo: 'https://vaibhavsinghvi.netlify.app',
        image: portfolio
    },
    {
        id: 3,
        projectName: 'Algorithm Visualizer',
        projectDesc: 'This is a website where you can see visualization of some famous DSA algorithms.',
        tags: ['NodeJS', 'NextJS', 'React', 'MongoDB'],
        code: 'https://github.com/VAIBHAV-25?tab=repositories',
        demo: 'https://vizalgotool.netlify.app',
        image: algo
    },
    {
        id: 4,
        projectName: 'Rubiks Cube Solver',
        projectDesc: 'WebApp which scans unsolved cube and then show AR annotations to solve it.',
        tags: ['Python', 'AI/ML', 'Kociemba','OpenCV'],
        code: 'https://github.com/VAIBHAV-25/Rubik-s-Cube-Solver',
        demo: 'https://github.com/VAIBHAV-25/Rubik-s-Cube-Solver',
        image: rubik
    },
    {
        id: 5,
        projectName: 'E-Commerce App',
        projectDesc: 'A Simple E-commerce application',
        tags: ['HTML', 'CSS', 'Javascript'],
        code: 'https://github.com/VAIBHAV-25/E-commerce',
        demo: 'https://github.com/VAIBHAV-25/E-commerce',
        image: five
    },
    {
        id: 6,
        projectName: 'Made for Maid',
        projectDesc: 'A dynamic webpage from where user can hire maids online',
        tags: ['HTML', 'CSS', 'Javascript', 'PHP', 'MySQL'],
        code: 'https://github.com/VAIBHAV-25?tab=repositories',
        demo: 'https://github.com/VAIBHAV-25?tab=repositories',
        image: made
    },
    {
        id: 7,
        projectName: 'Harvestify',
        projectDesc: 'Website which is capable of Crop recommendation, Fertilizer recommendation and Plant disease prediction',
        tags: ['AI/ML', 'Python', 'Django', 'HTML/CSS'],
        code: 'https://github.com/VAIBHAV-25/Harvestify',
        demo: 'hhttps://github.com/VAIBHAV-25/Harvestify',
        image: H
    },
    {
        id: 8,
        projectName: 'Github',
        projectDesc: 'To have look on some more of my projects do visit my Github account',
        tags: ['Projects', 'Vaibhav'],
        code: 'https://github.com/VAIBHAV-25/',
        demo: 'hhttps://github.com/VAIBHAV-25/',
        image: git
    },
]


// Do not remove any fields.
// Leave it blank instead as shown below

/* 
{
    id: 1,
    projectName: 'Car Pooling System',
    projectDesc: '',
    tags: ['Flutter', 'React'],
    code: '',
    demo: '',
    image: ''
}, 
*/