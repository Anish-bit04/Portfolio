import chat from "@/public/chat.png";
import meetingMate from "@/public/meeting-mate.png";
import food from "@/public/food.png";
import { StaticImageData } from "next/image";
import portfolio from "@/public/portfolio.png"
import refokus from "@/public/refokus.png"
import ochi from "@/public/ochi.png"
import jobZee from "@/public/jobZee.png"
import cashFlow from "@/public/cashFlow.png"
import reactWise from "@/public/reactwise.png" 
import mystore from "@/public/mystore.png" 

export const projectList  = [
  {
    id: 1,
    tag: "top",
    title: "Chat App",
    category: "Full Stack",
    image: chat,
    description:
      "Full Stack Chat application built with the MERN stack.",
    tech: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/socketio/socketio-original.svg" 
          
    ],
    url: "https://chat-app-xvdz.onrender.com/",
    github: "https://github.com/Anish-bit04/Chat_App",
    detailedDescription:
      "💬 Chat application built with the MERN stack and Socket.io",
    features: [
      "💬 Real Time Chatting",
      "🔑 Authentication",
      "📺 Secure chat rooms with JWT-based authentication",
      "🔮 Online user status tracking",
    ],
  },
  {
    id: 2,
    tag: "top",
    title: "ReactWise Redesign",
    category: "Frontend",
    image: reactWise,
    description:
      "Redesigned the frontend for YC(24) Startup - reactWise",
    tech: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    ],
    url: "https://react-wise.vercel.app/",
    github: "https://github.com/Anish-bit04/ReactWise-Redesign",
    features: [
      "Sleek and modern design",
      "Built with React.js",
      "Utilizes Tailwind CSS for responsive styling",
    
    ],
    detailedDescription:
      "Redesigned the frontend for YC(24) Startup - reactWise"
  },

  
  {
    id: 3,
    tag: "top",
    title: "Personal Portfolio",
    category: "Frontend",
    image: portfolio,
    description:
      "Sleek personal portfolio website made with NextJs, ShadcnUI and Framer Motion.",
    tech: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    ],
    url: "https://anish-portfolio-iota.vercel.app/",
    github: "https://github.com/Anish-bit04/Portfolio",
    features: [
      "Sleek and modern design",
      "Built with Next.js for server-side rendering",
      "Utilizes Tailwind CSS for responsive styling",
      "Animated transitions powered by Framer Motion",
    ],
    detailedDescription:
      "This project is a personal portfolio website showcasing the developer's skills and projects. It features a sleek and modern design implemented with Next.js, a React framework for server-side rendering.",
  },
  {
    id: 4,
    tag: "top",
    title: "MyStore",
    category: "Full Stack",
    image: mystore,
    description:
      "Fully-functional store using PostgreSQL, Express, React, and Node.js",
    tech: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
    ],
    url: "https://mystore-qwzy.onrender.com/",
    github: "https://github.com/Anish-bit04/MyStore",
    features: [

     `🌟 Tech stack: PERN + TailwindCSS + Daisy UI`,
      "🚀 Rate Limiting & Bot Detection",
      "👌 Global state management with Zustand",
      "🐞 Error handling both on the server and client",
     
      
    ],
    detailedDescription:
    "A fully-functional store using PostgreSQL, Express, React, and Node.js. Highlights include TailwindCSS and Daisy UI integration, rate limiting, bot detection, global state management with Zustand, error handling"
  },
  {
    id: 5,
    tag: "top",
    title: "Refokus",
    category: "Frontend",
    image: refokus,
    description:
      "Modern website made with ReactJs, TaliwindCSS and Framer Motion",
    tech: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framermotion/framermotion-original.svg"
    ],
    url: "https://refokus-zeta.vercel.app/",
    github: "https://github.com/Anish-bit04/Refokus",
    features: [
      "Sleek and modern design",
      "Built with React.js",
      "Utilizes Tailwind CSS for responsive styling",
      "Animated transitions powered by Framer Motion",
    ],
    detailedDescription:
      "This project is a clone website, which help me get better understanding of Styling and Animation"
  },
  {
    id: 6,
    tag: "top",
    title: "Food Hunt",
    category: "Frontend",
    image: food,
    description:
      "user-centric booking application, emphasizing front-end design and user experience",
    tech: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",

    ],
    url: "https://restaurant-booking-app-omega.vercel.app/",
    github: "https://github.com/Anish-bit04/Restaurant_Booking_App",
    features: [
      "Responsive",
      "User Centric ",
      "Visually Appealing",
    ],
    detailedDescription:
    "user-centric booking application, emphasizing front-end design and user experience",
  },
  {
    id: 7,
    tag: "top",
    title: "Ochi Design",
    category: "Frontend",
    image: ochi,
    description:
      "Modern Animated website made with ReactJs, TaliwindCSS and Framer Motion",
    tech: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framermotion/framermotion-original.svg"
    ],
    url: "https://ochi-design-one.vercel.app/",
    github: "https://github.com/Anish-bit04/Ochi-design",
    features: [
      "Sleek and modern design",
      "Built with React.js",
      "Utilizes Tailwind CSS for responsive styling",
      "Animated transitions powered by Framer Motion",
      "Use Locomotive for smooth scroll and scroll animation"
    ],
    detailedDescription:
      "This project is a clone website of ochi.design, which help me get better understanding of Styling and Animation"
  },{
    id: 8,
    tag: "top",
    title: "JobZee",
    category: "Full Stack",
    image: jobZee,
    description:
      "Full Stack Job Seeking Web App build using MERN Stack",
    tech: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
     
    ],
    url: "https://jobzee-rqmn.onrender.com/",
    github: "https://github.com/Anish-bit04/Job-Seeking-Web-App",
    features: [
      "Built with React.js",
      "Dual portal for JobSeeker and Employer",
      "Authentication verification for both employer and job seeker",
      "customizable job post and application option available"
    ],
    detailedDescription:
      "MERN Stack Job Seeking Web Application for Job Seeker and Employer to add new job."
  },
  {
    id: 9,
    tag: "top",
    title: "CashFlow",
    category: "Full Stack",
    image: cashFlow,
    description:
      "Developed a full-stack web application for secure user-to-user money transfers with authentication and real-time transaction processing.",
    tech: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
     
    ],
    url: "https://cashflow-u2fl.onrender.com",
    github: "https://github.com/Anish-bit04/CashFlow",
    features: [
      "Designed and executed real-time money transfer functionality using MongoDB transactions",
      "Implemented secure user authentication and authorization",
      
    ],
    detailedDescription:
    "Developed a full-stack web application for secure user-to-user money transfers with authentication and real-time transaction processing.",
  } , {
    id: 10,
    tag: "top",
    title: "Meeting Mate",
    category: "Full Stack",
    image: meetingMate,
    description:
      " Full Stack scheduling meeting app using Next.js, Tailwind CSS, and Firebase.",
    tech: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg"
    ],
    url: "https://meeting-mate-bay.vercel.app/",
    github: "https://github.com/Anish-bit04/Meeting-Mate",
    detailedDescription:
      " Full Stack scheduling meeting app  to manage time properly.",
    features: [
      "⌚  Real-time",
      "🔑 Authentication",
      "🛃 Customizable",
      "📱 Responsive",
    ],
  },
];

