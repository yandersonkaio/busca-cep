import React from 'react';

import './index.css';
import '../../global.css';

function ShowAdress({props}) {

    if(!props || props.length === 0) return null;
    
    return (
        <div id="adress">
            <h1>Endereço encontrado:</h1>
            <ul className="list-group">
                {props.map(item => 
                <li className="list-group-item" key={item.cep}>
                    <span>CEP: {item.cep}</span>
                    <span>Logradouro: {item.logradouro}</span>
                    <span>Bairro: {item.bairro}</span>
                    <span>Cidade: {item.localidade}</span>
                    <span>Estado: {item.uf}</span>
                </li>)}
            </ul>
        </div>
    );
}

export default ShowAdress;