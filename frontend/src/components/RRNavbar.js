import React, { useState } from 'react';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
//Resources:
import rrLogoDark from '..//img/rrSimpleDark.svg';

function RRNavbar() {
    //Stuff for modal:
    const [show, setShow] = useState(false);

    return (
        <Navbar expand="lg">
            <Container expand="lg" className=' pb-3 my-2 border-bottom'>
                <Navbar.Brand href="/index.html">
                    <img 
                    alt="Ricardorompar logo simple"
                    src={rrLogoDark}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"></img>{'  '}
                    ricardorompar
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        
                    </Nav>
                    <Nav>
                        <Nav.Link href="/index.html">Home</Nav.Link>    {/*the index.html is very important for deployment. This is my landing page*/}
                        <Nav.Link>About</Nav.Link>
                        <NavDropdown title="Info" id="basic-nav-dropdown">
                            <NavDropdown.Item href="https://www.alphavantage.co/documentation/">
                                AlphaVantage
                            </NavDropdown.Item>
                            <NavDropdown.Item href="https://github.com/ricardorompar/capstoneT2">Capstone Project</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="https://github.com/ricardorompar">
                                ricardorompar
                            </NavDropdown.Item>
                        </NavDropdown>
                        {/*  */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default RRNavbar;