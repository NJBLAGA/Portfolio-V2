import React from "react";
import {
  LandingContainer,
  LandingIm,
  LandingImage,
  LandingContent,
  Landing1,
  LandingP,
  LandingWrapper,
  AboutLink,
  InnerBox,
  AboutButton,
} from "../styled-components/Landing";
import { landingSection } from "../Sections/pages";

const LandingSection = () => {
  return (
    <LandingContainer {...landingSection}>
      <LandingIm>
        <LandingImage />
      </LandingIm>
      <LandingContent>
        <Landing1>Hi! I'm Nathan.</Landing1>
        <LandingP>Creative - Driven - Passionate</LandingP>
        <LandingWrapper>
          <InnerBox>
            <AboutButton>
              <AboutLink
                to="about"
                smooth={true}
                duration={1500}
                spy={true}
                exact="true"
                offset={-80}
              >
                About Me
              </AboutLink>
            </AboutButton>
          </InnerBox>
        </LandingWrapper>
      </LandingContent>
    </LandingContainer>
  );
};

export default LandingSection;
