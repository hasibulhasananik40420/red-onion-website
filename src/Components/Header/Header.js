import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div className='background-img'>
                     <div className=' w-full h-[500px] py-36  '>
                    <h2 className='text-3xl text-center md:text-black  font-bold '> <span className='text-teal-800 font-serif'>Best Food Waiting For Your Belly</span></h2>
                    <div className="grid">
                     <input className='mx-auto mt-8 pl-4 bg-green-300 pr-2 w-[450px] h-[45px] rounded-full block' type={'search'} placeholder='Your Food' ></input>
                     </div>
                    </div>
        </div>
    );
};

export default Header;