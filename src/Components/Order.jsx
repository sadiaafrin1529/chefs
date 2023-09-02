import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Order = () => {
    return (
        <Container style={{marginTop:"160px"}}>
            <Row className='mt-10 mb-5'>
            

                <Col md={6}>
                <h1 style={{ fontFamily: "Lucida Console, Courier, monospace" }} className='mx-auto '>Support Us & Connect With Us <div class="spinner-grow spinner-grow-sm" role="status">
  <span class="visually-hidden">Loading...</span>
</div> <div class="spinner-grow spinner-grow-sm" role="status">
  <span class="visually-hidden">Loading...</span>
</div></h1>
                <p style={{ fontFamily: "Times,  Georgia, serif" }} className="">Subscribe to our monthly news letter to get updated about our latest recipe.</p>
                </Col>
                <Col md={6}>
                <div class="input-group ">
                <input style={{ fontFamily: "Times,  Georgia, serif" }} type="text" class="form-control" placeholder="eample@email.com" aria-label="Recipient's username" aria-describedby="button-addon2" />
                <button style={{backgroundColor:"#7F0C0C", color:"white",fontFamily: "Times,  Georgia, serif"}} type="button" class="btn  btn-lg" data-bs-toggle="button" autocomplete="off" aria-pressed="true">Subscribe</button>
                
{/* <button class="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>   */}
</div>
{/* <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2" />
<button class="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>      */}

                </Col>
            </Row>
        </Container>
    );
};

export default Order;