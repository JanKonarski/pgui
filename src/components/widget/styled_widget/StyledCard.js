import {Card} from "react-bootstrap";
import styled from "styled-components";

export const StyledCard = styled(Card) `
    background-color: ${({ theme }) => theme.widget.backgroundColor};
    border-color: ${({ theme }) => theme.widget.borderColor};
    border-radius: 40px;
  
    .title {
      color: ${({ theme }) => theme.widget.title};
    }
  
    .card-title {
      color: ${({ theme }) => theme.widget.title};
    }
  
    .button, .button:focus  {
      background-color: ${({ theme }) => theme.widget.buttonColor};
      border-color: ${({ theme }) => theme.widget.buttonBorderColor};
    }
`