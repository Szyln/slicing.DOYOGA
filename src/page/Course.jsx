import React from "react";

const Course = ({ lessons }) => {
  return (
    <>
      <div className="container"></div>
      <div className="bg-secondary">
        <div className="container">
          <form action="post" className="row flex-nowrap">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="請輸入要搜尋的課程"
                aria-label="search lesson"
                aria-describedby="searchLessonBtn"
              />
              <input
                className="btn btn-primary"
                type="submit"
                id="searchLessonBtn"
                value="搜尋"
              />
            </div>
            <select className="form-select" aria-label="lesson type sorting">
              <option selected>全部課程</option>
              <option value="1">初級</option>
              <option value="2">中級</option>
              <option value="3">高級</option>
            </select>
          </form>
        </div>
      </div>
    </>
  );
};

export default Course;
