import React from "react";
import {
  ProjectsContainer,
  ProjectsWrapper,
  Title,
  ProjectContainer,
  LeftSection,
  RightSection,
  ProjectImage,
  ProjectName,
  ProjectDescription,
  ProjectTechStack,
  TechStackIcon,
  ProjectLiveDemoButton,
  ProjectLiveDemoLink,
  ProjectSourceCodeButton,
  ProjectSourceCodeLink,
} from "../styled-components/Projects";

const Projects = ({ id, title, projects }) => {
  return (
    <>
      <ProjectsContainer id={id}>
        <Title>{title}</Title>
        <ProjectsWrapper>
          {projects.map(function (Project, index) {
            let { name, image, alt, tech_stack, description, demo, source } =
              Project;
            return (
              <ProjectContainer key={index}>
                <LeftSection>
                  <ProjectName>{name}</ProjectName>
                  <ProjectDescription>{description}</ProjectDescription>
                  <ProjectTechStack>
                    {tech_stack.map(function (TechIcon, index) {
                      return (
                        <TechStackIcon key={index}>
                          <TechIcon />
                        </TechStackIcon>
                      );
                    })}
                  </ProjectTechStack>
                  <ProjectLiveDemoButton>
                    <ProjectLiveDemoLink href={demo}>
                      Live Demo
                    </ProjectLiveDemoLink>
                  </ProjectLiveDemoButton>
                  <ProjectSourceCodeButton>
                    <ProjectSourceCodeLink href={{ source }}>
                      Source Code
                    </ProjectSourceCodeLink>
                  </ProjectSourceCodeButton>
                </LeftSection>
                <RightSection>
                  <ProjectImage src={image} alt={alt} />
                </RightSection>
              </ProjectContainer>
            );
          })}
        </ProjectsWrapper>
      </ProjectsContainer>
    </>
  );
};

export default Projects;
