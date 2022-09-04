import React from 'react';
import {
  getMinutesFromMidnight,
} from '../../Modules/SpaceTime';
import './NowMarker.css';

function NowMarker() {
  return (
    <div
      className="now-marker"
      style={{
        left: `${(getMinutesFromMidnight() * 0.6) + 5}rem`,
      }}
    >
      <div className="now-marker-top"></div>
    </div>
  );
}

export default NowMarker;
