import {Navbar} from "react-bootstrap";
import styled from "styled-components";

export const StyledFooter = styled(Navbar) `
  background-color: ${({ theme }) => theme.navbar.backgroundColor};
  color: #FAFAFA;
  margin-top: 10px;
`