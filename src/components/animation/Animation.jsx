import React from 'react';

const Animation = () => {
  return (
    <>
      <div class='border border-sky-300 shadow rounded-md p-4 max-w-sm w-full mx-auto'>
        <div class='animate-pulse flex space-x-4'>
          <div class='rounded-full bg-sky-400 h-12 w-12'></div>
          <div class='flex-1 space-y-4 py-1'>
            <div class='h-4 bg-sky-400 rounded w-3/4'></div>
            <div class='space-y-2'>
              <div class='h-4 bg-sky-400 rounded'></div>
              <div class='h-4 bg-sky-400 rounded w-5/6'></div>
            </div>
          </div>
        </div>
      </div>

      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='w-20 animate-bounce'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M19 14l-7 7m0 0l-7-7m7 7V3'
        />
      </svg>

      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='w-20 animate-spin'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M19 14l-7 7m0 0l-7-7m7 7V3'
        />
      </svg>
    </>
  );
};

export default Animation;
