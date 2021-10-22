import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";

import Text from "../../../utilities/Text";
import Spacer from "../../../utilities/Spacer";
import Button from "../../../utilities/Button";

import heroImg from "../../../assets/heroImg.svg";

import media from "../../../helpers/mediaQueries";

// ===== START OF STYLING =====
const Container = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  height: 100%;
  padding: 3rem 7rem 0 7rem;

  // ===== MAX-WIDTH =====

  // 850px
  @media only screen and (max-width: ${media.tablet}) {
    flex-direction: column;
    align-items: stretch;
    justify-content: center;
    row-gap: 1rem;

    padding: 3rem 3rem 0 3rem;
  }

  // 450px
  @media only screen and (max-width: ${media.mobile}) {
    justify-content: flex-start;

    padding: 8rem 1.5rem 5rem 1.5rem;
  }

  // ===== MIN-WIDTH =====
  // 1600px
  @media only screen and (min-width: 100em) {
    padding: 3rem 10rem 0 10rem;
  }

  // 1800px
  @media only screen and (min-width: 112.5em) {
    padding: 3rem 12rem 0 12rem;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 50%;

  // 850px
  @media only screen and (max-width: ${media.tablet}) {
    align-items: center;

    width: 100%;
  }

  // 450px
  @media only screen and (max-width: ${media.mobile}) {
    text-align: center;
  }
`;

const ImgContainer = styled.div`
  display: flex;
  justify-content: flex-end;

  width: 50%;

  // 850px
  @media only screen and (max-width: ${media.tablet}) {
    order: -1;
    justify-content: center;

    width: 100%;
    margin-bottom: 3rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;

  // 850px
  @media only screen and (max-width: ${media.tablet}) {
    margin-top: 1.5rem;
  }
`;

const StyledHeroImg = styled.img`
  width: 90%;
`;
// ===== END OF STYLING =====

const Hero = () => {
  return (
    <Container>
      <TextContainer>
        <Text type="heading4" light>
          Hi. My name is Jeff.
        </Text>

        <Spacer h="1.5rem" />
        <Text type="heading1">I solve problems using code.</Text>
        <Spacer h="3rem" />
        <ButtonContainer>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}>
            <Button outline>Contact Me</Button>
          </Link>
          <Spacer w="1rem" />

          <Button>
            <a
              href="https://www.linkedin.com/in/jeff-jakinovich-b6b14943/"
              target="_blank"
              rel="noreferrer"
              className="button-link">
              LinkedIn
            </a>
          </Button>
        </ButtonContainer>
      </TextContainer>
      <ImgContainer>
        <StyledHeroImg
          src={heroImg}
          alt="jeff typing at laptop with a plant and coffee on his desk"
        />
      </ImgContainer>
    </Container>
  );
};

export default Hero;
