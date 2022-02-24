import React from "react";
import PlanCard from "./PlanCard";
import Reservation from '../../component/Reservation';

const PlanPick = ({ title, def }) => {
  return (
    <section>
      <div className="container">
        
        <h2 className="text-center">{title}</h2>
        { def ? <p>{ def }</p> : null }
        <Reservation />
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

export default PlanPick;
