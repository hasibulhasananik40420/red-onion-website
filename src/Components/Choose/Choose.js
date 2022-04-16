import React from 'react';

const Choose = () => {
    return (
       <div>
          
           <div>
               <h1 className='text-4xl text-indigo-400 ml-16 mt-4 font-serif font-bold'>Why You Choose Us</h1>
                <p className='ml-16 mt-2 font-mono flex-wrap w-1/4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus magnam officia tempore aliquam molliti</p>
           </div>

           <div className='grid grid-cols-3 gap-6 mt-8 p-6'>
             <div className="blog ">
              <img  src="https://i.ibb.co/xh6R0Qm/Rectangle-1.png" alt="" />
              <h3 className='text-2xl my-3 '> Total Clean Shop</h3>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, suscipit. Dignissimos, aspernatur.</p>
             </div>
             
             <div className="blog ">
              <img  src="https://i.ibb.co/Xtff7g5/Rectangle-2.png" alt="" />
              <h3 className='text-2xl my-3 '> Total Clean Shop</h3>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, suscipit. Dignissimos, aspernatur.</p>
             </div>
             
             <div className="blog ">
              <img  src="https://i.ibb.co/2SXNTfr/Rectangle-3.png" alt="" />
              <h3 className='text-2xl my-3 '> Total Clean Shop</h3>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, suscipit. Dignissimos, aspernatur.</p>
             </div>

        </div>
       </div>
    );
};

export default Choose;