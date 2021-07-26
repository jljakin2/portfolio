import React from "react";
import styled from "styled-components";

import Text from "../../../utilities/Text";
import Spacer from "../../../utilities/Spacer";

const Container = styled.div`
  display: flex;
  flex-direction: column;

  &:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

const Bar = styled.div`
  background: ${({ theme }) => theme.mainBtn};
  border-radius: 0.25rem;

  width: ${({ level }) => level};
  height: 1rem;
`;

const SkillBar = ({ title, level }) => {
  return (
    <Container>
      <Text type="heading6">{title}</Text>
      <Spacer h="0.5rem" />
      <Bar level={level} />
    </Container>
  );
};

export default SkillBar;
