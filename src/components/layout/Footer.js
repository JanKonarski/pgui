import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

export default function Footer(props) {
  const t = props.t;

  return(
    <footer>
      <Navbar expand={false} className='fixed-bottom' bg='primary'>
        <Container className='justify-content-center' fluid>
          <Nav>
            {t('footerName')}
          </Nav>
        </Container>
      </Navbar>
    </footer>
  );
}