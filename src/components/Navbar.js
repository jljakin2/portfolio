import React, { useState } from "react";
import styled from "styled-components";
import { Link, animateScroll as scroll } from "react-scroll";
import { useMediaQuery } from "react-responsive";

import Logo from "../assets/Logo";
import Hamburger from "../assets/Hamburger";
import CloseIcon from "../assets/CloseIcon";
import MobileLogo from "../assets/MobileLogo";
import MobileMenu from "./MobileMenu";

// ===== START OF STYLING =====
const Container = styled.div`
  background: ${({ theme }) => theme.white};

  display: flex;
  align-items: center;
  position: fixed;

  width: 100%;
  height: 10vh;
  padding: 0 5rem;

  z-index: 10000;

  // ===== MAX-WIDTH =====
  // 900px
  @media only screen and (max-width: 56.25em) {
    /* background: yellow; */
  }

  // 400px
  @media only screen and (max-width: 25em) {
    padding: 0 1.5rem;
  }

  // ===== MIN-WIDTH =====
  // 1600px
  @media only screen and (min-width: 100em) {
    padding: 0 10rem;
    /* background: red; */
  }

  // 1800px
  @media only screen and (min-width: 112.5em) {
    padding: 0 12rem;
    /* background: blue; */
  }
`;

const ItemContainer = styled.div`
  display: flex;

  margin-left: auto;

  // 850px
  @media only screen and (max-width: 53.125em) {
    display: none;
  }
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
  const [mobileMenu, setMobileMenu] = useState(false);

  const isMobile = useMediaQuery({
    query: "(max-width: 25em)",
  });

  const showMobileMenu = () => {
    setMobileMenu(true);
  };

  const closeMobileMenu = () => {
    setMobileMenu(false);
  };

  return (
    <Container>
      {mobileMenu && <MobileMenu closeMobileMenu={closeMobileMenu} />}
      <Link
        activeClass="active"
        to="home"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}>
        {isMobile ? <MobileLogo /> : <Logo />}
      </Link>

      {!mobileMenu && <Hamburger showMobileMenu={showMobileMenu} />}
      {mobileMenu && <CloseIcon closeMobileMenu={closeMobileMenu} />}

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
