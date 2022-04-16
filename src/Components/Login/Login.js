import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'
const Login = () => {
    return (
        <div className='login-container'>
            <div className="login-title">Login</div>
            <form  className='login-form'>
              <input type="email" name="" id="" placeholder='Email' />
              <input type="password" name="" id="" placeholder='Enter Password' />
               <button>Login</button>
            </form>
             <p className='mt-3'> Create an account? <Link to='/singup'> <span className='text-red-400 ml-2'>Sing Up</span></Link></p>
        </div>
    );
};

export default Login;