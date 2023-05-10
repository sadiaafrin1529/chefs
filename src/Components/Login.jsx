import React, { useContext, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { AuthContext } from '../provider/Authprovider';
import Headers from './Headers';
import { Link } from 'react-router-dom';

const Login = () => {
    const {GoogleSingIn,user,login,error,githublogin} = useContext(AuthContext)
    const [update, setUpdate] = useState({})
    
 const hanldeChange = e =>{
    const field = e.target.name;
    const value= e.target.value;
    const loginvalue = {...update};
    loginvalue[field]=value;
    setUpdate(loginvalue);
 }
 const handleform=e=>{
    e.preventDefault()
    login(update.email,update.password)
   
 }
 console.log(user)
    return (
        <>
        <Headers></Headers>
            <Container>
        <h3 className='p-2'>Login</h3>
            <Row>
            <Col md={6} className='mx-auto mt-5'>
            <form  onSubmit={handleform} className='mt=5 p-4 border border-1'>
                
                <div className="mb-3">
                    <label for="email" className="form-label">Email address</label>
                    <input type="email" onChange={hanldeChange} className="form-control" name="email" id="email" aria-describedby="emailHelp" required/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label for="password" className="form-label">Password</label>
                    <input type="password" onChange={hanldeChange} className="form-control" name="password" id="password" required/>
                </div>
               
                {error &&  <h5 style={{color:'red',textAlign:'center'}}>{error}</h5>}
                <button type="submit" className="btn btn-warning w-100">Submit</button>
                </form>
                <h6>Please Create acount<Link to="/reg">Register</Link></h6>
                <button onClick={()=>GoogleSingIn()} className="btn btn-primary mt-5 w-100">SingIn With Google</button>
                <button onClick={()=>githublogin()} className="btn btn-primary mt-5 w-100">SingIn With Github</button>
            </Col>
            </Row>
            </Container>
        </>
    );
};

export default Login;