import React from "react";
import {
  SectionContainer,
  SectionWrapper,
  Heading,
} from "../styled-components/Sections";

const Section = ({ lightBg, id, headline, lightText, darkText }) => {
  return (
    <>
      <SectionContainer lightBg={lightBg} id={id}>
        <SectionWrapper>
          <Heading lightText={lightText}>{headline}</Heading>
        </SectionWrapper>
      </SectionContainer>
    </>
  );
};

export default Section;
