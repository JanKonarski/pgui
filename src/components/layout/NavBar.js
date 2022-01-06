import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { PlusCircle, MoonFill, SunFill } from 'react-bootstrap-icons';
import {StyledNavbar} from "./StyledNavBar";
import {StyledOffcanvas} from "./StyledOffcanvas";

export default function NavBar(props) {
  const t = props.t;
  const set_t = props.set_t;

// set_t.changeLanguage('en');

  return(
    <header>
      <StyledNavbar expand={false} className='fixed-top'>
        <Container fluid>
          <Navbar.Brand href='/'>{t('navbarName')}</Navbar.Brand>
          <Navbar.Toggle aria-controls='offcanvasNavbar' />

          <Navbar.Offcanvas
            id='offcanvasNavbar'
            aria-labelledby='offcanvasNavbarLabel'
            placement='end'
          >

            <Offcanvas.Header closeButton>
              <Offcanvas.Title id='offcanvasNavbarLabel'>{t('navbarSettings')}</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className='justify-content-end flex-grow-1 pe-3'>
                <Nav.Link href=''>{t('navbarAccountDetails')}</Nav.Link>
                <NavDropdown title={t('navbarSwitchAccount')} id='offcanvasNavbarDropdownAccount'>
                  <NavDropdown.Item href=''>Megan Thee Stalion</NavDropdown.Item>
                  <NavDropdown.Item href=''>Magda Gesler</NavDropdown.Item>
                  <NavDropdown.Item href=''>Harry Potter</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href=''>
                    <PlusCircle className='me-2' />
                    {t('navbarAddAccount')}
                  </NavDropdown.Item>
                </NavDropdown>
                <hr />
                <Nav.Link href='' className='text-danger'>{t('navbarLogout')}</Nav.Link>
                <hr />
                <NavDropdown title={t('navbarLanguage')} id='offcanvasNavbarDropdownLanguage'>
                  <NavDropdown.Item href=''>English</NavDropdown.Item>
                  <NavDropdown.Item href=''>Polish</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href=''>
                  <MoonFill className='me-2 text-dark' onClick={props.toggleTheme}/>
                  Dark theme
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </StyledNavbar>
    </header>
  );
}