import React from "react";
import styled from "styled-components";
import { Link, animateScroll as scroll } from "react-scroll";

import Logo from "../assets/Logo";
// import NavItem from "./NavItem";

// ===== START OF STYLING =====
const Container = styled.div`
  background: ${({ theme }) => theme.white};
  /* box-shadow: 0px 3px 1.125rem 5px rgba(0, 0, 0, 0.2); */

  display: flex;
  align-items: center;
  position: fixed;

  width: 100%;
  height: 15%;
  padding: 0 5rem;

  z-index: 10000;
`;

const ItemContainer = styled.div`
  display: flex;

  margin-left: auto;
`;

const NavItem = styled.div`
  font-size: 1.125rem;
  font-weight: 300;
  cursor: pointer;

  position: relative;

  &::after {
    background: ${({ theme }) => theme.defaultText};

    content: "";
    position: absolute;
    bottom: -0.5rem;
    left: 0;

    transform: scale(0);
    transition: transform 0.2s ease-in-out;

    width: 100%;
    height: 1px;
  }

  &:hover::after {
    transform: scale(1);
  }

  &:not(:last-child) {
    margin-right: 4rem;
  }

  & > .active::after {
    background: ${({ theme }) => theme.defaultText};

    content: "";
    position: absolute;
    bottom: -0.5rem;
    left: 0;

    width: 100%;
    height: 1px;
  }
`;
// ===== END OF STYLING =====

const NavBar = () => {
  return (
    <Container>
      <Link
        activeClass="active"
        to="home"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}>
        <Logo />
      </Link>

      <ItemContainer>
        <NavItem>
          <Link
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}>
            Projects
          </Link>
        </NavItem>
        <NavItem>
          <Link
            activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}>
            Skills
          </Link>
        </NavItem>
        <NavItem>
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}>
            About
          </Link>
        </NavItem>
        <NavItem>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}>
            Contact
          </Link>
        </NavItem>
        {/* <NavItem>Projects</NavItem>
        <NavItem>Skills</NavItem>
        <NavItem>About</NavItem>
        <NavItem>Contact</NavItem> */}
      </ItemContainer>
    </Container>
  );
};

export default NavBar;
