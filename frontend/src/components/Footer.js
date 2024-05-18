import React from "react"
import Container from 'react-bootstrap/Container';
//Resources:
import rrLogoDark from '..//img/rrSimpleDark.svg';
import linkedin from '..//img/linkedin.svg';
import github from '..//img/github.svg';


function Footer(){
    return(
        <Container>
            <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <div class="col-md-4 d-flex align-items-center">
                    <a href="/"><img src={rrLogoDark} height={30} alt="ricardorompar Logo"></img></a>
                    <span class="mb-3 mb-md-0 text-body-secondary">  © 2024 ricardorompar</span>
                </div>

                <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
                    <li class="ms-3"><a class="text-body-secondary" href="https://www.linkedin.com/in/ricardo-romero-paredes/"><img src={linkedin} height={30} alt="LinkedIn Logo"></img></a></li>
                    <li class="ms-3"><a class="text-body-secondary" href="https://github.com/ricardorompar"><img src={github} height={30} alt="GitHub Logo"></img></a></li>
                </ul>
            </footer>
        </Container>
    );
}

export default Footer;