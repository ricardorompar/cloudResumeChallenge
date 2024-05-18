import React from 'react';
import { useState } from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
// React-Bootstrap stuff:
import Container from 'react-bootstrap/Container';
// import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// Custom components:
import Resume from './components/Resume';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
//Resources:
import rrLogo from './/img/rrLogo.svg';
import RRNavbar from './components/RRNavbar';

function App() {

    const [showPages, setShowPages] = useState(false);
    //Function for showing landing or pages:
    const togglePages = (value) => setShowPages(value);

    function Landing(){
        setShowPages(false);
        return(
            <Container className="w-100 m-auto min-vh-100 d-flex align-items-center">
                <Col  className="justify-content-md-center">
                    <Row className='mb-5'>
                        <Col className='display-5 d-flex align-items-center'>
                            <img src={rrLogo} className='m-auto' height={"300px"} width={"300px"} alt='ricardorompar logo'/>
                        </Col>
                    </Row>
                    <Row lg='2'>
                        <ButtonGroup aria-label="Basic example" className='m-auto' onClick={() => togglePages(true)}>
                            <Link to="/resume" className="btn btn-outline-secondary">Resume</Link>
                            <Link to="/about" className="btn btn-outline-secondary">About</Link>
                            <Link to="/contact" className="btn btn-outline-secondary">Contact</Link>
                        </ButtonGroup>
                    </Row>
                </Col>                    
            </Container>
        );
    }


    return (
        <main>
            <Router>
                <>
                    {showPages ? (
                        <div>
                            <RRNavbar></RRNavbar>
                            <Routes>
                                <Route path="/" element={<Landing />} />
                                <Route path="/resume" element={<Resume />} />
                                <Route path="/about" element={<About />} />
                                <Route path="/contact" element={<Contact />} />
                            </Routes>
                        </div>
                    ) : (
                        <Landing />
                    )}
                </>
            </Router>
            <Footer></Footer>
        </main>
    );
}

export default App;