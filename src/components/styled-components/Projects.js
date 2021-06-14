import styled from "styled-components";

export const ProjectsContainer = styled.div`
  height: 400vh;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0;

  @media screen and (max-width: 768px) {
    padding: 100px 0;
    height: 350vh;
  }
  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
    height: 250vh;
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

  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    flex-direction: column;
    margin-bottom: 10%;
  }
`;

export const LeftSection = styled.div`
  width: 50%;
  height: 100%;
  padding-right: 5px;
  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    width: 100%;
    margin-bottom: 5%;
  }
`;

export const RightSection = styled.div`
  width: 60%;
  height: 100%;
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;

export const ProjectImage = styled.img`
  width: 100%;
  height: 70%;
  &:hover {
    transform: scale(1.1);
  }
  @media only screen and (max-width: 600px) {
    width: 100%;
    height: 60%;
  }
`;

export const ProjectName = styled.h1`
  width: 100%;
  font-size: 40px;
  margin-bottom: 2%;
  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    font-size: 20px;
  }
`;

export const ProjectDescription = styled.p`
  width: 90%;
  margin-bottom: 2%;
  @media only screen and (max-width: 600px) {
    font-size: 12px;
    width: 100%;
  }
  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
  }
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
  @media only screen and (max-width: 600px) {
    font-size: 30px;
  }
  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
    font-size: 35px;
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
  @media only screen and (max-width: 600px) {
    width: 100px;
    height: 30px;
    margin-bottom: 2%;
    align-self: center;
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
  @media only screen and (max-width: 600px) {
    width: 100px;
    height: 30px;
    margin-bottom: 2%;
    align-self: center;
  }
`;

export const ProjectSourceCodeLink = styled.a`
  text-decoration: none;
  color: #fff;
`;
