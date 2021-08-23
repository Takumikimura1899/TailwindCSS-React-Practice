import React from 'react';

const GridFooter = () => {
  return (
    <>
      <footer className='bg-gray-200'>
        <div className='p-8 grid grid-cols-4 gap-8'>
          <div>
            <p className='mb-8'>ロゴ</p>
            <address>〒999-9999 ○○県△△市</address>
          </div>
          <div>
            <div className='mb-8'>最新のニュース</div>
            <ul>
              <li>ニュース１</li>
              <li>ニュース２</li>
              <li>ニュース３</li>
            </ul>
          </div>
          <div>
            <div className='mb-8'>カテゴリ</div>
            <ul>
              <li>カテゴリ１</li>
              <li>カテゴリ２</li>
              <li>カテゴリ３</li>
            </ul>
          </div>
          <div>
            <div className='mb-8'>人気のニュース</div>
            <ul>
              <li>人気のニュース１</li>
              <li>人気のニュース２</li>
              <li>人気のニュース３</li>
            </ul>
          </div>
          <div></div>
          <div></div>
          <div className='col-span-4 justify-self-center'>
            Copyright all rights reserved
          </div>
        </div>
      </footer>
    </>
  );
};

export default GridFooter;
