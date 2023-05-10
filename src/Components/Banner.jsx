import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import banner1 from "../img/slider2 (1).jpg"
import banner2 from "../img/slider2 (1).jpg"
import banner3 from "../img/slider2 (1).jpg"
const Banner = () => {
    return (
       <Container fluid >
        <Row>
            <Col>
            <Carousel>
      <Carousel.Item>
        <img 

          className="d-block w-100 img-fluid"
          src={banner3}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img 

          className="d-block w-100 img-fluid"
          src={banner1}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img 

          className="d-block w-100 img-fluid"
          src={banner2}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
            </Col>

        </Row>
       </Container>
    );
};

export default Banner;