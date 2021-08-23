import React from "react";
import styled from "styled-components";

import Text from "../../../utilities/Text";
import Spacer from "../../../utilities/Spacer";
import Button from "../../../utilities/Button";

import heroImg from "../../../assets/heroImg.svg";

// ===== START OF STYLING =====
const Container = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  height: 100%;
  padding: 3rem 7rem 0 7rem;

  // ===== MAX-WIDTH =====

  // 850px
  @media only screen and (max-width: 53.125em) {
    flex-direction: column;
    align-items: stretch;
    justify-content: center;

    padding: 3rem 3rem 0 3rem;
  }

  // 400px
  @media only screen and (max-width: 25em) {
    padding: 8rem 1.5rem 5rem 1.5rem;
  }

  // ===== MIN-WIDTH =====
  // 1600px
  @media only screen and (min-width: 100em) {
    padding: 3rem 10rem 0 10rem;
    /* background: red; */
  }

  // 1800px
  @media only screen and (min-width: 112.5em) {
    padding: 3rem 12rem 0 12rem;
    /* background: blue; */
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 50%;

  // 850px
  @media only screen and (max-width: 53.125em) {
    align-items: center;

    width: 100%;
  }

  // 400px
  @media only screen and (max-width: 25em) {
    text-align: center;
  }
`;

const ImgContainer = styled.div`
  display: flex;
  justify-content: flex-end;

  width: 50%;

  // 850px
  @media only screen and (max-width: 53.125em) {
    order: -1;
    justify-content: center;

    width: 100%;
    margin-bottom: 3rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;

  // 850px
  @media only screen and (max-width: 53.125em) {
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
        <Spacer h="0.5rem" />
        <Text type="heading1">I am a web developer</Text>
        <Spacer h="3rem" />
        <ButtonContainer>
          <Button outline>Contact Me</Button>
          <Spacer w="1rem" />
          <Button>Resume</Button>
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
