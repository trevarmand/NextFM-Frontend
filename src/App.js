import React from 'react';
import './App.css';
import MetricPanel from './components/metrics/MetricPanel';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Welcome to the NextFM landing page! We're still under construction.
        </p>
        In the meantime, feel free to
        <a
          className="yellow-text"
          href="https://github.com/trevarmand"
          target="_blank"
          rel="noopener noreferrer"
        >
          visit my Github.
        </a>
      </header>
      <div>
        <MetricPanel/>
      </div>
    </div>
  );
}

export default App;
