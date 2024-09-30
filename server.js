const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const db = require('./model/db');

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

    db.cadastrarCliente(nome, contato, email, uf, cidade, rua, numero, bairro, cep, criarUsuario);
    
    res.send(`Nome: ${nome}`);
  });

  app.post('/api/excluircliente', (req, res) => {
    const {id} = req.body;
    console.log("Chegou no excluir cliente");
    console.log(id);

    db.excluirCliente(id);
    
    res.send([]);
  });

  app.post('/api/consultacliente', async (req, res) =>  {
    /*const {nome, contato, email, uf, cidade, rua, numero, bairro, cep, criarUsuario} = req.body;*/

    let resultado = await db.consultaCliente(); 
    console.log(resultado);
    res.send(resultado);
  });

app.post('/api/cadastroanimal', (req, res) => {
    const {nome, tipo, porte, sexo, cor, obs} = req.body;
    console.log(nome);
    console.log(tipo);
    console.log(porte);
    console.log(sexo);
    console.log(cor);
    console.log(obs);
    

    db.cadastrarAnimal(nome, tipo, porte, sexo, cor, obs);

    res.send(`Nome: ${nome}`);
});

app.post('/api/consultaanimal', async (req, res) =>  {

    let resultado = await db.consultaAnimal(); 
    console.log(resultado);
    res.send(resultado);
}); 
  
app.post('/api/excluiranimal', (req, res) => {
    const {id} = req.body;
    console.log("Chegou no excluir animal");
    console.log(id);

    db.excluirAnimal(id);
    
    res.send([]);
});  

app.post('/api/cadastrousuario', (req, res) => {
    const {username, email, password, perfil} = req.body;
    console.log(username);
    console.log(email);
    console.log(password);
    console.log(perfil);
    
    db.cadastrarUsuario(username, email, password, perfil);

    res.send(`Username: ${username}`);
});	    

app.post('/api/consultausuario', async (req, res) =>  {

  let resultado = await db.consultaUsuario(); 
  console.log(resultado);
  res.send(resultado);
}); 

app.post('/api/excluirusuario', (req, res) => {
  const {id} = req.body;
  console.log("Chegou no excluir usuario");
  console.log(id);

  db.excluirUsuario(id);
  
  res.send([]);
});  

app.post('/api/agenda', (req, res) => {  
    const {cliente, data, animal, timeInput1, timeInput2, obs} = req.body;  
    console.log(cliente);
    console.log(data);
    console.log(animal);
    console.log(timeInput1);
    console.log(timeInput2);
    console.log(obs);

    db.agendar(data, timeInput1, timeInput2);

    res.send(`Cliente: ${cliente}`);

});    

app.post('/api/consultaagenda', async (req, res) =>  {

  let resultado = await db.consultaAgenda(); 
  console.log(resultado);
  res.send(resultado);
}); 

app.post('/api/excluiragenda', (req, res) => {
  const {id} = req.body;
  console.log("Chegou no excluir agenda");
  console.log(id);

  db.excluirAgenda(id);
  
  res.send([]);
});  





// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor a correr em http://localhost:${port}`);
});