import React from "react";
import LessonLevelCard from "./LessonLevelCard";
import { v4 as uuidv4 } from "uuid";

const LessonLevel = () => {
  const levelsInfo = [
    {
      level: "基礎 Basic",
      lessons: "基礎課程",
      time: 60,
      listInfos: [
        "入體位法動作解說",
        "瑜珈基礎動作、順位",
        "適合任何階段練習者",
      ],
    },
    {
      level: "中階 Intermediate",
      lessons: "艾揚格、哈達、寰宇",
      time: 60,
      listInfos: [
        "刺激身體七個層次為核心",
        "結合流暢體位法練習、呼吸、觀想",
        "適合半年以上練習者",
      ],
    },
    {
      level: "高階 Advanced",
      lessons: "阿斯坦加、陰陽",
      time: 60,
      listInfos: [
        "充分打開身體每個部位",
        "顯著提升力量與柔軟度",
        "適合一年以上練習者",
      ],
    },
  ];
  return (
    <div className="collapse" id="trialLesson">
      <div className="bg-primary">
        <div className="container">
          <div>
            <h2>選擇課程階級</h2>
            <ul className="list-unstyled row row-cols-1 row-cols-md-2 row-cols-lg-3 flex-md-nowrap-important overflow-x-scroll">
              {levelsInfo.map((levelInfo) => (
                <li key={uuidv4()}>
                  <LessonLevelCard info={levelInfo} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center">
        <span>你選擇的是</span>
        <h3>短期體驗課程-基礎</h3>
      </div>
    </div>
  );
};

export default LessonLevel;
