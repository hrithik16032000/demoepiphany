import React from "react";
import {Row, Col, Container, Jumbotron} from 'react-bootstrap';
import "../../App.css"

function Contact() {
    return(
        <div>
          <Jumbotron className="bg-light d-flex justify-content-center">
             <a className="contacthead">Contact Us</a>
          </Jumbotron>

     <Container>
     <div className="justify-content-center">
      <Row>
        <Col></Col>
        <Col>
        <i className="fa fa-instagram fa-2x">
          <a className="contactlink" href="https://instagram.com/epiphany.india?igshid=1e79inpr1lqzl">Instagram/EpiphanyIndia</a></i>
        </Col>
        <Col></Col>
      </Row>
      </div>
      </Container>

      <br />
      
      <Container>
      <div className="justify-content-center">
      <Row>
        <Col></Col>
        <Col>
        <i className="fa fa-youtube fa-2x">
           <a className="contactlink" href="https://www.youtube.com/channel/UC5Kp_AuggphAVGToUxbfEmQ">Youtube/EpiphanyIndia</a>
        </i>
        </Col>
        <Col></Col>
      </Row> 
      </div>
      </Container> 

      <br />

      <Container>
      <div className="justify-content-center">
      <Row>
        <Col></Col>
        <Col>
        <i className="fa fa-facebook fa-2x">
        <a className="contactlink" href="https://www.facebook.com/Epiphany-India-642285419718308/">Facebook/EpiphanyIndia</a>
        </i>
        </Col>
        <Col></Col>
      </Row> 
      </div>
      </Container>

      <br />

      <Container>
      <div className="justify-content-center">
      <Row>
        <Col></Col>
        <Col>
        <i className="fa fa-twitter fa-2x">
        <a className="contactlink" href="https://twitter.com/indiaepiphany">Twitter/EpiphanyIndia</a>
        </i>
        </Col>
        <Col></Col>
      </Row> 
      </div>
      </Container>

      <br />

      <Container>
      <div className="justify-content-center">
      <Row>
        <Col></Col>
        <Col>
        <i className="fa fa-envelope fa-2x">
        <a className="contactlink" href="/">Gmail/EpiphanyIndia</a>
        </i>
        </Col>
        <Col></Col>
      </Row> 
      </div>
      </Container>
      <br />
        </div>
    );
}

export default Contact; 