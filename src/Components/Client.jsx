import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Slider from 'react-slick';
import '../Components/Review.css';
import like2 from '../img/person1.png';
import like3 from '../img/person2.png';
import like4 from '../img/person3.png';
import like5 from '../img/person4.png';
import like6 from '../img/person5.png';
import like8 from '../img/person6.png';
import like9 from '../img/plate9.png';
import person from "../img/user-one.png";
const Client = () => {
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
                <h1 style={{ fontFamily: "Lucida Console, Courier, monospace" }} className='mx-auto text-center'>Customers Review</h1>
                <p style={{ fontFamily: "Times,  Georgia, serif" }} className="text-center">Here you can see our Customers Review</p>
                <Slider {...settings} className='slider-container'>
                    
                    <div className='slide-item' >
                    <div style={{ border: "2px", margin: "5px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                            <img style={{ borderRadius: "50%", width: "100px" }} src={person} alt="" />
                            <p style={{ fontFamily: "Times,  Georgia, serif" }} className="text-center">The food at this restaurant is absolutely amazing! I tried their signature dish, and it was a burst of flavors in my mouth. I can't wait to go back.</p>
                        </div>
                    </div>
                    <div className='slide-item'>
                    <div style={{ border: "2px", margin: "5px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                            <img style={{ borderRadius: "50%", width: "100px" }} src={like2} alt="" />
                            <p style={{ fontFamily: "Times,  Georgia, serif" }} className="text-center">I had the pleasure of dining here last night, and it was a culinary delight. The chef's attention to detail is commendable, and the service was impeccable.</p>
                        </div>
                    </div>
                    <div className='slide-item'>
                    <div style={{ border: "2px",  margin: "5px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                            <img style={{ borderRadius: "50%", width: "100px" }} src={like3} alt="" />
                            <p style={{ fontFamily: "Times,  Georgia, serif" }} className="text-center">The quality of ingredients they use is top-notch. I appreciate restaurants that prioritize freshness, and this one surely does.</p>
                        </div>
                    </div>
                    <div className='slide-item'>
                    <div style={{ border: "2px",  margin: "5px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                            <img style={{ borderRadius: "50%", width: "100px" }} src={like4} alt="" />
                            <p style={{ fontFamily: "Times,  Georgia, serif" }} className="text-center">The portions here are generous, and the prices are reasonable. I left with a full belly and a smile on my face.</p>
                        </div>
                    </div>
                    <div className='slide-item'>
                    <div style={{ border: "2px", margin: "5px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                            <img style={{ borderRadius: "50%", width: "100px" }} src={like5} alt="" />
                            <p style={{ fontFamily: "Times,  Georgia, serif" }} className="text-center">I'm a vegetarian, and I'm always on the lookout for good veg options. This place exceeded my expectations with its creative and delicious vegetarian menu.</p>
                        </div>
                    </div>
                    <div className='slide-item'>
                    <div style={{ border: "2px", margin: "5px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                            <img style={{ borderRadius: "50%", width: "100px" }} src={like3} alt="" />
                            <p style={{ fontFamily: "Times,  Georgia, serif" }} className="text-center">I've been a regular here for years, and the consistency in taste and service is remarkable. This is my go-to spot for comfort food.</p>
                        </div>
                    </div>
                    <div className='slide-item'>
                    <div style={{ border: "2px", margin: "5px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                            <img style={{ borderRadius: "50%", width: "100px" }} src={like6} alt="" />
                            <p style={{ fontFamily: "Times,  Georgia, serif" }} className="text-center">The ambiance is perfect for a romantic dinner. My partner and I had a lovely time enjoying our meal by candlelight.</p>
                        </div>
                    </div>
                    <div className='slide-item'>
                    <div style={{ border: "2px",  margin: "5px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                            <img style={{ borderRadius: "50%", width: "100px" }} src={like8} alt="" />
                            <p style={{ fontFamily: "Times,  Georgia, serif" }} className="text-center">I was visiting from out of town and stumbled upon this gem. I can't believe my luck! I had the best meal of my trip here.</p>
                        </div>
                    </div>
                    <div className='slide-item '>
                    <div style={{ border: "2px",margin: "5px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                            <img style={{ borderRadius: "50%", width: "100px" }} src={like2} alt="" />
                            <p style={{ fontFamily: "Times,  Georgia, serif" }} className="text-center">The dessert menu is a dream come true for anyone with a sweet tooth. I couldn't resist trying a couple of their desserts, and they were heavenly.</p>
                        </div>
                    </div>
                    <div className='slide-item'>
                        <div style={{ border: "2px", margin: "5px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                            <img style={{ borderRadius: "50%", width: "100px" }} src={like5} alt="" />
                            <p style={{ fontFamily: "Times,  Georgia, serif" }} className="text-center">The staff is friendly and attentive, making you feel right at home. It's not just about the food; it's the overall experience that keeps me coming back.</p>
                        </div>

                    </div>
                </Slider>
            </Row>
        </Container>
    );
};

export default Client;
