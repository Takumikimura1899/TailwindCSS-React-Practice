import React from 'react';

const FontText = () => {
  return (
    <>
      {/* p,h1~6,span */}
      <p className='px16'>フォントサイズ16px</p>
      <p className='text-base'>テキストサイズ base</p>
      <p className='text-2xl'>テキストサイズ 2xl</p>

      {/* 文字間の幅(横) */}
      <p className='mt-16 tracking-wider'>
        文字の間の幅が開きます。(横方向)
        <br />
        文字の間の幅が開きます。(横方向)
        <br />
        文字の間の幅が開きます。(横方向)
        <br />
      </p>
      {/* 文字間の幅(縦) */}
      <p className='mt-16 leading-10'>
        文字の間の幅が開きます。(縦方向)
        <br />
        文字の間の幅が開きます。(縦方向)
        <br />
        文字の間の幅が開きます。(縦方向)
        <br />
      </p>
      <div className='text-center'>ブロック要素内のテキストを中央に</div>
    </>
  );
};

export default FontText;
