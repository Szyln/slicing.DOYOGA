import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const Teachers = ({ teachers }) => {
  const teachersThree = teachers.filter((teacher, index) => {
    return index < 3;
  });
  return (
    <section className='bg-secondary-light pt-8 pb-12 py-lg-16'>
      <div className='container'>
        <div className='row position-lg-relative'>
          <div className='col-lg-6 d-none d-lg-block'>
            <img
              src='../img/photo-1540206276207-3af25c08abc4.jpeg'
              alt='訓練場景'
              className='rounded-2 length-teacherSection-img'
            />
          </div>
          <div className='my-auto position-lg-absolute'>
            <div className='row'>
              <h2 className='mb-1 text-start col-12 col-lg-6 offset-lg-6'>
                頂尖師資、專業教學
              </h2>
              <p className='fs-5 text-secondary mb-6 col-lg-6 offset-lg-6'>
                強力師資，經歷豐富，協會認證。運用引導式教學，針對不同需求的人制定專屬課程。
              </p>
            </div>
            <ul className='row '>
              {teachersThree.map((teacher, index) => (
                <li
                  className={`col-md-${index == 0 ? '12' : '11'} offset-md-${
                    index == 0 ? '0' : '1'
                  } col-lg-${index == 0 ? '7' : '6'} offset-lg-${
                    index == 0 ? '5' : '6'
                  } hover-col-n1`}
                  key={uuidv4()}
                >
                  <div className={`card p-${index == 0 ? '10' : '4'} mb-4 text-primary-dark`}>
                    <div className='d-flex align-items-center'>
                      <div className='pe-4'>
                        <img
                          src={teacher.img}
                          alt={teacher.name}
                          className='length-avatar'
                        />
                      </div>
                      <div className='card-body p-0'>
                        <h5 className='card-title fw-normal mb-1'>
                          {teacher.name} 老師
                        </h5>
                        <p className='card-text mb-1'>
                          教學經歷 {teacher.teachingYears} 年
                        </p>
                        <p
                          className={`card-text ${index == 0 ? '' : 'd-none'}`}
                        >
                          {teacher.info}
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Teachers;
