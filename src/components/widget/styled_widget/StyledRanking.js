import styled from "styled-components";
import Widget from "../Widget";

export const StyledRanking = styled(Widget) `
  img {
    height: 90px;
    width: 90px;
    border: 2px solid ${({ theme }) => theme.widget.photoBorder};
    border-radius: 10px;
    box-shadow: 2px 3px 5px rgba(0, 0, 0, 0.25);
  }

  .dropdown-toggle {
    border-radius: 30px;
    width: 140px;
    height: 40px;
    margin-top: 20px;
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
  
  .offers-container {
    overflow-y: scroll;
    height: 400px;
    margin-top: 20px;
  }
  
  .sortButton {
    
  }
`