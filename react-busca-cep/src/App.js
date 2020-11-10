import React, { useState } from 'react';

import api from './services/api';
import ShowAdress from './components/ShowAdress/ShowAdress';

import './global.css';
import './App.css';

function App() {

  const [adress, setAdress] = useState([]);

  const [cep, setCep] = useState('');

  const convertToArray = (obj) => {
    const arr = [obj];
    return arr;
  }

  let idButton;
  let disabled;
  if(cep.length === 8){
    disabled = false;
    idButton = "enabledButton";
  }else{
    disabled = true;
    idButton = "disabledButton";
  }

  const submitHandler = (e) => {
    e.preventDefault();

      api.get(`/?cep=${cep}`).then(response => {
        const array = convertToArray(response.data);
        setAdress(array);
      }).catch(function (error) {
        console.log(error);
      })
  }

  return (
    <div id="app">
      <div className="container">
        <h1>Buscar endereço pelo CEP</h1>
        <form>
          <label htmlFor="cep_number">Digite seu CEP</label>

          <input 
            type="number" 
            name="cep" 
            id="cep_number" 
            value={cep} 
            onChange={(e) => setCep(e.target.value)} 
            required 
          />
          
          <button id={idButton} onClick={submitHandler}  disabled={disabled} type="submit">Buscar</button>
        </form>
      </div>
      <br/>
      <ShowAdress props={adress}/>
    </div>
  );
}

export default App;
