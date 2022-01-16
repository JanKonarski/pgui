import styled from "styled-components";
import Widget from "../Widget";

export const StyledOpinions = styled(Widget) `
  min-height: 571px;
  
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
    margin-right: 7px;
    width: 120px;
  }
  
  @media screen and (min-width: 30em){
    .categoryButton {
      margin-right: 25px;
      width: 132px;
    }
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
    font-size: 22px;
    line-height: 40px;
    color: ${({ theme }) => theme.widget.orderLink};
  }

  @media screen and (min-width: 48em){
    .opinions-page {
      font-size: 25px;
    }
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