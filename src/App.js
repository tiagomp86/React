import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Components/Person/Person';
import User from './Components/User/User';
import Incremento from './Components/Incremento/Incremento';
import Lista from './Components/Lista/Lista';
import Card from './Components/Card/Card';

function App() {

  //Este eh um componente statefull. Possui state. 
  //Quanto menos componentes com state melhor.

  //Essa eh a forma de definir uma variavel de estado: Primeiro valor eh o nome
  //da variavel, o segundo eh o metodo que ira alterar o state (sempre serao esses 2 atributos)
  const [minhaVariavelState, setMinhaVariavelState] = useState('Tiago');
  const [stateIncremento, setStateIncremento] = useState({ valor: 0, incremento: 0 })

  //Essa eh uma funcao Arrow Function.
  //A funcao TrocarValorState ira servir para alterar o valor do nosso state
  const TrocarValorState = () => {
    setMinhaVariavelState('Tiago Alterado');
  }

  //Essa funcao altera o state passando o parametro event
  //Por padrao o event eh passado de forma implicita. Nao eh preciso declarar a propriedade na chamada
  const TrocarValorStateComValor = (event) => {
    setMinhaVariavelState(event.target.value);
  }

  const multiplicadorOnChangeHandler = (event) => {
    setStateIncremento({ valor: stateIncremento.valor, incremento: event.target.value });
    console.log(stateIncremento);
  }

  const IncrementarSoma = () => {
    console.log(stateIncremento.incremento);
    if (stateIncremento.incremento === "") {
      alert('Informe um valor');
    }
    else {
      setStateIncremento({ valor: parseInt(stateIncremento.valor) + parseInt(stateIncremento.incremento), incremento: stateIncremento.incremento });
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
      <div className='CardContent'>
        <Card titulo='#01 - Button alterando o valor do state'>
          <Person name={minhaVariavelState} trocarValor={TrocarValorState} />
        </Card>

        <Card titulo='#02 - Input alterando o valor do state'>
          <User changeEvent={TrocarValorStateComValor} />
        </Card>

        <Card titulo='#03 - Incremento'>
          <Incremento multiplicadorOnChange={multiplicadorOnChangeHandler} buttonClick={IncrementarSoma} valor={stateIncremento.valor} multiplicador={stateIncremento.incremento} />
        </Card>

        <Card titulo='#04 - Lista'>
          <Lista />
        </Card>

      </div>
    </div>
  );
}

export default App;
