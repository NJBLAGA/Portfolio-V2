import React from "react";
import {
  ContactContainer,
  ContactWrapper,
  Title,
} from "../styled-components/Contact";

const Contact = ({ id, title }) => {
  return (
    <>
      <ContactContainer id={id}>
        <ContactWrapper>
          <Title>{title}</Title>
        </ContactWrapper>
      </ContactContainer>
    </>
  );
};

export default Contact;
