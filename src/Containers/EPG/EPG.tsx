import React from 'react';
import type { EPG as EPGType } from '../../Modules/Api';

interface Props {
  data: EPGType;
}

function EPG(props: Props) {
  const channels = props.data.channels;
  return (<div>
    {
      channels.map(channel => (
        <div>{channel.title}</div>
      ))
    }
  </div>);
}

export default EPG;