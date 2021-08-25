import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*, *::before, *::after {
    padding: 0;
    margin: 0;
    box-sizing: inherit;

}

html {
    font-size: 100%; // 16px
    box-sizing: border-box;

    // 400px
    @media only screen and (max-width: 25em) {
        font-size: 95%;
    }
}

body {
    font-family: 'Open Sans', sans-serif;
    color: ${({ theme }) => theme.defaultText};

    position: relative;
}

.link {
    border-radius: 2px;
    color: ${({ theme }) => theme.defaultText};
    text-decoration: none;
    border-bottom: 2px solid #1B2E40;
    padding: 1px 2px;
    cursor: pointer;

    &:visited {
        color: ${({ theme }) => theme.leadership};
        border-bottom: 2px solid ${({ theme }) => theme.leadership};
        padding: 1px 2px;
    }

    &:hover {
        background: ${({ theme }) => theme.mainBtn};
        color: ${({ theme }) => theme.white};
    }

    &:active {
        background: ${({ theme }) => theme.mainBtn};
        color: ${({ theme }) => theme.white};
    }

    &:focus {
        outline: none;
        border: 2px dotted ${({ theme }) => theme.mainBtn};
        border-radius: 0.25rem;
        padding: .2rem;
    }

}


`;

export default GlobalStyle;
