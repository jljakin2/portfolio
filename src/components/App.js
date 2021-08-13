import React from "react";
import styled, { ThemeProvider } from "styled-components";

import Navbar from "./Navbar";
import Hero from "./sections/Hero/Hero";
import ListOfProjects from "./sections/Projects/ListOfProjects";
import Skills from "./sections/Skills/Skills";
import About from "./sections/About/About";
import Contact from "./sections/Contact/Contact";
import Footer from "./Footer";
import SectionHeader from "./SectionHeader";

import GlobalStyle from "../theme/GlobalStyle";
import theme from "../theme/theme";

const StyledHeader = styled.header`
  /* border: 1px solid red; */

  width: 100%;
  height: 90vh;
`;

const GreySection = styled.section`
  background: ${({ theme }) => theme.greyBackground};

  width: 100%;
`;

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <StyledHeader id="home">
        <Navbar />
        <Hero />
      </StyledHeader>
      <main>
        <GreySection id="projects">
          <SectionHeader>Projects</SectionHeader>
          <ListOfProjects />
        </GreySection>
        <GreySection id="skills">
          <SectionHeader>Skills</SectionHeader>
          <Skills />
        </GreySection>
        <section id="about">
          <SectionHeader>About</SectionHeader>
          <About />
        </section>
        <GreySection id="contact">
          <SectionHeader>Contact</SectionHeader>
          <Contact />
        </GreySection>
      </main>
      <footer>
        <Footer />
      </footer>
    </ThemeProvider>
  );
};

export default App;
