import React, { useState } from "react";
import LandingSection from "../Landing";
import NavBar from "../NavBar";
import TopBar from "../TopBar";
import AboutMe from "../About/index";
import Projects from "../Projects/index";
import Contact from "../Contact/index";
import {
  aboutSection,
  projectsSection,
  contactSection,
} from "../Sections/pages";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <LandingSection />
      <TopBar isOpen={isOpen} toggle={toggle} />
      <NavBar toggle={toggle} />
      <AboutMe {...aboutSection} />
      <Projects {...projectsSection} />
      <Contact {...contactSection} />
    </>
  );
};

export default Home;
