import styled from "styled-components";

export const StyledOpinion = styled.div `
  
  svg {
    color: #F0E04D;
  }
  
  .opinion-date {
    color: ${({ theme }) => theme.widget.opinionDate};
    font-style: italic;
    margin-top: 4px;
    font-size: 15px;
  }
  
  
  #starsCount {
    position: relative;
    top: 2.5px;
    left: 4px;
    color: ${({ theme }) => theme.widget.opinionDate};
    font-style: italic;
    margin-top: 3px;
  }
  
  .rating-text {
    
  }
  
  .no-opinions {
    color: grey;
  }
`