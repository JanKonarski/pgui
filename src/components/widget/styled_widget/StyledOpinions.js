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
    margin-right: 20px;
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
`