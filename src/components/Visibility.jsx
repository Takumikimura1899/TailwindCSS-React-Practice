import React from 'react';

const Visibility = () => {
  return (
    <>
      {/* opacity,visible,hiddenの比較 */}
      opacity-0
      <div className='mb-16 flex justify-around'>
        <div className='flex-grow border-2 border-blue-300'>A</div>
        <div className='flex-grow opacity-0 border-2 border-blue-300'>
          <button>ButtonB</button>
        </div>
        <div className='flex-grow border-2 border-blue-300'>C</div>
      </div>
      invisible
      <div className='mb-16 flex justify-around'>
        <div className='flex-grow border-2 border-blue-300'>A</div>
        <div className='flex-grow invisible border-2 border-blue-300'>
          <button>ButtonB</button>
        </div>
        <div className='flex-grow border-2 border-blue-300'>C</div>
      </div>
      hidden
      <div className='mb-16 flex justify-around'>
        <div className='flex-grow border-2 border-blue-300'>A</div>
        <div className='flex-grow hidden border-2 border-blue-300'>
          <button>ButtonB</button>
        </div>
        <div className='flex-grow border-2 border-blue-300'>C</div>
      </div>
    </>
  );
};

export default Visibility;
