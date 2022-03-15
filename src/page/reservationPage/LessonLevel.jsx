import React, { useState } from 'react';
import LessonLevelCard from './LessonLevelCard';
import { v4 as uuidv4 } from 'uuid';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const LessonLevel = ({ termsInfo, term }) => {
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
  const [level, setLevel] = useState('基礎');

  return (
    <>
    LessonBtn
      <div className='collapse multi-collapse' id={term}>
        <div className='container bg-primary'>
          <div>
            <h2 className='text-white'>選擇課程階級</h2>
            <Swiper
              className='bg-primary container'
              spaceBetween={20}
              slidesPerView={1}
              breakpoints={{
                375: {
                  slidesPerView: 1,
                  spaceBetween: 15,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                1280: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
              }}
            >
              {levelsInfo.map((levelInfo) => (
                <SwiperSlide key={uuidv4()}>
                  <LessonLevelCard info={levelInfo} setLevel={setLevel} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <div className='text-center bg-white'>
          <span>你選擇的是</span>
          <h3>
            {term == 'trialLessonBtn'
              ? '首次'
              : term == 'shortLessonBtn'
              ? '短期'
              : '長期'}
            體驗課程-
            {level == '基礎 Basic'
              ? '基礎'
              : level == '中階 Intermediate'
              ? '中階'
              : '高階'}
          </h3>
        </div>
      </div>
    </>
  );
};

export default LessonLevel;
