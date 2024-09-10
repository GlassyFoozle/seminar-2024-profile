import './App.css';

import { useState } from 'react';

import brianpfp from './assets/brian_githubpfp.jpg';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="pfp">
        <a
          href="https://github.com/GlassyFoozle"
          target="_blank"
          rel="noreferrer"
        >
          <img src={brianpfp} className="logo react" alt="React logo" />
        </a>
        <h1>김채민</h1>
      </div>
      <div className="card">
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
