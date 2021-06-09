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
  height: 150vh;
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
  align-self: center;
  margin-bottom: 20px;
  @media screen and (max-width: 480px) {
    font-size: 32px;
  }

  @media screen and (max-width: 768px) {
    align-self: left;
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
  margin-right: 10px;
  margin-bottom: 10px;
  @media screen and (max-width: 768px) {
  }
`;

export const BioOne = styled.p`
  margin-top: 10px;
  margin-bottom: 10px;
  width: 800px;
  font-size: 20px;

  @media screen and (max-width: 768px) {
    width: 100%;
    font-size: 15px;
  }
`;

export const Skills = styled.div`
  height: 150px;
  align-items: center;
  width: 800px;
  display: flex;
  flex-wrap: wrap;
  padding: 5px;
  margin-top: 5px;
  margin-left: 0;
  background: linear-gradient(to right, #f64f59, #c471ed, #12c2e9);
  border: 5px solid #232a34;
  border-radius: 10%;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: row;
    height: 90%;
    width: 100%;
    margin: 10px;
    border: 2px solid #232a34;
    border-radius: 5%;
    padding: 4px;
  }
`;

export const Skill = styled.div`
  margin: 8px;
  color: #fff;

  &:hover {
    transform: scale(1.5);
  }
  @media screen and (max-width: 768px) {
    padding: 2px;
  }
`;

export const AboutRightSide = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 10px;
  margin-bottom: 10px;
`;

export const AboutImage = styled.img`
  width: 350px;
  height: 350px;
  border-radius: 25px;
  @media screen and (max-width: 768px) {
    align-self: center;
    margin-top: 10px;
    width: 200px;
    height: 200px;
  }
`;
