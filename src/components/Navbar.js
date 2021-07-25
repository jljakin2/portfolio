import React from "react";
import styled from "styled-components";

import Logo from "../assets/Logo";
import NavItem from "./NavItem";

// ===== START OF STYLING =====
const Container = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  height: 15%;
  padding: 0 5rem;
`;

const ItemContainer = styled.div`
  display: flex;

  margin-left: auto;
`;
// ===== END OF STYLING =====

const NavBar = () => {
  return (
    <Container>
      <Logo />
      <ItemContainer>
        <NavItem>Projects</NavItem>
        <NavItem>Skills</NavItem>
        <NavItem>About</NavItem>
        <NavItem>Contact</NavItem>
      </ItemContainer>
    </Container>
  );
};

export default NavBar;
