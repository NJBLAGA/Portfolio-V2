import nathan from "../images/nathan.jpg";
import Channel7News_LandingPage from "../images/Channel7News_LandingPage.png";
import Untitled_Suite from "../images/Untitled_Suite.png";
import WorkoutJungle_LandingPage from "../images/WorkoutJungle_LandingPage.png";
import Zop_MainMenu from "../images/Zop_MainMenu.png";
import FirstPortfolio_LandingPage from "../images/FirstPortfolio_LandingPage.png";
import Nathan_Blaga from "../images/Nathan_Blaga.pdf";
import { BsFillTerminalFill } from "react-icons/bs";
import {
  SiGit,
  SiGithub,
  SiHtml5,
  SiCss3,
  SiFigma,
  SiCanva,
  SiPostgresql,
  SiRuby,
  SiRails,
  SiBootstrap,
  SiTailwindcss,
  SiStyledComponents,
  SiMaterialUi,
  SiHeroku,
  SiAmazonaws,
  SiTrello,
  SiNetlify,
  SiGmail,
  SiLinkedin,
  SiTwitter,
} from "react-icons/si";
import { FaJs, FaNode, FaReact, FaSass, FaFileDownload } from "react-icons/fa";

export const aboutSection = {
  id: "about",
  title: "About Me",
  bioOne:
    "I am a creative, driven and passionate software developer. I am highly motivated to learn, adapt and seek growth in my personal and professional life. I work efficiently and effectively as an individual and within team collaborations. After completing a bootcamp at Coder Academy, I am determined to build a strong network of like-minded developers who wish to improve and grow within the industry. In my spare time, I love powerlifting, hiking and playing video games.",
  img: nathan,
  alt: "Picture of Me",
  skills: [
    BsFillTerminalFill,
    SiGit,
    SiGithub,
    SiHtml5,
    SiCss3,
    FaSass,
    SiRuby,
    SiRails,
    SiPostgresql,
    FaJs,
    FaNode,
    FaReact,
    SiTrello,
    SiNetlify,
    SiAmazonaws,
    SiHeroku,
    SiTailwindcss,
    SiMaterialUi,
    SiFigma,
    SiCanva,
  ],
};

export const projectsSection = {
  id: "projects",
  title: "Projects",
  projects: [
    {
      name: "Untitled Suite",
      image: Untitled_Suite,
      alt: "Image of Untitled Suite Landing Page",
      tech_stack: [
        FaReact,
        SiStyledComponents,
        SiRails,
        SiPostgresql,
        SiGithub,
        SiHeroku,
        SiTrello,
        SiNetlify,
      ],
      description:
        "Untitled Suite's original intention is to provide project managers and their teams a one-stop shop for optimising task management. Built with a React front-end and Ruby on Rails back-end, my final group project at Coder Academy was approached with an agile development mindset.",
      demo: "https://untitled-suite-react-app.netlify.app/#/",
      source: "https://github.com/NJBLAGA/untitled-suite-react-app",
    },
    {
      name: "Channel 7 News",
      image: Channel7News_LandingPage,
      alt: "Image of Channel 7 News Landing Page",
      tech_stack: [
        FaReact,
        SiHtml5,
        SiCss3,
        FaJs,
        SiStyledComponents,
        SiGithub,
        SiHeroku,
        SiTrello,
      ],
      description:
        "For my second Coder Academy hackathon, my team utilised newsapi.org and React to build a single-page application that offers users news articles from across the globe. The project challenged us to develop an adaptive and user-friendly application which utilised React states.",
      demo: "https://reackathon-news-app.netlify.app/",
      source: "https://github.com/Channel7News/reackathon",
    },
    {
      name: "Workout Jungle",
      image: WorkoutJungle_LandingPage,
      alt: "Image of Workout Jungle Listing Page",
      tech_stack: [
        SiRails,
        SiPostgresql,
        SiGithub,
        SiHtml5,
        SiCss3,
        FaJs,
        SiHeroku,
        SiBootstrap,
        SiTrello,
      ],
      description:
        "A two-sided marketplace in which Australian consumers can buy and sell new and used fitness equipment. Approached with an agile development mindset, I utilised feature sprints and implemented continuous deployment with the aid of development and production pipelines. The database for Workout Jungle's user base and their listings provided an interesting yet challenging experience.   ",
      demo: " https://workout-jungle.herokuapp.com",
      source: "https://github.com/NJBLAGA/Workout_Jungle_Dev",
    },
    {
      name: "Zop - Quiz Game",
      image: Zop_MainMenu,
      alt: "Image of the Main Menu of Zop",
      tech_stack: [SiRuby, SiGithub, SiTrello],
      description:
        "A terminal based quiz game built completely using Ruby. Zop prompts a player with a series of random questions ranging in difficulty, while tracking their current score and remaining attempts. This project challenged me to focus on test driven development and error handling. ",
      // demo: "https://github.com/NJBLAGA/NathanBlaga_T1A3",
      source: "https://github.com/NJBLAGA/NathanBlaga_T1A3",
    },
    {
      name: "First Portfolio",
      image: FirstPortfolio_LandingPage,
      alt: "Image of My First Portfolio Landing Page",
      tech_stack: [
        SiGithub,
        SiHtml5,
        SiCss3,
        FaSass,
        FaJs,
        SiTrello,
        SiNetlify,
      ],
      description:
        "The purpose of the first iteration of my personal portfolio was to create a professional platform in which I could demonstrate my abilities to future employers. The project provided the audience with  my talents, abilities and coding experience during that time. It also provided an insight into my personality, professional knowledge, interests, hobbies and mindset.",
      demo: "https://nathanblaga.netlify.app/",
      source: "https://github.com/NJBLAGA/Personal_Portfolio",
    },
  ],
};

export const contactSection = {
  id: "contact",
  title: "Contact",
  message:
    "If you wish to get in touch, please reach out to me via email or on social media.",
  socialMedia: [
    {
      icon: FaFileDownload,
      link: Nathan_Blaga,
    },
    {
      icon: SiGmail,
      link: "mailto:nathanblaga90@gmail.com",
    },
    { icon: SiGithub, link: "https://github.com/NJBLAGA" },
    {
      icon: SiLinkedin,
      link: "https://www.linkedin.com/in/nathan-blaga-aa823b172/",
    },
    { icon: SiTwitter, link: "https://twitter.com/BlagaNathan" },
  ],
};

export const landingSection = {
  id: "landing",
};
