import React from "react";
import {
  ContactContainer,
  ContactWrapper,
  Title,
  ContactMessage,
  SocialMediaSection,
  MediaLinks,
} from "../styled-components/Contact";

const Contact = ({ id, title, message, socialMedia }) => {
  return (
    <>
      <ContactContainer id={id}>
        <ContactWrapper>
          <Title>{title}</Title>
          <ContactMessage>{message}</ContactMessage>
          <SocialMediaSection>
            {socialMedia.map(function (Media, index) {
              let { icon: Icon, link } = Media;
              return (
                <MediaLinks key={index} href={link} download target="_blank">
                  <Icon />
                </MediaLinks>
              );
            })}
          </SocialMediaSection>
        </ContactWrapper>
      </ContactContainer>
    </>
  );
};

export default Contact;
