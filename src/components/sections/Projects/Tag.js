import React from "react";
import styled from "styled-components";

import media from "../../../helpers/mediaQueries";

const Container = styled.div`
  background: ${({ theme }) => theme.mainBtn};
  border-radius: 1.34375rem;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.white};

  padding: 0.5rem 0.75rem;

  &:not(:last-child) {
    margin-right: 0.5rem;
  }

  // 450px
  @media only screen and (max-width: ${media.mobile}) {
    font-size: 0.75rem;

    padding: 0.4rem 0.65rem;
  }
`;

const Tag = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Tag;
