import React, { Component } from 'react'

class Ninja extends Component {
    constructor(){
        super()
        this.state = {
            name: 'click'
        }
    }
  
    clickHandle = () => {
        this.setState({
            name: 'clicked'
        })
    }
    
    render() {
        const test = 'mohana'
        console.log(test);
        return (
            <div>
                {test}
        <button onClick={this.clickHandle}>{this.state.name}</button>
            </div>
        )
    }
}

export default Ninja
