import styled from "styled-components";
import Widget from "../Widget";

export const StyledOrders = styled(Widget) `
  
  .orders {
    margin: 20px 0 0;
  }

  .status {
    font-size: 20px;
  }
  
  .pending-orders {
    color: ${({ theme }) => theme.widget.rating};
  }
  
  .pending-orders-text {
    position: relative;
    bottom: 20px;
    left: 3px;
  }
  
  .order-link {
    text-decoration: none;
    color: ${({ theme }) => theme.widget.orderLink};
  }

  .order-link:hover {
    font-weight: bold;
  }

  .no-orders-header {
    margin-top: 20px;
  }

  .no-orders-info {
    font-size: 16px;
    line-height: 30px;
  }
  
  .no-orders-links {
    font-size: 18px;
    line-height: 40px;
    text-decoration: none;
    color: ${({ theme }) => theme.widget.orderLink};
  }

  .no-orders-links:hover {
    font-weight: bold;
  }

  .spinner {
    margin-top: 50px;
  }
  
  .ordersBody {
    padding-right: 25px;
    padding-left: 25px;
  }

  
  

`