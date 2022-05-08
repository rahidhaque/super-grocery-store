import React from 'react';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Inventories from '../Inventories/Inventories';
import Partners from '../Partners/Partners';


const Home = () => {

    return (
        <div>
            <Banner></Banner>
            <Inventories></Inventories>
            <Partners></Partners>
            <Contact></Contact>
        </div>
    );
};

export default Home;