import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: 'name1' },
      { name: 'name2' },
      { name: 'name3' }
    ],
    otherState: 'other'
  });
  
  console.info(personsState);
  
  const switchNameHandler = () => {
    setPersonsState({
      persons: [
        { name: 'name1DUDULANT' },
        { name: 'name2' },
        { name: 'name3' }
      ]
    });
  };
  
  return (
    <div className="App">
      <h1>Hi I am D</h1>
        <button onClick={switchNameHandler}>Switch Me</button>
        <Person name={personsState.persons[0].name}/>
        <Person name={personsState.persons[1].name}>Hobbies</Person>
        <Person name={personsState.persons[2].name}/>
    </div>
  );
  //   return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi I am D'));
}

export default app;
