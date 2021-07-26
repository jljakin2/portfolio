import React from "react";
import styled from "styled-components";

import Text from "../../../utilities/Text";
import Button from "../../../utilities/Button";
import LinkedInIcon from "../../../assets/LinkedInIcon";
import Github from "../../../assets/Github";
import DevIcon from "../../../assets/DevIcon";

const Container = styled.div`
  display: flex;
  column-gap: 4rem;

  width: 100%;
  padding: 0 5rem 5rem 5rem;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1.5rem;

  width: 50%;
`;

const Connect = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;

  margin-top: auto;
  margin-bottom: 5rem;
`;

const Logos = styled.div`
  display: flex;
  column-gap: 1rem;
`;

const Form = styled.div`
  background: ${({ theme }) => theme.white};

  display: flex;
  flex-direction: column;
  row-gap: 1.5rem;

  width: 50%;
  padding: 2.25rem;
`;

const StyledInput = styled.input`
  border: 1px solid ${({ theme }) => theme.inputBorder};
  border-radius: 0.5rem;

  width: 100%;
  height: 3.5rem;
  padding: 1rem 0.75rem 1rem 0.75rem;
`;

const StyledTextArea = styled.textarea`
  border: 1px solid ${({ theme }) => theme.inputBorder};
  border-radius: 0.5rem;
  font-family: "Open Sans", sans-serif;

  width: 100%;
  padding: 1rem 0.75rem 1rem 0.75rem;
`;

const Contact = () => {
  return (
    <Container>
      <Content>
        <Text type="heading5">Let's work together.</Text>
        <Text type="body" light>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Congue eu
          consequat ac felis donec et odio pellentesque. Tellus elementum
          sagittis vitae et leo.
        </Text>
        <Connect>
          <Text type="heading6">Other ways to connect.</Text>
          <Logos>
            <LinkedInIcon />
            <Github />
            <DevIcon />
          </Logos>
        </Connect>
      </Content>
      <Form>
        <StyledInput type="text" placeholder="Name" />
        <StyledInput type="email" placeholder="Email" />
        <StyledInput type="text" placeholder="Subject" />
        <StyledTextArea placeholder="Message" rows="15" cols="50" />
        <Button full>Submit</Button>
      </Form>
    </Container>
  );
};

export default Contact;
