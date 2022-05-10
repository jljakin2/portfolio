import React from "react";
import styled from "styled-components";

import Text from "../../../lib/utilities/Text";
import Spacer from "../../../lib/utilities/Spacer";

// ===== START OF STYLING =====
const Container = styled.div`
  background: ${({ theme }) => theme.white};
  border-radius: 0.5rem;

  width: 100%;
  padding: 2rem;

  &:not(:last-child) {
    margin-bottom: 2rem;
  }
`;

const List = styled.ul`
  list-style-type: none;
`;

const ListItem = styled.li`
  position: relative;

  margin-left: 1.5rem;

  &::before {
    content: "";
    border: 2px solid
      ${({ theme, isTech }) => (isTech ? theme.mainBtn : theme.leadership)};
    border-radius: 50%;

    position: absolute;
    top: 0.4rem;
    left: -1.5rem;

    width: 0.75rem;
    height: 0.75rem;
  }
`;
// ===== END OF STYLING =====

const ExperienceCard = ({ heading, experienceItems, isTech }) => {
  const renderedItems = experienceItems.map((item, index) => {
    return (
      <ListItem key={index} isTech={isTech}>
        <Text type="body">{item}</Text>
      </ListItem>
    );
  });

  return (
    <Container>
      <Text type="heading5">{heading}</Text>
      <Spacer h="1rem" />
      <List>
        {renderedItems}
        {/* <ListItem>
          <Text type="body">Item1</Text>
        </ListItem>
        <ListItem>
          <Text type="body">Item2</Text>
        </ListItem>
        <ListItem>
          <Text type="body">Item3</Text>
        </ListItem> */}
      </List>
    </Container>
  );
};

export default ExperienceCard;
