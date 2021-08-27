import React from 'react';
import Form from './Form';
import ItemIndex from './ItemIndex';
import Navbar from './Navber';
import Table from './Table';
import Template from './Template';

const Pages = () => {
  return (
    <>
      <div className='min-h-screen bg-gray-100'>
        <Navbar />

        <Template>
          <span className='ml-4'>内容</span>
        </Template>
        <Table />
        <Form />
        <ItemIndex />
      </div>
    </>
  );
};

export default Pages;
