import React, { createContext } from 'react';
import Parents from './components/Parents';

const data = createContext();
const data1 = createContext();

function App() {
  const name = "Usama";
  const last = "Abbasi";

  return (
    <div>
      <data.Provider value={name}>
        <data1.Provider value={last}>
          <Parents />
        </data1.Provider>
      </data.Provider>
    </div>
  );
}

export default App;
export { data, data1 };
