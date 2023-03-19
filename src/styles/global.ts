import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
  }
  body {
    -webkit-font-smoothing: antialiased;
    background-color: #fbf6ff;
  }
  body, input, button {
    font-family: 'Poppins', sans-serif;
    outline: 0;
  }
`
