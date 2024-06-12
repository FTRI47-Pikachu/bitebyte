import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import TestFileUpload from './components/testFileUpload'; // Import the TestFileUpload component

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-white text-white min-h-screen flex flex-col items-center justify-center"> {/* Updated class list here */}
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className="text-4xl font-bold">Vite + React</h1> {/* Added Tailwind text classes */}
      <div className="card bg-white p-6 rounded-lg shadow-lg"> {/* Added Tailwind background, padding, rounded, and shadow classes */}
        <button className="bg-brand-blue text-white font-bold py-2 px-4 rounded hover:bg-blue-700" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p className="mt-4">
          Edit <code>src/App.tsx</code> and save to test HMR updates.
        </p>
      </div>
      <p className="read-the-docs mt-8">
        Click on the Vite and React logos to learn more
      </p>
      <TestFileUpload /> {/* Render the TestFileUpload component */}
    </div>
  );
}

export default App;
