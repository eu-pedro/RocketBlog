import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    -webkit-font-smoothing: antialiased;
    background-color: ${(props) => props.theme['light-purple']}
  }
  :focus {
    box-shadow: 0 0 0 2px ${(props) => props.theme.green};
  }
  body, input, button {
    font-family: 'Poppins', sans-serif;
    outline: 0;
  }
`
