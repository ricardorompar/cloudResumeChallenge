import React from 'react';
// import { useBlocker } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Rosmarino from '..//img/rosmarino.jpg'

function About() {
    return(
        <Container fluid="sm" className='my-3 max-width-900 p-3'>
            <Container fluid="sm" className='vh-100'>
                <div className="px-4 py-5 my-5 text-center">
                    <img className="d-block mx-auto mb-4" src={Rosmarino} alt="" height="200px"/>
                    <h1 className="display-5 fw-bold text-body-emphasis">About</h1>
                    <div className="col-lg-6 mx-auto">
                    <p className="lead mb-4">ricardorompar = <b>Ricardo</b> <b>Rom</b>ero <b>Par</b>edes. <br/>Electronics and control engineer / master in computer science. Born and raised in Ecuador, now based in Madrid, Spain. <br/> I love computers, robots and planes.</p>
                    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                        <Button className="btn btn-primary btn-lg px-4 gap-3">This page</Button>
                        <Button variant='outline-secondary' className="btn btn-outline-secondary btn-lg px-4">Contact</Button>
                    </div>
                    </div>
                </div>
            </Container>
            <Container fluid="sm" className='vh-100 dark-container'>
                I'm Ricardo
            </Container>
            <Container fluid="sm" className='vh-100'>
                I'm Ricardo
            </Container>
        </Container>
    );
}

export default About;