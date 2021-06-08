import React from "react";
import {
  ProjectsContainer,
  ProjectsWrapper,
  Title,
} from "../styled-components/Projects";

const Projects = ({ id, title }) => {
  return (
    <>
      <ProjectsContainer id={id}>
        <ProjectsWrapper>
          <Title>{title}</Title>
        </ProjectsWrapper>
      </ProjectsContainer>
    </>
  );
};

export default Projects;
