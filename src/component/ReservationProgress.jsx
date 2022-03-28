import React from "react";
import ReservationProgressTab from "./ReservationProgressTab";

const ReservationProgress = () => {
  return (

      <ul className="row">
        <ReservationProgressTab
          bgColor="primary"
          textColor="white"
          marginAuto="s"
          children="選擇方案"

        />
        <ReservationProgressTab
          bgColor="secondary-light"
          textColor="primary"
          children="填寫資料"
        />
        <ReservationProgressTab
          bgColor="secondary-light"
          textColor="primary"
          marginAuto="e"
          children="完成預約"
        />
      </ul>
  );
};

export default ReservationProgress;
