import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = { users: [] }

  componentDidMount() { 
   return fetch("http://localhost:5000/testing", {
  
   })
     .then(res => res.json())
     .then(users => this.setState({ users }))
     .catch((err) => console.log('Error Caught')) 
  }; 

  render() {
    console.log(this.state.users)
   return (
    <div>{this.state.users}</div>
    )
  }
}

export default App;
