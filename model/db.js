async function connect(){

    if(global.connection && global.connection.state != 'disconnected' ){
        return global.connection;
    }

    const mysql = require('mysql2/promise');
    const connection =  await mysql.createConnection("mysql://root:admin@localhost:3306/bdpetshop");
 

    console.log("Conectou no MYSQL!");
    global.connection = connection;
    
 
    return connection;

}

connect();

async function cadastrarCliente(nome, contato, email, uf, cidade, rua, numero, bairro, cep, criarUsuario){    

     const conn = await connect();
     const sql = "INSERT INTO Cliente (nomeCompleto, contato, email, rua, numero, bairro, cep, uf) values (?, ?, ?, ?, ?, ?, ?, ?) "; 

     const values = [nome, contato, email, rua, numero, bairro, cep, uf];
     console.log(sql, values);
     let resultado = await conn.query(sql, values).then(() => {
                               console.log('Cadastro realizado com sucesso!');
     }).catch((error) => {
                               console.error('Erro ao executar cadastro:', error);
                       });
}

async function consultaCliente(){    

    const conn = await connect();
    const sql = "SELECT * FROM Cliente";

    let resultado = await conn.query(sql, []);
   // console.log(resultado);
    return resultado;
}

async function excluirCliente(id){    

    const conn = await connect();
    const sql = "DELETE FROM Cliente WHERE id = ?"; 

    const values = [id];
    console.log(sql, values);
    await conn.execute(sql, values).then(() => {
                              console.log('Excluido com sucesso!');
    }).catch((error) => {
                              console.error('Erro ao excluir:', error);
                      });
}


async function cadastrarAnimal(nome, tipo, porte, sexo, cor, obs){

    const conn = await connect();
    const sql = "INSERT INTO Animal (nome, tipo, porte, sexo, cor, observacoes) values (?, ?, ?, ?, ?, ?) ";

    const values = [nome, tipo, porte, sexo, cor, obs];
    console.log(sql, values);
    let resultado = await conn.query(sql, values).then(() => {
                              console.log('Cadastro realizado com sucesso!');
    }).catch((error) => {
                              console.error('Erro ao executar cadastro:', error);
                      });
}  

async function consultaAnimal(){    

    const conn = await connect();
    const sql = "SELECT * FROM Animal";

    let resultado = await conn.query(sql, []);
   console.log(resultado);
    return resultado;
}

async function excluirAnimal(id){    

    const conn = await connect();
    const sql = "DELETE FROM Animal WHERE id = ?"; 

    const values = [id];
    console.log(sql, values);
    await conn.execute(sql, values).then(() => {
                              console.log('Excluido com sucesso!');
    }).catch((error) => {
                              console.error('Erro ao excluir:', error);
                      });
}

async function cadastrarUsuario(username, email, password, perfil){
    
        const conn = await connect();
        const sql = "INSERT INTO Usuario (nomeCompleto, email, senha, tipoCliente) values (?, ?, ?, ?) ";
    
        const values = [username, email, password, perfil];
        console.log(sql, values);
        let resultado = await conn.query(sql, values).then(() => {
                                console.log('Cadastro realizado com sucesso!');
        }).catch((error) => {
                                console.error('Erro ao executar cadastro:', error);
                        });
}

async function consultaUsuario(){    

    const conn = await connect();
    const sql = "SELECT * FROM Usuario";

    let resultado = await conn.query(sql, []);
   console.log(resultado);
    return resultado;
}

async function excluirUsuario(id){    

    const conn = await connect();
    const sql = "DELETE FROM Usuario WHERE id = ?"; 

    const values = [id];
    console.log(sql, values);
    await conn.execute(sql, values).then(() => {
                              console.log('Excluido com sucesso!');
    }).catch((error) => {
                              console.error('Erro ao excluir:', error);
                      });
}

async function agendar ( data, timeInput1, timeInput2){
        const conn = await connect();
        const sql = "INSERT INTO Agendar (dataAgenda, horarioInicio, horarioFim) values (?, ?, ?) ";

        const values = [data, timeInput1, timeInput2];
        console.log(sql, values);
        let resultado = await conn.query(sql, values).then(() => {
                                console.log('Cadastro realizado com sucesso!');
        }).catch((error) => {
                                console.error('Erro ao executar cadastro:', error);
                        });
} 

async function consultaAgenda(){    

    const conn = await connect();
    const sql = "SELECT * FROM Agendar";

    let resultado = await conn.query(sql, []);
   console.log(resultado);
    return resultado;
}

async function excluirAgenda(id){    

    const conn = await connect();
    const sql = "DELETE FROM Agendar WHERE id = ?"; 

    const values = [id];
    console.log(sql, values);
    await conn.execute(sql, values).then(() => {
                              console.log('Excluido com sucesso!');
    }).catch((error) => {
                              console.error('Erro ao excluir:', error);
                      });
}

module.exports = {cadastrarCliente,
                  consultaCliente, 
                  excluirCliente,
                  cadastrarAnimal,
                  consultaAnimal,
                  excluirAnimal,
                  cadastrarUsuario,
                  consultaUsuario,
                  excluirUsuario,
                  agendar,
                  consultaAgenda,
                  excluirAgenda
};