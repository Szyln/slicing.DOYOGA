import React from 'react';
import Banner from '../homepage/Banner';
import Purpose from '../homepage/Purpose';
import Teachers from '../homepage/Teachers';
import SpaceBtn from '../homepage/SpaceBtn';
import LessonBtn from '../homepage/LessonBtn';
import PlansGroup from '../reservationPage/PlansGroup';
import Evaluations from '../homepage/Evaluations';

const Homepage = ({ termsInfo, setTerm, teachers, lessons, spaces }) => {
  return (
    <>
      {/* banner */}
      <Banner />
      {/* 感受身心，活在當下 */}
      <Purpose />
      {/* 頂尖師資、專業教學 */}
      <Teachers teachers={teachers} />
      {/* 舒適空間、靜心放鬆 */}
      <SpaceBtn spaces={spaces} />
      {/* 精心設計、課程多元 */}
      <LessonBtn lessons={lessons} />
      {/* 方案選擇 */}
      <section className='container pt-8 pb-12 pt-lg-10 pb-lg-16'>
        <h2 className='mb-1'>方案選擇</h2>
        <h3 className='text-secondary text-center mb-6'>DOYOGA 可以帶給你...</h3>
        <PlansGroup termsInfo={termsInfo} setTerm={setTerm} />

      </section>
      {/* 聽聽他們怎麼說 */}
      <Evaluations />
    </>
  );
};

export default Homepage;
