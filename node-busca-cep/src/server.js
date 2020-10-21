const express = require('express');
const Correios = require('node-correios');
const cors = require('cors');

const correios = new Correios();
const app = express();

app.use(cors()); 

app.get('/', (request, response) => {
   
   const data = request.query;
   
   correios.consultaCEP({ cep: data.cep })
   .then(result => {
       response.send(result);
   })
   .catch(error => {
       console.log(error);
   });
});

app.listen(3333);