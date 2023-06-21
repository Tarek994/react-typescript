import { useState } from "react"

export const LoggedIn = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handelLogin = () => {
    setIsLoggedIn(true)
  }
  const handelLogout = () => {
    setIsLoggedIn(false)
  }
