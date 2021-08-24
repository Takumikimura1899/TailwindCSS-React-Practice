import React from 'react';

const FlexBoxLayouts = () => {
  return (
    <>
      SP-&gt;タブレット、PC
      <br />
      横2-{'>'}横2
      <div className='flex justify-center mb-16'>
        <div className='text-center border border-red-300 py-4 flex-grow'>
          あああああ
        </div>
        <div className='text-center border border-red-300 py-4 flex-grow'>
          あああああ
        </div>
      </div>
      縦2-{'>'}横2
      <div className='md:flex justify-center mb-16'>
        <div className='text-center border border-red-300 py-4 flex-grow'>
          こっちが１つめ
        </div>
        <div className='text-center border border-green-300 py-4 flex-grow'>
          あああああ
        </div>
      </div>
      縦2-{'>'}横2 幅 5/12,7/12
      <div className='md:flex justify-center mb-16'>
        <div className='text-center border border-red-300 py-4 flex-grow md:w-5/12'>
          あああああ
        </div>
        <div className='text-center border border-red-300 py-4 flex-grow md:w-7/12'>
          あああああ
        </div>
      </div>
      縦2-{'>'}横2(逆順)
      <div className='md:flex flex-row-reverse justify-center mb-16'>
        <div className='text-center border border-red-300 py-4 flex-grow'>
          こっちが１つめ
        </div>
        <div className='text-center border border-blue-300 py-4 flex-grow'>
          あああああ
        </div>
      </div>
      横3-{'>'}横3
      <div className='flex justify-center mb-16'>
        <div className='text-center border border-red-300 py-4 flex-grow'>
          aaaa
        </div>
        <div className='text-center border border-red-300 py-4 flex-grow'>
          aaaa
        </div>
        <div className='text-center border border-red-300 py-4 flex-grow'>
          aaaa
        </div>
      </div>
      縦3-{'>'}横3
      <div className='md:flex justify-center mb-16'>
        <div className='text-center border border-red-300 py-4 flex-grow'>
          aaaa
        </div>
        <div className='text-center border border-red-300 py-4 flex-grow'>
          aaaa
        </div>
        <div className='text-center border border-red-300 py-4 flex-grow'>
          aaaa
        </div>
      </div>
      縦3-{'>'}横3 3/12,6/12,3/12
      <div className='md:flex justify-center mb-16'>
        <div className='text-center border border-red-300 py-4 flex-grow md:w-3/12'>
          aaaa
        </div>
        <div className='text-center border border-red-300 py-4 flex-grow md:w-6/12'>
          aaaa
        </div>
        <div className='text-center border border-red-300 py-4 flex-grow md:w-3/12'>
          aaaa
        </div>
      </div>
      縦横2-{'>'}横4
      <div className='flex justify-center flex-wrap mb-16'>
        <div className='text-center border border-red-300 py-4 w-1/2 md:w-1/4'>
          左上
        </div>
        <div className='text-center border border-red-300 py-4 w-1/2 md:w-1/4'>
          右上
        </div>
        <div className='text-center border border-red-300 py-4 w-1/2 md:w-1/4'>
          左下
        </div>
        <div className='text-center border border-red-300 py-4 w-1/2 md:w-1/4'>
          右下
        </div>
      </div>
    </>
  );
};
export default FlexBoxLayouts;
