import React from 'react';
import Header from './Header';
import Book from './Book';
import InputBook from './InputBook';

const Books = () => {
  return (
    <>
    <Header />
    <Book title="Things fall Apart" author="Chinua Achebe" />
    <InputBook />
  </>
  )
};

export default Books;