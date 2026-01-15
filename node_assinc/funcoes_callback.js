const loginUser = (gmail, password, callback) => { // callback aqui é só uma referência e não o valor
    setTimeout(() => {
        console.log('Verificando banco de dados...');
        callback(gmail);
        callback; // Se usar a callback sem os parênteses, não executa a função, apenas retorna a referência dela

    }, 2000);
};

const user = loginUser('teste@teste.com', '123456', (user) => { //
    console.log(`Usuário ${user} logado com sucesso!`);
});