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

  .menu {
    width: 70%;
  }

  @media screen and (min-width: 48em) {
    .menu {
      width: 175px;
    }
  }
  
  .recharts-line-curve {
    stroke: ${({ theme }) => theme.widget.chartLineColor};
    stroke-width: 2;
  }

  text {
    fill: ${({ theme }) => theme.widget.chartTickColor};
  }

  line {
    stroke: ${({ theme }) => theme.widget.chartAxisColor} !important;
  }
`