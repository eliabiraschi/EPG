interface Program {
  title: string;
  id: string;
  start: string;
  end: string;
}

interface Channel {
  id: string;
  title: string;
  images: {
    logo: string;
  }
  schedules: Program[];
}

export interface EPG {
  channels: Channel[];
}

const BASE_URL = 'http://localhost:1337';

export async function getEpg(): Promise<EPG> {
  const URI = [BASE_URL, 'epg'].join('/');
  const response = await fetch(URI);
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  
  const epg = await response.json();
  return epg as EPG;
}
