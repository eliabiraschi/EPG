import React, { useEffect } from 'react';
import {
  faStar,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Calendar.css'

interface Props {
  range: number[];
}

function Calendar(props: Props) {

  useEffect(() => {
    const topElement = document.getElementById('top');
    if (topElement) {
      topElement.scrollLeft = Math.round(topElement.offsetWidth / 1.3);
    }
  }, []);

  return (
    <div className="top" id="top">
      <div className="star-wrapper">
        <FontAwesomeIcon icon={faStar} size="2x" className="light-grey" />
      </div>
      <div className="calendar">
        {
          props.range.map((offSet) => {
            const date = new Date();
            date.setDate(date.getDate() + offSet);
            const weekday = date.toLocaleDateString('en-US', { weekday: 'short' });
            return (
              <div key={weekday} className={`day${offSet === 0 ? ' today' : ' light-grey'}`}>
                <div className="weekday">{weekday}</div>
                <div className="date">{`${date.getDate()}.${date.getMonth() + 1}.`}</div>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default Calendar;
