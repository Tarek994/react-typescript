import { PersonProps } from "./Person.type.ts"

export const Person = (props: PersonProps) => {
  return (
    <div>{props.name.first} {props.name.last}</div>
  )
}