import styled from "styled-components";

export const ProjectsContainer = styled.div`
  height: 300vh;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

export const ProjectsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  height: 100vh;
  width: 100%;
  max-width: 1500px;
  margin-left: auto;
  margin-right: auto;
  background: #fff;
`;

export const Title = styled.h1`
  margin-top: 50px;
  margin-bottom: 2%;
  font-size: 80px;
  font-weight: 800;
  color: black;

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const ProjectContainer = styled.div`
  width: 80%;
  height: 450px;
  margin: 5%;
  display: flex;
  flex-direction: row;
`;

export const LeftSection = styled.div`
  width: 50%;
  height: 100%;
  padding-right: 5px;
`;

export const RightSection = styled.div`
  width: 60%;
  height: 100%;
`;

export const ProjectImage = styled.img`
  width: 100%;
  height: 70%;
  &:hover {
    transform: scale(1.1);
  }
`;

export const ProjectName = styled.h1`
  width: 100%;
  font-size: 40px;
  margin-bottom: 2%;
`;

export const ProjectDescription = styled.p`
  width: 100%;
  width: 90%;
  margin-bottom: 2%;
`;

export const ProjectTechStack = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 2%;
`;

export const TechStackIcon = styled.p`
  font-size: 50px;
  margin: 5px;
  &:hover {
    transform: scale(1.3);
    color: #f64f59;
  }
`;

export const ProjectLiveDemoButton = styled.button`
  display: inline;
  width: 100px;
  height: 50px;
  border: 1.5px solid #232a34;
  background-color: #232a34;
  cursor: pointer;
  transition: all 0.4s;
  z-index: 3;

  &:hover {
    color: #fff;
    border: none;
    background: linear-gradient(to right, #f64f59, #c471ed, #12c2e9);
  }
`;

export const ProjectLiveDemoLink = styled.a`
  text-decoration: none;
  color: #fff;
`;

export const ProjectSourceCodeButton = styled.button`
  display: inline;
  width: 100px;
  height: 50px;
  border: 1.5px solid #232a34;
  background-color: #232a34;
  cursor: pointer;
  transition: all 0.4s;
  z-index: 3;
  margin: 5px;

  &:hover {
    color: #fff;
    border-color: #232a34;
    background: linear-gradient(to right, #f64f59, #c471ed, #12c2e9);
  }
`;

export const ProjectSourceCodeLink = styled.a`
  text-decoration: none;
  color: #fff;
`;
