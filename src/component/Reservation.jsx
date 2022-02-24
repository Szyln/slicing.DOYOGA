import React from "react";
import ReservationTab from "./ReservationTab";

const Reservation = () => {
  return (

      <ul className="row list-unstyled">
        <ReservationTab
          bgColor="primary"
          textColor="white"
          marginAuto="s"
          children="選擇方案"

        />
        <ReservationTab
          bgColor="secondary-light"
          textColor="primary"
          children="填寫資料"
        />
        <ReservationTab
          bgColor="secondary-light"
          textColor="primary"
          marginAuto="e"
          children="完成預約"
        />
      </ul>
  );
};

export default Reservation;
