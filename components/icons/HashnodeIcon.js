import React, { useState } from "react";
import styled, { withTheme } from "styled-components";

import theme from "../../theme/theme";

const StyledIcon = styled.svg`
  cursor: pointer;
`;

const HashnodeIcon = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a href="https://hashnode.com/@jjak13" target="_blank" rel="noreferrer">
      <StyledIcon
        width="68px"
        height="68px"
        viewBox="0 0 68 68"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}>
        <g
          id="Main"
          stroke="none"
          stroke-width="1"
          fill="none"
          fillRule="evenodd">
          <g
            id="Desktop---Leadership"
            transform="translate(-371.000000, -6321.000000)">
            <g
              id="Group-4"
              transform="translate(405.000000, 6355.000000) rotate(45.000000) translate(-405.000000, -6355.000000) translate(381.000000, 6331.000000)">
              <rect
                id="Rectangle"
                fill={isHovered ? theme.btnHover : theme.mainBtn}
                x="0"
                y="0"
                width="48"
                height="48"
                rx="14"></rect>
              <circle
                id="Oval"
                fill="#F9F9F9"
                cx="24"
                cy="24"
                r="9.75"></circle>
            </g>
          </g>
        </g>
      </StyledIcon>
    </a>
  );
};

export default withTheme(HashnodeIcon);
