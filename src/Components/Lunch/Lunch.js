import React from 'react';
import useData from '../../hooks/useData';
import SingleLunch from './SingleLunch/SingleLunch';

const Lunch = () => {
    const [lunch , setLunch] = useData()
    return (
       
       <div className='grid md:grid-cols-3 gap-8 rounded-md text-center mt-16'>
           {
               lunch.map(item2=> <SingleLunch key={item2.id} item2={item2}></SingleLunch>)
           }
       </div>
    
    );
};

export default Lunch;