import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import theme from "./theme";

const GlobalStyle = createGlobalStyle`
  ${reset}

  body {
    font-family: 'Caladea', serif;
    color: ${theme.text};
    background: ${theme.mainBg}
  }

  *, *:before, *:after {
    box-sizing: border-box;
  }

  a {
    color: ${theme.accent};
    text-decoration: none;

    transition: opacity 300ms ease-in-out;

    &:hover {
      opacity: .7;
    }
  }

  b {
    font-weight: bold;
  }
`;

export default GlobalStyle;
