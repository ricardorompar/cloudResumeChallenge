import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

function Resume() {
    return(
        <Container sm className='my-3 max-width-1000 p-3'>
            <h1>Ricardo Romero</h1>
            <h5 style={{fontWeight:"100"}} className='mb-3'>Cloud Engineer | Master in Computer Science 🚀</h5>
            <Card>
                <Card.Header>Profile</Card.Header>
                <Card.Body>
                    <p>
                        I am a dedicated and results-driven engineer with a strong passion for leveraging technology to solve real-world problems. Graduating top of my cohort, I have proven my ability to excel academically, collaborate with my peers and apply my knowledge practically. Pursuing a Master of Computer Science I’m learning to integrate different technologies (like Flask, React, AWS, GCP, etc.) to create tools and apps that can serve people.
                    </p>
                    <p>
                        I am currently interested in/learning about containerized apps, kubernetes, CI/CD, IaC with Terraform, etc.
                    </p>
                    
                </Card.Body>
            </Card>
            <Card className='my-3'>
                <Card.Header>Education</Card.Header>
                <Card.Body>
                    <Row>
                        <Col>
                            <Card>
                                <Card.Img variant="top" src="https://seeklogo.com/images/I/ie-university-logo-D2439487E0-seeklogo.com.png" style={{objectFit: "contain", maxHeight:"10vh"}} className='p-3'/>
                                <Card.Body>
                                    <Card.Title>IE School of Science and Technology</Card.Title>
                                    <Card.Text>
                                        <it>Master in Computer Science and Business Technology</it>
                                        <p>
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card's content.
                                        </p>
                                    
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                                </Card>
                        </Col>
                        <Col>
                        Ed2
                        </Col>
                    </Row>                   
                </Card.Body>
            </Card>
            <Card className='my-3'>
                <Card.Header>Professional Experience</Card.Header>
                <Card.Body>
                    I am a dedicated and results-driven engineer with a strong passion for leveraging technology to solve real-world problems. Graduating top of my cohort, I have proven my ability to excel academically, collaborate and apply my knowledge practically. Pursuing a Master of Computer Science I’m learning to integrate different technologies (like Flask, React, AWS, GCP, etc.) to create tools and apps that can serve people.
                    
                </Card.Body>
            </Card>
        </Container>
    );
}

export default Resume;