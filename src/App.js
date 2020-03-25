import React from 'react';

import CounterContextProvider from './contexts/CounterContext'
import CounterDisplay from './components/CounterDisplay'
import IncreaseButton from './components/IncreaseButton'
import DecreaseButton from './components/DecreaseButton'


function App() {
  return (
    <div className="App">
      <CounterContextProvider>
        <CounterDisplay />
        <IncreaseButton />
        <DecreaseButton />
      </CounterContextProvider>
      
    </div>
  );
}

export default App;
