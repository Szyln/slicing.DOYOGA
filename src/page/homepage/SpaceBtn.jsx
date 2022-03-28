import React from 'react';
import { Link } from 'react-router-dom';
import LinkToPage from '../../component/LinkToPage';

const SpaceBtn = () => {
  return (
    <section className='py-12 py-lg-16'>
      <div className='container'>
        <div className='row'>
          <div className='col-md order-md-1 my-auto'>
            <h2 className='text-start mb-1'>舒適空間、靜心放鬆</h2>
            <p className='fs-5 mb-4 text-secondary'>
              我們都渴望平靜安穩的生活，擁有一處能夠靜心的角落，安撫每天繁雜忙碌的心。
            </p>
            <LinkToPage to='space' >環境介紹</LinkToPage>
          </div>
          <div className='col col-md-4'>
            <img
              src='../src/image/carl-barcelo-nqUHQkuVj3c-unsplash.jpg'
              alt='做瑜伽的女子'
              className='rounded-2 length-space-lg'
            />
          </div>
          <div className='col col-md-2 d-flex flex-column justify-content-between'>
            <img
              src='../src/image/white ceramic sink near white ceramic sink.jpg'
              alt='做瑜伽的女子'
              className='rounded-2 length-space-sm '
            />

            <img
              src='../src/image/woman in black sports bra and black leggings doing yoga.jpg'
              alt='做瑜伽的女子'
              className='rounded-2 d-none d-md-block length-space-sm'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpaceBtn;
