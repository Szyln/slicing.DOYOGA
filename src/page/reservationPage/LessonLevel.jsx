import React from "react";
import LessonLevelCard from "./LessonLevelCard";

const LessonLevel = () => {
  return (
    <div className="collapse" id="trialLesson">
      <div className="bg-primary">
        <div className="container">
          <div>
            <h2>選擇課程階級</h2>
            <ul className="list-unstyled row row-cols-1 row-cols-md-2 row-cols-xl-3 flex-md-nowrap-important overflow-x-scroll">
              <li>
                <LessonLevelCard />
              </li>
              <li>
                <LessonLevelCard />
              </li>
              <li>
                <LessonLevelCard />
              </li>
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
