import styled from "styled-components";
import Widget from "../Widget";

export const StyledOpinions = styled(Widget) `
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

  .error, .spinner {
    margin-top: 140px;
  }

  .opinions-page-container {
    margin-top: 25px;
  }
  
  .opinions-page {
    text-decoration: none;
    font-size: 25px;
    color: ${({ theme }) => theme.widget.orderLink};
  }
  
  .opinions-page:hover {
    color: #0D6EFD;
  }
`