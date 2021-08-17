import styled from "styled-components";

export const AboutContainer = styled.div`
  height: 100vh;
  width: 100%;
  color: black;
  padding: 70px 0;

  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 320px) {
    height: 210vh;
  }

  /* * Extra small devices (phones, 600px and down) */
  @media only screen and (min-width: 360px) {
    height: 145vh;
  }

  /* Extra small devices (phones, 600px and down) */
  @media only screen and (min-width: 320px) and (min-height: 568px) {
    height: 180vh;
  }

  /* Extra small devices (phones, 600px and down) */
  @media only screen and (min-width: 320px) and (min-height: 640px) {
    height: 145vh;
  }

  /* * Extra small devices (phones, 600px and down) */
  @media only screen and (min-width: 375px) {
    height: 135vh;
  }

  /* Extra small devices (phones, 600px and down) */
  @media only screen and (min-width: 411px) {
    height: 120vh;
  }

  /* Extra small devices (phones, 600px and down) */
  @media only screen and (min-width: 768px) {
    height: 100vh;
  }

  /* Extra small devices (phones, 600px and down) */
  @media only screen and (min-width: 900px) {
    height: 75vh;
  }

  @media only screen and (min-width: 892px) and (min-height: 740px) {
    height: 160vh;
  }

  /* ---------------------> THIS ONE*/
  @media only screen and (min-width: 1598px) and (min-height: 588px) {
    height: 160vh;
  }

  @media only screen and (min-width: 900px) and (min-height: 1300px) {
    height: 80vh;
  }

  /* Extra small devices (phones, 600px and down) */
  @media only screen and (min-width: 1040px) and (min-height: 1000px) {
    height: 95vh;
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

  @media screen and (max-width: 768px) {
    width: 90%;
    height: 140vh;
  }
`;

export const Title = styled.h1`
  justify-self: center;
  font-size: 60px;
  font-weight: 800;
  color: black;
  align-self: center;
  margin-bottom: 20px;

  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    font-size: 40px;
    margin-top: 15%;
  }
  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
    font-size: 0px;
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
    font-size: 50px;
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
    font-size: 60px;
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
    font-size: 70px;
  }
`;

export const TitleSub = styled.h2`
  justify-self: center;
  font-size: 40px;
  font-weight: 800;
  color: black;
  align-self: center;

  margin-bottom: 20px;
  @media screen and (max-width: 480px) {
    font-size: 25px;
    margin-top: 40px;
  }

  @media screen and (max-width: 768px) {
    align-self: left;
    margin-top: px;
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
  margin-bottom: 20px;

  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    font-size: 15px;
    width: 100%;
  }
  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
    font-size: 0px;
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
    font-size: 20px;
    width: 100%;
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
    font-size: 25px;
    width: 100%;
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
    font-size: 20px;
  }
`;

export const Skills = styled.div`
  height: 90%;
  align-items: center;
  width: 1000px;
  display: flex;
  flex-wrap: wrap;
  background: linear-gradient(to right, #f64f59, #c471ed, #12c2e9);
  border: 5px solid #232a34;
  border-radius: 0%;

  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    width: 100%;
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
    width: 100%;
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
    width: 100%;
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
    width: 100%;
  }
`;

export const Skill = styled.div`
  margin: 10px;
  color: #fff;

  &:hover {
    transform: scale(1.3);
  }

  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    font-size: 30px;
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
    font-size: 50px;
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
    font-size: 60px;
    padding: 10px;
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
    font-size: 50px;
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
    font-size: 55px;
    padding: 5px;
  }
`;

export const AboutImage = styled.img`
  width: 350px;
  height: 350px;
  border-radius: 25px;
  align-self: center;
  margin-bottom: 20px;
  @media screen and (max-width: 768px) {
    align-self: center;
    width: 200px;
    height: 200px;
  }
`;
