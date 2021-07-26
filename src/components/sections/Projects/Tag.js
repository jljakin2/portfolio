import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background: ${({ theme }) => theme.mainBtn};
  border-radius: 1.34375rem;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.white};

  padding: 0.5rem 0.75rem;

  &:not(:last-child) {
    margin-right: 0.5rem;
  }
`;

const Tag = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Tag;
