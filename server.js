const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Servir ficheiros estáticos (como o HTML)
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

// Definir uma rota GET
app.get('/api/mensagem', (req, res) => {
  res.json({ mensagem: 'Olá, esta é a resposta da rota!' });
});


app.post('/api/cadastrocliente', (req, res) => {
    const {nome, contato, email, uf, cidade, rua, numero, bairro, cep, criarUsuario} = req.body;
    console.log(nome);
    console.log(contato);
    console.log(email);
    console.log(uf);
    console.log(cidade);
    console.log(rua);
    console.log(numero);
    console.log(bairro);
    console.log(cep);
    console.log(criarUsuario);

    res.send(`Nome: ${nome}`);
  });

app.post('/api/cadastroanimal', (req, res) => {
    const {nome, tipo, porte, sexo, cor, obs} = req.body;
    console.log(nome);
    console.log(tipo);
    console.log(porte);
    console.log(sexo);
    console.log(cor);
    console.log(obs);
    

    res.send(`Nome: ${nome}`);
  });

app.post('/api/cadastrousuario', (req, res) => {
    const {username, email, password, perfil} = req.body;
    console.log(username);
    console.log(email);
    console.log(password);
    console.log(perfil);

    res.send(`Username: ${username}`);
});	    

app.post('/api/agenda', (req, res) => {  
    const {cliente, data, animal, timeInput1, timeInput2, obs} = req.body;  
    console.log(cliente);
    console.log(data);
    console.log(animal);
    console.log(timeInput1);
    console.log(timeInput2);
    console.log(obs);

    res.send(`Cliente: ${cliente}`);

});    

  




// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor a correr em http://localhost:${port}`);
});