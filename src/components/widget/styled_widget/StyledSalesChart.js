import styled from "styled-components";
import Widget from "../Widget";

export const StyledSalesChart = styled(Widget) `
  .chart {
    margin-top: 20px;
    margin-left: 0;
    
  }
  
  @media screen and (min-width: 48em){
    .chart {
      
    }
  }
  
  .dropdown-label {
    margin-top: 20px;
  }

  .custom-dropdown {
    width: 70%;
  }

  @media screen and (min-width: 48em){
    .custom-dropdown {
      width: 175px;
    }
  }
  
  //.responsive-container {
  //  height: 50px;
  //}
  //
  //@media screen and (min-width: 48em){
  //  .responsive-container {
  //    height: 100%;
  //  }
  //}
  
  .recharts-line-curve {
    stroke: ${({ theme }) => theme.widget.chartLineColor};
    stroke-width: 3;
  }
`