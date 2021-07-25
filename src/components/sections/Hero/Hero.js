import React from "react";
import styled from "styled-components";

import Text from "../../../utilities/Text";
import Spacer from "../../../utilities/Spacer";
import Button from "../../../utilities/Button";

import heroImg from "../../../assets/heroImg.svg";

// ===== START OF STYLING =====
const Container = styled.div`
  /* border: 1px solid blue; */
  display: flex;

  width: 100%;
  height: 85%;
  padding: 0 5rem;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 50%;
`;

const ImgContainer = styled.div`
  display: flex;
  justify-content: flex-end;

  width: 50%;
`;

const ButtonContainer = styled.div`
  display: flex;
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
          Hi. My name is Jeff
        </Text>
        <Spacer h="0.5rem" />
        <Text type="heading1">I am a web developer</Text>
        <Spacer h="2rem" />
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
