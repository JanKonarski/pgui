import styled from "styled-components";

export const StyledOffer = styled.div `
  .offer {
    margin-left: 5px;
    margin-right: 20px;
    padding-top: 20px;
    padding-bottom: 20px;
  }
  
  img:not(.spinner) {
    height: 90px;
    width: 90px;
    border: 2px solid ${({theme}) => theme.widget.title};
    border-radius: 10px;
    box-shadow: 2px 3px 5px rgba(0, 0, 0, 0.25);
  }
  
  .description {
    //margin: 0; !important;
    //padding: 0; !important;
    //width: 75%;
  }
  
  .photoContainer {
    height: 90px;
    float: left;
    margin-left: 20px;
  }
  
  .fixed {
    //-ms-flex: 0 0 90px;
    //flex: 0 0 90px;
  }
  
  .offer-title {
    font-size: 25px;
    font-weight: 500;
    line-height: 1em;
    margin-bottom: 20px;
    height: 1.1em;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    display: block;
  }
  
  .offer-amount {
    color: ${({theme}) => theme.widget.borderColor};
  }
`