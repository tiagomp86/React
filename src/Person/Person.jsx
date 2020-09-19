import React from 'react';

export default (props) => {
    return (
        <div>
            <p>Meu nome eh : {props.name}</p>
            <button onClick={props.trocarValor}>Trocar valor</button>
        </div>
    );
}