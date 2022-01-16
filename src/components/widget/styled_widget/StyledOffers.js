import styled from "styled-components";
import Widget from "../Widget";

export const StyledOffers = styled(Widget) `
  min-height: 571px;
  
  .controls {
    margin-top: 20px;
  }
  
  .dropdown-toggle {
    border-radius: 30px;
    width: 100%;
    height: 40px;
  }

  @media screen and (min-width: 48em){
    .dropdown-toggle {
      width: 140px;
    }
  }

  .sortButton {
    margin-top: 15px;
  }
  
  .menu {
    width: 100%;
  }

  @media screen and (min-width: 48em){
    .menu {
      width: auto;
    }
  }

  @media screen and (min-width: 48em){
    .dropdown-toggle {
      margin-top: 0;
    }
  }
  
  .dropdown, .dropdown:focus {
    border-color: ${({theme}) => theme.widget.buttonBorderColor};
  }

  .dropdown-menu {
    background: ${({theme}) => theme.widget.dropDownBackgroundColor};
  }

  .dropdownItem {
    color: ${({theme}) => theme.main.color};
  }

  .box {
    padding: 0;
    margin-top: 20px;
    height: 400px;
    overflow: hidden;
    border-radius: 15px;
    border: 2px solid ${({theme}) => theme.widget.borderColor};
    background-color: ${({theme}) => theme.widget.offerContainer};
  }

  .offers-container {
    overflow-y: scroll;
    height: 400px;
    padding: 20px 20px 0;
    width: 100%;
  }

  .button .button:focus, .button:active {
    outline: none; !important;
    box-shadow: none; !important;
  }
  
  .button {
    border-radius: 30px;
    height: 40px;
  }
  
  .buttons {
    width: 100%;
  }

  .button[type="radio"]:checked+label {
    background-color: ${({ theme }) => theme.widget.buttonColor};
    border-color: ${({ theme }) => theme.widget.buttonBorderColor};
  }
`