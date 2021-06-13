import nathan from "../images/nathan.jpg";
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
  SiTailwindcss,
  SiMaterialUi,
  SiHeroku,
  SiAmazonaws,
  SiTrello,
  SiNetlify,
} from "react-icons/si";
import { FaJs, FaNode, FaReact, FaSass } from "react-icons/fa";

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
      name: "Hackathon2",
      image: "I am a Image",
      description: "Hello World! My name is Nathan!",
      demo: "www.demo.com",
      source: "www.source.com",
    },

    {
      name: "Hackathon 1",
      image: "I am a Image 2",
      description: "Hello World! My name is Joshua!",
      demo: "www.demo.com",
      source: "www.source.com",
    },

    {
      name: "Rails Project",
      image: "I am a Image 3",
      description: "Hello World! My name is Nicole!",
      demo: "www.demo.com",
      source: "www.source.com",
    },
    {
      name: "Ruby Terminal",
      image: "I am a Image 3",
      description: "Hello World! My name is Nicole!",
      demo: "www.demo.com",
      source: "www.source.com",
    },
    {
      name: "Portfolio 1",
      image: "I am a Image 3",
      description: "Hello World! My name is Nicole!",
      demo: "www.demo.com",
      source: "www.source.com",
    },
  ],
};

export const contactSection = {
  id: "contact",
  title: "Contact Me",
};

export const landingSection = {
  id: "landing",
};
