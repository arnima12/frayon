import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Service/Services';
import Products from '../Product/Products';
import Discount from '../Discount/Discount';
import Reviews from '../Review/Reviews';


const Home = () => {
    return (
        <div>
            <Banner />
            <Services />
            <Products />
            <Discount />
            <Reviews />
        </div>
    );
};

export default Home;