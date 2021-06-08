import React from "react";
import {
  TopBarContainer,
  CloseIcon,
  Icon,
  TopBarWrapper,
  TopBarMenu,
  TopBarLink,
} from "../styled-components/TopBar";

function TopBar({ isOpen, toggle }) {
  return (
    <TopBarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <TopBarWrapper>
        <TopBarMenu>
          <TopBarLink
            to="landing"
            smooth={true}
            duration={1500}
            onClick={toggle}
          >
            Home
          </TopBarLink>
          <TopBarLink to="about" smooth={true} duration={1500} onClick={toggle}>
            About
          </TopBarLink>
          <TopBarLink
            to="projects"
            smooth={true}
            duration={1500}
            onClick={toggle}
          >
            Projects
          </TopBarLink>
          <TopBarLink
            to="contact"
            smooth={true}
            duration={1500}
            onClick={toggle}
          >
            Contact
          </TopBarLink>
        </TopBarMenu>
      </TopBarWrapper>
    </TopBarContainer>
  );
}

export default TopBar;
