import React, { useState }  from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import Rosmarino from '..//img/rosmarino.jpg'
import { Link } from 'react-router-dom';

function About() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return(
        <Container fluid="sm" className='my-3 max-width-900 p-3'>
            <Container fluid="sm" className='vh-100'>
                <div className="px-4 py-5 mt-5 text-center">
                    <img className="d-block mx-auto mb-4" src={Rosmarino} alt="" height="200px"/>
                    <h1 className="display-5 fw-bold text-body-emphasis">About</h1>
                    <div className="col-lg-6 mx-auto">
                        <p className="lead mb-4">ricardorompar = <b>Ricardo</b> <b>Rom</b>ero <b>Par</b>edes. <br/>Electronics and control engineer / master in computer science. Born and raised in Ecuador, now based in Madrid, Spain. <br/> I love computers, robots, planes and outer space.</p>
                        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                            <Button variant="primary" onClick={handleShow} className='btn-lg'>
                                This page
                            </Button>

                            <Modal show={show} onHide={handleClose} className='vh-100 d-flex align-items-center'>
                                <Modal.Header closeButton>
                                    <Modal.Title>Cloud Resume Challenge</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <div>
                                        This page is the latest version of my Cloud Resume Challenge. It's a set of steps designed by <Link to="https://forrestbrazeal.com/">Forrest Brazeal</Link> to develop skills like basic web technologies, cloud infrastructure, DevOps concepts, and more.
                                    </div>
                                    <div>
                                        What you're looking at right now is a basic React app deployed in an AWS S3 bucket created with Terraform. As I keep moving forward with the challenge I will upload a diagram of the infrastructure.
                                    </div>
                                </Modal.Body>
                                <Modal.Footer>
                                <Button onClick={handleClose} variant='secondary'>
                                    Close
                                </Button>
                                </Modal.Footer>
                            </Modal>
                            <Link to='/contact'><Button variant='outline-secondary' className="btn btn-lg px-4">Contact</Button></Link>
                        </div>
                    </div>
                </div>
            </Container>
        </Container>
    );
}

export default About;