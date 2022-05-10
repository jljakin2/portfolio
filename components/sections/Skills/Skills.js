import React, { useState } from "react";
import styled, { withTheme } from "styled-components";

import Spacer from "../../../lib/utilities/Spacer";
import ExperienceCard from "./ExperienceCard";
import SkillBar from "./SkillBar";

import { leadership, technical } from "../../../lib/data";
import media from "../../../lib/mediaQueries";

const ToggleContainer = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
  margin-top: -2rem;
`;

const ToggleButtons = styled.div`
  border-radius: 0.5rem;
  cursor: pointer;

  display: flex;

  height: 3rem;
  width: 20%;

  // 850px
  @media only screen and (max-width: ${media.tablet}) {
    width: 35%;
  }

  // 450px
  @media only screen and (max-width: ${media.mobile}) {
    width: 60%;
  }
`;

const TechnicalToggle = styled.div`
  color: ${({ theme, isTech }) => (isTech ? theme.white : theme.defaultText)};
  background: ${({ theme, isTech }) => (isTech ? theme.mainBtn : theme.white)};
  border-radius: 0.5rem 0 0 0.5rem;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 50%;

  transition: all 0.15s ease-out;

  &:hover {
    color: ${({ theme }) => theme.white};
    background: ${({ theme }) => theme.mainBtn};
  }
`;

const LeadershipToggle = styled.div`
  color: ${({ theme, isTech }) => (isTech ? theme.defaultText : theme.white)};
  background: ${({ theme, isTech }) =>
    isTech ? theme.white : theme.leadership};
  border-radius: 0 0.5rem 0.5rem 0;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 50%;

  transition: all 0.15s ease-out;

  &:hover {
    color: ${({ theme }) => theme.white};
    background: ${({ theme }) => theme.leadership};
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  column-gap: 6rem;

  width: 100%;
  padding: 0 5rem;

  // ===== MAX-WIDTH =====
  // 850px
  @media only screen and (max-width: ${media.tablet}) {
    flex-direction: column;
    column-gap: 0;
    row-gap: 4rem;
  }

  // 450px
  @media only screen and (max-width: ${media.mobile}) {
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

const ExperienceContainer = styled.div`
  width: 50%;

  // 850px
  @media only screen and (max-width: ${media.tablet}) {
    width: 100%;
  }
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 50%;

  // 850px
  @media only screen and (max-width: ${media.tablet}) {
    order: -1;

    width: 100%;
  }
`;

const Skills = () => {
  const [isTech, setIsTech] = useState(true);

  const positions = isTech ? technical.positions : leadership.positions;
  const skills = isTech ? technical.skills : leadership.skills;

  // render list of elements
  const renderedExperienceCards = positions.map((item, index) => {
    return <ExperienceCard {...item} key={index} isTech={isTech} />;
  });

  const renderedSkillBars = skills.map((item, index) => {
    return (
      <SkillBar
        key={index}
        isTech={isTech}
        title={item.skillName}
        level={item.skillLevel}
      />
    );
  });

  return (
    <div>
      <ToggleContainer>
        <ToggleButtons>
          <TechnicalToggle onClick={() => setIsTech(!isTech)} isTech={isTech}>
            Technical
          </TechnicalToggle>
          <LeadershipToggle onClick={() => setIsTech(!isTech)} isTech={isTech}>
            Leadership
          </LeadershipToggle>
        </ToggleButtons>
      </ToggleContainer>
      <Spacer h="5rem" />
      <Container>
        <ExperienceContainer>{renderedExperienceCards}</ExperienceContainer>
        <SkillsContainer>{renderedSkillBars}</SkillsContainer>
      </Container>
      <Spacer h="5rem" />
    </div>
  );
};

export default withTheme(Skills);
