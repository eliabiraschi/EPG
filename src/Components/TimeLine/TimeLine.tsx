import React from 'react';
import {
  addLeadingZero,
  convertDurationToWidth,
} from '../../Modules/SpaceTime';
import './TimeLine.css';

const generateTimeLine = () => {
  const res = [];
  for (let hour = 0; hour <= 24; hour++) {
    const time = `${addLeadingZero(hour)}:00`;
    const isLast = hour === 24;
    res.push(
      <div
        style={{
          minWidth: isLast ? 'unset' : `${convertDurationToWidth(60)}rem`,
        }}
        className={isLast ? 'hour-last' : 'hour'}
        key={time}
      >
        <div className="half-border-left"></div>
        <div className="hour-text">{time}</div>
      </div>
    );
  }
  return res;
};

function TimeLine() {
  return (
    <div className="time-line">
      {
        generateTimeLine()
      }
    </div>
  );
}

export default TimeLine;
