import React from 'react';

const HoverFocus = () => {
  return (
    <>
      <button className='bg-indigo-600 hover:bg-indigo-500 font-bold text-white w-24 py-4'>
        ホバーボタン
      </button>

      <input
        type='text'
        className='border-2 p-2 m-4 focus:outline-none focus:border-red-300'
      />
    </>
  );
};

export default HoverFocus;
