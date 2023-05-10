import React, { useContext, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { AuthContext } from '../provider/Authprovider';
import { Link } from 'react-router-dom';
const Registration = () => {
  const {GoogleSingIn,regristration,error,githublogin} = useContext(AuthContext)
  const [update ,setUpdate]= useState({})

  const onChaneHandeler = e =>{
    const field = e.target.name;
    const value = e.target.value 
    const newValue= {...update}
    newValue[field] = value
    setUpdate(newValue)
  }

  // const username,userUrl
  

  const formHandeler = e =>{
    e.preventDefault()

    if(update.password !== update.confirmPassword){
      alert('password did not matched')
      return 
    }

    regristration(update.email,update.password,update.name,update.photo)
  }

    return (
        
          <Container>
        <Row>
          <Col md={6} className='mx-auto mt-5'>
          <h3 className='p-2'>Registration</h3>
          <form className='mt=5 p-4 border border-1' onSubmit={formHandeler}>
              <div className="row mb-3">
                <div className="col">
                  <label for="lastName" className="form-label">Name</label>
                  <input type="text" className="form-control"name='name' required  onChange={onChaneHandeler}  id="lastName" />
                </div>
                <div className="col">
                  <label for="lastName" className="form-label">Photo Url</label>
                  <input type="text" className="form-control"  required name='photo'onChange={onChaneHandeler}  id="lastName" />
                </div>
              </div>
              <div className="mb-3">
                <label for="email" className="form-label">Email address</label>
                <input type="email" className="form-control"  required name='email'onChange={onChaneHandeler}  id="email" aria-describedby="emailHelp" />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
              </div>
              <div className="mb-3">
                <label for="password" className="form-label">Password</label>
                <input type="password" className="form-control"onChange={onChaneHandeler} required   name='password' id="password" />
              </div>
              <div className="mb-3">
                <label for="confirmPassword" className="form-label">Confirm password</label>
                <input type="password" className="form-control"onChange={onChaneHandeler} required   name='confirmPassword' id="confirmPassword" />
              </div>
              {error &&  <h5 style={{color:'red',textAlign:'center'}}>{error}</h5>}
              <button type="submit" className="btn btn-primary w-100">Submit</button>
            </form>
            <h6>Already have an acount?  <Link to="/login">Login</Link></h6>
            <button onClick={()=>GoogleSingIn()} className="btn btn-primary mt-5 w-100">SingIn With Google</button>
            <button onClick={()=>githublogin()} className="btn btn-primary mt-5 w-100">SingIn With Github</button>                                                                                                                                                                                                                                                                                                                                                                                                     
          </Col>
        </Row>
      </Container>
        
    );
};

export default Registration;