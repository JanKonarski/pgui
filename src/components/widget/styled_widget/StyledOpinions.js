import styled from "styled-components";
import Widget from "../Widget";

export const StyledOpinions = styled(Widget) `
  min-height: 413px;
  
  .dropdown-toggle {
    border-radius: 30px;
    width: 140px;
    height: 40px;
    margin: 20px 0;
  }
  
  .opinions-container {
    overflow-y: scroll;
    height: 400px;
  }
  
  .categoryButton {
    margin-right: 25px;
  }

  .dropdown, .dropdown:focus  {
    border-color: ${({ theme }) => theme.widget.buttonBorderColor};
  }
  
  .dropdown-menu {
    background: ${({ theme }) => theme.widget.dropDownBackgroundColor};
  }
  
  .dropdownItem {
    color: ${({ theme }) => theme.main.color};
  }

  .error > *, .spinner > * {
    margin-top: 10px;
  }

  .opinions-page-container {
    margin-top: 20px;
  }
  
  
  .opinions-page {
    text-decoration: none;
    font-size: 25px;
    color: ${({ theme }) => theme.widget.orderLink};
  }
  
  .opinions-page:hover {
    color: #0D6EFD;
  }
  
  .no-opinions-header {
    
  }
  
  .no-opinions-info {
    font-size: 16px;
    line-height: 30px;
  }
  
  .spinner {
    margin-top: 50px;
  }
`