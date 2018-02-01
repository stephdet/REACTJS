import React from 'react';

class userInput = (props) => {

    const inputStyle {
        border:'2ps solid red'
    };



    return
        <input type="text" onchange={props.changed} value={props.currentName} />;  

};


export default userInput;


