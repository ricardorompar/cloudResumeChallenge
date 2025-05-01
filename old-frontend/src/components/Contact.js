import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import linkedin from '../img/linkedin.svg';

function Contact() {
  return (
    <Container fluid="sm" className='my-3 max-width-900 p-3'>
        <Container fluid="sm" className='vh-100 px-4 py-5 mt-5 text-center'>
            <h1 className="display-5 fw-bold text-body-emphasis">Contact</h1>
            <div className="col-lg-6 mx-auto">
                <p className="lead mb-4">No fancy email form (yet). But feel free to reach out to me:</p>
                <Link to='https://www.linkedin.com/in/ricardo-romero-paredes/'><img src={linkedin} height={100} alt="LinkedIn Logo"></img></Link>
            </div>
        </Container>
    </Container>
  )
}

export default Contact;