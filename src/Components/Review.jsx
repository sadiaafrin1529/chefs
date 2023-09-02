import React from 'react';
import { Container, Row } from 'react-bootstrap';
import like from '../img/khabar.png'
import like1 from '../img/plate1.png'
import like2 from '../img/plate2.png'
import like3 from '../img/plate3.png'
import like4 from '../img/plate4.png'
import like5 from '../img/plate5.png'
import like6 from '../img/plate6.png'
import like7 from '../img/plate7.png'
import like8 from '../img/plate8.png'
import like9 from '../img/plate9.png'
import '../Components/Review.css'
import Slider from 'react-slick';

const Review = () => {
    var settings = {
        dots: true,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        initialSlide: 5,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <Container >
            <Row className='mt-5 mb-5'>
            <h1  style={{  fontFamily: "Lucida Console, Courier, monospace"}}         className='mx-auto text-center'>Popular Food</h1>
            <p style={{ fontFamily: "Times,  Georgia, serif"}} className="text-center">Here you can see our popular food items</p>
                <Slider {...settings} className='slider-container'>
                    <div className='slide-item'>
                        <img className='img-fluid' src={like} alt="" />
                    </div>
                    <div className='slide-item'>
                        <img className='img-fluid' src={like1} alt="" />
                    </div>
                    <div className='slide-item'>
                        <img className='img-fluid' src={like2} alt="" />
                    </div>
                    <div className='slide-item'>
                        <img className='img-fluid' src={like3} alt="" />
                    </div>
                    <div className='slide-item'>
                        <img className='img-fluid' src={like4} alt="" />
                    </div>
                    <div className='slide-item'>
                        <img className='img-fluid' src={like5} alt="" />
                    </div>
                    <div className='slide-item'>
                        <img className='img-fluid' src={like6} alt="" />
                    </div>
                    <div className='slide-item'>
                        <img className='img-fluid' src={like3} alt="" />
                    </div>
                    <div className='slide-item'>
                        <img className='img-fluid' src={like8} alt="" />
                    </div>
                    <div className='slide-item'>
                        <img className='img-fluid' src={like9} alt="" />
                    </div>
                </Slider>
            </Row>
        </Container>
    );
};

export default Review;
