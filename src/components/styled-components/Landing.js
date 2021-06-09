import styled from "styled-components";
import { Link as LinkS } from "react-scroll";

export const LandingContainer = styled.div`
  background: #232a34;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 100vh;
  position: relative;
  z-index: 1;
`;

export const LandingIm = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const LandingImage = styled.div`
  width: 100%;
  height: 100%;
  background: #232a34;
`;

export const LandingContent = styled.div`
  z-index: 3;
  max-width: 2000px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Landing1 = styled.h1`
  color: #fff;

  /* The typewriter cursor effect */
  @keyframes blink-caret {
    from,
    to {
      border-color: transparent;
    }
    50% {
      border-color: #f64f59;
    }
  }

  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    font-size: 40px;
    margin-bottom: 20px;
  }
  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
    font-size: 80px;
    margin-bottom: 20px;
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
    font-size: 110px;
    margin-bottom: 20px;
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
    font-size: 80px;
    margin-bottom: 20px;
  }
`;

export const Landing1Name = styled.p`
  color: #01bf71;
  display: inline;
`;

export const LandingP = styled.div`
  margin-top: 24px;
  color: #fff;
  font-size: 30px;
  text-align: center;
  max-width: 600px;
  text-align: center;

  overflow: hidden;
  border-right: 0.2em solid #ffff00;
  white-space: nowrap;
  margin: 0 auto;
  animation: typing 3.5s steps(30, end), 0.75s step-end infinite;

  /* The typing effect */
  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }
  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    font-size: 20px;
    margin-bottom: 20px;
  }
  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
    font-size: 40px;
    margin-bottom: 20px;
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
    font-size: 42px;
    margin-bottom: 20px;
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
    font-size: 40px;
    margin-bottom: 20px;
  }
`;

export const LandingPOne = styled.p`
  color: #f64f59;
  display: inline;
`;

export const LandingPTwo = styled.p`
  color: #c471ed;
  display: inline;
`;

export const LandingPThree = styled.p`
  color: #12c2e9;
  display: inline;
`;

export const LandingWrapper = styled.div`
  margin-top: 32px;
  display: 32px;
  flex-direction: column;
  align-items: center;
`;

export const AboutLink = styled(LinkS)`
  text-decoration: none;
`;

export const InnerBox = styled.div`
  width: 200px;
  height: 50px;
  background: #fff;
  position: relative;
`;

export const AboutButton = styled.button`
  position: absolute;
  width: 100%;
  height: 100%;
  font-size: 1.1em;
  background: #232a34;
  border: 1.5px solid #fff;
  color: #fff;
  cursor: pointer;
  transition: all 0.4s;
  z-index: 3;

  &:hover {
    color: #fff;
    border: none;
    background: linear-gradient(to right, #f64f59, #c471ed, #12c2e9);
  }
`;
