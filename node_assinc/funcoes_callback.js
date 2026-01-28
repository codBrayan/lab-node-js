const loginUser = (gmail, password, onSucess, onError) => { // callback aqui é só uma referência e não o valor
    setTimeout(() => {
        console.log('Verificando banco de dados...');
        const error = false;
        if (error) {
            return onError('Erro na conexão');
        }
        onSucess(gmail); // Se usar a callback sem os parênteses, não executa a função, apenas retorna a referência dela

    }, 2000);
};

const getUserVideos = (gmailUser, onSucess, onError) => {
    setTimeout(() => {
        console.log('Buscando vídeos do usuário...');
        const error = false;
        if (error) {
            return onError('Problemas ao buscar os vídeos do usuário: ', gmailUser)
        }
        onSucess(["Video 1", "Video 2", "Video 3"])
    }, 1000);
}

const user = loginUser('teste@teste.com', '123456',
    (gmail) => {
        console.log(`Usuário ${gmail} logado com sucesso!`)
        console.log('Buscando videos ...')
        getUserVideos(gmail,
            (videos) => {
                console.log("Videos recuperados com sucesso!", videos)
            },
            (error) => {
                console.log(error)
            }
        )
    },
    (error) => {
        console.log(error);
    });