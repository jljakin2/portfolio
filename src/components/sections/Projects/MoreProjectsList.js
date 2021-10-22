import React from "react";
import styled from "styled-components";

import SingleMoreProject from "./SingleMoreProject";

import { moreProjects } from "../../../data/data";
import media from "../../../helpers/mediaQueries";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  justify-items: center;
  grid-row-gap: 6rem;
  grid-column-gap: 2.5rem;

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

const MoreProjectsList = () => {
  const renderedMoreProjects = moreProjects.map((project, index) => {
    return <SingleMoreProject key={index} {...project} />;
  });

  return <Container>{renderedMoreProjects}</Container>;
};

export default MoreProjectsList;
