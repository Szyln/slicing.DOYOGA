import React from "react";
import SearchLessonInput from "./course/SearchLessonInput";
import { Link } from "react-router-dom";

import { v4 as uuidv4 } from "uuid";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import LessonModal from "../component/LessonModal";

const Course = ({ lessons, teachers }) => {
  let monthFeatureLesson = lessons.find((lesson) => {
    return lesson.monthFeature == true;
  });

  return (
    <>
      {/* 本月課程區 */}
      <div className="container">
        <h2>課程介紹</h2>
        <div className="row">
          <div className="col-md offset-lg-1">
            <div className="ratio ratio-3x2 ">
              <img
                src={monthFeatureLesson.img}
                className="rounded"
                alt={monthFeatureLesson.name}
              />
            </div>
          </div>
          <div className="col-md col-lg-4">
            <h3>本月限定課程：{monthFeatureLesson.name}</h3>
            <div className="d-flex">
              <h4>授課教師：{monthFeatureLesson.teacher}</h4>
              <span className="badge badge-pill bg-secondary">
                {monthFeatureLesson.time} min
              </span>
            </div>

            <p>{monthFeatureLesson.info}</p>
            <Link to="/reservation">
              <button type="button" className="btn btn-secondary">
                立即預約
              </button>
            </Link>
          </div>
        </div>
      </div>
      {/* 搜尋區 */}
      <div className="bg-secondary">
        <div className="container">
          <SearchLessonInput />
        </div>
      </div>
      {/* 搜尋結果區 */}
      <div className="container">
        <div className="row position-lg-relative">
          {/* 單張課程卡片長相 */}
          {lessons.map((lesson, index) => (
            <>
              <div
                className={`col-md-6 ${
                  index % 4 === 0 || index % 4 == 3 ? `col-lg-5` : `col-lg-4`
                }`}
              >
                <div
                  key={uuidv4()}
                  className="card text-white height-card border-0"
                >
                  <span className="badge badge-pill bg-secondary position-absolute top-0 start-px-70 translate-middle">
                    {lesson.time} min
                  </span>
                  <img
                    src={lesson.img}
                    className="card-img h-100"
                    alt={lesson.name}
                  />
                  <div className="card-img-overlay d-flex flex-column justify-content-end">
                    <h3 className="card-title">
                      <a
                        className="btn btn-link stretched-link text-white text-decoration-none"
                        data-bs-toggle="modal"
                        data-bs-target="#lessonModal"
                      >
                        {lesson.name}
                      </a>
                    </h3>
                    <h4 className="card-text">授課老師：{lesson.teacher}</h4>
                  </div>
                </div>
              </div>
              {/* LessonModal */}
              <div
                class="modal fade"
                id="lessonModal"
                tabindex="-1"
                aria-labelledby="lessonModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog modal-dialog-centered">
                  <div class="modal-content bg-secondary text-white">
                    <div class="modal-body">
                      <div className="row">
                        <div className="col-6 offset-3 offset-md-0 col-md-5 ">
                          <div className="ratio ratio-1x1">
                            <img
                              src={lesson.img}
                              className="img-fluid rounded length-lessonCard-img"
                              alt={lesson.name}
                            />
                          </div>
                        </div>
                        <div className="col-md-7">
                          <h2
                            class="modal-title text-white"
                            id="lessonModalLabel"
                          >
                            {lesson.name}
                          </h2>
                          <div className="d-flex">
                            <h3 className="card-subtitle">
                              授課老師：{lesson.teacher}
                            </h3>
                            <span className="badge badge-pill bg-primary">
                              {lesson.time} min
                            </span>
                          </div>
                          <p>{lesson.info}</p>
                          <Link to="/reservation">
                            <button
                              type="button"
                              className="btn btn-secondary-light"
                            >
                              立即預約
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </>
          ))}

          {/* 上課須知 */}
          <div className="offset-md-3 offset-lg-0 col-md-6 col-lg-3 position-lg-absolute end-0">
            <h4 className="text-primary">DOYOGA 上課須知：</h4>
            <ul className="list-unstyled text-primary">
              <li>請攜帶適當的瑜珈墊和一條長毛巾配合課程使用。</li>
              <li>
                運動中請穿著有彈性、吸汗、透氣為原則的衣物，盡量穿著較貼身的運動衣，以便教練指導與自我矯正。
              </li>
              <li>
                運動中切記補充適當的水分、保持腹式呼吸，以鼻吸氣，以口呼氣為原則。
              </li>
              <li>
                運動中請保持微收小腹的原則，肩膀放鬆、頭頂向上延伸，請跟隨教練指示，配合呼吸一步步的確實練習。
              </li>
              <li>
                運動過程中若感到任何不適，請馬上停止且與老師商量討論。若懷孕或特殊疾病請先告知。
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* 師資介紹 */}
      <section>
        <h2>師資介紹</h2>
        <div className="container">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            height
            loop={true}
            setWrapperSize={true}
            breakpoints={{
              375: {
                slidesPerView: 1,
                spaceBetween: 15,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1280: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
          >
            {teachers.map((teacher, index) => (
              <SwiperSlide key={uuidv4()} className="pt-5 h-100">
                <div
                  className={`card height-long-card text-white position-relative bg-${
                    index % 2 === 0 ? "primary" : "secondary"
                  }`}
                >
                  <img
                    src={teacher.img}
                    alt={teacher.name}
                    className="border-4 border-primary rounded position-absolute top-0 start-50 translate-middle length-avatar"
                  />

                  <div className="card-body">
                    <h3 className="card-title text-center">{teacher.name}</h3>
                    <h4 className="card-subtitle text-center">
                      教學經歷 {teacher.teachingYears} 年
                    </h4>
                    <p className="card-text">{teacher.info}</p>
                    <ul>
                      {teacher.exp.map((exp) => (
                        <li key={uuidv4()}>{exp}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Course;
