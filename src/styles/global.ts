import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-sizing: 0 0 0 2px ${(props) => props.theme['green-500']};
  }

  body{
    background-color: ${(props) => props.theme['gray-800']};
    color: ${(props) => props.theme['gray-100']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font: 400 1rem Roboo, sans-serif;
  }

  button {
    cursor: pointer;

    &:disabled {
      opacity: 0.4;
      cursor: not-allowed;
    }
  }
`
