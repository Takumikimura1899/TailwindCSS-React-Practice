import React from 'react';

const Display = () => {
  return (
    <>
      <span className='block border border-red-400'>
        インライン要素をブロック要素に変える
      </span>
      <span className=' border border-red-400'>ブロックにすると改行される</span>
      <span className=' border border-red-400'>ブロックを解除</span>
    </>
  );
};

export default Display;
