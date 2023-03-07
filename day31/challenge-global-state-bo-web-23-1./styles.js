import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root{
    --content-max-width: 600px;
    --spacing-1: 12px;
    --header-height: 60px;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    margin: 0;
    font-family: system-ui;
    padding: 0 calc(max(var(--spacing-1), (100vw - var(--content-max-width)) / 2));
  }
  input[type="checkbox"] {
    margin-left: 4px;
  }
`;
