import React from 'react';

const Transitions = () => {
  return (
    <>
      <div className='mb-16'>
        durationあり
        <button className='bg-blue-500 hover:bg-blue-300 transition duration-1000 text-white font-semibold py-2 px-8 rounded-md '>
          1番
        </button>
        durationなし
        <button className='bg-blue-500 hover:bg-blue-300 text-white font-semibold py-2 px-8 rounded-md '>
          1番
        </button>
      </div>
      <div className='mb-16'>
        ease-in(ゆっくり開始)
        <button className='bg-blue-500 hover:bg-blue-300 transition duration-1000 ease-in text-white font-semibold py-2 px-8 rounded-md '>
          1番
        </button>
        ease-out(ゆっくり終了)
        <button className='bg-blue-500 hover:bg-blue-300 transition duration-1000 ease-out text-white font-semibold py-2 px-8 rounded-md '>
          1番
        </button>
      </div>
      <div className='mb-16'>
        delayあり
        <button className='bg-blue-500 hover:bg-blue-300 transition delay-1000 text-white font-semibold py-2 px-8 rounded-md '>
          1番
        </button>
        delayなし
        <button className='bg-blue-500 hover:bg-blue-300 text-white font-semibold py-2 px-8 rounded-md '>
          1番
        </button>
      </div>
    </>
  );
};

export default Transitions;
