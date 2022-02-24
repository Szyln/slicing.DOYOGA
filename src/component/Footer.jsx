import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
    <div className="container">
      {/* 訂閱區塊 */}
      <div className="d-md-flex justify-content-md-between border-bottom">
        <h3>現在訂閱，獲得課程優惠碼！</h3>
        <form action="POST">
          <div className="input-group">
            <input type="email" className="form-control" placeholder="輸入您的電子信箱" aria-label="type your mail" aria-describedby="button-subscribe" />
            <button className="btn btn-secondary" type="button" id="button-subscribe">訂閱</button>
          </div>
        </form>
      </div>
      {/* 各種導覽連結區塊 */}
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap"> 
        <div>
          <a className="link-light" href="/">DOYOGA</a>
          <ul className="list-unstyled">
            <li><Link className="link-light" to="/course">課程介紹</Link></li>
            <li><Link className="link-light" to="/space">瑜伽空間</Link></li>
            <li><Link className="link-light" to="/schedule">當月課表</Link></li>
          </ul>
        </div>

        <ul className="list-unstyled d-flex order-md-1"> 
          <li><a className="link-light" href="/">loddddgo</a></li>
          <li><a className="link-light" href="/">logo</a></li>
          <li><a className="link-light" href="/">logo</a></li>
        </ul>
        <small className="mt-auto basis-100 basis-md-auto">© 2021. All Rights Reserved.</small>
      </div>
    </div>
  </footer>
  )
}

export default Footer