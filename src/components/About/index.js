import React from "react";
import {
  AboutContainer,
  AboutWrapper,
  Title,
  AboutSubSection,
  AboutLeftSide,
  Bio,
  Skills,
  Skill,
  AboutImage,
} from "../styled-components/About";
import { BsFillTerminalFill } from "react-icons/bs";
import {
  SiGit,
  SiGithub,
  SiHtml5,
  SiCss3,
  SiFigma,
  SiPostgresql,
  SiRuby,
  SiRails,
  SiTailwindcss,
  SiMaterialUi,
  SiHeroku,
  SiTrello,
  SiNetlify,
} from "react-icons/si";
import { FaJs, FaNode, FaReact, FaSass, FaDownload } from "react-icons/fa";

const AboutMe = ({ id, title, img, bio, alt }) => {
  return (
    <>
      <AboutContainer id={id}>
        <AboutWrapper>
          <Title>{title}</Title>
          <AboutSubSection>
            <AboutLeftSide>
              <Bio>{bio}</Bio>
              <Skills>
                <Skill>
                  {" "}
                  <BsFillTerminalFill size={50} />
                </Skill>
                <Skill>
                  {" "}
                  <SiGithub size={50} />
                </Skill>
                <Skill>
                  {" "}
                  <SiGit size={50} />
                </Skill>
                <Skill>
                  {" "}
                  <SiHtml5 size={50} />
                </Skill>
                <Skill>
                  {" "}
                  <SiCss3 size={50} />
                </Skill>
                <Skill>
                  {" "}
                  <FaSass size={50} />
                </Skill>
                <Skill>
                  {" "}
                  <FaJs size={50} />
                </Skill>
                <Skill>
                  {" "}
                  <FaNode size={50} />
                </Skill>
                <Skill>
                  {" "}
                  <FaReact size={50} />
                </Skill>
                <Skill>
                  {" "}
                  <SiRuby size={50} />
                </Skill>
                <Skill>
                  {" "}
                  <SiRails size={50} />
                </Skill>
                <Skill>
                  {" "}
                  <SiPostgresql size={50} />
                </Skill>
                <Skill>
                  {" "}
                  <SiFigma size={50} />
                </Skill>
                <Skill>
                  {" "}
                  <SiTailwindcss size={50} />
                </Skill>

                <Skill>
                  {" "}
                  <SiMaterialUi size={50} />
                </Skill>
                <Skill>
                  {" "}
                  <SiTrello size={50} />
                </Skill>
                <Skill>
                  {" "}
                  <SiNetlify size={50} />
                </Skill>
                <Skill>
                  {" "}
                  <SiHeroku size={50} />
                </Skill>
              </Skills>
            </AboutLeftSide>
            <AboutImage src={img} alt={alt} />
          </AboutSubSection>
        </AboutWrapper>
      </AboutContainer>
    </>
  );
};

export default AboutMe;
