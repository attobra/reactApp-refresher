import React, { Component } from 'react'

export default class StateDemoCC extends Component {
  constructor(props) {
    super(props)

    this.state = {
       username : "Nisha",
       pword : "nisha123"
    }
  }

  render() {
    return (
      <div>
        Hello, {this.state.username}.
        your password is {this.state.pword}
      </div>
    )
  }
}
