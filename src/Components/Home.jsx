import React from 'react';
import Banner from './Banner';
import Chef from './Chef';
import Footer from './Footer';
import Gallery from './Gallery';
import Headers from './Headers';
import Review from './Review';
import Client from './Client';
import Order from './Order';





const Home= () => {
  return (
<div>
<Headers></Headers>
    <Banner></Banner>
    <Chef></Chef>
    <Review/>
    <Gallery></Gallery>
    <Client/>
    <Order/>
    <Footer></Footer>

    
    
</div>
    // Footer 
  );
};

export default Home;