import React from 'react';
import {
  getDistanceFromMidnight,
} from '../../Modules/SpaceTime';
import './NowMarker.css';

function NowMarker() {
  return (
    <div
      className="now-marker"
      style={{
        left: `${getDistanceFromMidnight()}rem`,
      }}
    >
      <div className="now-marker-top"></div>
    </div>
  );
}

export default NowMarker;
