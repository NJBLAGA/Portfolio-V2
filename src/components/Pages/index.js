import React, { useState } from "react";
import LandingSection from "../Landing";
import NavBar from "../NavBar";
import Section from "../Sections";
import TopBar from "../TopBar";
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
      <Section {...aboutSection} />
      <Section {...projectsSection} />
      <Section {...contactSection} />
    </>
  );
};

export default Home;
