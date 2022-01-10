import { createGlobalStyle } from 'styled-components';


export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');
  
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