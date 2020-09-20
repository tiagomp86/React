import React from 'react';

export default (props) => {
    return (
        <div>
            <p>{props.nome}<button onClick={props.deleteClickEvent}>Excluir</button> </p>
        </div>
    );
}