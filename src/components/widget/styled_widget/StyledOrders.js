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

  .no-orders-header {
    margin-top: 20px;
  }

  .no-orders-info {
    font-size: 16px;
    line-height: 30px;
  }
  
  .orders-links {
    font-size: 18px;
    line-height: 40px;
    text-decoration: none;
    color: ${({ theme }) => theme.widget.rating};
  }

  .orders-links:hover {
    font-weight: bold;
  }
`