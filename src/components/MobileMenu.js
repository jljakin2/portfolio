import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";

const BackgroundContainer = styled.div`
  background: rgba(0, 0, 0, 0.7);
  height: 100vh;

  position: absolute;
  top: 15vh;
  left: 0;

  width: 100%;

  z-index: 1000;
`;

const MainContainer = styled.div`
  background: ${({ theme }) => theme.white};

  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  padding-bottom: 1rem;
`;

const Item = styled.div`
  font-size: 1.125rem;
  font-weight: 300;
  cursor: pointer;

  padding: 1rem 0;

  &:active {
    color: ${({ theme }) => theme.mainBtn};
  }
`;

const MobileMenu = ({ closeMobileMenu }) => {
  return (
    <BackgroundContainer>
      <MainContainer>
        <Item>
          <Link
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            onClick={closeMobileMenu}>
            Projects
          </Link>
        </Item>
        <Item>
          <Link
            activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            onClick={closeMobileMenu}>
            Skills
          </Link>
        </Item>
        <Item>
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            onClick={closeMobileMenu}>
            About
          </Link>
        </Item>
        <Item>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            onClick={closeMobileMenu}>
            Contact
          </Link>
        </Item>
      </MainContainer>
    </BackgroundContainer>
  );
};

export default MobileMenu;
