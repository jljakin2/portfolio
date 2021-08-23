import React, { useState } from "react";
import styled, { withTheme } from "styled-components";

import Spacer from "../../../utilities/Spacer";
import ExperienceCard from "./ExperienceCard";
import SkillBar from "./SkillBar";

import { leadership, technical } from "../../../data/data";
import theme from "../../../theme/theme";

const ToggleContainer = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
  margin-top: -2rem;
`;

const ToggleButtons = styled.div`
  border-radius: 0.5rem;
  /* background: ${({ theme }) => theme.white}; */
  cursor: pointer;

  display: flex;

  height: 3rem;
  width: 20%;

  // 850px
  @media only screen and (max-width: 53.125em) {
    width: 35%;
  }

  // 400px
  @media only screen and (max-width: 25em) {
    width: 60%;
  }
`;

const TechnicalToggle = styled.div`
  color: ${({ theme }) => theme.white};
  border-radius: 0.5rem 0 0 0.5rem;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 50%;
`;

const LeadershipToggle = styled.div`
  border-radius: 0 0.5rem 0.5rem 0;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 50%;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  column-gap: 6rem;

  width: 100%;
  padding: 0 5rem;

  // ===== MAX-WIDTH =====
  // 850px
  @media only screen and (max-width: 53.125em) {
    flex-direction: column;
    column-gap: 0;
    row-gap: 4rem;
  }

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

const ExperienceContainer = styled.div`
  width: 50%;

  // 850px
  @media only screen and (max-width: 53.125em) {
    width: 100%;
  }
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 50%;

  // 850px
  @media only screen and (max-width: 53.125em) {
    order: -1;

    width: 100%;
  }
`;

const Skills = () => {
  const [isTech, setIsTech] = useState(true);

  const positions = isTech ? technical.positions : leadership.positions;
  const skills = isTech ? technical.skills : leadership.skills;

  // render list of elements
  const renderedExperienceCards = positions.map(item => {
    return <ExperienceCard {...item} isTech={isTech} />;
  });

  const renderedSkillBars = skills.map(item => {
    return (
      <SkillBar
        isTech={isTech}
        title={item.skillName}
        level={item.skillLevel}
      />
    );
  });

  // state specific styling
  const technicalStyle = {
    background: isTech ? theme.mainBtn : theme.white,
    color: isTech ? theme.white : theme.defaultText,
  };
  const leadershipStyle = {
    background: isTech ? theme.white : theme.leadership,
    color: isTech ? theme.defaultText : theme.white,
  };

  return (
    <div>
      <ToggleContainer>
        <ToggleButtons>
          <TechnicalToggle
            style={technicalStyle}
            onClick={() => setIsTech(!isTech)}>
            Technical
          </TechnicalToggle>
          <LeadershipToggle
            style={leadershipStyle}
            onClick={() => setIsTech(!isTech)}>
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
