// watched paths. Those paths can be configured at
// config.paths.watched in "brunch-config.js".
//
// However, those files will only be executed if
// explicitly imported. The only exception are files
// in vendor, which are never wrapped in imports and
// therefore are always executed.

// Import dependencies
//
// If you no longer want to use a dependency, remember
// to also remove its path from "config.paths.watched".
import "phoenix_html"
import React from "react"
import ReactDom from "react-dom"
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import axios from "axios"

		   
class HelloReact extends React.Component {
  render() {
    return (
    <Router>
      <div>
	<Route exact path="/" component={Home}/>
	<Route exact path="/login" component={Login}/>
      </div>
    </Router>
    )
  }
}

class Home extends React.Component {
constructor() {
  super();
  this.state= {plan: "nie udalo mi sie sciagnac planu :("};
}
componentWillMount() {
  axios.post('/api/training_plan',
    {
      gender: "male",
      age: 30
    })
    .then(response => {
      console.log(response.data);
      this.setState({plan: response.data.plan});
    })
    .catch(error => {
      console.log(error);
    });
}
render() {
  return (
      <div>
        <h1>Boring Home Page!</h1>
	  <p>Plan: {this.state.plan}</p>
	<Link to="/login">Login</Link>
      </div>
    )
  }
}
		    

class Login extends React.Component {
  render() {
    return(
      <div>
        <h1>Hello Boring Login Page!</h1>
	<Link to="/">Home</Link>
      </div>
    )
  }
}

ReactDom.render(
  <HelloReact/>,
  document.getElementById("hello-react")
)

// Import local files
//
// Local files can be imported directly using relative
// paths "./socket" or full ones "web/static/js/socket".

// import socket from "./socket"
