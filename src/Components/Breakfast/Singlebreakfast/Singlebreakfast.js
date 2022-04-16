import React from 'react';
import './Singlebreakfast.css'
const Singlebreakfast = ({item1}) => {
    const {name , img , price , des} =item1
    return (
        <div  className=' cart-desgin'>
           <div className='flex justify-center items-center'> <img className='w-[300px]' src={img} alt="" /></div>
            <h1>{name}</h1>
            <h1>price: ${price}</h1>
            <p> {des}</p>
        </div>
    );
};

export default Singlebreakfast;