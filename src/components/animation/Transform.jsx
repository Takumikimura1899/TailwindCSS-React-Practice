import React from 'react';
import Image from '../../images/img2.jpg';
const Transform = () => {
  return (
    <>
      <div className='mb-32'>
        <p className='mb-32'>rotate</p>
        <img
          className='transition duration-1000 transform hover:rotate-45'
          src={Image}
          alt=''
        />
      </div>
      <hr />
      <div className='mb-32'>
        <p className='mb-32'>scale</p>
        <img
          className='transition duration-1000 transform hover:scale-150'
          src={Image}
          alt=''
        />
      </div>
      <hr />
      <div className='mb-32'>
        <p className='mb-32'>translate</p>
        <img
          className='transition duration-1000 transform hover:translate-x-40 w-60'
          src={Image}
          alt=''
        />
      </div>
      <hr />
      <div className='mb-32'>
        <p className='mb-32'>skew</p>
        <img
          className='transition duration-1000 transform hover:skew-x-12'
          src={Image}
          alt=''
        />
      </div>
      <hr />
      <div className='mb-32'>
        <p className='mb-32'>translate (ease-in)</p>
        <img
          className='transition duration-1000 transform ease-in hover:translate-x-40 w-60'
          src={Image}
          alt=''
        />
      </div>
      <hr />
      <div className='mb-32'>
        <p className='mb-32'>translate (ease-out)</p>
        <img
          className='transition duration-1000 transform ease-out hover:translate-x-40 w-60'
          src={Image}
          alt=''
        />
      </div>
    </>
  );
};

export default Transform;
