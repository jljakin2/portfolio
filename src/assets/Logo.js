import React from "react";
import styled from "styled-components";

import Text from "../utilities/Text";
import Spacer from "../utilities/Spacer";

const Container = styled.div`
  cursor: pointer;

  display: flex;
  align-items: center;
`;

const Logo = () => {
  return (
    <Container>
      <svg
        width="60px"
        height="60px"
        viewBox="0 0 60 60"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg">
        <g
          id="Main"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd">
          <g id="Desktop" transform="translate(-80.000000, -48.000000)">
            <g id="Group-2" transform="translate(80.000000, 48.000000)">
              <circle
                id="Oval-Copy"
                fill="#1B2E40"
                cx="30"
                cy="30"
                r="30"></circle>
              <text
                id="JJ"
                fontFamily="OpenSans-ExtraBold, Open Sans"
                fontSize="28"
                fontWeight="600"
                letterSpacing="2.15384615"
                fill="#FFFFFF">
                <tspan x="21" y="38">
                  JJ
                </tspan>
              </text>
            </g>
          </g>
        </g>
      </svg>
      <Spacer w="1rem" />
      <Text type="heading4">Jeff Jakinovich</Text>
    </Container>
  );
};

export default Logo;
