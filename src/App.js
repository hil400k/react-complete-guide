import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        persons: [
            { name: 'name1' },
            { name: 'name2' },
            { name: 'name3' }
        ],
        showPersons: false
    };

    switchNameHandler = (newName) => {
        console.info('clicked', this.state);
        this.setState({
            persons: [
                { name: newName },
                { name: 'name2' },
                { name: 'name3' }
            ]
        });
    }

    nameChangeHandler = (event) => {
        this.setState({
            persons: [
                { name: 'Max' },
                { name: event.target.value },
                { name: 'name3' }
            ]
        });
    }

    togglePersonsHandler() {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow})
    }

    render() {
        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px'
        };

        let persons = null;

        if (this.state.showPersons) {
            persons = (
                <div>
                    <Person name={this.state.persons[0].name}></Person>
                    <Person changed={this.nameChangeHandler}
                            click={this.switchNameHandler.bind(this, 'rurururur')}
                            name={this.state.persons[1].name}>Hobbies</Person>
                    <Person name={this.state.persons[2].name}></Person>
                </div>
            );
        }

        return (
            <div className="App">
                <h1>Hi I am D</h1>
                <button style={style} onClick={() => {this.togglePersonsHandler()}}>Toggle Persons</button>
                {persons}
            </div>
        );
        //   return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi I am D'));
    }
}

export default App;
