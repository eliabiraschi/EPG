import React, { useEffect } from 'react';
import {
	faStar,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { EPG as EPGType } from '../../Modules/Api';
import './EPG.css';

interface Props {
  data: EPGType;
}

const daysRange = [-3,-2,-1,0,1,2,3];

const addLeadingZero = (input: number): string => {
  return ('0' + input).slice(-2);
}

const parseTime = (start: string, end: string): string => {
  const dateStart = new Date(start);
  const dateEnd = new Date(end);
  return `${addLeadingZero(dateStart.getHours())}:${addLeadingZero(dateStart.getMinutes())} - ${addLeadingZero(dateEnd.getHours())}:${addLeadingZero(dateEnd.getMinutes())}`
};

const programDurationInSec = (start: string, end: string): number => {
  const dateStart = new Date(start);
  const dateEnd = new Date(end);
  return Math.round(dateEnd.getTime() - dateStart.getTime());
}

const convertDurationToWidth = (duration: number): number => duration / 100000;

const isNow = (start: string, end: string): boolean => {
  const dateStart = new Date(start);
  const dateEnd = new Date(end);
  const now = new Date();
  const notTime = now.getTime();
  return (notTime >= dateStart.getTime() && notTime < dateEnd.getTime());
}

function EPG(props: Props) {
  const channels = props.data.channels;

  useEffect(() => {
    const topElement = document.getElementById('top');
    if (topElement) {
      topElement.scrollLeft = Math.round(topElement.offsetWidth / 2);
    }
  }, []);

  return (
    <div id="EPG">
      <div className="top" id="top">
        <div className="star-wrapper">
          <FontAwesomeIcon icon={faStar} size="2x" className="star-icon" />
        </div>
        <div className="calendar">
          { 
            daysRange.map((offSet) => {
              const date = new Date();
              date.setDate(date.getDate() + offSet);
              return (
                <div className={`day ${offSet === 0 ? ' today' : ''}`}>
                  <div className="weekday">{ date.toLocaleDateString('en-US', { weekday: 'short' })}</div>
                  <div className="date">{`${date.getDate()}.${date.getMonth() + 1}.`}</div>
                </div>
              )
            })
          }
        </div>
      </div>
      <div className="programs-list">
        <div className="left-side">
          {
            channels.map((channel, index) => (
              <div className="channel" key={channel.id}>
                <div className="img-wrapper">
                  <img src={`https://picsum.photos/id/${index+50}/50`} alt={channel.title} title={channel.title} />
                </div>
              </div>
            ))
          }
        </div>
        <div className="all-programs">
          {
            channels.map((channel) => {
              return (
                <div key={channel.id} className="programs-of-the-day">
                  {channel.schedules.map((program) => {
                    return (
                      <div 
                        key={program.id}
                        className={`program ${isNow(program.start, program.end) ? ' now' : ''}`}
                        style={{
                          minWidth: `${convertDurationToWidth(programDurationInSec(program.start, program.end))}rem`,
                        }}
                      >
                        <div><strong>{program.title}</strong></div>
                        <div>{parseTime(program.start, program.end)}</div>
                      </div>
                    )
                  })}
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  );
}

export default EPG;