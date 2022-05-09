import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { useMediaQuery } from "react-responsive";

import SuccessIcon from "./icons/SuccessIcon";

import media from "../lib/mediaQueries";

const moveInFromLeft = keyframes`
  from {
    transform: translateX(100%);
  }

  to {
    transform: translateX(0%);
  }
`;

const moveOutToRight = keyframes`
  from {
    transform: translateX(0%)
  }

  to {
    transform: translateX(100%)
  }
`;

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

  height: 3.75rem;
  padding: 1rem;

  animation-name: ${({ isNotDesktop, showToast }) =>
    !isNotDesktop && showToast && moveInFromLeft};
  animation-duration: 0.3s;
  animation-iteration-count: 1;

  z-index: 100000;

  // 850px
  @media only screen and (max-width: ${media.tablet}) {
    border-radius: 0;

    top: 12vh;
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
  const isMobile = useMediaQuery({
    query: `(max-width: ${media.mobile})`,
  });

  const isNotDesktop = useMediaQuery({
    query: `(max-width: ${media.tablet})`,
  });

  useEffect(() => {
    !isMobile &&
      setTimeout(() => {
        handleShowToast();
      }, 4000);
  }, [handleShowToast, isMobile]);

  return (
    <Container type={type} showToast={showToast} isNotDesktop={isNotDesktop}>
      <ContentContainer>
        <SuccessIcon />
        <p>{message}</p>
        <CloseButton onClick={() => handleShowToast()}>X</CloseButton>
      </ContentContainer>
    </Container>
  );
};

export default Toast;
