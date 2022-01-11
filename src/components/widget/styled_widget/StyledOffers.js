import styled from "styled-components";
import Widget from "../Widget";

export const StyledOffers = styled(Widget) `
  min-height: 571px;

  img:not(.spinner) {
    height: 90px;
    width: 90px;
    border: 2px solid ${({theme}) => theme.widget.title};
    border-radius: 10px;
    box-shadow: 2px 3px 5px rgba(0, 0, 0, 0.25);
  }

  .dropdown-toggle {
    border-radius: 30px;
    width: 140px;
    height: 40px;
    margin-top: 20px;
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

  .sortButton {
    margin-right: -12px;
  }
`