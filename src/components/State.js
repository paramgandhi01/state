import React, { Component } from 'react'

 class State extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              message:"hello peter"
         }
     }
     change=()=>{
         this.setState({
             message:"i'm so confused rn"
         })
     }
     
    render() {
        return (
            <div>
                <h2>{this.state.message}</h2>
                <button onClick={this.change}>fast forward</button>
            </div>
        )
    }
}

export default State
