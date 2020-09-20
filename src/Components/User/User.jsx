import React from 'react'

export default (props) => {
    return (
        <div>
            <input type="text" onChange={props.changeEvent}></input>
        </div>
    );
}