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

  transition: all 0.1s ease-out;

  width: ${({ full }) => (full ? "100%" : "")};
  padding: 1rem 2rem;

  &:hover {
    background: ${({ theme }) => theme.btnHover};
    border: ${({ outline, theme }) =>
      outline ? `1px solid ${theme.btnHover}` : "none"};
    color: ${({ theme }) => theme.white};
  }
`;

const Button = ({ outline, full, children }) => {
  return (
    <StyledButton outline={outline} full={full}>
      {children}
    </StyledButton>
  );
};

Button.defaultProps = {
  outline: false,
  full: false,
};

export default withTheme(Button);
