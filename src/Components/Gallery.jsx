import React from 'react';
import food4 from '../img/food.jpg'
import food2 from '../img/food1.jpg'
import { Card, Container, Image } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Gallery = () => {
    return(
       <Container className='mx-auto'>
        <Row className='mt-5 mb-5 '>
        <h1           className='mx-auto text-center'>Gallery</h1>
                    <p className="text-center">London is one of the top places to go because of the sheer variety of eateries, which stems from the fact that this city is a melting pot of different cultures. In this article, we will look at some of the reasons why London has become a foodie’s heaven over the years.</p>
            <Col md={6} >
                <img src={food2} class="img-fluid mt-4 mx-auto img-fluid" alt="" style={{maxHeight:"500px"}}></img>
                </Col>
            
                <Col md={6}>
                <img src={food4} class="img-fluid mt-4 mx-auto img-fluid" alt="" style={{maxHeight:"500px"}}></img>
            </Col>
        </Row>
    </Container>
        
    
         
          
    );

};

export default Gallery;