import React from 'react';

const WidthHeight = () => {
  return (
    <>
      {/* インライン要素には適用されない */}
      <span className='border border-red-500 w-4'>インライン要素</span>
      <div className='border border-red-500 w-16'>ブロック要素</div>
      {/* 幅固定 */}
      <div className='border border-red-500 w-96'>ブロック要素</div>
      {/* 幅可変 */}
      <div className='border border-red-500 w-full'>
        ブロック要素ブロック要素 ブロック要素 ブロック要素 ブロック要素
        ブロック要素 ブロック要素 ブロック要素 ブロック要素 ブロック要素
        ブロック要素 ブロック要素 ブロック要素 ブロック要素 ブロック要素
        ブロック要素
      </div>
      <div className='mt-16 border border-blue-500 w-1/2'>
        ブロック要素ブロック要素 ブロック要素 ブロック要素 ブロック要素
        ブロック要素 ブロック要素 ブロック要素 ブロック要素 ブロック要素
        ブロック要素 ブロック要素
      </div>
      {/* 幅max指定 */}
      <div className='border border-blue-500 max-w-2xl'>
        ブロック要素ブロック要素 ブロック要素 ブロック要素 ブロック要素
        ブロック要素 ブロック要素 ブロック要素 ブロック要素 ブロック要素
        ブロック要素
      </div>

      <div className='flex justify-around'>
        <div className='w-1/4 border border-blue-500'>左側</div>
        <div className='w-1/4 border border-blue-500'>右側</div>
        <div className='w-1/4 border border-blue-500'>左側</div>
        <div className='w-1/4 border border-blue-500'>右側</div>
      </div>
    </>
  );
};

export default WidthHeight;
