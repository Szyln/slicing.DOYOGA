import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const LessonLevelCard = ({ info, setLevel }) => {
  const handleLevelClick = (e) => {
    setLevel(e.target.text);
  };
  return (
    <div className='card bg-secondary border-white border-4 text-white'>
      <div className='d-flex justify-content-between align-items-center'>
        <h3>
          <a
            className='stretched-link text-decoration-none text-white'
            onClick={handleLevelClick}
          >
            {info.level}
          </a>
        </h3>
        <span className='material-icons'>check_circle_outline</span>
      </div>
      <div className='d-flex'>
        <h4>{info.lessons}</h4>
        <span className='badge bg-primary badge-pill'>{info.time} min</span>
      </div>
      <ul>
        {info.listInfos.map((info) => (
          <li key={uuidv4()}>{info}</li>
        ))}
      </ul>
    </div>
  );
};

export default LessonLevelCard;
