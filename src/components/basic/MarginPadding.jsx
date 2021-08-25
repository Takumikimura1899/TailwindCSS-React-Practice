import React from 'react';

const MarginPadding = () => {
  return (
    <>
      {/* インライン要素 */}
      {/* m-4 1rem 1文字分 */}
      <span className='border border-red-500 m-8'>spanタグです</span>
      <span className='border border-red-500 p-12'>インライン要素です</span>

      {/* ブロック要素 */}
      <p className='border border-blue-500 mt-16'>
        pはパラグラフの略で文章のひとまとまりの事です。
      </p>
      <p className='border border-blue-500 m-8 p-8'>
        pはパラグラフの略で文章のひとまとまりの事です。
      </p>
      {/* mxは横方向で左右それぞれ空白を空ける */}
      <p className='border border-blue-500 mx-16'>
        pはパラグラフの略で文章のひとまとまりの事です。
      </p>

      {/* ブロック要素の中にインライン要素 */}
      <p className='border border-green-500 mt-16 p-8'>
        pはパラグラフの略です。
        <span className='border border-green-500 m-8'>spanタグです。</span>
        <span className='border border-green-500 p-12'>spanタグです。</span>
      </p>

      {/* ブロック要素の中にブロック要素 */}
      {/* ブロック要素を横に並べる Flexbox,Grid */}
      <div className='border border-pink-500 mt-20 flex justify-around'>
        親ブロック
        <div className='border border-pink-500'>子ブロック1</div>
        <div className='border border-pink-500 m-12'>子ブロック2</div>
      </div>
    </>
  );
};
export default MarginPadding;
