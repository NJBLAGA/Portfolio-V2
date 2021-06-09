import React from "react";
import {
  LandingContainer,
  LandingIm,
  LandingImage,
  LandingContent,
  Landing1,
  Landing1Name,
  LandingP,
  LandingPOne,
  LandingPTwo,
  LandingPThree,
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
        <Landing1>
          Hi! I'm
          <Landing1Name> Nathan</Landing1Name>.
        </Landing1>
        <LandingP>
          <LandingPOne>Creative</LandingPOne> -{" "}
          <LandingPTwo>Driven</LandingPTwo> -{" "}
          <LandingPThree>Passionate</LandingPThree>
        </LandingP>
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
