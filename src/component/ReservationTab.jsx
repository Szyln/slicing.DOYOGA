import React from "react";

const ReservationTab = ({ bgColor, textColor, children, marginAuto }) => {

  return (
    <li className={`col-md-2 bg-${bgColor} text-${textColor} rounded m${marginAuto}-auto text-center`}>
      {children}
    </li>
  );
};

export default ReservationTab;
