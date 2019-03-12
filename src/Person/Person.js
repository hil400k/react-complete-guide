import React from 'react';
import './Person.css';

const person = (props) => {
    return (
        <div className="Person">
            <p onClick={props.click}>I am a {props.name} {Math.random() * 30}!</p>
            <p>{props.children}</p>
            <input onChange={props.changed} value={props.name} type="text"/>
        </div>
    );
};

export default person;