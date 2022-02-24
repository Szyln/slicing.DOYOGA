import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      {/* navabr: navbar-light(亮字) + bg-<theme-color（自訂要設定API）> */}
      {/* navbar-expand-<breakpoint> 設定什麼時候要將細項收起來 */}
      <nav className="navbar navbar-light bg-secondary-light navbar-expand-xl">
        {/* 內容不貼邊 */}
        <div className="container">
          {/* LOGO */}
          <a className="navbar-brand" href="/">
            DOYOGA
          </a>
          {/* 收起來的按鈕 */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {/* toggle 的範圍要包在這裡面 */}
            {/* navbar-nav：細項 */}
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/course">
                  課程介紹
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/space">
                  瑜伽空間
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/schedule">
                  當月課表
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/example">
                  元件
                </Link>
              </li>
            </ul>
            {/* 放入 form 元素 */}
            <form className="ms-auto">
              <button
                className="btn btn-outline-primary border-width-sm rounded-2"
                type="button"
              >
                立即預約
              </button>
              <button
                className="btn btn-outline-primary border-width-sm rounded-2"
                type="button"
              >
                聯絡我們
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
