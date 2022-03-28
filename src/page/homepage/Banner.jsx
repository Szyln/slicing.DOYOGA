import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="bg-homepage-banner d-flex flex-column justify-content-center">
      <div className="container">
        <div className="row">
          <div className="col-md-7 col-lg-5 offset-lg-1">
            <span className="fs-4 text-primary-dark mb-2">健身輕時尚</span>
            <h1 className="text-primary-dark mb-1">DOYOGA，做你的瑜伽</h1>
            <p className="fs-6 text-primary-dark mb-4">多給自己一點時間享受靜謐，傾聽內心的聲音。</p>
            <Link to="/reservation/selection" className="pe-2">
              <button
                type="button"
                className="btn btn-secondary-light text-primary-dark "
              >
                立即預約
              </button>
            </Link>
            <Link to="/course">
              <button type="button" className="btn btn-secondary">
                課程介紹
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
