import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    /*width: 100%;*/
    /*line-height: 1.5;*/
  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: whitesmoke;
  }

  ::-webkit-scrollbar {
    width: 6px;
    background-color: orange;
  }

  ::-webkit-scrollbar-thumb {
    background-color: orange;
  }
`;

export default GlobalStyle;
