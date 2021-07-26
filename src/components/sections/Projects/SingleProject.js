import React from "react";
import styled from "styled-components";

import Text from "../../../utilities/Text";
import Spacer from "../../../utilities/Spacer";
import Github from "../../../assets/Github";
import LiveIcon from "../../../assets/LiveIcon";
import Tag from "./Tag";

// ===== START OF STYLING =====
const Container = styled.div`
  /* border: 1px solid red; */
  display: flex;

  width: 100%;

  &:not(:last-child) {
    margin-bottom: 8rem;
  }
`;

const ProjectContent = styled.div`
  /* border: 1px solid blue; */
  display: flex;
  flex-direction: column;

  width: 50%;
  padding-right: 1rem;
`;

const ContentHeader = styled.div`
  display: flex;

  margin-bottom: 2rem;
`;

const IconContainer = styled.div`
  display: flex;

  margin-left: auto;
`;

const ProjectDescription = styled.div`
  display: flex;
  flex-direction: column;

  width: 50%;
  padding: 4rem 0 0 1rem;
`;

const Screenshot = styled.img`
  box-shadow: 0.25rem 0.25rem 1rem 0 rgba(0, 0, 0, 0.25);
  cursor: pointer;

  width: 100%;
  margin-bottom: 2rem;
`;

const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 0.5rem;

  width: 100%;
`;
// ===== END OF STYLING =====

const SingleProject = ({
  name,
  screenshot,
  github,
  live,
  tags,
  description,
}) => {
  const renderedTags = tags.map(tag => {
    return <Tag>{tag}</Tag>;
  });

  return (
    <Container>
      <ProjectContent>
        <ContentHeader>
          <Text type="heading3">{name}</Text>
          <IconContainer>
            <a href={github} target="_blank" rel="noreferrer">
              <Github />
            </a>

            <Spacer w="1rem" />

            <a href={live} target="_blank" rel="noreferrer">
              <LiveIcon />
            </a>
          </IconContainer>
        </ContentHeader>
        <a href={live} target="_blank" rel="noreferrer">
          <Screenshot
            src={screenshot}
            alt={`screenshot from ${name} platform`}
          />
        </a>
        <TagContainer>{renderedTags}</TagContainer>
      </ProjectContent>
      <ProjectDescription>
        <Text type="heading6">Description</Text>
        <Spacer h="3rem" />
        <Text type="body">{description}</Text>
      </ProjectDescription>
    </Container>
  );
};

export default SingleProject;
