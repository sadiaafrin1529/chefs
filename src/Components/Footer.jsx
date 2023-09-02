import React from 'react';
import { Container, Row, Col, Navbar, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <Container fluid>
    <Row>
    <footer class="bg-light  text-light py-3">
  <div class="container">
    <div class="row">
      <div class="col-md-4 ">
      <div className='fs-2 fw-bold' style={{color:"brown" , fontFamily:"cursive"}}>
                ChefRecipe
                </div>
        <p style={{ fontFamily: "Times,  Georgia, serif",   fontVariant: "small-caps",color:"#280909" }}>Please have faith in us</p>
      </div>
      <div class="col-md-4">
        <h5>Links</h5>
        <ul class="list-unstyled">
          
          <li style={{ fontFamily: "Times,  Georgia, serif",   fontVariant: "small-caps" }}><Link style={{textDecorationLine:'none',color:"#280909",fontWeight:"bold"}}>Home</Link></li>
          <li style={{ fontFamily: "Times,  Georgia, serif",   fontVariant: "small-caps" }}><Link style={{textDecorationLine:'none',color:"#280909",fontWeight:"bold"}}>About</Link></li>
          <li style={{ fontFamily: "Times,  Georgia, serif",   fontVariant: "small-caps" }}><Link style={{textDecorationLine:'none',color:"#280909",fontWeight:"bold"}}>Contact</Link></li>
        </ul>
      </div>
      <div class="col-md-4">
        <h5>Follow Us</h5>
        <ul class="list-unstyled">
          <li style={{ fontFamily: "Times,  Georgia, serif",   fontVariant: "small-caps" }}><a style={{textDecorationLine:'none',color:"#280909",fontWeight:"bold"}} href="#"><i class="fab fa-facebook-f"></i> Facebook</a></li>
          <li style={{ fontFamily: "Times,  Georgia, serif",   fontVariant: "small-caps" }}><a style={{textDecorationLine:'none',color:"#280909",fontWeight:"bold"}} href="#"><i class="fab fa-twitter"></i> Twitter</a></li>
          <li style={{ fontFamily: "Times,  Georgia, serif",   fontVariant: "small-caps" }}><a style={{textDecorationLine:'none',color:"#280909",fontWeight:"bold"}} href="#"><i class="fab fa-instagram"></i> Instagram</a></li>
        </ul>
      </div>
      <div class="col-md-4">
        <div style={{ fontFamily: "Times,  Georgia, serif",   fontVariant: "small-caps",color:"#280909" }}>© 2023 Sadia™. All Rights Reserved.</div>
      
      </div>
    </div>
  </div>
</footer>

    </Row>
    </Container>
  );
};

export default Footer;




