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

  h1 {
    font-family: "Merryweather", serif;
    font-style: normal;
    font-weight: 400;
  }

  a {
    font-weight: 500;
    color: #ff3d00;
    text-decoration: inherit;
  }

  button {
    border-radius: 8px;
    border: 1px solid transparent;
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    background-color: #ff3d00;
    cursor: pointer;
    transition: border-color 0.25s;
  }
`

export default GlobalStyles;