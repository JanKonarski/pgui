import styled from "styled-components";
import Widget from "../Widget";

export const StyledOrders = styled(Widget) `
  .orders {
    margin: 20px 0 0;
  }

  .pending-orders {
    color: ${({ theme }) => theme.widget.rating};
  }
  
  .pending-orders-text {
    position: relative;
    bottom: 20px;
    left: 3px;
  }
`