import React, { useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { toast } from "react-hot-toast";
import Rating from "react-rating";
import { useLoaderData } from "react-router-dom";
import Headers from "./Headers";

const SingleChef = () => {
  const information = useLoaderData();
  const [disabled , setDisabled] = useState([])
  const disabledFunction = (id)=> {
    const findingdata = disabled.find(d=>d === d.id)

    if(!findingdata){
        setDisabled([...disabled,id])
        toast.success('Added Favorite')
    }
    toast.success('Favorite added')
    alert('Favorite added')
    
    
  }
  console.log(information);
  const {
    id,
    recipes,
    picture_link,
    name,
    bio_description,
    likes,
    number_of_recipes,
    years_of_experience,
    recipe_name,
  } = information || {};

  const myrecipes = recipes.map(recipe =>recipe)

  return (
    <>
    <Headers></Headers>
      <Container>
      <Row>
        <Col className="mx-auto" md={8}>
        <div class="card mb-3">
          <div class="row g-0">
            <div class="col-md-6">
              <img
                src={picture_link}
                class="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div class="col-md-6">
              <div class="card-body">
                <h5 class="card-title">{name}</h5>
                <p class="card-text">{bio_description}</p>
                <Rating
                    placeholderRating={3.5}
                    emptySymbol={<i  class="text-warning fa-regular fa-star"></i>}
                    placeholderSymbol={<i  class="text-warning fa-solid fa-star"></i>}
                    fullSymbol={<i  class="text-warning fa-solid fa-star"></i>}
                    />
                    <p>Expreience: {years_of_experience}</p>
                    <p><i class="fa-regular fa-thumbs-up"></i>{likes}</p>
              </div>
            </div>
          </div>
        </div>
        </Col>
        </Row>
        <Row>
        {
           recipes.map(singleRecipes => <Col md={4} >
                   <div class="card mb-5 mt-5">
                   <img src={singleRecipes.recipe_pic}  className="img-fluid" alt="" />
                   <div class="card-body">
                       <h5 class="card-title">{singleRecipes.recipe_name}</h5>
                       <p class="card-text">{singleRecipes.cooking_method}</p>
                       <Button disabled={disabled.find(d => d === singleRecipes.id)} onClick={()=>disabledFunction(singleRecipes.id)} className="btn btn-primary w-100">Favorit</Button>
                       <ul>
                            {
                             singleRecipes.ingredients.map(item => <li>{item}</li>)
                            }
                       </ul>
                   </div>
                   </div>

           </Col>) 
        }
        </Row>

    </Container>
    </>
  );
};

export default SingleChef;
