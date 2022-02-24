import React from "react";
import Banner from './homepage/Banner';
import Purpose from './homepage/Purpose';
import Teachers from './homepage/Teachers';
import SpaceBtn from './homepage/SpaceBtn';
import LessonBtn from './homepage/LessonBtn';
import PlanPick from './homepage/PlanPick';
import Evaluations from './homepage/Evaluations';

const Homepage = () => {
  return (
    <>
      {/* banner */}
      <Banner />
      {/* 感受身心，活在當下 */}
      <Purpose />
      {/* 頂尖師資、專業教學 */}
      <Teachers />
      {/* 舒適空間、靜心放鬆 */}
      <SpaceBtn />
      {/* 精心設計、課程多元 */}
      <LessonBtn />
      {/* 方案選擇 */}
      <PlanPick title="方案選擇" def="DOYOGA 可以帶給你..."/>
      {/* 聽聽他們怎麼說 */}
      <Evaluations />
    </>
  );
};

export default Homepage;
