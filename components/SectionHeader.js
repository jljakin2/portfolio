import React from "react";
import styled from "styled-components";

import Text from "../lib/utilities/Text";

const Container = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
  margin-bottom: 6rem;
  padding-top: 5rem;
`;

const SectionHeader = ({ children }) => {
  return (
    <Container>
      <Text type="heading2">{children}</Text>
    </Container>
  );
};

export default SectionHeader;
