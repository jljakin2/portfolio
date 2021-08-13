import React, { useState } from "react";
import styled from "styled-components";
import emailjs from "emailjs-com";

import Text from "../../../utilities/Text";
import Button from "../../../utilities/Button";
import LinkedInIcon from "../../../assets/LinkedInIcon";
import GithubLarge from "../../../assets/GithubLarge";
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
  align-items: center;
`;

const Form = styled.form`
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
  const [values, setValues] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const { REACT_APP_EMAILJS_SERVICE_KEY, REACT_APP_EMAILJS_USER_KEY } =
    process.env;

  const sendEmail = e => {
    e.preventDefault();

    emailjs
      .sendForm(
        REACT_APP_EMAILJS_SERVICE_KEY,
        "template_0onn0cg",
        e.target,
        REACT_APP_EMAILJS_USER_KEY
      )
      .then(
        result => {
          console.log(result.text);
        },
        error => {
          console.log(error.text);
        }
      );

    setValues({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const handleChange = event => {
    /**
     * helper function used to keep the local field states updated with the field values
     */

    // destructure name and value info from the event object.
    // ! it is super important that the name of the input field and the name of the local state for the field value are the same,
    // ! otherwise, the state and input field won't update each other
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

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
            <GithubLarge />
            <DevIcon />
          </Logos>
        </Connect>
      </Content>
      <Form onSubmit={sendEmail}>
        <StyledInput
          type="text"
          placeholder="Name"
          name="name"
          value={values.name}
          onChange={handleChange}
        />
        <StyledInput
          type="email"
          placeholder="Email"
          name="email"
          value={values.email}
          onChange={handleChange}
        />
        <StyledInput
          type="text"
          placeholder="Subject"
          name="subject"
          value={values.subject}
          onChange={handleChange}
        />
        <StyledTextArea
          placeholder="Message"
          rows="15"
          cols="50"
          name="message"
          value={values.message}
          onChange={handleChange}
        />
        <Button full type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default Contact;
