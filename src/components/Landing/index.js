import React from "react";
import Video from "../Videos/landing.mp4";
import {
  LandingContainer,
  LandingIm,
  LandingVid,
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
        <LandingVid autoPlay loop muted src={Video} type="video/mp4" />
      </LandingIm>
      <LandingContent>
        <Landing1>Hi! I'm Nathan.</Landing1>
        <LandingP>I'm a Full Stack Developer</LandingP>
        <LandingP></LandingP>
        <LandingWrapper>
          <Button
            to="about"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
          >
            About Me
          </Button>
        </LandingWrapper>
      </LandingContent>
    </LandingContainer>
  );
};

export default LandingSection;
