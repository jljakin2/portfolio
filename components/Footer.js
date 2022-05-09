import React from "react";
import styled from "styled-components";

import Text from "../lib/utilities/Text";

import media from "../lib/mediaQueries";

const Container = styled.div`
  background: ${({ theme }) => theme.mainBtn};
  color: ${({ theme }) => theme.white};

  display: flex;
  flex-direction: column;
  row-gap: 1rem;

  width: 100%;
  height: 12rem;
  padding: 2rem 5rem;

  // ===== MAX-WIDTH =====

  // 450px
  @media only screen and (max-width: ${media.mobile}) {
    padding: 2rem 1.5rem;
  }

  // ===== MIN-WIDTH =====
  // 1600px
  @media only screen and (min-width: 100em) {
    padding: 2rem 10rem;
  }

  // 1800px
  @media only screen and (min-width: 112.5em) {
    padding: 2rem 12rem;
  }
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Container>
      <Text type="heading5">Jeff Jakinovich</Text>
      <Text type="heading6">{currentYear}</Text>
    </Container>
  );
};

export default Footer;
