import React from 'react';
import { v4 as uuidv4 } from 'uuid';
const Purpose = () => {
  const purposes = [
    {
      title: '整體健身',
      des: '每一個動作，都融入運動解剖學的的觀點強調以身體的中心線為出發點。',
      img: '../src/image/photo-1593810450967-f9c42742e326.jpeg',
    },

    {
      title: '減壓放鬆',
      des: '調節全身系統、改善血液循環、減壓養心、釋放身心，達到修心養性的目的。',
      img: '../src/image/photo-1593810451137-5dc55105dace.jpeg',
    },
    {
      title: '局部雕塑',
      des: '幫助強化背部與腹部的核心肌群，增進我們身體穩定度以及保持良好體態。',
      img: '../src/image/photo-1599901860904-17e6ed7083a0.jpeg',
    },
  ];
  return (
    <section className='pt-8 pb-12 pt-lg-10 pb-lg-16'>
      <div className='container'>
        <h2 className='text-center'>感受身心，活在當下</h2>
        <p className='text-center text-secondary fs-5 mb-6'>DOYOGA 可以帶給你...</p>
        <ul className='row gy-4 gy-md-0'>
          {purposes.map((purpose) => (
            <li className='col-md-4' key={uuidv4()}>
              <div className='card bg-dark text-white ratio ratio-5x6 border-0'>
                <img
                  src={purpose.img}
                  className='card-img'
                  alt={purpose.title}
                />
                <div className='card-img-overlay d-flex flex-column justify-content-end p-6'>
                  <div>
                    <h3 className='card-title fs-5 fs-md-6 fs-lg-5 fw-normal'>
                      {purpose.title}
                    </h3>
                    <p className='card-text'>{purpose.des}</p>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Purpose;
