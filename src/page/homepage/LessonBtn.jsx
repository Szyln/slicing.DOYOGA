import React from 'react'
import { Link } from 'react-router-dom';

const LessonBtn = () => {
  return (
    <section className="bg-secondary-light">
    <div className="container">
      <div className="row">
        <div className="col-md">
          <h2>精心設計、課程多元</h2>
          <p>教師帶領多元課程，釋放壓力，與身心常見的緊繃不適溫柔和解。</p>
          <Link to="/course">課程介紹</Link>
        </div>
        <div className="col-md">
          <div className="row row-cols-2">
            <img
              src="../src/image/woman doing yoga beside wall.jpg"
              className="rounded-2"
              alt=""
            />
            <img
              src="../src/image/woman doing yoga beside wall.jpg"
              className="rounded-2"
              alt=""
            />
            <img
              src="../src/image/woman doing yoga beside wall.jpg"
              className="rounded-2"
              alt=""
            />
            <img
              src="../src/image/woman doing yoga beside wall.jpg"
              className="rounded-2"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default LessonBtn