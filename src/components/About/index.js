import React from "react";
import {
  AboutContainer,
  AboutWrapper,
  Title,
  AboutSubSection,
  AboutLeftSide,
  BioOne,
  Skills,
  Skill,
  AboutRightSide,
  AboutImage,
} from "../styled-components/About";

const AboutMe = ({ id, title, img, alt, skills, bioOne }) => {
  return (
    <>
      <AboutContainer id={id}>
        <AboutWrapper>
          <Title>{title}</Title>
          <AboutSubSection>
            <AboutLeftSide>
              <BioOne>{bioOne}</BioOne>
              <Skills>
                {skills.map(function (SkillIcons) {
                  return (
                    <Skill>
                      <SkillIcons size={30} key={id} />
                    </Skill>
                  );
                })}
              </Skills>
            </AboutLeftSide>

            <AboutRightSide>
              <AboutImage src={img} alt={alt} />
            </AboutRightSide>
          </AboutSubSection>
        </AboutWrapper>
      </AboutContainer>
    </>
  );
};

export default AboutMe;
