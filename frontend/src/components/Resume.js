import React from 'react';
// import { useBlocker } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Link } from 'react-router-dom';

function Resume() {
    return(
        <Container fluid="sm" className='my-3 max-width-900 p-3'>
            <h1>Ricardo Romero</h1>
            <h5 style={{fontWeight:"100"}} className='mb-3'>Cloud Engineer | Master in Computer Science 🚀</h5>
            <Card>
                <Card.Header>Profile</Card.Header>
                <Card.Body>
                        I am a dedicated and results-driven engineer with a strong passion for leveraging technology to solve real-world problems. Graduating top of my cohort, I have proven my ability to excel academically, collaborate with my peers and apply my knowledge practically. Pursuing a Master of Computer Science I’m learning to integrate different technologies (like Flask, React, AWS, GCP, etc.) to create tools and apps that can serve people.
                        <br/>
                        I am currently learning about the cloud, AWS/GCP, K8s, containerized apps, cloud security, CI/CD, IaC with Terraform, etc.
                </Card.Body>
            </Card>
            <Card className='my-3'>
                <Card.Header>Education</Card.Header>
                <Tabs defaultActiveKey="IEU" id="uncontrolled-tab-example" className="m-3" fill variant='underline'>
                    <Tab eventKey="IEU" title="IE University" className='p-3'>
                        <Row>
                            <Col>
                                <Card.Title>Master in Computer Science and Business Technology</Card.Title>
                            </Col>
                            <Col xs={4} className='text-end'>
                                Madrid, Spain
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <i>IE School of Science and Technology</i>
                            </Col>
                            <Col xs={4} className='text-end'>
                                2023-2024
                            </Col>
                        </Row>
                            
                        <Row className='mt-2'>
                            <Col><b>Distinctions:</b> IE Foundation Scholarship - Recipient of Direct Award</Col>
                        </Row>

                        <Row className='mt-2'>
                            <Col><b>Classes:</b> Cloud Native Development, Google Cloud Advanced, Software Engineering, Operating Systems, Cloud Solutions Architecture, Infrastructure for Cloud Computing, Distributed Systems and Networks, etc.</Col>
                        </Row>

                        <Row className='mt-2'>
                            <Col>
                                <b>Activities:</b> AI Hackathon | Datathon | VentureLab
                            </Col>
                        </Row>

                    </Tab>
                    <Tab eventKey="EPN" title="Escuela Politécnica Nacional" className='p-3'>
                        <Row>
                            <Col>
                                <Card.Title>Electronics and Control Engineering</Card.Title>
                            </Col>
                            <Col xs={4} className='text-end'>
                                Quito, Ecuador
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <i>Faculty of Electric and Electronics Engineering</i>
                            </Col>
                            <Col xs={4} className='text-end'>
                                2015-2022
                            </Col>
                        </Row>
                            
                        <Row className='mt-2'>
                            <Col><b>Distinctions:</b> Graduated Summa Cum Laude</Col>
                        </Row>

                        <Row className='mt-2'>
                            <Col><b>Classes:</b> C Programming, Digital Electronics, Discrete Systems Control, Programmable Logic Devices, etc.</Col>
                        </Row>

                        <Row className='mt-2'>
                            <Col>
                                <b>Activities:</b> Student Member IEEE's Control Systems Society | Co-Founder of EPN's Language Club | Academic Director FIEE's student association.
                            </Col>
                        </Row>
                    </Tab>
                </Tabs>       
            </Card>

            <Card className='my-3'>
                <Card.Header>Professional Experience</Card.Header>
                <Tabs defaultActiveKey="Ingelin" id="uncontrolled-tab-example" className="m-3" fill variant='underline' bg='secondary'>
                    <Tab eventKey="Ingelin" title="Ingelin" className='p-3'>
                        <Row>
                            <Col>
                                <Card.Title>Technical Service Engineer</Card.Title>
                            </Col>
                            <Col xs={4} className='text-end'>
                                Quito, Ecuador
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <i>Ingelin Cía. Ltda.</i>
                            </Col>
                            <Col xs={4} className='text-end'>
                                2022-2023
                            </Col>
                        </Row>

                        <Row className='mt-2'>
                            <Col>
                                <ul>
                                    <li>Guided over 15 customers to find solutions to their medical business’s needs and problems with their imaging devices and IT.</li>
                                    <li>Directed/collaborated in the planning and delivery of over 10 projects of medical equipment installations.</li>
                                    <li>Started the company's new line of business, along with the primary stakeholders of the company, by teaming up with a major Chinese manufacturer of medical imaging systems. The first CT-scanner is expected to be delivered in 2024.</li>
                                </ul>
                            </Col>
                        </Row>
                    </Tab>

                    <Tab eventKey="Larscript" title="Larscript" className='p-3'>
                        <Row>
                            <Col>
                                <Card.Title>Customer Support Engineer</Card.Title>
                            </Col>
                            <Col xs={4} className='text-end'>
                                Quito, Ecuador
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <i>Larscript Solutions Cía. Ltda.</i>
                            </Col>
                            <Col xs={4} className='text-end'>
                                2021-2022
                            </Col>
                        </Row>

                        <Row className='mt-2'>
                            <Col>
                                <ul>
                                    <li>Partnered in several major IT projects which involved hardware procurement and installation of PACS and RIS software.</li>
                                    <li>Participated in a project to improve the IT infrastructure for a client, during which I received training on redundant storage systems and networking.</li>
                                    <li>Guided two major customers through their technology adoption journey with trainings and presentations.</li>
                                </ul>
                            </Col>
                        </Row>

                    </Tab>
                </Tabs>
            </Card>

            <Card className='my-3'>
                <Card.Header>Projects</Card.Header>
                <Card.Body>
                    <ul>
                        <li><b><Link to="/" style={{textDecoration:"none", color:"black"}}>This page</Link></b> is based on the <Link to="https://cloudresumechallenge.dev/docs/the-challenge/aws/">Cloud Resume Challenge</Link>. Is a set of steps that involve creating resources in the cloud using infrastructure as code and differnent cloud and DevOps concepts such as CI/CD. What you're looking at right now is a React app deployed in an AWS S3 bucket created with Terraform.</li>
                        <li><b>💸Wingy (T2 Capstone Project):</b> a 3-tier, <a href='https://frontend_bucket_rickyr.storage.googleapis.com/index.html'>web-based application</a> that allows users to interact with a stock portfolio through a React user interface connected to a Flask server. The app was deployed with GCP’s App Engine with a database from Oracle Cloud.</li>
                        <li><b>Engineering Thesis Project:</b> a 3-DOF aircraft prototype controlled with hand gestures using AI-based recognition from muscle signals. <br/> Skills and tools: embedded controller in MicroPython, 3D printing and design, PCB design, presentation skills. <a href='https://www.youtube.com/watch?v=7mSgomD4dAk&t=163s'>Watch the video.</a></li>
                        <li><b>AI Hackathon:</b> AI / coding competition organized by the IE Sci-Tech school along with Foqum Anaytics. Used Azure's OCR and OpenAI's API to retrieve valuable information from a set of PDFs. My team finished 5th in the competition.</li>
                        <li><b>Neumoclasificador:</b> a web application to help detect lung diseases from X ray images using open-source AI models (developed as a group project for a contest. Finished 2nd place).</li>
                    </ul>
                </Card.Body>
            </Card>

            <Card className='my-3'>
                <Card.Header>Skills</Card.Header>
                <Card.Body>
                    Python | Flask | ReactJS | Git/Github | SQL | Google Cloud Platform | AWS | Oracle Cloud Infrastructure | Linux (Ubuntu) / Bash | Docker | MongoDB | Databases | Infrastructure | Computer Networking | Operating Systems | Communication
                </Card.Body>
            </Card>

        </Container>
    );
}

export default Resume;