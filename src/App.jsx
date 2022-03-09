import React from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./component/Nav";
import Footer from "./component/Footer";
import Homepage from "./page/homepage/Homepage";
import Schedule from "./page/Schedule";
import Space from "./page/Space";
import Course from "./page/Course";
import ReservationPage from "./page/reservationPage/ReservationPage";
import Contact from "./page/Contact";

import "../node_modules/bootstrap/dist/js/bootstrap.esm";
import "../src/style/all.css";

const App = () => {
  const lessons = [
    {
      name: "基礎 Basic",
      teacher: "Carol Tang",
      info: "使用掛布懸掛在半空，進行哈達瑜珈體位法練習藉由地心引力的重力原理鍛鍊核心肌群，舒緩脊椎壓力訓練身體協調性，深層放鬆身體課堂裡老師會視同學狀況安排教導倒立動作對於不敢嘗試倒立的同學來說藉由掛布的支持與保護加上老師細心指導，讓同學能更快掌握",
  
      level: 'basic',
      img: "../src/image/woman doing yoga beside wall.jpg",
      time: 60,
    },
    {
      name: "艾揚格 Iyengar",
      teacher: "Kanae",
      info: "使用掛布懸掛在半空，進行哈達瑜珈體位法練習藉由地心引力的重力原理鍛鍊核心肌群，舒緩脊椎壓力訓練身體協調性，深層放鬆身體課堂裡老師會視同學狀況安排教導倒立動作對於不敢嘗試倒立的同學來說藉由掛布的支持與保護加上老師細心指導，讓同學能更快掌握",
      level: 'intermediate',
      img: "../src/image/rawan-yasser-zQ1ypq-WHzQ-unsplash.jpg",
      time: 60,
    },
    {
      name: "阿斯坦加 Ashtanga",
      teacher: "Kanae",
      info: "使用掛布懸掛在半空，進行哈達瑜珈體位法練習藉由地心引力的重力原理鍛鍊核心肌群，舒緩脊椎壓力訓練身體協調性，深層放鬆身體課堂裡老師會視同學狀況安排教導倒立動作對於不敢嘗試倒立的同學來說藉由掛布的支持與保護加上老師細心指導，讓同學能更快掌握",
      level: 'advanced',
      img: "../src/image/woman doing yoga.jpg",
      time: 60,
    },
    {
      name: "雙人飛行 Arco Yoga",
      teacher: "Kuzuha、Kanae",
      info: "使用掛布懸掛在半空，進行哈達瑜珈體位法練習藉由地心引力的重力原理鍛鍊核心肌群，舒緩脊椎壓力訓練身體協調性，深層放鬆身體課堂裡老師會視同學狀況安排教導倒立動作對於不敢嘗試倒立的同學來說藉由掛布的支持與保護加上老師細心指導，讓同學能更快掌握",
      img: "../src/image/two woman dong fitness exercise.jpg",
      time: 60,
    },
    {
      name: "哈達 Hatha",
      teacher: "Kuzuha",
      info: "使用掛布懸掛在半空，進行哈達瑜珈體位法練習藉由地心引力的重力原理鍛鍊核心肌群，舒緩脊椎壓力訓練身體協調性，深層放鬆身體課堂裡老師會視同學狀況安排教導倒立動作對於不敢嘗試倒立的同學來說藉由掛布的支持與保護加上老師細心指導，讓同學能更快掌握",
      level: 'intermediate',
      img: "../src/image/woman in black sports bra and black leggings doing yoga.jpg",
      time: 60,
    },
    {
      name: "寰宇 Universal",
      teacher: "Kuzuha",
      info: "使用掛布懸掛在半空，進行哈達瑜珈體位法練習藉由地心引力的重力原理鍛鍊核心肌群，舒緩脊椎壓力訓練身體協調性，深層放鬆身體課堂裡老師會視同學狀況安排教導倒立動作對於不敢嘗試倒立的同學來說藉由掛布的支持與保護加上老師細心指導，讓同學能更快掌握",
      level: 'intermediate',
      img: "../src/image/woman in white tank top and white leggings bending her body.jpg",
      time: 60,
    },

    {
      name: "陰陽 Yin Yang",
      teacher: "Asa Chen",
      info: "使用掛布懸掛在半空，進行哈達瑜珈體位法練習藉由地心引力的重力原理鍛鍊核心肌群，舒緩脊椎壓力訓練身體協調性，深層放鬆身體課堂裡老師會視同學狀況安排教導倒立動作對於不敢嘗試倒立的同學來說藉由掛布的支持與保護加上老師細心指導，讓同學能更快掌握",
      level: 'advanced',
      img: "../src/image/woman in white tank top and white pants bending her body by the window.jpg",
      time: 60,
    },
    {
      name: "香氛 Aroma Yoga",
      teacher: "Asa Chen",
      info: "使用掛布懸掛在半空，進行哈達瑜珈體位法練習藉由地心引力的重力原理鍛鍊核心肌群，舒緩脊椎壓力訓練身體協調性，深層放鬆身體課堂裡老師會視同學狀況安排教導倒立動作對於不敢嘗試倒立的同學來說藉由掛布的支持與保護加上老師細心指導，讓同學能更快掌握",
      img: "../src/image/carl-barcelo-nqUHQkuVj3c-unsplash.jpg",
      time: 60,
    },
    {
      name: "空中瑜伽",
      monthFeature: true,
      teacher: "Asa Chen",
      info: "使用掛布懸掛在半空，進行哈達瑜珈體位法練習藉由地心引力的重力原理鍛鍊核心肌群，舒緩脊椎壓力訓練身體協調性，深層放鬆身體課堂裡老師會視同學狀況安排教導倒立動作對於不敢嘗試倒立的同學來說藉由掛布的支持與保護加上老師細心指導，讓同學能更快掌握",
      img: "../src/image/photo-1540206276207-3af25c08abc4.jpeg",
      time: 60,
    },
  ];
  const teachers = [
    {
      name: "Carol Tang",
      img: "../src/image/teacher-1.png",
      teachingYears: 10,
      info: "“因為瑜珈讓我重新認識自己的身體，也讓我有了不一樣的人生。我希望能跟學生們分享瑜珈的好，讓大家能藉由瑜珈看見自己的內在與潛能，並將瑜珈自然的融入自己的生活中。”",
      exp: [
        "協會認證艾揚格瑜珈老師",
        "2010 年完成四年的艾揚格師資培訓",
        "2020 取得艾揚格瑜珈高階認證",
      ],
    },
    {
      name: "Kanae",
      img: "../src/image/teacher-2.png",
      teachingYears: 3,
      info: "“希望每個人透過觀察，感受在在進入動作，連接陰與陽，內和外，呼和吸的方式來更了解瑜珈練習的觀點，每個​動作都帶著呼吸和順位，在平衡心理和生理的狀況下以安全和簡化的技巧進入瑜珈姿勢，帶著放鬆的心情，享受瑜珈和生命的喜悅，並樂在其​中。”",
      exp: [
        "美國瑜珈聯盟 RYT200 小時師資認證",
        "自然呼吸瑜珈會館開授倒立研習",
        "簡善琳瑜珈會館開授倒立研習",
      ],
    },
    {
      name: "Kuzuha",
      img: "../src/image/teacher-4.png",
      teachingYears: 3,
      info: "“瑜珈是一種生活態度，學習平衡不強求，堅持不放棄，修煉心靈活在當下。”",
      exp: [
        "美國瑜珈聯盟 RYT200 小時師資認證",
        "自然呼吸瑜珈會館開授倒立研習",
        "簡善琳瑜珈會館開授倒立研習",
      ],
    },
    {
      name: "Asa Chen",
      img: "../src/image/teacher-3.png",
      teachingYears: 3,
      info: "",
      exp: [
        "美國瑜珈聯盟 RYT200 小時師資認證",
        "自然呼吸瑜珈會館開授倒立研習",
        "簡善琳瑜珈會館開授倒立研習",
      ],
    },
  ];

  // const trialTermLesson = lessons.filter((lesson) => {
  //   return lesson.term == 'trial';
  // });
  // const shortTermLesson = lessons.filter((lesson) => {
  //   return lesson.term == 'short';
  // });
  // const longTermLesson = lessons.filter((lesson) => {
  //   return lesson.term == 'long';
  // });
  // console.log(trialTermLesson);

  return (
    <>
      <header>
        <Nav />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/space" element={<Space lessons={lessons} />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route
            path="/course"
            element={<Course lessons={lessons} teachers={teachers} />}
          />
          <Route path="/reservation" element={<ReservationPage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
