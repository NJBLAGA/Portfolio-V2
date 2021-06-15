import nathan from "../images/nathan.jpg";
import Channel7News_LandingPage from "../images/Channel7News_LandingPage.png";
import GetLucky3000_LandingPage from "../images/GetLucky3000_LandingPage.png";
import WorkoutJungle_LandingPage from "../images/WorkoutJungle_LandingPage.png";
import Zop_MainMenu from "../images/Zop_MainMenu.png";
import FirstPortfolio_LandingPage from "../images/FirstPortfolio_LandingPage.png";
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
    "I am a creative, driven and passionate software developer, currently studying at Coder Academy Sydney. I am highly motivated to learn, adapt and seek growth in my personal and professional life. I work efficiently and effectively as an individual and within team collaborations. I am determined to build a strong network of like-minded developers who wish to improve and grow within the industry. I have experience in technologies such as HTML, CSS, Ruby, Rails,JavaScript and React. I am also knowledgeable and versatile in mobile first design philosophy, test driven development alongside agile software development practices and ideologies.",
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
        SiTrello,
      ],
      description:
        "Hello World! My name is Nicole! lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem, Hello World! My name is Nicole! lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem, Hello World! My name is Nicole! lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
      demo: "https://github.com/Channel7News/reackathon",
      source: "https://github.com/Channel7News/reackathon",
    },

    {
      name: "Get Lucky 3000",
      image: GetLucky3000_LandingPage,
      alt: "Image of Get Lucky 3000 Landing Page",
      tech_stack: [SiHtml5, SiCss3, FaJs, SiGithub, SiTrello, SiNetlify],
      description:
        "Hello World! My name is Nicole! lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem, Hello World! My name is Nicole! lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem, Hello World! My name is Nicole! lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
      demo: "https://getlucky3000.netlify.app/",
      source: "https://github.com/theandrewfulton/getlucky3000",
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
        "Hello World! My name is Nicole! lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem, Hello World! My name is Nicole! lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem, Hello World! My name is Nicole! lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
      demo: " https://workout-jungle.herokuapp.com",
      source: "https://github.com/NJBLAGA/Workout_Jungle",
    },
    {
      name: "Zop - Quiz Game",
      image: Zop_MainMenu,
      alt: "Image of the Main Menu of Zop",
      tech_stack: [SiRuby, SiGithub, SiTrello],
      description:
        "Hello World! My name is Nicole! lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem, Hello World! My name is Nicole! lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem, Hello World! My name is Nicole! lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
      demo: "https://github.com/NJBLAGA/NathanBlaga_T1A3",
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
        "Hello World! My name is Nicole! lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem, Hello World! My name is Nicole! lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem, Hello World! My name is Nicole! lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
      demo: "https://nathanblaga.netlify.app/",
      source: "https://github.com/NJBLAGA/Personal_Portfolio",
    },
  ],
};

export const contactSection = {
  id: "contact",
  title: "Contact",
  message: "Hey! Contact me!",
  socialMedia: [
    {
      icon: FaFileDownload,
      link: "Nathan Blaga - Resume.pdf",
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
