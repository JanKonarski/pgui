import styled from "styled-components";
import { Navbar, NavbarBrand } from "react-bootstrap";

export const StyledNavbar = styled(Navbar)`
  background-color: ${({ theme }) => theme.navbar.backgroundColor};
  
  a.navbar-brand {
    color: #FAFAFA;
  }
  
  .navbar-toggler {
    background-color: #FAFAFA;
    background-color: ${({ theme }) => theme.navbar.toggleButtonColor};
  }
  
  .home-link {
    text-decoration: none;
    color: #FFFFFF;
    letter-spacing: 0.1em;
    text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    font-weight: 500;
    font-size: 27px;
    line-height: 27px;
  }
`;