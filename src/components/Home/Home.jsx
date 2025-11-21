import React from 'react';
import LatestProducts from '../LatestProducts/LatestProducts';
import HeroBanner from '../heroBanner/HeroBanner';

const latestProductsPromise = fetch('http://localhost:3000/latest-products').then(res => res.json());
const Home = () => {
    return (
        <div className='bg-gray-100'>
            <HeroBanner></HeroBanner>
            <LatestProducts latestProductsPromise={latestProductsPromise}></LatestProducts>
        </div>
    );
};

export default Home;