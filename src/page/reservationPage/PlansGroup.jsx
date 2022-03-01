import React from "react";
import PlanCard from "./PlanCard";
import ReservationProgress from '../../component/ReservationProgress';

const PlansGroup = ({ title, def }) => {
  return (
    <section>
      <div className="container">
        
        <h2 className="text-center">{title}</h2>
        { def ? <p>{ def }</p> : null }
        <ReservationProgress />
        <ul className="row list-unstyled">
          <li className="col-xl">
            <PlanCard />
          </li>
          <li className="col-xl">
            <PlanCard />
          </li>
          <li className="col-xl">
            <PlanCard />
          </li>
        </ul>  
      </div>
    </section>
  );
};

export default PlansGroup;
