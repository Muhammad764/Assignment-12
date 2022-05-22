import React from 'react';
import Banner from './Banner/Banner';
import Section1 from './Section1/Section1';
import Section2 from './Section2/Section2';
import State from './State/State';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <State></State>
            <Section1></Section1>
            <Section2></Section2>
        </div>
    );
};

export default Home;