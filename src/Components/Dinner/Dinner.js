import React from 'react';
import useData from '../../hooks/useData';
import SingleDinner from './SingleDinner/SingleDinner';

const Dinner = () => {
    const [dinner , setDinner] = useData()
    return (
        <div className='grid md:grid-cols-3 gap-8 rounded-md text-center mt-16'>
            {
               dinner.map(item3=> <SingleDinner key={item3.id} item3={item3}></SingleDinner>)
            }
        </div>
    );
};

export default Dinner;