import React, { useState } from 'react';
import {
  getDistanceFromMidnight,
} from '../../Modules/TimeManipulation';
import './NowMarker.css';

function NowMarker() {
  const [refreshCount, setRefreshCount] = useState(0);
  setInterval(() => {
    setRefreshCount(refreshCount + 1);
  }, 60 * 1000);

  return (
    <div
      x-data-refesh-count={refreshCount}
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
