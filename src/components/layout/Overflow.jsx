import React from 'react';
import Image from '../../images/img1.jpg';

const Overflow = () => {
  return (
    <>
      <div className='w-20 h-20 overflow-hidden'>
        文字がはみ出した時に表示させない。文字がはみ出した時に表示させない。
        文字がはみ出した時に表示させない。 文字がはみ出した時に表示させない。
        文字がはみ出した時に表示させない。 文字がはみ出した時に表示させない。
        文字がはみ出した時に表示させない。
      </div>

      <div className='mt-16 w-40 rounded-full overflow-hidden'>
        <img src={Image} alt='img' />
      </div>
    </>
  );
};

export default Overflow;
