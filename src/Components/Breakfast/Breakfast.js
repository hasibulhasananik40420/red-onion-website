import React from 'react';
import useData from '../../hooks/useData';
import Singlebreakfast from './Singlebreakfast/Singlebreakfast';
import './Breakfast.css'
const Breakfast = () => {
    const [breakfast , setBreakfast] = useData()
    return (
        <div className='grid md:grid-cols-3 gap-8 rounded-md text-center mt-16'>
            {
            breakfast.map(item1=> <Singlebreakfast key={item1.id} item1={item1}></Singlebreakfast>)
            
            }
        </div>
    );
};

export default Breakfast;