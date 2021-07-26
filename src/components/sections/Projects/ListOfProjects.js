import React from "react";
import styled from "styled-components";

import SingleProject from "./SingleProject";

import { projects } from "../../../data/data";

const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  padding: 0 5rem;
`;

const ListOfProjects = () => {
  const renderedProjects = projects.map(project => {
    return <SingleProject {...project} />;
  });

  return <Container>{renderedProjects}</Container>;
};

export default ListOfProjects;
