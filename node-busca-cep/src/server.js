const express = require('express');
const Correios = require('node-correios');
const cors = require('cors');

const correios = new Correios();
const app = express();

app.use(cors()); 

app.get('/', (request, response) => {
   
   const { cep } = request.query;
   
   correios.consultaCEP({ cep: cep })
   .then(result => {
       response.send(result);
   })
   .catch(error => {
       response.send(error);
   });
});

app.listen(3333);