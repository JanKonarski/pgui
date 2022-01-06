import { createGlobalStyle } from 'styled-components';


export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
  
  body {
    background-color: ${({ theme }) => theme.main.backgroundColor};
    color: ${({ theme }) => theme.main.color};
    font-family: "Roboto", sans-serif;
  }`