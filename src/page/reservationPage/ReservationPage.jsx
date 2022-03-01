import React from "react";
import PlansGroup from "./PlansGroup";
import LessonLevel from './LessonLevel';

const ReservationPage = () => {
  return (
    <>
      <PlansGroup title="立即預約" />
      {/* 展開內容 */}
      <LessonLevel />
      <div className="container">
        {/* 預約須知 */}
        <div className="row">
          <div className="col-md-8 mx-auto">
            <h2 className="text-center ">預約須知</h2>
            <ol>
              <li>如果有特殊體質、特殊狀況，請主動告知。</li>
              <li>
                取消預約或時間異動請於預約日前一天晚間 21:00
                前告知，預約當日請勿異動或取消，以免影響您日後再預約的個人信用及難度。
              </li>
              <li>
                為維護上課品質，請遵守 DOYOGA
                各項參觀規定，未遵守規定者，本公司保留謝絕入館之權利。
              </li>
              <li>
                DOYOGA
                保留修改預約須知之權利，修改後的條款將公佈於本網站上，不另外個別通知。如果您繼續在本網站進行參觀預約，就表示您已經了解、並同意遵守修改後的約定條款。
              </li>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReservationPage;
