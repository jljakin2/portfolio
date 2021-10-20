import React from "react";
import styled from "styled-components";

import media from "../../../helpers/mediaQueries";

const Container = styled.div`
  background: orangered;
  border: 1px solid blue;

  width: 100%;
  height: 25rem;
  padding: 0 5rem;

  // ===== MAX-WIDTH =====
  // 450px
  @media only screen and (max-width: ${media.mobile}) {
    padding: 0 1.5rem;
  }

  // ===== MIN-WIDTH =====
  // 1600px
  @media only screen and (min-width: 100em) {
    padding: 0 10rem;
  }

  // 1800px
  @media only screen and (min-width: 112.5em) {
    padding: 0 12rem;
  }
`;

const MoreProjectsList = () => {
  return <Container>MoreProjectsList</Container>;
};

export default MoreProjectsList;
