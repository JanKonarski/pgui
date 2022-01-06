import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import {StyledFooter} from "./StyledFooter";

export default function Footer(props) {
  const t = props.t;

  return(
    <footer>
      <StyledFooter expand={false} className='fixed-bottom'>
        <Container className='justify-content-center' fluid>
          <Nav>
            {t('footerName')}
          </Nav>
        </Container>
      </StyledFooter>
    </footer>
  );
}