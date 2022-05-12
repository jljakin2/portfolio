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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <title>Jeff Jakinovich - Full-Stack Developer</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="I am a passionate full-stack developer who uses the MERN (MongoDB, ExpressJS, ReactJS, NodeJS) stack to solve problems that drive business results"
        />
        <meta
          property="og:title"
          content="Jeff Jakinovich - Full-Stack Developer"
        />
        <meta
          property="og:description"
          content="I am a passionate full-stack developer who uses the MERN (MongoDB, ExpressJS, ReactJS, NodeJS) stack to solve problems that drive business results"
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dpp64ouz9/image/upload/v1652322606/devPortfolio/heroImg_xyjlto.svg"
        />
        <meta name="robots" content="index, follow" />
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
