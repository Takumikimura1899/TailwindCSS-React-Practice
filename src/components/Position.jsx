import React from 'react';
import Image from '../images/img1.jpg';
const Position = () => {
  return (
    <>
      <div>
        <img src={Image} alt='img' className='w-96' />
        <span>文字を重ねたい</span>
      </div>

      <div className='mt-16 relative'>
        <img src={Image} alt='img' className='w-96 absolute' />
        <span className='absolute top-16 left-16'>文字を重ねたい</span>
      </div>

      <div className='mt-96 relative w-96 h-60 bg-red-400'>
        <div className='absolute w-40 h-40 top-8 left-8 bg-blue-300'></div>
        <div className='absolute w-40 h-40 top-16 left-16 bg-blue-500'></div>
      </div>

      <div className='mt-16 relative w-96 h-60 bg-red-400'>
        <p className='absolute z-20 top-44 left-20 text-xl'>z-index</p>
        <div className='absolute z-10 w-40 h-40 top-8 left-8 bg-blue-300'></div>
        <div className='absolute w-40 h-40 top-16 left-16 bg-blue-500'></div>
      </div>

      <div className='fixed bottom-8 right-8'>戻るボタン</div>

      <div className='mt-16 sticky top-0 p-2 bg-green-300'>stickyヘッダー</div>
      <div className='h-96'>aaa</div>
      <div className='h-96'>aaa</div>
      <div className='h-96'>aaa</div>
    </>
  );
};

export default Position;
