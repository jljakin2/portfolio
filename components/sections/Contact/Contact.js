import React, { useState } from "react";
import styled, { withTheme } from "styled-components";
import emailjs from "@emailjs/browser";

import Text from "../../../lib/utilities/Text";
import Spacer from "../../../lib/utilities/Spacer";
import Button from "../../../lib/utilities/Button";
import LinkedInIcon from "../../icons/LinkedInIcon";
import GithubLarge from "../../icons/GithubLarge";
import HashnodeIcon from "../../icons/HashnodeIcon";
import TwitterIcon from "../../icons/TwitterIcon";
import Toast from "../../Toast";
import Loader from "react-loader-spinner";

// helpers
import validateForm from "../../../lib/validateForm";
import media from "../../../lib/mediaQueries";
import theme from "../../../theme/theme";

const Container = styled.div`
  display: flex;
  column-gap: 4rem;

  width: 100%;
  padding: 0 5rem 5rem 5rem;

  // ===== MAX-WIDTH =====
  // 850px
  @media only screen and (max-width: ${media.tablet}) {
    flex-direction: column;
    align-items: center;
    column-gap: 0;
  }

  // 450px
  @media only screen and (max-width: ${media.mobile}) {
    padding: 0 1.5rem 5rem 1.5rem;
  }

  // ===== MIN-WIDTH =====
  // 1600px
  @media only screen and (min-width: 100em) {
    padding: 0 10rem 5rem 10rem;
  }

  // 1800px
  @media only screen and (min-width: 112.5em) {
    padding: 0 12rem 5rem 12rem;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1.5rem;

  width: 50%;

  // 850px
  @media only screen and (max-width: ${media.tablet}) {
    align-items: center;
    text-align: center;

    width: 100%;
  }
`;

const Connect = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;

  margin-top: auto;
  margin-bottom: 5rem;

  // 850px
  @media only screen and (max-width: ${media.tablet}) {
    align-items: center;

    margin-top: 3rem;
  }
`;

const Logos = styled.div`
  display: flex;
  column-gap: 2rem;
  align-items: center;

  // 850px
  @media only screen and (max-width: ${media.tablet}) {
    margin-top: 1rem;
  }
`;

const Form = styled.form`
  background: ${({ theme }) => theme.white};
  border-radius: 0.5rem;

  display: flex;
  flex-direction: column;
  row-gap: 2rem;

  width: 50%;
  padding: 2.5rem 2.25rem;

  // 850px
  @media only screen and (max-width: ${media.tablet}) {
    width: 100%;
  }
`;

const InputContainer = styled.div`
  position: relative;
`;

const StyledInput = styled.input`
  color: ${({ theme }) => theme.defaultText};
  border: 1px solid ${({ theme }) => theme.inputBorder};
  border-radius: 0.5rem;
  cursor: pointer;

  width: 100%;
  height: 3.5rem;
  padding: 1rem;

  &::placeholder {
    color: ${({ theme }) => theme.lightText};
  }

  &:focus {
    outline: none;
    border: 2px solid ${({ theme }) => theme.leadership};
  }
`;

const StyledTextArea = styled.textarea`
  color: ${({ theme }) => theme.defaultText};
  border: 1px solid ${({ theme }) => theme.inputBorder};
  border-radius: 0.5rem;
  font-family: "Open Sans", sans-serif;
  cursor: pointer;

  width: 100%;
  padding: 1rem;

  &::placeholder {
    color: ${({ theme }) => theme.lightText};
  }

  &:focus {
    outline: none;
    border: 2px solid ${({ theme }) => theme.leadership};
  }
`;

const Error = styled.small`
  color: ${({ theme }) => theme.error};

  position: absolute;
  top: -1.5rem;
  left: 1rem;
`;

const StyledLink = styled.a`
  cursor: pointer;
