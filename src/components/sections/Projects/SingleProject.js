import React from "react";
import styled from "styled-components";

import Text from "../../../utilities/Text";
import Github from "../../../assets/Github";
import LiveIcon from "../../../assets/LiveIcon";

const Container = styled.div`
  display: flex;
`;

const ProjectContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContentHeader = styled.div`
  display: flex;
`;

const ProjectDescription = styled.div`
  display: flex;
  flex-direction: column;
`;

const SingleProject = ({ projectName }) => {
  return (
    <Container>
      <ProjectContent>
        <ContentHeader>
          <Text type="heading3">{projectName}</Text>
          <Github />
          <LiveIcon />
        </ContentHeader>
      </ProjectContent>
      <ProjectDescription></ProjectDescription>
    </Container>
  );
};

export default SingleProject;
