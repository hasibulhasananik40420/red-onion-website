import React from 'react';

const Singup = () => {
    return (
        <div className='login-container'>
            <div className="login-title">Sing Up</div>
            <form  className='login-form'>
              <input type="email" name="" id="" placeholder='Email' />
              <input type="password" name="" id="" placeholder='Enter Password' />
              <input type="password" name="" id="" placeholder='Confirm Password' />
               <button>Sing Up</button>
            </form>
        </div>
    );
};

export default Singup;