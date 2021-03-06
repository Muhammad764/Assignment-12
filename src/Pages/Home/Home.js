import React from 'react';
import Services from '../Services/Services';
import LoadReview from '../Shared/Reviews/LoadReview';
import Banner from './Banner/Banner';
import Section1 from './Section1/Section1';
import Section2 from './Section2/Section2';
import Section3 from './Section3/Section3';
import Section4 from './Section4/Section4';
import State from './State/State';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <State></State>
            <Section1></Section1>
            <Section2></Section2>
            <Section3></Section3>
            <LoadReview></LoadReview>
            <Section4></Section4>
        
        </div>
    );
};

export default Home;