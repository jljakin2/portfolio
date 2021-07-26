import React from "react";
import styled from "styled-components";

import Spacer from "../../../utilities/Spacer";
import ExperienceCard from "./ExperienceCard";
import SkillBar from "./SkillBar";

import { technical } from "../../../data/data";

const ToggleContainer = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
  margin-top: -2rem;
`;

const ToggleButtons = styled.div`
  border: 1px solid ${({ theme }) => theme.mainBtn};
  border-radius: 0.5rem;
  background: ${({ theme }) => theme.white};
  cursor: pointer;

  display: flex;

  height: 3rem;
  width: 20%;
`;

const TechnicalToggle = styled.div`
  background: ${({ theme }) => theme.mainBtn};
  border-right: 1px solid ${({ theme }) => theme.mainBtn};
  color: ${({ theme }) => theme.white};

  display: flex;
  justify-content: center;
  align-items: center;

  width: 50%;
`;

const LeadershipToggle = styled.div`
  background: transparent;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 50%;
`;

const Container = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  padding: 0 5rem;
`;

const ExperienceContainer = styled.div`
  width: 50%;
  padding-right: 2rem;
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 50%;
  padding-left: 2rem;
`;

const Skills = () => {
  const renderedSkillBars = technical.skills.map(item => {
    return <SkillBar title={item.skillName} level={item.skillLevel} />;
  });

  return (
    <>
      <ToggleContainer>
        <ToggleButtons>
          <TechnicalToggle>Technical</TechnicalToggle>
          <LeadershipToggle>Leadership</LeadershipToggle>
        </ToggleButtons>
      </ToggleContainer>
      <Spacer h="5rem" />
      <Container>
        <ExperienceContainer>
          <ExperienceCard heading="Senior Business Operations Specialist" />
          <ExperienceCard heading="Senior Marketing Strategist" />
        </ExperienceContainer>
        <SkillsContainer>{renderedSkillBars}</SkillsContainer>
      </Container>
      <Spacer h="5rem" />
    </>
  );
};

export default Skills;
