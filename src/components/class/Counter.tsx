import { Component } from 'react'



export class Counter extends Component {
    state = {
        count: 0,
    }

    handleClick = () => {
        this.setState((prevState) => ({ count: prevState.count + 1 }))
    }
    render() {
        return (
            <div>
               
            </div>
        )
    }

}
