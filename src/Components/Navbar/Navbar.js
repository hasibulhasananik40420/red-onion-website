import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../All-images/Images/logo2.png'
const Navbar = () => {
    return (
        <div className='flex justify-between bg-slate-200 p-5'>
           <div>
               <img className='w-[130px] ml-16' src={logo} alt="" />
           </div>
           <div className='mr-16'>
               <Link className='mr-6 font-serif text-xl font-semibold ' to='/'>Home</Link>
               <Link  className='mr-6 font-serif text-xl font-semibold ' to='/contact'>Contact</Link>
               <Link className='mr-6 font-serif text-xl font-semibold '  to='/login'>Login</Link>
           </div>
        </div>
    );
};

export default Navbar;