import React from 'react';
import { Container, Row, Col, Navbar, Form, Button } from 'react-bootstrap';

const Footer = () => {
  return (
    <Container fluid>
    <Row>
    <footer class="bg-dark text-light py-3">
  <div class="container">
    <div class="row">
      <div class="col-md-4">
        <h5>Chefrecipe</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div class="col-md-4">
        <h5>Links</h5>
        <ul class="list-unstyled">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
      <div class="col-md-4">
        <h5>Follow Us</h5>
        <ul class="list-unstyled">
          <li><a href="#"><i class="fab fa-facebook-f"></i> Facebook</a></li>
          <li><a href="#"><i class="fab fa-twitter"></i> Twitter</a></li>
          <li><a href="#"><i class="fab fa-instagram"></i> Instagram</a></li>
        </ul>
      </div>
    </div>
  </div>
</footer>

    </Row>
    </Container>
  );
};

export default Footer;