//////////////////////////////

export const skills = [
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
    name: "HTML",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
    name: "CSS",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    name: "TailwindCSS",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg",
    name: "SASS",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg",
    name: "MaterialUI",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    name: "JavaScript",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    name: "TypeScript",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    name: "ReactJS",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    name: "NextJS",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
    name: "MongoDB",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg",
    name: "FireBase",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongoose/mongoose-original.svg",
    name: "Mongoose",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
    name: "MySql",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
    name: "Postgres",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg",
    name: "Prisma",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
    name: "ExpressJS",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
    name: "NodeJs",
  },
 
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg",
    name: "Redux",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wordpress/wordpress-original.svg",
    name: "WordPress",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ubuntu/ubuntu-original.svg",
    name: "Ubuntu",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
    name: "VScode",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
    name: "Postman",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    name: "AWS",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
    name: "Docker",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
    name: "Git",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
    name: "GitHub",
  }

];

////////////////
export const animes = [
  {
    title: "Mashle",
    image:
      "https://img.flawlessfiles.com/_r/300x400/100/55/54/555402a1a926576655f4e11fcb69fdb1/555402a1a926576655f4e11fcb69fdb1.jpg",
    description: "Magic is casually used by everyone.",
    url: "https://aniwatch.to/mashle-magic-and-muscles-season-2-18874?ref=search",
    tag: "Top",
    release_date: "2022",
  },
  {
    title: "Solo Leveling",
    image:
      "https://img.flawlessfiles.com/_r/300x400/100/b1/47/b147d331e311a5d5c8ee81269725fc92/b147d331e311a5d5c8ee81269725fc92.png",
    description: "Ordinary people received superhuman powers.",
    url: "https://aniwatch.to/solo-leveling-18718?ref=search",
    tag: "Top",
    release_date: "2023",
  },
  {
    title: "Jujutsu Kaisen",
    image:
      "https://img.flawlessfiles.com/_r/300x400/100/b5/1f/b51f863b05f30576cf9d85fa9b911bb5/b51f863b05f30576cf9d85fa9b911bb5.png",
    description: "Throughout Heaven and Earth, I Alone Am The Honored One",
    url: "https://aniwatch.to/jujutsu-kaisen-2nd-season-18413?ref=search",
    tag: "Trending",
    release_date: "2021",
  },
  {
    title: "Naruto",
    image:
      "https://img.flawlessfiles.com/_r/300x400/100/9c/bc/9cbcf87f54194742e7686119089478f8/9cbcf87f54194742e7686119089478f8.jpg",
    description: "I will become hokage one day!",
    url: "https://aniwatch.to/naruto-shippuden-355?ref=search",
    release_date: "2002",
    tag: "Popular",
  },
  {
    title: "Your Name",
    image:
      "https://img.flawlessfiles.com/_r/300x400/100/16/ee/16eec56baf8f3fcc6430607f58ce3d12/16eec56baf8f3fcc6430607f58ce3d12.jpg",
    description: "Story of a high School in tokyo.",
    url: "https://aniwatchtv.to/your-name-10?ref=search",
    release_date: "2016",
    tag: "Movie",
  },
];

///////
export const socials = [
  {
    name: "Github",
    url: "https://github.com/Anish-bit04",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/anish004/",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-plain.svg",
  },
  {
    name: "Twitter",
    url: "https://x.com/Phenoix04",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/twitter/twitter-original.svg",
  },
];
