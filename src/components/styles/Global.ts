import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

  :root {
    font-family: Roboto, serif;
    line-height: 1.5;
    font-weight: 400;
    color-scheme: light dark;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.text};
    min-width: 375px;
    min-height: 100vh;
  }

  h1, h2, h3 {
    font-family: "Merryweather", serif;
    font-style: normal;
    font-weight: 400;
  }

  a {
    font-weight: 500;
    color: #ff3d00;
    text-decoration: inherit;
  }

  a:hover {
    color: #d73200;
  }

  button {
    border-radius: 0;
    border: 1px solid transparent;
    padding: 0.4em 0.8em;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    background-color: #ff3d00;
    cursor: pointer;
    transition: border-color 0.25s;
  }

  button:hover {
    background-color: #d73200;
  }

  .activeLink {
    text-decoration: underline;
    color: #a22600;
  }
`

export default GlobalStyles;