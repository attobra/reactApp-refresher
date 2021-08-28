import React from 'react'
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'
import Home from './Home';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
export default function RoutingDemo() {
  return (
    <div>
      <Router>
        <a href="">Click Here</a>
        <div> <Link to={'/home'}> Home </Link> </div>
        <div> <Link to={'/about'}> About </Link> </div>
        <div> <Link to={'/contact'}> Contact </Link> </div>

        <Switch>
        <Route path='/home' component={Home} />
        <Route path='/about' component={AboutUs} />
        <Route path='/contact' component={ContactUs} />

        </Switch>

      </Router>



    </div>
  )
}
