import React from "react";
// React-Bootstrap stuff:
import Container from 'react-bootstrap/Container';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// React router stuff:
import { Link } from 'react-router-dom';

import rrLogo from '..//img/rrLogo.svg';

function Landing({setShowPages}){
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
                        <ButtonGroup aria-label="Basic example" className='m-auto' onClick={() => setShowPages(true)}>
                            <Link to="/resume" className="btn btn-outline-secondary">Resume</Link>
                            <Link to="/about" className="btn btn-outline-secondary">About</Link>
                            <Link to="/contact" className="btn btn-outline-secondary">Contact</Link>
                        </ButtonGroup>
                    </Row>
                </Col>                    
            </Container>
        );
    }

export default Landing;