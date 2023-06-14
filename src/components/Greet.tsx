type GreetProps = {
    name: string
    messageCount: number
    isLoggedIn: boolean
}

export const Greet = (props : GreetProps) => {
  return (
    <div>
      {props.isLoggedIn
       ? ` ${props.name} and the num is ${props.messageCount}` 
       : "no one here"}

    </div>
  )
}
