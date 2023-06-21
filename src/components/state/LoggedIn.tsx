import { useState } from "react"

export const LoggedIn = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handelLogin = () => {
    setIsLoggedIn(true)
  }
  const handelLogout = () => {
    setIsLoggedIn(false)
  }
  return (
    <div>
      <button onClick={handelLogin}>Login</button>
      <button onClick={handelLogout}>Logout</button>
      <div>User is {isLoggedIn ? "logged in " : "logged out"}</div>
    </div>
  )
}