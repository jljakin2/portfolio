import React, { useEffect } from "react";
import styled from "styled-components";

import SuccessIcon from "../assets/SuccessIcon";

const Container = styled.div`
  border-radius: 0.5rem;
  background: ${({ theme, type }) =>
    type === "success" ? theme.leadership : theme.error};
  color: ${({ theme }) => theme.white};

  position: fixed;
  top: 13vh;
  right: 2vw;
  display: flex;
  align-items: center;

  width: 20rem;
  height: 3.75rem;
  padding: 1rem;

  z-index: 100000;

  // 850px
  @media only screen and (max-width: 53.125em) {
    top: 10vh;
    right: 0;

    width: 100%;
    height: 3.25rem;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
`;

const CloseButton = styled.button`
  border: none;
  background: transparent;
  color: ${({ theme }) => theme.white};
  cursor: pointer;
`;

const Toast = ({ type, message, handleShowToast }) => {
  useEffect(() => {
    setTimeout(() => {
      handleShowToast();
    }, 5000);
  });

  return (
    <Container type={type}>
      <ContentContainer>
        <SuccessIcon />
        <p>{message}</p>
        <CloseButton onClick={() => handleShowToast()}>X</CloseButton>
      </ContentContainer>
    </Container>
  );
};

export default Toast;
