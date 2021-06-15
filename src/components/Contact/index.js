import React from "react";
import {
  ContactContainer,
  ContactWrapper,
  Title,
  ContactMessage,
  MediaLinks,
  SocialList,
} from "../styled-components/Contact";

const Contact = ({ id, title, message, socialMedia }) => {
  return (
    <>
      <ContactContainer id={id}>
        <ContactWrapper>
          <Title>{title}</Title>
          <ContactMessage>{message}</ContactMessage>

          <SocialList>
            {socialMedia.map(function (Media, index) {
              let { icon: Icon, link } = Media;
              return (
                <MediaLinks key={index} href={link} download target="_blank">
                  <Icon />
                </MediaLinks>
              );
            })}
          </SocialList>
        </ContactWrapper>
      </ContactContainer>
    </>
  );
};

export default Contact;
