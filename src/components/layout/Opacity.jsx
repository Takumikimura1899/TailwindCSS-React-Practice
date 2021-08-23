import React from 'react';

const Opacity = () => {
  return (
    <>
      <p className='mt-16 text-blue-400 '>透明度</p>
      <p className='mt-16 text-blue-400 text-opacity-50'>透明度</p>
      <div className='mt-16 border border-pink-500 '>ボーダーの透明度</div>
      <div className='mt-16 border border-pink-500 border-opacity-50'>
        ボーダーの透明度
      </div>
      <div className='mt-16 border bg-green-400 '>背景の透明度</div>
      <div className='mt-16 border bg-green-400 bg-opacity-50'>
        背景の透明度
      </div>
    </>
  );
};

export default Opacity;
