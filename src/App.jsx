import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from './component/Nav';
import '../src/style/all.css';
import Footer from './component/Footer';
import Homepage from './page/homepage/Homepage';
import Schedule from './page/Schedule';
import Space from './page/Space';
import Course from './page/Course';
import ReservationPage from './page/reservationPage/ReservationPage';
import Contact from './page/Contact';

import '../node_modules/bootstrap/dist/js/bootstrap.esm';
import Form from './page/reservationPage/Form';
import Result from './page/reservationPage/Result';
import ReservationSelection from './page/reservationPage/ReservationSelection';

const App = () => {
  const lessons = [
    {
      name: '基礎 Basic',
      teacher: 'Carol Tang',
      info: '使用掛布懸掛在半空，進行哈達瑜珈體位法練習藉由地心引力的重力原理鍛鍊核心肌群，舒緩脊椎壓力訓練身體協調性，深層放鬆身體課堂裡老師會視同學狀況安排教導倒立動作對於不敢嘗試倒立的同學來說藉由掛布的支持與保護加上老師細心指導，讓同學能更快掌握',

      level: 'basic',
      img: '../src/image/woman doing yoga beside wall.jpg',
      time: 60,
    },
    {
      name: '艾揚格 Iyengar',
      teacher: 'Kanae',
      info: '使用掛布懸掛在半空，進行哈達瑜珈體位法練習藉由地心引力的重力原理鍛鍊核心肌群，舒緩脊椎壓力訓練身體協調性，深層放鬆身體課堂裡老師會視同學狀況安排教導倒立動作對於不敢嘗試倒立的同學來說藉由掛布的支持與保護加上老師細心指導，讓同學能更快掌握',
      level: 'intermediate',
      img: '../src/image/rawan-yasser-zQ1ypq-WHzQ-unsplash.jpg',
      time: 60,
    },
    {
      name: '阿斯坦加 Ashtanga',
      teacher: 'Kanae',
      info: '使用掛布懸掛在半空，進行哈達瑜珈體位法練習藉由地心引力的重力原理鍛鍊核心肌群，舒緩脊椎壓力訓練身體協調性，深層放鬆身體課堂裡老師會視同學狀況安排教導倒立動作對於不敢嘗試倒立的同學來說藉由掛布的支持與保護加上老師細心指導，讓同學能更快掌握',
      level: 'advanced',
      img: '../src/image/woman doing yoga.jpg',
      time: 60,
    },
    {
      name: '雙人飛行 Arco Yoga',
      teacher: 'Kuzuha、Kanae',
      info: '使用掛布懸掛在半空，進行哈達瑜珈體位法練習藉由地心引力的重力原理鍛鍊核心肌群，舒緩脊椎壓力訓練身體協調性，深層放鬆身體課堂裡老師會視同學狀況安排教導倒立動作對於不敢嘗試倒立的同學來說藉由掛布的支持與保護加上老師細心指導，讓同學能更快掌握',
      img: '../src/image/two woman dong fitness exercise.jpg',
      time: 60,
    },
    {
      name: '哈達 Hatha',
      teacher: 'Kuzuha',
      info: '使用掛布懸掛在半空，進行哈達瑜珈體位法練習藉由地心引力的重力原理鍛鍊核心肌群，舒緩脊椎壓力訓練身體協調性，深層放鬆身體課堂裡老師會視同學狀況安排教導倒立動作對於不敢嘗試倒立的同學來說藉由掛布的支持與保護加上老師細心指導，讓同學能更快掌握',
      level: 'intermediate',
      img: '../src/image/woman in black sports bra and black leggings doing yoga.jpg',
      time: 60,
    },
    {
      name: '寰宇 Universal',
      teacher: 'Kuzuha',
      info: '使用掛布懸掛在半空，進行哈達瑜珈體位法練習藉由地心引力的重力原理鍛鍊核心肌群，舒緩脊椎壓力訓練身體協調性，深層放鬆身體課堂裡老師會視同學狀況安排教導倒立動作對於不敢嘗試倒立的同學來說藉由掛布的支持與保護加上老師細心指導，讓同學能更快掌握',
      level: 'intermediate',
      img: '../src/image/woman in white tank top and white leggings bending her body.jpg',
      time: 60,
    },

    {
      name: '陰陽 Yin Yang',
      teacher: 'Asa Chen',
      info: '使用掛布懸掛在半空，進行哈達瑜珈體位法練習藉由地心引力的重力原理鍛鍊核心肌群，舒緩脊椎壓力訓練身體協調性，深層放鬆身體課堂裡老師會視同學狀況安排教導倒立動作對於不敢嘗試倒立的同學來說藉由掛布的支持與保護加上老師細心指導，讓同學能更快掌握',
      level: 'advanced',
      img: '../src/image/woman in white tank top and white pants bending her body by the window.jpg',
      time: 60,
    },
    {
      name: '香氛 Aroma Yoga',
      teacher: 'Asa Chen',
      info: '使用掛布懸掛在半空，進行哈達瑜珈體位法練習藉由地心引力的重力原理鍛鍊核心肌群，舒緩脊椎壓力訓練身體協調性，深層放鬆身體課堂裡老師會視同學狀況安排教導倒立動作對於不敢嘗試倒立的同學來說藉由掛布的支持與保護加上老師細心指導，讓同學能更快掌握',
      img: '../src/image/carl-barcelo-nqUHQkuVj3c-unsplash.jpg',
      time: 60,
    },
    {
      name: '空中瑜伽',
      monthFeature: true,
      teacher: 'Asa Chen',
      info: '使用掛布懸掛在半空，進行哈達瑜珈體位法練習藉由地心引力的重力原理鍛鍊核心肌群，舒緩脊椎壓力訓練身體協調性，深層放鬆身體課堂裡老師會視同學狀況安排教導倒立動作對於不敢嘗試倒立的同學來說藉由掛布的支持與保護加上老師細心指導，讓同學能更快掌握',
      img: '../src/image/photo-1540206276207-3af25c08abc4.jpeg',
      time: 60,
    },
  ];
  const teachers = [
    {
      name: 'Carol Tang',
      img: '../src/image/teacher-1.png',
      teachingYears: 10,
      info: '“因為瑜珈讓我重新認識自己的身體，也讓我有了不一樣的人生。我希望能跟學生們分享瑜珈的好，讓大家能藉由瑜珈看見自己的內在與潛能，並將瑜珈自然的融入自己的生活中。”',
      exp: [
        '協會認證艾揚格瑜珈老師',
        '2010 年完成四年的艾揚格師資培訓',
        '2020 取得艾揚格瑜珈高階認證',
      ],
    },
    {
      name: 'Kanae',
      img: '../src/image/teacher-2.png',
      teachingYears: 3,
      info: '“希望每個人透過觀察，感受在在進入動作，連接陰與陽，內和外，呼和吸的方式來更了解瑜珈練習的觀點，每個​動作都帶著呼吸和順位，在平衡心理和生理的狀況下以安全和簡化的技巧進入瑜珈姿勢，帶著放鬆的心情，享受瑜珈和生命的喜悅，並樂在其​中。”',
      exp: [
        '美國瑜珈聯盟 RYT200 小時師資認證',
        '自然呼吸瑜珈會館開授倒立研習',
        '簡善琳瑜珈會館開授倒立研習',
      ],
    },
    {
      name: 'Kuzuha',
      img: '../src/image/teacher-4.png',
      teachingYears: 3,
      info: '“瑜珈是一種生活態度，學習平衡不強求，堅持不放棄，修煉心靈活在當下。”',
      exp: [
        '美國瑜珈聯盟 RYT200 小時師資認證',
        '自然呼吸瑜珈會館開授倒立研習',
        '簡善琳瑜珈會館開授倒立研習',
      ],
    },
    {
      name: 'Asa Chen',
      img: '../src/image/teacher-3.png',
      teachingYears: 3,
      info: '',
      exp: [
        '美國瑜珈聯盟 RYT200 小時師資認證',
        '自然呼吸瑜珈會館開授倒立研習',
        '簡善琳瑜珈會館開授倒立研習',
      ],
    },
  ];
  const termsInfo = [
    {
      name: '首次體驗',
      engName: 'trial',
      price: 450,
      info: '分基礎、中級、高級可以選擇。初次至 DOYOGA 上課建議選擇此方案。',
      img: '../src/image/woman in white tank top and white leggings bending her body.jpg',
    },
    {
      name: '短期體驗',
      engName: 'short',
      price: 1800,
      info: '分基礎、中級、高級可以選擇。想試著培養瑜珈習慣者可以選擇此方案。',
      img: '../src/image/woman performing yoga.jpg',
    },
    {
      name: '長期體驗',
      engName: 'long',
      price: 5600,
      info: '分基礎、中級、高級可以選擇。有長期習慣做瑜伽者建議選擇此方案。',
      img: '../src/image/woman in blue leggings and black tank top doing yoga.jpg',
    },
  ];
  const socialMediaLinks = [
    {
      name: 'facebook',
    },
    {
      name: 'instagram',
    },
    {
      name: 'line',
    },
  ];
  const spaces = [
    {
      name: 'A、B 團體課教室',
      img: '../../src/image/blue swimming pool near green potted plant.jpg',
      des: '教授課程：A-基礎、艾揚格、哈達、寰宇；B-雙人飛行、阿斯坦加、陰陽、香氛',
    },
    {
      name: 'C、D 個人訓練室',
      img: '../../src/image/carl-barcelo-nqUHQkuVj3c-unsplash.jpg',
      des: '開放時間：每週一至週五 09:00~17:00',
    },
    {
      name: '淋浴間',
      img: '../../src/image/white ceramic sink near white ceramic sink.jpg',
      des: '開放時間：每週一至週日 09:00~21:30',
    },
    {
      name: '器材出租',
      img: '../../src/image/woman in black sports bra and blue denim jeans doing yoga.jpg',
      des: '有租借需求請至櫃檯登記',
    },
    {
      name: '交誼廳',
      img: '../../src/image/sittin people beside table inside room.jpg',
      des: '開放時間：每週一至週五 09:00~21:30',
    },
  ];
  const levelsInfo = [
    {
      level: '基礎 Basic',
      lessons: '基礎課程',
      time: 60,
      listInfos: [
        '入體位法動作解說',
        '瑜珈基礎動作、順位',
        '適合任何階段練習者',
      ],
    },
    {
      level: '中階 Intermediate',
      lessons: '艾揚格、哈達、寰宇',
      time: 60,
      listInfos: [
        '刺激身體七個層次為核心',
        '結合流暢體位法練習、呼吸、觀想',
        '適合半年以上練習者',
      ],
    },
    {
      level: '高階 Advanced',
      lessons: '阿斯坦加、陰陽',
      time: 60,
      listInfos: [
        '充分打開身體每個部位',
        '顯著提升力量與柔軟度',
        '適合一年以上練習者',
      ],
    },
  ];

  const [level, setLevel] = useState(null);
  const [term, setTerm] = useState(null);
  const [step, setStep] = useState('1');
  return (
    <>
      <header className='sticky-top'>
        <Nav />
      </header>
      <main>
        <Routes>
          ‘
          <Route
            path='/'
            element={
              <Homepage
                termsInfo={termsInfo}
                setTerm={setTerm}
                teachers={teachers}
                lessons={lessons}
                spaces={spaces}
              />
            }
          />
          <Route
            path='/space'
            element={<Space lessons={lessons} spaces={spaces} />}
          />
          <Route path='/schedule' element={<Schedule />} />
          <Route
            path='/course'
            element={<Course lessons={lessons} teachers={teachers} />}
          />
          <Route
            path='/reservation'
            element={
              <ReservationPage
                termsInfo={termsInfo}
                setTerm={setTerm}
                term={term}
                step={step}
              />
            }
          >
            <Route
              path='selection'
              element={
                <ReservationSelection
                  termsInfo={termsInfo}
                  setTerm={setTerm}
                  term={term}
                  // step={step}
                  setStep={setStep}
                  levelsInfo={levelsInfo}
                  level={level}
                  setLevel={setLevel}
                />
              }
            />
            <Route path='form' element={<Form setStep={setStep} term={term} level={level}  />} />
            <Route path='result' element={<Result setStep={setStep} />} />
          </Route>
          <Route path='/contact' element={<Contact setStep={setStep} />} />
        </Routes>
      </main>
      <Footer socialMediaLinks={socialMediaLinks} />
    </>
  );
};

export default App;
