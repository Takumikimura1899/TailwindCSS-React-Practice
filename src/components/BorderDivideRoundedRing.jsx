import React from 'react';

const BorderDivideRoundedRing = () => {
  return (
    <>
      <div className='border-2 border-red-400'>線の太さ</div>

      <div className='mt-16 flex justify-around divide-x divide-green-400'>
        {/* flex-growでボックスが広がってtext-centerでtextが中央に寄っている */}
        <div className='flex-grow text-center'>区切り線X方向</div>
        <div className='flex-grow text-center'>区切り線X方向</div>
        <div className='flex-grow text-center'>区切り線X方向</div>
      </div>

      <div className='mt-16 flex flex-col divide-y divide-yellow-400'>
        {/* flex-growでボックスが広がってtext-centerでtextが中央に寄っている */}
        <div className='flex-grow text-center py-4'>区切り線Y方向</div>
        <div className='flex-grow text-center py-4'>区切り線Y方向</div>
        <div className='flex-grow text-center py-4'>区切り線Y方向</div>
      </div>

      <div className='mt-16 rounded-full w-24 py-2 bg-indigo-500 text-white text-center'>
        rounded
      </div>
      <div className='mt-16 rounded-full w-24 py-9 bg-indigo-500 text-white text-center'>
        rounded
      </div>

      <div className='mt-16 rounded-full w-24 py-9 bg-indigo-500 text-white text-center ring-4 ring-indigo-600 ring-offset-4 ring-offset-blue-300'>
        rounded
      </div>
    </>
  );
};

export default BorderDivideRoundedRing;
