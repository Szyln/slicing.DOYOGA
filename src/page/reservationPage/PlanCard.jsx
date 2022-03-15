import React, { useState } from 'react';

const PlanCard = ({ info, setTerm }) => {
  const handleTermClick = (e) => {
    setTerm(e.target.id);
  };
  return (
    <div className='card'>
      <div className='row g-0'>
        {/* 圖 */}
        <div className='col-4 col-md col-lg-12 ratio ratio-4x3'>
          <img
            src={info.img}
            className='card-img-top fit-cover rounded-only-md-lg-start'
            alt={info.name}
          />
        </div>
        {/* 文字 */}
        <div className='col-md col-lg-12'>
          <div className='card-body'>
            <h3 className='card-title'>{info.name}</h3>
            <span className='card-text'>NT ${info.price} / 次</span>
            <p className='card-text'>{info.info}</p>
            <a
              className='btn btn-secondary w-100'
              id={`${info.engName}LessonBtn`}
              data-bs-toggle='collapse'
              // href={`#${info.engName}Lesson`}
              href='.multi-collapse'
              role='button'
              aria-expanded='false'
              aria-controls={`${info.engName}Lesson nextReservationPageBtn`}
              onClick={handleTermClick}
            >
              選擇課程
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanCard;
