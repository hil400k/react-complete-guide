import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'name1' },
      { name: 'name2' },
      { name: 'name3' }
    ]
  };
  
  switchNameHandler = () => {
    console.info('clicked', this.state);
    this.setState({
      persons: [
        { name: 'name1DUDULANT' },
        { name: 'name2' },
        { name: 'name3' }
      ]
    });
  }
  
  render() {
    return (
      <div className="App">
        <h1>Hi I am D</h1>
          <button onClick={this.switchNameHandler}>Switch Me</button>
          <Person name={this.state.persons[0].name}/>
          <Person name={this.state.persons[1].name}>Hobbies</Person>
          <Person name={this.state.persons[2].name}/>
      </div>
    );
    //   return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi I am D'));
  }
}

export default App;
