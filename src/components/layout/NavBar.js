import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { PlusCircle, MoonFill, SunFill } from 'react-bootstrap-icons';
import {useState} from "react";
import {Dropdown} from "react-bootstrap";

export default function NavBar(props) {
  const t = props.t;
  const i18n = props.set_t;
  const languages = ['English','Polski']
  const [selectedLanguage, setSelectedLanguage]=useState(()=>{
    if(localStorage.getItem('i18nextLng')==="pl"){
      return languages[1]
    }
    return languages[0]
  })

  function setAppLanguage(e){
    if(e==='English'){
      localStorage.setItem('i18nextLng','eng');
      i18n.changeLanguage(localStorage.getItem('i18nextLng')).then(r => {return true})
    }
    if(e==='Polski'){
      localStorage.setItem('i18nextLng', 'pl');
      i18n.changeLanguage(localStorage.getItem('i18nextLng')).then(r => {return true})
    }
    setSelectedLanguage(e);
  }

  return(
    <header>
      <Navbar expand={false} className='fixed-top' bg='primary'>
        <Container fluid>
          <Navbar.Brand href='/'>{t('navbarName')}</Navbar.Brand>
          <Dropdown onSelect={setAppLanguage}>
            <Dropdown.Toggle>
              {selectedLanguage}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {languages.map(l =>
                  <Dropdown.Item  eventKey={l} key={l} active={l===selectedLanguage}>{l}</Dropdown.Item>
              )}
            </Dropdown.Menu>
          </Dropdown>

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
                  <MoonFill className='me-2 text-dark' />
                  Dark theme
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>

        </Container>
      </Navbar>
    </header>
  );
}