import React from "react";
import "./App.css";
import   Button from "./components/Button.tsx"
import   Input from "./components/Input.tsx"
import { Container } from "./components/Container.tsx"
import { User } from "./components/state/User.tsx"
import { Box } from "./components/context/Box.tsx"
import { ThemeContextProvider } from "./components/context/ThemeContext.tsx"
import { Private } from "./components/auth/Private.tsx"
import { Profile } from "./components/auth/Profile.tsx"

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

      {/* <Button handleClick={(event, id) => {
        console.log('button Clicked', event);
      }} />
      <Input value='' handleChange={(event) => console.log(event)}/>
      <Container styles={{border: '1px solid black', padding: '1rem'}}/> */}
      {/* <User/> */}
      {/* <ThemeContextProvider>
        <Box />
      </ThemeContextProvider> */}
    </div>
  );
}

export default App;
