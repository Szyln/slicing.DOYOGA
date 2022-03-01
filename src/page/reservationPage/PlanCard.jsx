import React from "react";

const PlanCard = () => {
  return (
    
    <div className="card">
      <div className="row g-0">
        {/* 圖 */}
        <div className="col-4 col-md col-xl-12 ratio ratio-4x3">
          <img
            src="../src/image/woman in white tank top and white leggings bending her body.jpg"
            className="card-img-top fit-cover rounded-only-md-lg-start"
            alt="woman in white tank top and white leggings bending her body"
          />
        </div>
        {/* 文字 */}
        <div className="col-md col-xl-12">
          <div className="card-body">
            <h3 className="card-title">首次體驗</h3>
            <span className="card-text">NT $450 / 次</span>
            <p className="card-text">
              分基礎、中級、高級可以選擇。初次至 DOYOGA 上課建議選擇此方案。
            </p>
            <a className="btn btn-secondary w-100" data-bs-toggle="collapse" href="#trialLesson" role="button" aria-expanded="false" aria-controls="trialLesson">
              選擇課程
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanCard;
