import React from 'react';
import './App.css';
import { Greet } from './components/Greet.tsx';

function App() {
  return (
    <div className="App">
      <Greet name="welcome Tarek" messageCount={10} isLoggedIn={false}/>
    </div>
  );
}

export default App;
