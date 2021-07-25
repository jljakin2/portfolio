import React from "react";
import styled, { withTheme } from "styled-components";

const StyledButton = styled.button`
  border-radius: 0.5rem;
  background: ${({ outline, theme }) =>
    outline ? "transparent" : theme.mainBtn};
  border: ${({ outline, theme }) =>
    outline ? `1px solid ${theme.mainBtn}` : "none"};
  color: ${({ outline, theme }) => (outline ? theme.mainBtn : theme.white)};
  font-size: 0.875rem;
  cursor: pointer;

  padding: 1rem 2rem;

  &:hover {
    background: ${({ theme }) => theme.btnHover};
    border: ${({ outline, theme }) =>
      outline ? `1px solid ${theme.btnHover}` : "none"};
    color: ${({ theme }) => theme.white};
  }
`;

const Button = ({ outline, children }) => {
  return <StyledButton outline={outline}>{children}</StyledButton>;
};

Button.defaultProps = {
  outline: false,
};

export default withTheme(Button);
