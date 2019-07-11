import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import axios from "axios";
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
    // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  componentDidMount() {
    axios
      .get("http://localhost:3333/smurfs")
      .then(res => 
        this.setState({ smurfs: res.data }
      ));
  };

  addNewSmurf = newSmurf => {
    axios
      .post("http://localhost:3333/smurfs", this.state)
      .then(res => {
        this.props.addSmurf(res.data)
    });
  };

  render() {
    return (
      <div className="App">
      <nav>
        <NavLink to="/smurf-form">Add Smurf</NavLink>
        <NavLink to="/smurfs"> The Village</NavLink>
      </nav>
          
          <Route 
            exact path="/" path="/smurfs" />
          <Route
            path="/smurf-form"
            render={props => (
            <SmurfForm {...props} />
          )}
        />
      </div>
    );
  }
}

export default App;
