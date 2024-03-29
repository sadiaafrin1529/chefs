import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Chef = () => {
    const [info,setInfo]= useState([])
     
    useEffect(()=>{
        // fetch('https://server-chef.vercel.app/chefRecipe')
        fetch('https://server-chef.vercel.app/chefRecipe')
        .then(res=>res.json())
        .then(data=>setInfo(data))
    },[])
    
    console.log(info)
    return (

       <Container>
         <Container >
            <Row >
            <h1 style={{  fontFamily: "Lucida Console, Courier, monospace"}} className='mx-auto mt-3 text-center font-bold'>Chefs Information</h1>
            <p style={{ fontFamily: 'Times,  Georgia, serif' }} className='text-center'>
        Here you can see our chefs information
        </p>
            {
                info.map(singleData => <Col md={4} key={singleData.id} mx-auto className="g-4">
                <div style={{ fontFamily: "Times,  Georgia, serif"}} className="mt-5">
                  <div style={{height:"550px"}} className="card">
                    <img style={{height:"300px"}} src={singleData.picture_link} className="card-img-top " alt="..." />
                    <div className="card-body">
                        <h5>{singleData.name}</h5>
                      <Link to={`/chef/${singleData.id}`} style={{textDecoration:'none'}}><h5 className="card-title">View Recipe</h5></Link>
                      <p className="card-text">{singleData.bio_description.slice(0,100)}</p>
                      <p>like: {singleData.likes}</p>
                      <p>experience: {singleData.years_of_experience}year</p>
                    </div>
                  </div>
                </div>
                </Col>
              )
            }

            </Row>
        </Container>
       </Container>


    );
};

export default Chef;