import styled from "styled-components";
import { Navbar, NavbarBrand } from "react-bootstrap";

export const StyledNavbar = styled(Navbar)`
  background-color: ${({ theme }) => theme.navbar.backgroundColor};
  
  a.navbar-brand {
    color: #FAFAFA;
  }
  
  .navbar-toggler {
    background-color: #FAFAFA;
  }
`;