import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import { Col, Container, Row } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import banner1 from "../img/food.jpg"
import banner2 from "../img/chef.jpg"
import banner3 from "../img/restaurant.jpg"
import '../Components/Banner.css'
const Banner = () => {
  return (
    <Container fluid className='middleBanner' >
      <Row className='  mt-5 '>
        <Col >

          <div className='banner'>
            <div className='container'>
              <div className='row'>
                <div className='col-sm-6'>
                  <h2 className=''>Choose From popular Chefs Recipe</h2>
                <p>Delicious recipes from renowned chefs to elevate your cooking.</p>
                <button type="button" class="btn btn-danger">sign up now <FaArrowRight className='arrow' style={{hover:''}} /></button>
                </div>

              </div>

            </div>
            {/* <div className='banner-text'>

                <h2>Choose From popular Chefs Recipe</h2>
                <button type="button" class="btn btn-danger">sign up now <FaArrowRight style={{hover:''}} /></button>
              </div> */}

          </div>


          {/* <div className='d-flex justify-content-center'>
           <img style={{borderRadius:"15px"}} src={banner1} alt="" />
           </div> */}
          {/* <Carousel>
      <Carousel.Item className='position-relative'>
      <div className="gradient-overlay"></div>
        <img 
style={{height:'900px', width:'800px'}}
          className="d-block w-100 img-fluid"
          src={banner3}
          alt="First slide"
        />
        <Carousel.Caption>
        <div className='md:ml-10 background'>
                <p className='uppercase'></p>
               
                
            </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='position-relative'>
      <div className="gradient-overlay"></div>
        <img 
style={{height:'900px', width:'800px'}}
          className="d-block w-100 img-fluid"
          src={banner1}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='position-relative'>
      <div className="gradient-overlay"></div>
        <img 
style={{height:'900px', width:'800px'}}
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
    </Carousel> */}
        </Col>

      </Row>
    </Container>
  );
};

export default Banner;