import React from "react";
import {
  SectionContainer,
  SectionWrapper,
  Heading,
} from "../styled-components/Sections";

const Section = ({ id, headline }) => {
  return (
    <>
      <SectionContainer id={id}>
        <SectionWrapper>
          <Heading>{headline}</Heading>
        </SectionWrapper>
      </SectionContainer>
    </>
  );
};

export default Section;
