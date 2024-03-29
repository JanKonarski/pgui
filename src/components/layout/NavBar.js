import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {PlusCircle, MoonFill, SunFill} from 'react-bootstrap-icons';
import {StyledNavbar, StyledOffCanvas} from "./StyledNavBar";
import {StyledOffcanvas} from "./StyledOffcanvas";
import {Link} from "react-router-dom";
import {useState} from "react";

export default function NavBar(props) {
    const t = props.t;
    const i18n = props.set_t;

    let moon = <MoonFill className='me-2 text-dark' size={15} onClick={props.toggleTheme}/>;
    let sun = <SunFill className='me-2 text-dark' size={15} onClick={props.toggleTheme}/>;
    const icon = props.theme === "light" ? moon : sun;

    const languages = ['English', 'Polski']
    const [selectedLanguage, setSelectedLanguage] = useState(() => {
        if (localStorage.getItem('i18nextLng') === "pl") {
            return languages[1]
        }
        return languages[0]
    })


    function setAppLanguage(e) {
        if (e === 'English') {
            localStorage.setItem('i18nextLng', 'eng');
            i18n.changeLanguage(localStorage.getItem('i18nextLng')).then(r => {
                return true
            })

        }
        if (e === 'Polski') {
            localStorage.setItem('i18nextLng', 'pl');
            i18n.changeLanguage(localStorage.getItem('i18nextLng')).then(r => {
                return true
            })

        }
        setSelectedLanguage(e);
    }

    function getTitle(){
        if(localStorage.getItem("user") ===null){
           return t('navbarSwitchAccount')
        }else{
           return   JSON.parse(localStorage.getItem("user"))["name"]
        }
    }

    function getSwitchAccounts(){
        if(localStorage.getItem("user") !=null) {
           return(
<div>
            <Nav.Link href=''>{t('navbarAccountDetails')}</Nav.Link>
            <NavDropdown title={
                getTitle()
            } id='offcanvasNavbarDropdownAccount'>
                <NavDropdown.Item href='' onClick={() => {
                    localStorage.setItem('user', JSON.stringify({id: 0, name: 'Megan Thee Stalion'}));
                    window.location.reload();
                }}>
                    Megan Thee Stalion
                </NavDropdown.Item>
                <NavDropdown.Item href='' onClick={() => {
                    localStorage.setItem('user', JSON.stringify({id: 1, name: 'Magda Gesler'}));
                    window.location.reload();
                }}>
                    Magda Gesler
                </NavDropdown.Item>
                <NavDropdown.Item href='' onClick={() => {
                    localStorage.setItem('user', JSON.stringify({id: 2, name: 'Harry Potter'}));
                    window.location.reload();
                }}>
                    Harry Potter
                </NavDropdown.Item>

                <NavDropdown.Divider/>
                <NavDropdown.Item href=''>
                    <PlusCircle className='me-2'/>
                    {t('navbarAddAccount')}
                </NavDropdown.Item>


            </NavDropdown>
                <hr/>
                <Nav.Link href='' className='text-danger' onClick={() => {
                    window.localStorage.removeItem('user');
                    window.localStorage.removeItem('users');
                    window.location.href='/login';
                }}>{t('navbarLogout')}</Nav.Link>
                <hr/>
                    </div>
        )

        }

    }

    return (
        <header>
            <StyledNavbar expand={false} className='fixed-top'>
                <Container fluid>
                    <Navbar.Brand><Link className='home-link' to="/">{t('navbarName')}</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls='offcanvasNavbar'/>

                    <StyledOffCanvas
                        id='offcanvasNavbar'
                        aria-labelledby='offcanvasNavbarLabel'
                        placement='end'
                    >

                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id='offcanvasNavbarLabel'>{t('navbarSettings')}</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className='justify-content-end flex-grow-1 pe-3'>

                                {getSwitchAccounts()}


                                <NavDropdown title={selectedLanguage} onSelect={setAppLanguage}  >

                                        {languages.map(l =>
                                            <NavDropdown.Item className='language-item' eventKey={l} key={l}
                                                              active={l === selectedLanguage} onSelect={setAppLanguage}>{l}</NavDropdown.Item>
                                        )}

                                </NavDropdown>
                                <Nav.Link href=''>
                                    Theme - {icon}
                                </Nav.Link>
                            </Nav>
                        </Offcanvas.Body>
                    </StyledOffCanvas>
                </Container>
            </StyledNavbar>
        </header>
    );
}