import React from 'react';
import Image from '../images/img1.jpg';

const Responsive = () => {
  return (
    <>
      <div className='bg-green-300 md:bg-blue-300 lg:bg-red-300 mb-8'>
        レスポンシブ
      </div>

      <div className='text-center mb-8'>
        <button className='bg-indigo-600 hover:bg-indigo-500 text-white p-4 w-1/2 md:max-w-md'>
          レスポンシブ対応
        </button>
      </div>

      <div className='max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl'>
        <div className='md:flex'>
          <div className='md:flex-shrink-0'>
            <img
              className='h-48 w-full object-cover md:h-full md:w-48'
              src={Image}
              alt='Man looking at item at a store'
            />
          </div>
          <div className='p-8'>
            <div className='uppercase tracking-wide text-sm text-indigo-500 font-semibold'>
              Case study
            </div>
            <a
              href='#'
              className='block mt-1 text-lg leading-tight font-medium text-black hover:underline'
            >
              Finding customers for your new business
            </a>
            <p className='mt-2 text-gray-500'>
              Getting a new business off the ground is a lot of hard work. Here
              are five ideas you can use to find your first customers.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Responsive;
