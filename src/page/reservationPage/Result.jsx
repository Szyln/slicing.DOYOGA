import React from 'react';
import { Link } from 'react-router-dom';

const Result = () => {
  return (
    <>
      <div className='row text-center'>
        <div className='mx-auto col-md-8 col-lg-6'>
          <span class='material-icons'>check_circle_outline</span>
          <h3>已完成預約，以下是您的預約資訊:</h3>
          <div class='accordion' id='reservationResultInfo'>
            <div class='accordion-item'>
              <h2 class='accordion-header' id='reservationResultInfoHeading'>
                <button
                  class='accordion-button bg-primary text-white'
                  type='button'
                  data-bs-toggle='collapse'
                  data-bs-target='#collapseOne'
                  aria-expanded='true'
                  aria-controls='collapseOne'
                >
                  預約資訊
                </button>
              </h2>
              <div
                id='collapseOne'
                class='accordion-collapse collapse show'
                aria-labelledby='reservationResultInfoHeading'
                data-bs-parent='#reservationResultInfo'
              >
                <div class='accordion-body'>
                  <ul className='text-start'>
                    <li>
                      <h3 className='text-center'>
                        您預約的是 <span>首次體驗課程-基礎</span>
                      </h3>
                    </li>
                    <li>上課預約報到日：2021/07/21</li>
                    <li>預約人：Joanne Chen</li>
                    <li>年齡：18 歲</li>
                    <li>性別：女</li>
                    <li>電子信箱：example123@gmail.com</li>
                    <li>手機號碼：0912-345-678</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className='section'>
            <h3>上課注意事項</h3>
            <p>
              第一次上課請提前 10-15 分鐘至櫃檯報到，請攜帶毛巾、水
              .穿著運動服、乾淨室內運動鞋。如欲更改體驗時間請提前通知我們喔！
            </p>
          </div>
          <Link to='/' className='btn btn-secondary w-100'>
            返回首頁
          </Link>
        </div>
      </div>
    </>
  );
};

export default Result;
