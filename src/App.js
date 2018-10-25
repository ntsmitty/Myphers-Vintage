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
    console.log('hi', this.state.users)
   return (
    <ul className="databro">
     {this.state.users.map(users =>  
       <li key={users.id}>{users.customer}</li>
     )}
    </ul>
    )
  }
}

export default App;
