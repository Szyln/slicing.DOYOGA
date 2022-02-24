import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

// import required modules
import { Grid, Pagination } from "swiper";
import Evaluation from "./Evaluations/Evaluation";

const Evaluations = () => {
  return (
    <section className="bg-secondary-light">
      <div className="container">
        <h2>聽聽他們怎麼說</h2>
        <div className="d-flex flex-wrap align-content-between overflow-x-scroll">
            <Evaluation />
            <Evaluation />
            <Evaluation />
            <Evaluation />
            <Evaluation />
            <Evaluation />
 
          </div>
      </div>
    </section>
  );
};

export default Evaluations;
