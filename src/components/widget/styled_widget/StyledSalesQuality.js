import styled from "styled-components";
import Widget from "../Widget";

export const StyledSalesQuality = styled(Widget) `
  .score-info {
    margin-top: 30px;
  }
  
  .rating {
    color: ${({ theme }) => theme.widget.rating};
  }
  
 
  
  .to-improve-container {
    
  }
`