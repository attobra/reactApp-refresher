
// import GreetFC from './GreetFC';
// import {HelloFC} from './HelloFC';
// import PropsDemoFC from './components/PropsDemoFC';
// import PropsDemoCC from './components/PropsDemoCC';
// import StateDemoCC from './components/StateDemoCC';
// // import StateDemoFc from './components/StateDemoFc';
// import Layout from './components/Layout';
// import Movies from './components/Movies';
// import Characters from './components/Characters';
// import RoutingDemo from './components/RoutingDemo'
//import { Route, Router} from 'react-router';
import UncontrolledForm from "./components/UncontrolledForm";
import ControlledForm from "./components/ControlledForm";
import TestLogin from "./components/TestLogin"
import LandingPage from "./components/LandingPage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';


function App() {
  return (
    <div className="App">
      {/* <GreetFC />
      <HelloFC />
      <PropsDemoFC uname="Nora" city="Indianapolis" >
        This is some children text.
      </PropsDemoFC>
      <PropsDemoCC uname="Nisha">
        This is the Class component children
      </PropsDemoCC>
      <br />
      <StateDemoCC />
      <StateDemoFc /> */}
      {/* <Router>
        <Route path="/"> <Layout/>
          <Route path="/movies"><Movies /> </Route>
          <Route path="/characters"> <Characters /> </Route>
        </Route>

      </Router> */}
    {/* <RoutingDemo /> */}
      {/* <UncontrolledForm /> */}
      {/* <ControlledForm /> */}
      <LandingPage />
    </div>
  );
}

export default App;
