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

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const LandingWrapper = styled.div`
  margin-top: 32px;
  display: 32px;
  flex-direction: column;
  align-items: center;
`;

export const Button = styled(LinkS)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  border: 5px solid #01bf71;
  border-radius: 80%;
`;
