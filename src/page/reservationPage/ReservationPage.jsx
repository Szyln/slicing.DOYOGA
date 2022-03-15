import React from 'react';
// import PlansGroup from './PlansGroup';
// import LessonLevel from './LessonLevel';
import ReservationProgress from '../../component/ReservationProgress';
import { Link, Outlet } from 'react-router-dom';


const ReservationPage = ({ termsInfo, setTerm, term }) => {
  return (
    <>
      <div className='container'>
        <h2 className='text-center'>立即預約</h2>
        <ReservationProgress />
        <Outlet />
      </div>
    </>
  );
};

export default ReservationPage;
