import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default class Layout extends Component {
  constructor(props) {
    super(props)

    this.state = {
       welcome: "Welcome to star Wars Trivia!"
    }
  }

  render() {
    return (
      <div>
        <Link to="/">Home</Link> |
        <Link to="/movies">Movies</Link> |
        <Link to="/characters">Characters</Link>
        <h1>{this.state.welcome}</h1>

      </div>
    )
  }
}
