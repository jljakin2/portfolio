import React, { useEffect, useState } from "react";
import styled from "styled-components";

import SuccessIcon from "../assets/SuccessIcon";

import media from "../helpers/mediaQueries";

const Container = styled.div`
  border-radius: 0.5rem;
  background: ${({ theme, type }) =>
    type === "success" ? theme.leadership : theme.error};
  color: ${({ theme }) => theme.white};

  position: fixed;
  top: 13vh;
  right: ${({ showToast }) => (showToast ? "2vw" : "-50vw")};
  display: flex;
  align-items: center;

  height: 3.75rem;
  padding: 1rem;

  transition: top right 0.2s ease-out;
  z-index: 100000;

  // 850px
  @media only screen and (max-width: ${media.tablet}) {
    top: ${({ showToast }) => (showToast ? "12vh" : "-20vh")};
    right: 0;

    width: 100%;
    height: 3.25rem;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 1.5rem;

  width: 100%;
`;

const CloseButton = styled.button`
  border: none;
  background: transparent;
  color: ${({ theme }) => theme.white};
  cursor: pointer;
`;

const Toast = ({ type, message, handleShowToast, showToast }) => {
  useEffect(() => {
    setTimeout(() => {
      handleShowToast();
    }, 5000);
  }, [handleShowToast]);

  return (
    <Container type={type} showToast={showToast}>
      <ContentContainer>
        <SuccessIcon />
        <p>{message}</p>
        <CloseButton onClick={() => handleShowToast()}>X</CloseButton>
      </ContentContainer>
    </Container>
  );
};

export default Toast;
