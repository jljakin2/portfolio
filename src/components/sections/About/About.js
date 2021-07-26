import React from "react";
import styled from "styled-components";

import Text from "../../../utilities/Text";
import Spacer from "../../../utilities/Spacer";

import commImg from "../../../assets/commImg.svg";
import readingImg from "../../../assets/readingImg.svg";
import golfImg from "../../../assets/golfImg.svg";

const Container = styled.div`
  width: 100%;
  padding: 0 5rem;
  margin-bottom: 5rem;
`;

const ItemContainer = styled.div`
  display: flex;
  column-gap: 4rem;

  &:not(:last-child) {
    margin-bottom: 4rem;
  }
`;

const ItemImage = styled.img`
  width: 25%;
`;

const ItemText = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;

  width: 75%;
`;

const About = () => {
  return (
    <Container>
      <ItemContainer>
        <ItemImage
          src={commImg}
          alt="Jeff giving a presentation in front of a screen with charts on it"
        />
        <ItemText>
          <Text type="heading5">Communicator</Text>
          <Text type="body" light>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
        </ItemText>
      </ItemContainer>
      <ItemContainer>
        <ItemText>
          <Text type="heading5">Life-Long Learner</Text>
          <Text type="body" light>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
        </ItemText>
        <ItemImage
          src={readingImg}
          alt="Jeff sitting in a chair reading a book under a lamp"
        />
      </ItemContainer>
      <ItemContainer>
        <ItemImage
          src={golfImg}
          alt="Jeff with his back turned hitting a golf shot on a golf course"
        />
        <ItemText>
          <Text type="heading5">Love to be active</Text>
          <Text type="body" light>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
        </ItemText>
      </ItemContainer>
    </Container>
  );
};

export default About;
