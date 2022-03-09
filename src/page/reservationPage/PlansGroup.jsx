import React from "react";
import PlanCard from "./PlanCard";
import ReservationProgress from "../../component/ReservationProgress";
import { v4 as uuidv4 } from "uuid";

const PlansGroup = ({ title, def }) => {
  const termsInfo = [
    {
      name: "首次體驗",
      price: 450,
      info: "分基礎、中級、高級可以選擇。初次至 DOYOGA 上課建議選擇此方案。",
      img: "../src/image/woman in white tank top and white leggings bending her body.jpg",

    },
    {
      name: "短期體驗",
      price: 1800,
      info: "分基礎、中級、高級可以選擇。想試著培養瑜珈習慣者可以選擇此方案。",
      img: "../src/image/woman performing yoga.jpg",
    },
    {
      name: "長期體驗",
      price: 5600,
      info: "分基礎、中級、高級可以選擇。有長期習慣做瑜伽者建議選擇此方案。",
      img: "../src/image/woman in blue leggings and black tank top doing yoga.jpg",
    },
  ];
  return (
    <section>
      <div className="container">
        <h2 className="text-center">{title}</h2>
        {def ? <p>{def}</p> : null}
        <ReservationProgress />
        <ul className="row list-unstyled">
          {termsInfo.map((termInfo) => (
            <li className="col-lg" key={uuidv4()}>
              <PlanCard info={termInfo}/>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default PlansGroup;
