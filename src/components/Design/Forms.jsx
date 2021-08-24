import React from 'react';

const Forms = () => {
  return (
    <>
      <div className='md:flex justify-center mb-16'>
        <div className='text-center py-4 md:w-1/2'>
          フォームに必要事項を入力してください。
        </div>
        <div className=' py-4 md:w-1/2'>
          <div className='w-10/12 mx-auto md:max-w-md'>
            htmlForあり
            <form action=''>
              <div className='mb-8'>
                {/* Forでクリックするとそのidにフォーカスがあたる */}
                <label htmlFor='your_name' className='text-sm block'>
                  お名前
                </label>
                <input
                  id='your_name'
                  type='text'
                  className='placeholder-gray-500 placeholder-opacity-50 border-b w-full py-2 focus:outline-none focus:border-b-2 focus:border-blue-500'
                  placeholder='○○ △△'
                />
              </div>
              <div className='mb-8'>
                <label htmlFor='email' className='text-sm block'>
                  メールアドレス
                </label>
                <input
                  id='email'
                  type='email'
                  className='border-b w-full py-2 focus:outline-none focus:border-b-2 focus:border-blue-500'
                  placeholder='test@example.com'
                />
              </div>
              <button
                type='button'
                className='bg-blue-500 text-white font-semibold py-2 px-8 rounded-md focus:outline-none'
              >
                登録する
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className='w-10/12 mx-auto md:max-w-md'>
        htmlForなし
        <form action=''>
          <div className='mb-8'>
            {/* Forでクリックするとそのidにフォーカスがあたる */}
            <label
              //  htmlFor='your_name'
              className='text-sm block'
            >
              お名前
            </label>
            <input
              id='your_name'
              type='text'
              className='border-b w-full py-2 focus:outline-none focus:border-b-2 focus:border-blue-500'
              placeholder='○○ △△'
            />
          </div>
          <div className='mb-8'>
            <label
              //  htmlFor='email'
              className='text-sm block'
            >
              メールアドレス
            </label>
            <input
              id='email'
              type='email'
              className='border-b w-full py-2 focus:outline-none focus:border-b-2 focus:border-blue-500'
              placeholder='test@example.com'
            />
          </div>
          <button className='bg-blue-500 text-white font-semibold py-2 px-8 rounded-md focus:outline-none'>
            登録する
          </button>
        </form>
      </div>
    </>
  );
};

export default Forms;
