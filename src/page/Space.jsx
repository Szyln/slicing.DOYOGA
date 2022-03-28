import React from "react";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import LinkToPage from '../component/LinkToPage';

import "swiper/css";

const Space = ({ lessons }) => {
  return (
    <>
      <div className="container">
        <div className="row">
          {/* 空間有哪些 */}
          <div className="col-md-8">
            <ul className="row">
              {/* A、B 團體課教室 */}
              <li className="col-md-12">
                <div className="card bg-dark text-white ratio ratio-1x1 ratio-md-2x1">
                  <img
                    src="../../src/image/blue swimming pool near green potted plant.jpg"
                    className="card-img"
                    alt="blue swimming pool near green potted plant"
                  />
                  <div className="card-img-overlay">
                    <h3 className="card-title">A、B 團體課教室</h3>
                    <p className="card-text">
                      教授課程：A-基礎、艾揚格、哈達、寰宇；B-雙人飛行、阿斯坦加、陰陽、香氛
                    </p>
                  </div>
                </div>
              </li>
              {/* C、D 個人訓練室 */}
              <li className="col-md-6">
                <div className="card bg-dark text-white ratio ratio-1x1">
                  <img
                    src="../../src/image/carl-barcelo-nqUHQkuVj3c-unsplash.jpg"
                    className="card-img"
                    alt="yoga pose"
                  />
                  <div className="card-img-overlay">
                    <h3 className="card-title">C、D 個人訓練室</h3>
                    <p className="card-text">
                      開放時間：每週一至週五 09:00~17:00
                    </p>
                  </div>
                </div>
              </li>
              {/* 淋浴間 */}
              <li className="col-md-6">
                <div className="card bg-dark text-white ratio ratio-1x1">
                  <img
                    src="../../src/image/white ceramic sink near white ceramic sink.jpg"
                    className="card-img"
                    alt="white ceramic sink near white ceramic sink"
                  />
                  <div className="card-img-overlay">
                    <h3 className="card-title">淋浴間</h3>
                    <p className="card-text">
                      開放時間：每週一至週日 09:00~21:30
                    </p>
                  </div>
                </div>
              </li>
              {/* 器材出租 */}
              <li className="col-md-6">
                <div className="card bg-dark text-white ratio ratio-1x1">
                  <img
                    src="../../src/image/woman in black sports bra and blue denim jeans doing yoga.jpg"
                    className="card-img"
                    alt="woman in black sports bra and blue denim jeans doing yoga"
                  />
                  <div className="card-img-overlay">
                    <h3 className="card-title">器材出租</h3>
                    <p className="card-text">有租借需求請至櫃檯登記</p>
                  </div>
                </div>
              </li>
              {/* 交誼廳 */}
              <li className="col-md-6">
                <div className="card bg-dark text-white ratio ratio-1x1">
                  <img
                    src="../../src/image/sittin people beside table inside room.jpg"
                    className="card-img"
                    alt="sittin people beside table inside room"
                  />
                  <div className="card-img-overlay">
                    <h3 className="card-title">交誼廳</h3>
                    <p className="card-text">
                      開放時間：每週一至週五 09:00~21:30
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          {/* 空間說明 */}
          <div className="col-md-4">
            <div className="card bg-secondary-light">
              <h4>DOYOGA 提供：</h4>
              <ul>
                <li>四間教室：A、B 團體課教室、C、D 個人訓練室。</li>
                <li>瑜珈墊、輔具：每次課後會進行殺菌清潔，乾淨免擔心。</li>
                <li>男女置物櫃、淋浴間：分別設置在館內 A、B 區。</li>
                <li>舒適交誼廳，咖啡茶水無限供應，假日提供午間蔬食餐點。</li>
              </ul>
              <LinkToPage to='reservation/selection' >立即預約</LinkToPage>
              <Link to="/reservation/selection">
                立即預約<span className="material-icons">arrow_right_alt</span>
                
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-secondary-light ">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          loop={true}
          breakpoints={{
            375: {
              slidesPerView: 1,
              spaceBetween: 15,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1280: {
              slidesPerView: 5,
              spaceBetween: 30,
            },
          }}
        >
          {lessons.map((lesson) => (
            <SwiperSlide key={uuidv4()}>
              <ul>
                <li className="ratio ratio-5x4">
                  <img src={lesson.img} alt={lesson.name} className="rounded" />
                </li>
                <li>
                  <h3>{lesson.name}</h3>
                </li>
                <li>授課老師：{lesson.teacher}</li>
              </ul>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Space;
