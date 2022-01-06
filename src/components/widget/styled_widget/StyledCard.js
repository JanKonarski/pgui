import {Card} from "react-bootstrap";
import styled from "styled-components";

export const StyledCard = styled(Card) `
    background-color: ${({ theme }) => theme.widget.backgroundColor};
    border-color: ${({ theme }) => theme.widget.borderColor};
    border-radius: 40px;
  
    .title {
      color: ${({ theme }) => theme.widget.title};
    }
`