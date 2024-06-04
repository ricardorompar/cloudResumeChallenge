import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
//Resources:
import rrLogoDark from '..//img/rrSimpleDark.svg';

function RRNavbar() {
    //stuff for closing navbar:
    const [expanded, setExpanded] = useState(false);

    return (
        <>
            <Navbar expand="lg" fixed='top' className='p-0 navbar-style' expanded={expanded}>
                <Container fluid="lg" className='py-3 border-bottom'>
                    <Navbar.Brand href="/" className='rounded-pill bg-white bg-opacity-75'>
                        <img 
                        alt="Ricardorompar logo simple"
                        src={rrLogoDark}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"></img>{'  '}
                        ricardorompar
                    </Navbar.Brand>
                    <Navbar.Toggle onClick={() => setExpanded(expanded ? false : "expanded")} aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            
                        </Nav>
                        <Nav className='rounded-pill bg-white bg-opacity-75'>
                            <Nav.Link href="/" onClick={() => setExpanded(false)}>Home</Nav.Link>    {/*the index.html is very important for deployment. This is my landing page*/}
                            <Nav.Link href="/#/resume" onClick={() => setExpanded(false)}>Resume</Nav.Link>
                            <Nav.Link href="/#/about" onClick={() => setExpanded(false)}>About</Nav.Link>
                            <Nav.Link href="/#/contact" onClick={() => setExpanded(false)}>Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Navbar className='my-5' sticky='top'>

            </Navbar>
        </>
    );
}

export default RRNavbar;