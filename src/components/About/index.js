import React from "react";
import {
  AboutContainer,
  AboutWrapper,
  Title,
  TitleSub,
  AboutSubSection,
  AboutLeftSide,
  BioOne,
  Skills,
  Skill,
  AboutImage,
} from "../styled-components/About";

const AboutMe = ({ id, title, img, alt, skills, bioOne }) => {
  return (
    <React.Fragment>
      <AboutContainer id={id}>
        <AboutWrapper>
          <AboutSubSection>
            <AboutLeftSide>
              <Title>{title}</Title>
              <AboutImage src={img} alt={alt} />
              <BioOne>{bioOne}</BioOne>
              <TitleSub>Technologies</TitleSub>
              <Skills>
                {skills.map(function (SkillIcons) {
                  return (
                    <Skill key={SkillIcons.toString()}>
                      <SkillIcons />
                    </Skill>
                  );
                })}
              </Skills>
            </AboutLeftSide>
          </AboutSubSection>
        </AboutWrapper>
      </AboutContainer>
    </React.Fragment>
  );
};

export default AboutMe;
