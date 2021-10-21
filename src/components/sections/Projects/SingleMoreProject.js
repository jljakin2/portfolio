import React, { useState } from "react";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";

import LiveIcon from "../../../assets/LiveIcon";
import GithubSmall from "../../../assets/GithubSmall";

import Text from "../../../utilities/Text";
import Spacer from "../../../utilities/Spacer";

import media from "../../../helpers/mediaQueries";

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
  cursor: pointer;

  display: flex;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
  padding: 1rem 4rem;

  z-index: 100;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;

  padding: 1.5rem 1rem;
`;

const Screenshot = styled.img`
  object-fit: cover;

  width: 100%;
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  margin: 1rem 0 1.5rem 0;
`;

const SingleMoreProject = ({ name, screenshot, live, github, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  const isNotDesktop = useMediaQuery({
    query: `(max-width: ${media.tablet})`,
  });

  return (
    <Container>
      <ContentContainer>
        <ImageContainer
          onMouseEnter={() => setIsHovered(!isHovered)}
          onMouseLeave={() => setIsHovered(!isHovered)}>
          <Screenshot src={screenshot} alt="screenshot of app" />
          {isHovered && !isNotDesktop && (
            <HoveredScreen>
              <a href={live} target="_blank" rel="noreferrer">
                <LiveIcon light />
              </a>
              <a href={github} target="_blank" rel="noreferrer">
                <GithubSmall light />
              </a>
            </HoveredScreen>
          )}
        </ImageContainer>
        <TextContainer>
          <Text type="heading6">{name}</Text>
          <Spacer h="0.5rem" />
          <Text type="body" light>
            {description}
          </Text>
        </TextContainer>
        {isNotDesktop && (
          <LogoContainer>
            <a href={live} target="_blank" rel="noreferrer">
              <LiveIcon />
            </a>
            <Spacer w="2rem" />
            <a href={github} target="_blank" rel="noreferrer">
              <GithubSmall />
            </a>
          </LogoContainer>
        )}
      </ContentContainer>
    </Container>
  );
};

export default SingleMoreProject;
