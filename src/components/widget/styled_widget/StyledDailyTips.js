import styled from "styled-components";
import Widget from "../Widget";

export const StyledDailyTips = styled(Widget) `
 
  .daily-tips {
    margin-top: 25px;
    font-size: medium;
    overflow-y: auto;
    height: auto;
  }

  @media screen and (min-width: 87em){
    .daily-tips {
      height: 150px;
    }
  }
  
 
  
`