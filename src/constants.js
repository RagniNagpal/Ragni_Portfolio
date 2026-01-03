// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's
import sc from './assets/company_logo/sc.jpg';

// Education Section Logo's
import CU from './assets/education_logo/CU.png';
import pkr from './assets/education_logo/pkr.png';



// Project Section Logo's
import CodeReviewer from './assets/work_logo/CodeReviewer.png';
import Quiz from './assets/work_logo/Quiz.png';
import GolfAW from './assets/work_logo/GolfAW.png';
import SunshineSociety from './assets/work_logo/SS.png';
import TODO from './assets/work_logo/todo.png';
import Calculator from './assets/work_logo/Calculator.png';
import News from './assets/work_logo/News.png';
import ReceipeF from './assets/work_logo/SmartChef.png';
import Myntra from './assets/work_logo/Myntra.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Springboot', logo: springbootLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const experiences = [
  {
    id: 0,
    img: sc,
    role: "Web Developer Intern",
    company: "SkillCraft",
    date: "March 2025 - April 2025",
    desc: "Completed a 1-month internship as a Web Developer, building responsive web pages and implementing UI features using HTML, CSS, and JavaScript. Collaborated with the team to enhance user experience and gained hands-on exposure to modern frontend development practices.",
    skills: ["HTML", "CSS", "JavaScript", "Responsive Design"]
  }
];

  
  export const education = [
    {
      id: 0,
      img: CU,
      school: "Chitkara University,Rajpura",
      date: "Aug 2023 - Aug 2027",
      grade: "80.7%",
        desc: "Completed my Bachelor's degree in Computer Science and Engineering (CSE) from BSA College, Mathura. Gained in-depth knowledge of Data Structures, Algorithms, Database Management Systems, and Web Development. Worked on practical projects that applied theoretical concepts to real-world software solutions, enhancing my problem-solving and coding skills.",
      degree: "BE CSE",
    },
    {
  id: 1,
  img: pkr,
  school: "P.K.R Jain Sr. Sec. Public School,Haryana",
  date: "Apr 2022 - March 2023",
  grade: "75.8%",
  desc: "Completed my Class 12 education from Vatsalya Public School, Govardhan, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
  degree: "CBSE(XII)",
},
    {
      id: 2,
      img: pkr,
      school: "P.K.R Jain Sr. Sec. Public School,Haryana",
      date: "Apr 2020 - March 2021",
      grade: "93%",
      desc: "Completed my Class 10 education from P.K.R Jain Sr. Sec. Public School, Haryana under the CBSE board",
      degree: "CBSE(X)",
    },
  ];
  
  export const projects = [
  {
    id: 0,
    title: "Code Reviewer",
    description: "A code reviewing platform to help developers get feedback on their code with suggestions and improvements.",
    image: CodeReviewer,
    tags: ["React JS", "Node.js", "MongoDB", "Express", "CSS", "JavaScript"],
    // github: "https://github.com/codingmastr/CodeReviewer",
    // webapp: "https://codereviewer.netlify.app/",
  },
  {
    id: 1,
    title: "Quiz App",
    description: "A quiz application where users can take multiple-choice quizzes, see their scores, and track progress.",
    image: Quiz,
    tags: ["React JS", "Node.js", "MongoDB", "Express", "HTML", "CSS", "JavaScript"],
    // github: "https://github.com/codingmastr/QuizApp",
    // webapp: "https://quizapp.netlify.app/",
  },
  {
    id: 2,
    title: "Golf AW",
    description: "A golf analytics web app that tracks performance metrics and helps improve the game.",
    image: GolfAW,
    tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],
    // github: "https://github.com/codingmastr/GolfAW",
    // webapp: "https://golfaw.netlify.app/",
  },
  {
    id: 3,
    title: "Sunshine Society",
    description: "A social welfare platform for connecting volunteers and managing charity events.",
    image: SunshineSociety,
    tags: ["React JS", "Node.js", "MongoDB", "Express", "HTML", "CSS", "JavaScript"],
    // github: "https://github.com/codingmastr/SunshineSociety",
    // webapp: "https://sunshinesociety.netlify.app/",
  },
  {
    id: 4,
    title: "TODO App",
    description: "A productivity tool to manage daily tasks, reminders, and schedules efficiently.",
    image: TODO,
    tags: ["JavaScript", "HTML", "CSS", "React JS"],
    // github: "https://github.com/codingmastr/TODO-App",
    // webapp: "https://todoapp.netlify.app/",
  },
  {
    id: 5,
    title: "Calculator App",
    description: "A simple calculator app to perform arithmetic operations with a user-friendly interface.",
    image: Calculator,
    tags: ["JavaScript", "HTML", "CSS"],
    // github: "https://github.com/codingmastr/Calculator-App",
    // webapp: "https://calculatorapp.netlify.app/",
  },
  {
    id: 6,
    title: "News App",
    description: "A React-based news application that fetches latest news from various sources and categories.",
    image: News,
    tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],
    // github: "https://github.com/codingmastr/News-App",
    // webapp: "https://newsapp.netlify.app/",
  },
  {
    id: 7,
    title: "Recipe Finder",
    description: "A smart recipe app that suggests recipes based on ingredients users have at home.",
    image: ReceipeF,
    tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],
    // github: "https://github.com/codingmastr/RecipeFinder",
    // webapp: "https://smartchef.netlify.app/",
  },
  {
    id: 8,
    title: "Myntra Clone",
    description: "An e-commerce clone of Myntra, built for practice with product listings, cart functionality, and checkout.",
    image: Myntra,
    tags: ["React JS", "Node.js", "MongoDB", "Express", "HTML", "CSS", "JavaScript"],
  //   github: "https://github.com/codingmastr/Myntra-Clone",
  //   webapp: "https://myntraclone.netlify.app/",
  },
];
