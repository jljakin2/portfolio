import React, { useState } from "react";
import styled from "styled-components";

import Text from "../../../utilities/Text";
import Spacer from "../../../utilities/Spacer";

const Container = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
`;

const ContentContainer = styled.div`
  background: ${({ theme }) => theme.white};
  border-radius: 0.5rem;
  box-shadow: 0.25rem 0.25rem 1rem 0 rgba(0, 0, 0, 0.25);

  display: flex;
  flex-direction: column;

  width: 80%;
  min-height: 23rem;
  overflow: hidden;
`;

const ImageContainer = styled.div`
  position: relative;

  width: 100%;
`;

const HoveredScreen = styled.div`
  background: rgba(0, 0, 0, 0.75);
  color: white;

  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  z-index: 100;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;

  padding: 1.5rem 2rem;
`;

const Screenshot = styled.img`
  object-fit: cover;

  width: 100%;
`;

const SingleMoreProject = ({ name, screenshot }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Container>
      <ContentContainer>
        <ImageContainer
          onMouseEnter={() => setIsHovered(!isHovered)}
          onMouseLeave={() => setIsHovered(!isHovered)}>
          <Screenshot src={screenshot} alt="screenshot of app" />
          {isHovered && <HoveredScreen>Hello I'm hovered</HoveredScreen>}
        </ImageContainer>
        <TextContainer>
          <Text type="heading6">{name}</Text>
          <Spacer h="0.5rem" />
          <Text type="body" light>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis, nesciunt! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Praesentium, nobis.
          </Text>
        </TextContainer>
      </ContentContainer>
    </Container>
  );
};

export default SingleMoreProject;
