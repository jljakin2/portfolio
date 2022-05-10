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
    background: ${({ outline, theme }) =>
      outline ? theme.mainBtn : theme.btnHover};
    border: ${({ outline, theme }) =>
      outline ? `1px solid ${theme.mainBtn}` : "none"};
    color: ${({ theme }) => theme.white};
  }

  &:active {
    transform: scale(0.98);
  }

  // 400px
  @media only screen and (max-width: 25em) {
    font-size: 0.75rem;

    padding: 0.75rem 1.5rem;
  }
`;

const Button = ({ outline, full, children, type }) => {
  return (
    <StyledButton outline={outline} full={full} type={type}>
      {children}
    </StyledButton>
  );
};

Button.defaultProps = {
  outline: false,
  full: false,
  type: "button",
};

export default withTheme(Button);
