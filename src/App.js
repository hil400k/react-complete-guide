import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi I am D</h1>
          <Person name="name1"/>
          <Person name="name2">Hobbies</Person>
          <Person name="name3"/>
      </div>
    );
    //   return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi I am D'));
  }
}

export default App;
