import React from 'react';

export default (props) => {
    return (
        <div>
                <input type="numeric" onChange={props.multiplicadorOnChange} value={props.multiplicador}></input>
                <button onClick={props.buttonClick}>Somar</button>
                <p>Valor: {props.valor}</p>
        </div>
    );
}