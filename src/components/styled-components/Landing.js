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
  font-size: 100px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 30px;
  }
`;

export const LandingP = styled.p`
  margin-top: 24px;
  color: #fff;
  font-size: 24px;
  text-align: center;
  max-width: 600px;
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
