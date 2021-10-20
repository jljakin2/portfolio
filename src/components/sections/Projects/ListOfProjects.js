import React, { useState } from "react";
import styled from "styled-components";

import SingleProject from "./SingleProject";
import Spacer from "../../../utilities/Spacer";
import Button from "../../../utilities/Button";
import MoreProjectsList from "./MoreProjectsList";

import { projects } from "../../../data/data";
import media from "../../../helpers/mediaQueries";

const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
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

const ButtonContainer = styled.div`
  text-align: center;
`;

const ListOfProjects = () => {
  const [isMore, setIsMore] = useState(false);

  const renderedProjects = projects.map(project => {
    return <SingleProject {...project} />;
  });

  return (
    <>
      <Container>{renderedProjects}</Container>
      <Spacer h="6rem" />
      <ButtonContainer onClick={() => setIsMore(!isMore)}>
        <Button outline>More Projects</Button>
      </ButtonContainer>
      <Spacer h="4rem" />
      {isMore && <MoreProjectsList />}
      {isMore && <Spacer h="4rem" />}
    </>
  );
};

export default ListOfProjects;
