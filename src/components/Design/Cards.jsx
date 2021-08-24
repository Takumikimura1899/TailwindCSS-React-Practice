import React from 'react';
import Image from '../../images/img2.jpg';
const Cards = () => {
  return (
    <>
      <div className='md:flex justify-center mb-16'>
        <div className=' py-4'>
          <div className='w-11/12 md:max-w-md mx-auto my-4 shadow-xl rounded-lg overflow-hidden '>
            <img className='h-48 w-full object-cover' src={Image} alt='img' />
            <div className='p-4'>
              <div className='text-sm text-gray-500'>ピザの定番</div>
              <div className='text-2xl text-bold text-gray-700 mb-2'>
                マルゲリータ
              </div>
              <ul className='text-sm text-gray-500'>
                <li className='inline-block mr-1'>・フレッシュモッツアレラ</li>
                <li className='inline-block mr-1'>・グラナパダーノ</li>
                <li className='inline-block mr-1'>・バジル</li>
                <li className='inline-block mr-1'>・トマトソース</li>
              </ul>
              <div className='my-4 text-center text-gray-700'>
                M<span className='ml-2 text-xl text-semibold'>980円</span>
              </div>
            </div>
          </div>
        </div>
        <div className=' py-4'>
          <div className='w-11/12 md:max-w-md mx-auto my-4 shadow-xl rounded-lg overflow-hidden '>
            <img className='h-48 w-full object-cover' src={Image} alt='img' />
            <div className='p-4'>
              <div className='text-sm text-gray-500'>ピザの定番</div>
              <div className='text-2xl text-bold text-gray-700 mb-2'>
                マルゲリータ
              </div>
              <ul className='text-sm text-gray-500'>
                <li className='inline-block mr-1'>・フレッシュモッツアレラ</li>
                <li className='inline-block mr-1'>・グラナパダーノ</li>
                <li className='inline-block mr-1'>・バジル</li>
                <li className='inline-block mr-1'>・トマトソース</li>
              </ul>
              <div className='my-4 text-center text-gray-700'>
                M<span className='ml-2 text-xl text-semibold'>980円</span>
              </div>
            </div>
          </div>
        </div>
        <div className=' py-4'>
          <div className='w-11/12 md:max-w-md mx-auto my-4 shadow-xl rounded-lg overflow-hidden '>
            <img className='h-48 w-full object-cover' src={Image} alt='img' />
            <div className='p-4'>
              <div className='text-sm text-gray-500'>ピザの定番</div>
              <div className='text-2xl text-bold text-gray-700 mb-2'>
                マルゲリータ
              </div>
              <ul className='text-sm text-gray-500'>
                <li className='inline-block mr-1'>・フレッシュモッツアレラ</li>
                <li className='inline-block mr-1'>・グラナパダーノ</li>
                <li className='inline-block mr-1'>・バジル</li>
                <li className='inline-block mr-1'>・トマトソース</li>
              </ul>
              <div className='my-4 text-center text-gray-700'>
                M<span className='ml-2 text-xl text-semibold'>980円</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='w-11/12 md:max-w-md mx-auto my-4 shadow-xl rounded-lg overflow-hidden '>
        <img className='h-48 w-full object-cover' src={Image} alt='img' />
        <div className='p-4'>
          <div className='text-sm text-gray-500'>ピザの定番</div>
          <div className='text-2xl text-bold text-gray-700 mb-2'>
            マルゲリータ
          </div>
          <ul className='text-sm text-gray-500'>
            <li className='inline-block mr-1'>・フレッシュモッツアレラ</li>
            <li className='inline-block mr-1'>・グラナパダーノ</li>
            <li className='inline-block mr-1'>・バジル</li>
            <li className='inline-block mr-1'>・トマトソース</li>
          </ul>
          <div className='my-4 text-center text-gray-700'>
            M<span className='ml-2 text-xl text-semibold'>980円</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
