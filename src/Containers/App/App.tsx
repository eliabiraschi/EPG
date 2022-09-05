import React, { useState, useEffect } from 'react';
import Layout from '../Layout/Layout';
import { getEpg } from '../../Modules/Api';
import type { EPG as EPGType } from '../../Modules/Api';
import EPG from '../EPG/EPG';
import './App.css';

function App() {
  const [epg, setEpg] = useState<EPGType | null>(null);
  const [error, setError] = useState<Error | null>(null);

  const requestEpg = () => {
    setEpg(null);
    setError(null);
    getEpg().then(setEpg, setError);
  }

  useEffect(() => {
    requestEpg();
  }, []);
  
  return (
    <Layout>
      {(epg === null && error === null) && <div className="loader">LOADING...</div>}
      {epg && <EPG data={epg} />}
      {error && <div className="error-box">
        <div>{error.message}</div>
        <button className="accent-button" onClick={requestEpg}>Retry</button>
      </div>}
    </Layout>
  );
}

export default App;
