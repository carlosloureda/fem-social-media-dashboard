import { css } from "@emotion/react";
import { fonts } from "./variables";

const GlobalStyles = css`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap");
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
    font-family: "Poppins", sans-serif;
    line-height: 26px;
  }
  :root {
    --text-color: black;
    --bg-color-1: red;
    --anchor-color-1: green;
  }
  :root.dark-mode {
    --text-color: red;
    --bg-color-1: black;
    --anchor-color-1: red;
  }
  body {
    box-sizing: border-box;
    font-size: ${fonts.defaultFontSize};
    font-weight: 400;
    width: 100%;
    height: 100vh;
    background-color: var(--bg-color-1);
    color: var(--text-color);
    > a {
      color: var(--anchor-color-1);
    }
  }
  html {
    font-size: 62.5%;
  }
`;

export default GlobalStyles;
