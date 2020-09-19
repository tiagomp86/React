import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
import User from './User/User';
import Incremento from './Incremento/Incremento';

function App() {

    //Este eh um componente statefull. Possui state. 
    //Quanto menos componentes com state melhor.

    //Essa eh a forma de definir uma variavel de estado: Primeiro valor eh o nome
    //da variavel, o segundo eh o metodo que ira alterar o state (sempre serao esses 2 atributos)
    const [minhaVariavelState, setMinhaVariavelState] = useState('Tiago');
    const [stateIncremento, setStateIncremento] = useState({valor: 0, incremento: 0})

    //Essa eh uma funcao Arrow Function.
    //A funcao TrocarValorState ira servir para alterar o valor do nosso state
    const TrocarValorState = () => {
      setMinhaVariavelState('Tiago Alterado');
    }

    //Essa funcao altera o state passando o parametro event
    //Por padrao o event eh passado de forma implicita. Nao eh preciso declarar a propriedade na chamada
    const TrocarValorStateComValor = (event) =>{
      setMinhaVariavelState(event.target.value);
    }

    const multiplicadorOnChangeHandler = (event) =>{
        setStateIncremento({valor: stateIncremento.valor, incremento: event.target.value});
        console.log(stateIncremento);
    }

    const IncrementarSoma = () => {
      console.log(stateIncremento.incremento);
      if (stateIncremento.incremento === ""){
        alert('Informe um valor');
      }
      else {
        setStateIncremento({valor: parseInt(stateIncremento.valor) + parseInt(stateIncremento.incremento), incremento: stateIncremento.incremento});
        console.log(stateIncremento);
      }
    }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Projeto Learn React
        </p>
      </header>
      <body>
        <h3>Button alterando o valor do state</h3>
        <Person name={minhaVariavelState} trocarValor={TrocarValorState}></Person>

        <h3>Input alterando o valor do state</h3>
        <User changeEvent={TrocarValorStateComValor}></User>

        <h3>Incremento</h3>
        <Incremento multiplicadorOnChange={multiplicadorOnChangeHandler} buttonClick={IncrementarSoma} valor={stateIncremento.valor} multiplicador={stateIncremento.incremento}></Incremento>
      </body>
    </div>
  );
}

export default App;
