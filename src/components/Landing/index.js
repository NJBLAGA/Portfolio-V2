import React from "react";
import {
  LandingContainer,
  LandingIm,
  LandingImage,
  LandingContent,
  Landing1,
  LandingP,
  LandingWrapper,
  Button,
} from "../styled-components/Landing";

const LandingSection = () => {
  return (
    <LandingContainer>
      <LandingIm>
        <LandingImage />
      </LandingIm>
      <LandingContent>
        <Landing1>Hi! I'm Nathan.</Landing1>
        <LandingP>I'm a Full Stack Developer</LandingP>
        <LandingP></LandingP>
        <LandingWrapper>
          <Button
            to="about"
            smooth={true}
            duration={1500}
            spy={true}
            exact="true"
            offset={-80}
          >
            About Me
          </Button>
        </LandingWrapper>
      </LandingContent>
    </LandingContainer>
  );
};

export default LandingSection;
