import React from "react";
import {
  ProjectsContainer,
  ProjectsWrapper,
  Title,
  ProjectContainer,
  ProjectImage,
  ProjectName,
  ProjectDescription,
  ProjectLiveDemoLink,
  ProjectSourceCodeLink,
} from "../styled-components/Projects";

const Projects = ({ id, title, projects }) => {
  return (
    <>
      <ProjectsContainer id={id}>
        <ProjectsWrapper>
          <Title>{title}</Title>
          {projects.map(function (Project, index) {
            let { name, image, description, demo, source } = Project;
            return (
              <ProjectContainer key={index}>
                <ProjectImage>{image}</ProjectImage>
                <ProjectName>{name}</ProjectName>
                <ProjectDescription>{description}</ProjectDescription>
                <ProjectLiveDemoLink href="/">{demo}</ProjectLiveDemoLink>
                <ProjectSourceCodeLink>{source}</ProjectSourceCodeLink>
              </ProjectContainer>
            );
          })}
        </ProjectsWrapper>
      </ProjectsContainer>
    </>
  );
};

export default Projects;
