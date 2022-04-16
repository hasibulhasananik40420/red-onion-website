import React from 'react';
import Breakfast from '../Breakfast/Breakfast';
import Choose from '../Choose/Choose';
import Dinner from '../Dinner/Dinner';
import Header from '../Header/Header';
import Lunch from '../Lunch/Lunch';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Breakfast></Breakfast>
            <Lunch></Lunch>
            <Dinner></Dinner>
             <Choose></Choose>
        </div>
    );
};

export default Home;