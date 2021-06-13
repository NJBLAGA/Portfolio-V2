import styled from "styled-components";

export const ProjectsContainer = styled.div`
  color: black;

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

export const ProjectsWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 100vh;
  width: 100%;
  max-width: 1100px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 24px;
  justify-content: center;
  background: #fff;
`;

export const Title = styled.h1`
  margin-top: 50px;
  margin-bottom: 24px;
  font-size: 80px;
  font-weight: 800;
  color: black;

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const ProjectContainer = styled.div``;

export const ProjectImage = styled.p``;

export const ProjectName = styled.h1``;

export const ProjectDescription = styled.p``;

export const ProjectLiveDemoLink = styled.p``;

export const ProjectSourceCodeLink = styled.p``;
