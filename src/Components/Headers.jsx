import React, { useContext } from 'react';
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import { AuthContext } from '../provider/Authprovider';
import { Link } from 'react-router-dom';

const Headers= () => {
  const {user,logout} = useContext(AuthContext) 
  const photo = user?.photoURL
    return (
    <div>
      {/* <Container fluid style={{background: "white"}}> */}
      <Container fluid className='bg-light ' style={{ boxShadow:" 10px 5px 5px Thistle"}}>
      <Row>
          <Col>
          <Navbar collapseOnSelect expand="lg"  variant="dark">
            <Container>
              <Navbar.Brand href="#home" >
                <div className='fs-2 fw-bold' style={{color:"brown" , fontFamily:"cursive"}}>
                ChefRecipe
                </div>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{backgroundColor:"gray"}} />
              <Navbar.Collapse id="responsive-navbar-nav" >
                <Nav className="me-auto">
                
                  
                </Nav>
                <Nav>
                  <Link  className='mx-2' style={{color:'green',textDecoration:'none',fontWeight:'600'}} to='/'>Home</Link>
                  <Link  className='mx-2 text-secondary' style={{color:'white',textDecoration:'none',fontWeight:'600'}} to='/blog'>Blog</Link>
                  <Link  className='mx-2 text-secondary' style={{color:'white',textDecoration:'none',fontWeight:'600'}} to="/about">About</Link>
                  <Link  className='mx-2 text-secondary' style={{color:'white',textDecoration:'none',fontWeight:'600'}}>{user?  <h6 onClick={()=>logout()}  >
                  Logout
                  </h6> :  <Link className='mx-2 text-secondary ' style={{color:'white',textDecoration:'none',fontWeight:'600'}} to='/login'>
                  Login
                  </Link>}</Link>
                  <Link to=''>{user  && <div className='size_of_img' >
                                        <img  src={photo} title={user?.displayName} id="t-4" style={{width:'30px',height:'30px',borderRadius:'50%'}} alt="" />
                                    </div>}</Link>
                </Nav>
              </Navbar.Collapse>
             </Container>
            </Navbar>
          </Col>
      </Row>
  </Container>
    </div>
  );
};

export default Headers;