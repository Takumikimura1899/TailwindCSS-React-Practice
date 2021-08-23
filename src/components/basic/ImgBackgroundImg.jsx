import React from 'react';
import Image from '../../images/img1.jpg';

const ImgBackgroundImg = () => {
  return (
    <>
      background-image
      <div
        className='mb-16 h-24 w-40'
        style={{ backgroundImage: `url(${Image})` }}
      />
      background-image bg-contain
      <div
        className='mb-16 h-96 w-96 bg-contain bg-center bg-no-repeat'
        style={{ backgroundImage: `url(${Image})` }}
      />
      imgタグ 幅指定
      <img className='mb-16 w-96' src={Image} alt='img' />
      imgタグ 幅と高さ指定
      <img className='mb-16 w-96 h-24' src={Image} alt='img' />
      imgタグ 幅と高さ object-cover指定
      <img className='mb-16 w-96 h-24 object-cover' src={Image} alt='img' />
      <img src={Image} alt='img' />
    </>
  );
};

export default ImgBackgroundImg;
