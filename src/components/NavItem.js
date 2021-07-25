import React from "react";
import styled from "styled-components";

const Item = styled.div`
  font-size: 1.125rem;
  font-weight: 300;
  cursor: pointer;

  position: relative;

  &::after {
    background: ${({ theme }) => theme.defaultText};

    content: "";
    position: absolute;
    bottom: -0.5rem;
    left: 0;

    transform: scale(0);
    transition: transform 0.2s ease-in-out;

    width: 100%;
    height: 1px;
  }

  &:hover::after {
    transform: scale(1);
  }

  &:not(:last-child) {
    margin-right: 4rem;
  }
`;

const NavItem = ({ children }) => {
  return <Item>{children}</Item>;
};

export default NavItem;
