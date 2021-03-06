import React from 'react';
import { Link } from 'react-router-dom';
import doyogaLogoImg from '../img/DOYOGA-logo.png';

const Nav = () => {
  return (
    <>
      {/* navabr: navbar-light(亮字) + bg-<theme-color（自訂要設定API）> */}
      {/* navbar-expand-<breakpoint> 設定什麼時候要將細項收起來 */}
      <nav className='navbar navbar-light bg-secondary-light navbar-expand-lg'>
        {/* 內容不貼邊 */}
        <div className='container'>
          {/* LOGO */}
          <Link className='navbar-brand ' to='slicing.DOYOGA/'>
            <img
              src={doyogaLogoImg}
              alt='DOYOGA logo'
              className='logo-length my-2'
            />
          </Link>
          {/* 收起來的按鈕 */}
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            {/* toggle 的範圍要包在這裡面 */}
            {/* navbar-nav：細項 */}
            <ul className='navbar-nav ms-auto text-center mb-2 mb-lg-0'>
              <li className='nav-item'>
                <Link className='nav-link' to='/slicing.DOYOGA/course'>
                  課程介紹
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='slicing.DOYOGA/space'>
                  瑜伽空間
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/slicing.DOYOGA/schedule'>
                  當月課表
                </Link>
              </li>
            </ul>
            {/* 放入 form 元素 */}
            <form className='ms-lg-auto me-lg-0 text-center mb-2 mb-lg-0'>
              <Link to='/slicing.DOYOGA/reservation/selection'>
                <button
                  className='btn btn-outline-primary border-width-sm rounded-2 me-4'
                  type='button'
                >
                  立即預約
                </button>
              </Link>
              <Link to='/slicing.DOYOGA/contact'>
                <button
                  className='btn btn-outline-primary border-width-sm rounded-2'
                  type='button'
                >
                  聯絡我們
                </button>
              </Link>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
