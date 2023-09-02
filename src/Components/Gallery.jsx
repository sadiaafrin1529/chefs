import React from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';
import food1 from '../img/01.jpg';
import food2 from '../img/2.jpg';
import food3 from '../img/3.jpg';
import food4 from '../img/4.jpg';
import food5 from '../img/5.jpg';
import food6 from '../img/6.jpg';
import food7 from '../img/7.jpg';
import food8 from '../img/8.jpg';
import food9 from '../img/9.jpg';
import food10 from '../img/10.jpg';
import food11 from '../img/11.jpg';
import food12 from '../img/12.jpg';
import food13 from '../img/13.jpg';
import food14 from '../img/14.jpg';
import food15 from '../img/15.jpg';
import '../Components/Gallery.css';

const images = [
  food1,
  food2,
  food3,
  food5,
  food6,
  food4,
  food7,
  food8,
  food9,
  food10,
  food11,
  food12,
  food13,
  food14,
  food15
  
];

const Gallery = () => {
  return (
    <Container className='mx-auto'>
      <Row className='mt-5 mb-5'>
        <h1 style={{ fontFamily: 'Lucida Console, Courier, monospace' }} className='mx-auto text-center'>
          Gallery
        </h1>
        <p style={{ fontFamily: 'Times,  Georgia, serif' }} className='text-center'>
          London is one of the top places to go because of the sheer variety of eateries, which stems from the fact that this city is a melting pot of different cultures. In this article, we will look at some of the reasons why London has become a foodie’s heaven over the years.
        </p>

        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry gutter="20px">
            {images.map((image, index) => (
              <div className='column' key={index}>
                <img style={{ maxWidth: '100%', height: 'auto' }} src={image} alt={`Food ${index + 1}`} />
              </div>
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </Row>
    </Container>
  );
};

export default Gallery;
