import Head from "next/head";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Hero from "../components/sections/Hero/Hero";
import ListOfProjects from "../components/sections/Projects/ListOfProjects";
import Skills from "../components/sections/Skills/Skills";
import About from "../components/sections/About/About";
import Contact from "../components/sections/Contact/Contact";
import Footer from "../components/Footer";
import SectionHeader from "../components/SectionHeader";

import GlobalStyle from "../theme/GlobalStyle";
import theme from "../theme/theme";
import media from "../lib/mediaQueries";

// ===== START OF STYLING =====
const StyledHeader = styled.header`
  width: 100%;
  height: 90vh;

  // 450px
  @media only screen and (max-width: ${media.mobile}) {
    height: 100vh;
  }
`;

const GreySection = styled.section`
  background: ${({ theme }) => theme.greyBackground};

  width: 100%;
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>Jeff Jakinovich</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

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
    </>
  );
}
