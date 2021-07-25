import React from "react";
import styled from "styled-components";

import SingleProject from "./SingleProject";

const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  padding: 0 5rem;
`;

const ListOfProjects = () => {
  return (
    <Container>
      <SingleProject projectName="Mentor Match" />
      <SingleProject projectName="Audiophile" />
    </Container>
  );
};

export default ListOfProjects;
