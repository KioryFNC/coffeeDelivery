import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    font-size: 62.5%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    background: ${(props) => props.theme['background']};
  }

  h1, h2 {
    font-family: 'Balon 2', sans-serif;
  }

  p, span, input {
    font-family: 'Roboto', sans-serif;
  }
`