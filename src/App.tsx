import React from 'react';
import './App.css';
import { Greet } from './components/Greet.tsx';
import { Person } from './components/Person.tsx';
import { PersonList } from './components/PersonList.tsx';

function App() {
  // const personName = {
  //   first: "Bruce",
  //   last: " Wayne"
  // }

  // const nameList = [
  //   {
  //     first: "Bruce",
  //     last: " Wayne"
  //   },
  //   {
  //     first: "Clark",
  //     last: " Kent"
  //   },
  //   {
  //     first: "Princess",
  //     last: "Diana"
  //   }
  // ]


  return (
    <div className="App">
      {/* <Greet name="welcome Tarek" messageCount={10} isLoggedIn={false} />
      <Person name={personName} />
      <PersonList names={nameList} /> */}

      <Button handleClick={(event, id) => {
        console.log('button Clicked', event);
      }} />
    </div>
  );
}

export default App;
