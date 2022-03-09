import React from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
const Schedule = () => {
  const schedule = {
    nineOClock: [
      "基礎 Basic",
      "基礎 Basic",
      null,
      null,
      "基礎 Basic",
      "基礎 Basic",
    ],
    tenOClock: [
      "艾揚格 Iyengar",
      "哈達 Hatha",
      "寰宇 Universal",
      "哈達 Hatha",
      "艾揚格 Iyengar",
      "雙人飛行",
    ],
    elevenOClock: [
      "寰宇 Universal",
      "陰陽 Yin Yang",
      "艾揚格 Iyengar",
      "寰宇 Universal",
      null,
      "艾揚格 Iyengar",
    ],
    fourteenOClock: [
      "雙人飛行",
      "基礎 Basic",
      "雙人飛行",
      "陰陽 Yin Yang",
      "雙人飛行",
      "基礎 Basic",
    ],
    fifteenOClock: [
      "陰陽 Yin Yang",
      "陰陽 Yin Yang",
      "基礎 Basic",
      "基礎 Basic",
      "哈達 Hatha",
      "香氛瑜珈",
    ],
    sixteenOClock: [
      "哈達 Hatha",
      "雙人飛行",
      "陰陽 Yin Yang",
      "香氛瑜珈",
      "艾揚格 Iyengar",
      "香氛瑜珈",
    ],
    seventeenOClock: [
      "艾揚格 Iyengar",
      null,
      "哈達 Hatha",
      "艾揚格 Iyengar",
      "寰宇 Universal",
      "哈達 Hatha",
    ],
    twentyOClock: [
      "艾揚格 Iyengar",
      null,
      "香氛瑜珈",
      "艾揚格 Iyengar",
      "香氛瑜珈",
      "雙人飛行",
    ],
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className=" offset-lg-1 col-lg-10 bg-secondary rounded text-white p-5 table-responsive">
            <table className="table bg-white text-primary text-center">
              <caption className="text-white caption-top">2021 07 月</caption>
              {/* 對縱向產生群組 */}
              <colgroup>
                <col className="text-start" />
                <col />
                <col span="1" className="bg-secondary-light" />
                <col />
                <col span="1" className="bg-secondary-light text" />
                <col />
                <col span="1" className="bg-secondary-light" />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col">時間</th>
                  <th scope="col">星期一</th>
                  <th scope="col">星期二</th>
                  <th scope="col">星期三</th>
                  <th scope="col">星期四</th>
                  <th scope="col">星期五</th>
                  <th scope="col">星期六</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">0900-1000</th>
                  {schedule.nineOClock.map((lesson) => (
                    <td key={uuidv4()}>{lesson}</td>
                  ))}
                </tr>
                <tr>
                  <th scope="row">1000-1100</th>
                  {schedule.tenOClock.map((lesson) => (
                    <td key={uuidv4()}>{lesson}</td>
                  ))}
                </tr>
                <tr>
                  <th scope="row">1100-1200</th>
                  {schedule.elevenOClock.map((lesson) => (
                    <td key={uuidv4()}>{lesson}</td>
                  ))}
                </tr>
                <tr>
                  <th scope="row">1200-1400</th>
                  <td colSpan="6">休息</td>
                </tr>
                <tr>
                  <th scope="row">1400-1500</th>
                  {schedule.fourteenOClock.map((lesson) => (
                    <td key={uuidv4()}>{lesson}</td>
                  ))}
                </tr>
                <tr>
                  <th scope="row">1500-1600</th>
                  {schedule.fifteenOClock.map((lesson) => (
                    <td key={uuidv4()}>{lesson}</td>
                  ))}
                </tr>
                <tr>
                  <th scope="row">1600-1700</th>
                  {schedule.sixteenOClock.map((lesson) => (
                    <td key={uuidv4()}>{lesson}</td>
                  ))}
                </tr>
                <tr>
                  <th scope="row">1700-1800</th>
                  {schedule.seventeenOClock.map((lesson) => (
                    <td key={uuidv4()}>{lesson}</td>
                  ))}
                </tr>
                <tr>
                  <th scope="row">1800-2000</th>
                  <td colSpan="6">休息</td>
                </tr>
                <tr>
                  <th scope="row">2000-2100</th>
                  {schedule.twentyOClock.map((lesson) => (
                    <td key={uuidv4()}>{lesson}</td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <section className="container">
        <h2>上課須知</h2>
        <ol className="row align-self-center">
          <li className="col-md-10 col-lg-7 offset-lg-2 border rounded">
            空中瑜珈、香氛開放 2 天前電話預約上課。
          </li>
          <li className="col-md-10 col-lg-7 offset-lg-3 border rounded bg-secondary text-white ">
            如果有特殊體質、特殊狀況，請主動告知該堂教師。
          </li>
          <li className="col-md-10 col-lg-7 offset-lg-2 border rounded">
            取消預約或時間異動請於預約日前一天晚間 21:00 前告知。
          </li>
          <li className="col-md-10 col-lg-7 offset-lg-3 border rounded bg-secondary text-white">
            運動過程中若感到任何不適，請馬上停止且與老師商量討論。
          </li>
        </ol>
      </section>
    </>
  );
};

export default Schedule;
