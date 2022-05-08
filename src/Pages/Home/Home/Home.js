import React from 'react';
import Banner from '../Banner/Banner';
import Inventories from '../Inventories/Inventories';
import Partners from '../Partners/Partners';


const Home = () => {

    return (
        <div>
            <Banner></Banner>
            <Inventories></Inventories>
            <Partners></Partners>
        </div>
    );
};

export default Home;