`;

const Contact = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const [showToast, setShowToast] = useState(false);
  const [toastType, setToastType] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleShowToast = () => {
    setShowToast(!showToast);
  };

  async function sendEmail(e) {
    e.preventDefault();

    // use the form validation helper to see if there are errors, and then set the local errors state with the
    // errors object that comes back from the validation helper
    const formErrors = validateForm(values);
    setErrors(formErrors);

    // send email if there aren't any errors
    if (Object.keys(formErrors).length === 0) {
      setIsLoading(true);

      try {
        console.log("we be trying");
        await emailjs.sendForm(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_KEY,
          "template_0onn0cg",
          e.target,
          process.env.NEXT_PUBLIC_EMAILJS_USER_KEY
        );

        setToastType({
          type: "success",
          message: "Sweet! Talk to you soon ????",
        });
        handleShowToast();
        setValues({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setToastType({
          type: "error",
          message: "Uh oh! Something went wrong ????",
        });
        handleShowToast();
        setValues({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
        setIsLoading(false);
      }
      // emailjs
      //   .sendForm(
      //     EMAILJS_SERVICE_KEY,
      //     "template_0onn0cg",
      //     e.target,
      //     EMAILJS_USER_KEY
      //   )
      // .then(
      //   result => {
      //     console.log(result.text);
      //     setToastType({
      //       type: "success",
      //       message: "Sweet! Talk to you soon ????",
      //     });
      //     handleShowToast();
      //     setValues({
      //       name: "",
      //       email: "",
      //       subject: "",
      //       message: "",
      //     });
      //     setIsLoading(false);
      //   },
      // error => {
      // console.log(error.text);
      // setToastType({
      //   type: "error",
      //   message: "Uh oh! Something went wrong ????",
      // });
      // handleShowToast();
      // setValues({
      //   name: "",
      //   email: "",
      //   subject: "",
      //   message: "",
      // });
      // setIsLoading(false);
      // }
      // );
    }
  }

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

    if (Object.keys(errors).length !== 0) {
      setErrors({ ...errors, [name]: undefined });
    }
  };

  return (
    <>
      {showToast && (
        <Toast
          {...toastType}
          handleShowToast={handleShowToast}
          showToast={showToast}
        />
      )}
      <Container>
        <Content>
          <Text type="heading5">Let's work together.</Text>
          <Text type="body" light>
            Whether you think there could be a good fit with your organization,
            there is an interesting project you want to partner on, or if you
            just want to chat about any of the topics above, I would love to
            hear from you.
          </Text>
          <Spacer h="1rem" />
          <Text type="body" light>
            If you fill out the form, it will route directly to my email where
            we can continue the discussion there.
          </Text>
          <Spacer h="1rem" />
          <Text type="body" light>
            If nothing else, thank you for taking the time to read through my
            portfolio. You made it all the way to the end! Be sure to check back
            often as I plan on adding more features that don???t just show off my
            work but also provides value to you.
          </Text>
          <Spacer h="1rem" />
          <Text type="body" light>
            I hope you have a great day!
          </Text>
          <Connect>
            <Text type="heading6">Other ways to connect.</Text>
            <Logos>
              <LinkedInIcon />
              <GithubLarge />
              <TwitterIcon />
              <HashnodeIcon />
            </Logos>
          </Connect>
        </Content>
        <Form onSubmit={sendEmail} noValidate>
          <InputContainer>
            <StyledInput
              type="text"
              placeholder="Name"
              name="name"
              value={values.name}
              onChange={handleChange}
            />
            {errors.name && <Error>{errors.name}</Error>}
          </InputContainer>
          <InputContainer>
            <StyledInput
              type="email"
              placeholder="Email"
              name="email"
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && <Error>{errors.email}</Error>}
          </InputContainer>
          <InputContainer>
            <StyledInput
              type="text"
              placeholder="Subject"
              name="subject"
              value={values.subject}
              onChange={handleChange}
            />
            {errors.subject && <Error>{errors.subject}</Error>}
          </InputContainer>
          <InputContainer>
            <StyledTextArea
              placeholder="Message"
              rows="15"
              cols="50"
              name="message"
              value={values.message}
              onChange={handleChange}
            />
            {errors.message && <Error>{errors.message}</Error>}
          </InputContainer>
          <Button full type="submit">
            {!isLoading && "Send"}
            {isLoading && (
              <Loader
                type="TailSpin"
                color={theme.white}
                width={15}
                height={15}
              />
            )}
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default withTheme(Contact);
