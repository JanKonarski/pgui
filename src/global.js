import { createGlobalStyle } from 'styled-components';


export const GlobalStyles = createGlobalStyle`
  
  body {
    background-color: ${({ theme }) => theme.main.backgroundColor};
    color: ${({ theme }) => theme.main.color};
    font-family: 'Inter', sans-serif;
    text-align: left;
  }
  
  @media screen and (min-width: 48em){
    body{
      text-align: justify;
    }
  }
`