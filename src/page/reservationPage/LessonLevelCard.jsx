import React from "react";

const LessonLevelCard = () => {
  return (
    <div className="card bg-secondary border-white border-4 text-white">
      <div className="d-flex justify-content-between align-items-center">
        <h3>基礎 Basic</h3>
        <span className="material-icons">check_circle_outline</span>
      </div>
      <div className="d-flex">
        <h4>基礎課程</h4>
        <span className="badge bg-primary badge-pill">60 min</span>
      </div>
      <ul>
        <li>入體位法動作解說</li>
        <li>瑜珈基礎動作、順位</li>
        <li>適合任何階段練習者</li>
      </ul>
    </div>
  );
};

export default LessonLevelCard;
