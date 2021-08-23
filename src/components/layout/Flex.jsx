import React from 'react';
import Image from '../../images/img1.jpg';

const Flex = () => {
  return (
    <>
      {/* メニュー(PC) */}
      <header className='md:flex justify-between'>
        <h1 className='pl-4'>ロゴ</h1>
        <nav>
          <ul className='md:flex justify-end md:space-x-16 pr-8'>
            <li>Home</li>
            <li>Information</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
      {/* 横並び */}
      <section class='mt-16'>
        <h2 className='text-center mb-8'>横並びのサンプル</h2>
        <div className='flex justify-center space-x-16'>
          <div className='w-1/4 border text-center'>
            <h3 className='p-2'>タイトル</h3>
            <p className='p-4'>
              ここに文章が入ります。ここに文章が入ります。ここに文章が入ります。
            </p>
          </div>
          <div className='w-1/4 border text-center'>
            <h3 className='p-2'>タイトル</h3>
            <p className='p-4'>
              ここに文章が入ります。ここに文章が入ります。ここに文章が入ります。
            </p>
          </div>
          <div className='w-1/4 border text-center'>
            <h3 className='p-2'>タイトル</h3>
            <p className='p-4'>
              ここに文章が入ります。ここに文章が入ります。ここに文章が入ります。
            </p>
          </div>
        </div>
      </section>

      {/* 画像と文字を左右入れ替えて表示 */}
      <section className='mt-16'>
        <h2 className='text-center mb-8'>入れ替えテスト</h2>
        <div className='flex items-center'>
          <div className='p-16 w-1/2'>
            ここに文章が入ります。ここに文章が入ります。 ここに文章が入ります。
          </div>
          <img width='50%' src={Image} alt='img' />
        </div>
        <div className='flex flex-row-reverse items-center'>
          <div className='p-16 w-1/2'>
            ここに文章が入ります。ここに文章が入ります。 ここに文章が入ります。
          </div>
          <img width='50%' src={Image} alt='img' />
        </div>
        <div className='flex items-center'>
          <div className='p-16 w-1/2'>
            ここに文章が入ります。ここに文章が入ります。 ここに文章が入ります。
          </div>
          <img width='50%' src={Image} alt='img' />
        </div>
      </section>
    </>
  );
};

export default Flex;
