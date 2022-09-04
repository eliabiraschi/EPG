import React from 'react';
import type { Channel as ChannelType } from '../../Modules/Api';
import './Channels.css';

interface Props {
  channels: ChannelType[];
}

function Channels(props: Props) {
  return (
    <div className="channels">
      {
        props.channels.map((channel, index) => (
          <div className="channel" key={channel.id}>
            <div className="img-wrapper">
              <img src={`https://picsum.photos/id/${index + 50}/50`} alt={channel.title} title={channel.title} />
            </div>
          </div>
        ))
      }
    </div>
  );
}

export default Channels;
