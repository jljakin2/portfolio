// third-party
import React from "react";
import styled from "styled-components";

// ===== START OF STYLING =====
const Heading1 = styled.h1`
  color: ${({ theme }) => theme.mainBtn};
  font-size: 3.25rem;
  letter-spacing: 2px;
  line-height: 3.625rem;
  font-weight: 700;
`;

const Heading2 = styled.h2`
  font-size: 2.5rem;
  letter-spacing: 1.43px;
  line-height: 2.75rem;
  font-weight: 700;
`;

const Heading3 = styled.h3`
  font-size: 2rem;
  letter-spacing: 1.14px;
  line-height: 2rem;
  font-weight: 700;
`;

const Heading4 = styled.h4`
  font-size: 1.75rem;
  letter-spacing: 2px;
  font-weight: 600;
`;

const Heading5 = styled.h5`
  font-size: 1.5rem;
  letter-spacing: 1.71px;
  font-weight: 400;
`;

const Heading6 = styled.h6`
  font-size: 1.125rem;
  letter-spacing: 1.29px;
  font-weight: 400;
`;

const Body = styled.p`
  font-size: 0.9375rem;
  letter-spacing: 0;
  line-height: 1.5625rem;
  font-weight: 300;
`;
// ===== END OF STYLING =====

const Text = ({ type, light, children }) => {
  const style = {
    opacity: light ? "0.75" : "1",
  };

  // check which type of text is requested and return with the stylings outlined above
  switch (type) {
    case "heading1":
      return <Heading1 style={style}>{children}</Heading1>;

    case "heading2":
      return <Heading2 style={style}>{children}</Heading2>;

    case "heading3":
      return <Heading3 style={style}>{children}</Heading3>;

    case "heading4":
      return <Heading4 style={style}>{children}</Heading4>;

    case "heading5":
      return <Heading5 style={style}>{children}</Heading5>;

    case "heading6":
      return <Heading6 style={style}>{children}</Heading6>;

    case "body":
      return <Body style={style}>{children}</Body>;

    default:
      break;
  }
};

Text.defaultProps = {
  light: false,
};

export default Text;
