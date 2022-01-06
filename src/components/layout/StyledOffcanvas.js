import styled from "styled-components";
import { Offcanvas } from "react-bootstrap";

export const StyledOffcanvas = styled(Offcanvas)`
  a.navbar-brand {
    color: #FAFAFA;
  }
  
  #offcanvasNavbar {
    background-color: ${({ theme }) => theme.navbar.backgroundColor}; !important;
    color: green;
  }
  
  .offcanvas-header {
    color: green; !important;
  }
`;