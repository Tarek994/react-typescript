import { useContext } from 'react'
import { ThemeContext } from "./ThemeContext"
import React from 'react'

export const Box = () => {
    const theme = useContext(ThemeContext)
  return (
    <div
      style={{background: theme.primary.main, color:theme.primary.text}}>
      Theme context
    </div>
  )
}
