import React from "react";
import styled from "styled-components";

import Text from "../utilities/Text";

const Container = styled.div`
  background: ${({ theme }) => theme.mainBtn};
  color: ${({ theme }) => theme.white};

  display: flex;
  flex-direction: column;
  row-gap: 1rem;

  width: 100%;
  height: 12rem;
  padding: 2rem 5rem;
`;

const Footer = () => {
  return (
    <Container>
      <Text type="heading5">Jeff Jakinovich</Text>
      <Text type="heading6">2021</Text>
    </Container>
  );
};

export default Footer;
