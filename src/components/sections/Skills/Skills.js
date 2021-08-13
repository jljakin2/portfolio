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
  column-gap: 5rem;

  width: 100%;
  padding: 0 5rem;
`;

const ExperienceContainer = styled.div`
  width: 50%;
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 50%;
`;

const Skills = () => {
  const [isTech, setIsTech] = useState(true);

  const positions = isTech ? technical.positions : leadership.positions;
  const skills = isTech ? technical.skills : leadership.skills;

  // render list of elements
  const renderedExperienceCards = positions.map(item => {
    return <ExperienceCard {...item} />;
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
