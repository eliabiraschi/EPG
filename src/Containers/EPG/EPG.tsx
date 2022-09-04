import React from 'react';
import type { EPG as EPGType } from '../../Modules/Api';
import Calendar from '../../Components/Calendar/Calendar';
import Channels from '../../Components/Channels/Channels';
import NowMarker from '../../Components/NowMarker/NowMarker';
import TimeLine from '../../Components/TimeLine/TimeLine';
import Program from '../../Components/Program/Program';
import './EPG.css';

interface Props {
  data: EPGType;
}

const daysRange = [-3,-2,-1,0,1,2,3];

function EPG(props: Props) {
  return (
    <div id="EPG">
      <Calendar range={daysRange} />
      <div className="programs-list">
        <Channels channels={props.data.channels} />
        <div className="all-programs">
          <NowMarker />
          <TimeLine />
          {
            props.data.channels.map((channel) => {
              return (
                <div key={channel.id} className="programs-of-the-day">
                  {channel.schedules.map((program, index) => {
                    return (<Program program={program} isLast={index === (channel.schedules.length - 1)} />);
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
