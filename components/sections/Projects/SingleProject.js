import React from "react";
import styled from "styled-components";
import Image from "next/image";

import Text from "../../../lib/utilities/Text";
import Spacer from "../../../lib/utilities/Spacer";
import GithubSmall from "../../../components/icons/GithubSmall";
import LiveIcon from "../../../components/icons/LiveIcon";
import Tag from "./Tag";

import media from "../../../lib/mediaQueries";

// ===== START OF STYLING =====
const Container = styled.div`
  display: flex;
  column-gap: 6rem;

  width: 100%;

  &:not(:last-child) {
    margin-bottom: 8rem;
  }

  // 850px
  @media only screen and (max-width: ${media.tablet}) {
    flex-direction: column;
    align-items: center;
  }
`;

const ProjectContent = styled.div`
  display: flex;
  flex-direction: column;

  width: 50%;

  // 850px
  @media only screen and (max-width: ${media.tablet}) {
    width: 100%;
    margin-bottom: 3rem;
  }
`;

const ContentHeader = styled.div`
  display: flex;

  margin-bottom: 2rem;

  // 450px
  @media only screen and (max-width: ${media.mobile}) {
    flex-direction: column;
    align-items: center;
  }
`;

const IconContainer = styled.div`
  display: flex;

  margin-left: auto;

  // 450px
  @media only screen and (max-width: ${media.mobile}) {
    margin: 1.5rem 0 0 0;
  }
`;

const ProjectDescription = styled.div`
  display: flex;
  flex-direction: column;

  width: 50%;

  // 850px
  @media only screen and (max-width: ${media.tablet}) {
    align-items: center;

    width: 100%;
  }

  // 450px
  @media only screen and (max-width: ${media.mobile}) {
    text-align: center;
  }
`;

const Screenshot = styled.a`
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

  // 850px
  @media only screen and (max-width: ${media.tablet}) {
    justify-content: center;
  }
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
              <GithubSmall />
            </a>

            <Spacer w="1rem" />

            <a href={live} target="_blank" rel="noreferrer">
              <LiveIcon />
            </a>
          </IconContainer>
        </ContentHeader>
        <Screenshot href={live} target="_blank" rel="noreferrer">
          <Image src={screenshot} alt={`screenshot from ${name} platform`} />
        </Screenshot>
        <TagContainer>{renderedTags}</TagContainer>
      </ProjectContent>
      <ProjectDescription>
        <Text type="heading6">Description</Text>
        <Spacer h="1.5rem" />
        <Text type="body">{description[0]}</Text>
        <Spacer h="1rem" />
        <Text type="body">{description[1]}</Text>
        <Spacer h="1rem" />
        <Text type="body">{description[2]}</Text>
        <Spacer h="1rem" />
      </ProjectDescription>
    </Container>
  );
};

export default SingleProject;
