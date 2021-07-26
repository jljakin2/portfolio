import React from "react";
import styled from "styled-components";

import Text from "../../../utilities/Text";

// ===== START OF STYLING =====
const Container = styled.div`
  background: ${({ theme }) => theme.white};
  border-radius: 0.5rem;

  width: 100%;
  padding: 1.5rem;

  &:not(:last-child) {
    margin-bottom: 2rem;
  }
`;

const ListItem = styled.li``;
// ===== END OF STYLING =====

const ExperienceCard = ({ heading }) => {
  return (
    <Container>
      <Text type="heading5">{heading}</Text>
      <ul>
        <ListItem>
          <Text type="body">Item1</Text>
        </ListItem>
        <ListItem>
          <Text type="body">Item2</Text>
        </ListItem>
        <ListItem>
          <Text type="body">Item3</Text>
        </ListItem>
      </ul>
    </Container>
  );
};

export default ExperienceCard;
