import {Card} from "react-bootstrap";
import styled from "styled-components";

export const StyledCard = styled(Card) `
    background-color: ${({ theme }) => theme.widget.backgroundColor};
    border-radius: 40px;
    border: 2px solid ${({ theme }) => theme.widget.borderColor};
    box-shadow: 2px 3px 5px rgba(0, 0, 0, 0.25);
  
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

    .error {
      margin-top: 150px;
      color: ${({ theme }) => theme.main.error};
    }
  
    .spinner {
      width: 80px;
      height: auto;
    }
`