import styled from "styled-components";

export const ContactContainer = styled.div`
  height: 100vh;
  width: 100%;
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 40px 0;

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
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  max-width: 1100px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 24px;
  background: #fff;
`;

export const Title = styled.h1`
  align-self: center;
  font-size: 80px;
  font-weight: 800;
  color: black;
  margin-bottom: 5%;

  @media screen and (max-width: 480px) {
    font-size: 32px;
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

export const SocialMediaSection = styled.div`
  height: 100px;
  width: 100%;
  margin-bottom: 5%;
  display: flex;
  flex-direction: row;
  align-self: center;
  align-content: center;
  justify-content: center;
`;

export const MediaLinks = styled.a`
  align-self: center;
  font-size: 50px;
  color: #232a34;
  margin: 5%;
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
