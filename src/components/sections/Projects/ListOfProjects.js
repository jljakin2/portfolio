import React from "react";
import styled from "styled-components";

import SingleProject from "./SingleProject";

import { projects } from "../../../data/data";

const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  padding: 0 5rem;

  // ===== MAX-WIDTH =====
  // 400px
  @media only screen and (max-width: 25em) {
    padding: 0 1.5rem;
  }

  // ===== MIN-WIDTH =====
  // 1600px
  @media only screen and (min-width: 100em) {
    padding: 0 10rem;
    /* background: red; */
  }

  // 1800px
  @media only screen and (min-width: 112.5em) {
    padding: 0 12rem;
    /* background: blue; */
  }
`;

const ListOfProjects = () => {
  const renderedProjects = projects.map(project => {
    return <SingleProject {...project} />;
  });

  return <Container>{renderedProjects}</Container>;
};

export default ListOfProjects;
