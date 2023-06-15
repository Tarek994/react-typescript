import React from 'react';
import './App.css';
import { Greet } from './components/Greet.tsx';
import { Person } from './components/Person.tsx';

function App() {
  const personName = {
    first: "barak",
    last: " obama"
  }

  return (
    <div className="App">
      <Greet name="welcome Tarek" messageCount={10} isLoggedIn={false}/>
      <Person name={personName}/>
    </div>
  );
}

export default App;
