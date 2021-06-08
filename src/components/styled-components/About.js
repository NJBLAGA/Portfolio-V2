import styled from "styled-components";

export const AboutContainer = styled.div`
  color: black;
  padding: 70px 0;

  @media screen and (max-width: 768px) {
    padding: 40px 0;
  }
`;

export const AboutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 1;
  height: 100vh;
  width: 100%;
  max-width: 1100px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 24px;
  background: #fff;

  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;

export const Title = styled.h1`
  font-size: 80px;
  font-weight: 800;
  color: black;
  margin-left: 5px;
  @media screen and (max-width: 480px) {
    font-size: 32px;
  }

  @media screen and (max-width: 768px) {
    align-self: center;
  }
`;

export const AboutSubSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: space-between;
  }
`;

export const AboutLeftSide = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Bio = styled.p`
  margin-top: 10px;
  width: 500px;
  font-size: 20px;

  @media screen and (max-width: 768px) {
    width: 100%;
    font-size: 10px;
  }
`;

export const Skills = styled.div`
  height: 300px;
  width: 500px;
  background: grey;
  display: flex;
  flex-wrap: wrap;
  padding: 5px;
  color: #fff;
  @media screen and (max-width: 768px) {
  }
`;

export const Skill = styled.div`
  margin: 5px;
  color: #fff;

  &:hover {
  }
  @media screen and (max-width: 768px) {
  }
`;

export const AboutImage = styled.img`
  width: 50%;
  border-radius: 25px;
  @media screen and (max-width: 768px) {
    align-self: center;
    margin-top: 10px;
    width: 70%;
  }
`;
