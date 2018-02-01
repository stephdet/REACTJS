import React from 'react';

const person = (props)=> {
    return (
    <div>
    <h1 onClick={props.click}>je suis {props.name} et j'ai {props.age} années !</h1>
    <p>{props.children}</p>
    </div>
    )
};

export default person;

