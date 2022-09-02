import React, { useState, useEffect } from 'react';
import Layout from '../Layout/Layout';
import { getEpg } from '../../Modules/Api';
import type { EPG as EPGType } from '../../Modules/Api';
import EPG from '../EPG/EPG';
import './App.css';

function App() {
  const [epg, setEpg] = useState<EPGType | null>(null);
  useEffect(() => {
    getEpg().then(setEpg);
  }, []);
  return (
    <Layout>
      {epg === null && <div>LOADING</div>}
      {epg && <EPG data={epg} />}
    </Layout>
  );
}

export default App;
