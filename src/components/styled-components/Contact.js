import styled from "styled-components";

export const ContactContainer = styled.div`
  height: 100vh;
  width: 100%;
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 40px 0;
  background: linear-gradient(35deg, #004e7c 50%, #d3d3d3 50%);

  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
  }
`;

export const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  max-width: 1500px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 24px;
  border-radius: 2%;

  @media screen and (max-width: 768px) {
  }
`;

export const Title = styled.h1`
  align-self: center;
  font-size: 80px;
  font-weight: 800;
  color: black;

  margin-bottom: 5%;
  margin-top: 7%;

  @media screen and (max-width: 480px) {
    margin-top: 20%;
    font-size: 32px;
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
    margin-top: 0.5%;
  }
`;

export const ContactMessage = styled.p`
  width: 100%;
  text-align: center;
  margin-bottom: 2%;

  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    width: 100%;
    font-size: 12px;
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
  }
`;

export const SocialList = styled.ul`
  height: 100px;
  width: 50%;
  display: flex;
  flex-direction: row;
  align-self: center;
  align-content: center;
  justify-content: center;
  a:nth-child(1) {
    color: #c9510c;
  }
  a:nth-child(2) {
    color: #d44638;
  }
  a:nth-child(3) {
    color: #333;
  }
  a:nth-child(4) {
    color: #0072b1;
  }
  a:nth-child(5) {
    color: #1da1f2;
  }
`;
export const MediaLinks = styled.a`
  align-self: center;
  font-size: 50px;
  color: #232a34;
  margin: 2%;
  text-decoration: none;
  &:hover {
    transform: scale(1.5);
    color: #f64f59;
  }
  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    font-size: 30px;
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
  }
`;
