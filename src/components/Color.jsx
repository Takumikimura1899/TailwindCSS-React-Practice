import React from 'react';

const Color = () => {
  return (
    <>
      {/* 文字、線、背景 */}
      <p className='text-blue-400'>文字の色</p>
      <div className='mt-16 border border-pink-500'>線の色</div>
      <div className='mt-16 bg-green-500'>背景の色</div>

      <button className='mt-16 bg-indigo-600 text-white font-bold w-24 py-4 '>
        ボタン
      </button>
    </>
  );
};

export default Color;
