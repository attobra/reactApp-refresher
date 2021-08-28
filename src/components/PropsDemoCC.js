import React, { Component } from 'react'

export default class PropsDemoCC extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    return (
      <div>
        Hello, this is from the class constructor props {this.props.uname}
        <br/>
      {this.props.children}
      </div>
    )
  }
}
