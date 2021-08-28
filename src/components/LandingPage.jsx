import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import RegistrationForm from './RegistrationForm'
import TestLogin from './TestLogin'
export default function LandingPage() {
  return (
    <div>
      <h1> Welcome to Ageless Green</h1>
      <Router>
        <div> <Link to={'/register'}> Register Here </Link> </div>
        <div> <Link to={'/login'}> LOGIN </Link> </div>

        <Switch>
        <Route path='/register' component={RegistrationForm} />
        <Route path='/login' component={TestLogin} />

        </Switch>

      </Router>
    </div>
  )
}
