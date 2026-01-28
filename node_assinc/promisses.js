const loginUser = (gmail, password) => {
    return new Promise((resolve, reject) => {
        // Aqui é executado o que precisa ser feito
        //Simulando uma busca no BD:
        setTimeout(() => {
            const error = false;
            if (error) {
                reject("Erro na conexão com o BD!")
            } else {
                resolve(gmail)
            }
        }, 2000)
    })
}

const getUserVideos = (gmail) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const error = true;
            if (error) {
                reject("Erro ao buscar os videos do usuário")
            } else {
                resolve(["video 1", "video 2", "video 3"])
            }
        }, 1000)
    })
}

const user = loginUser("brayan@123", "senhaCabeluda123")
    .then(
        (gmail) => {
            console.log('Usuário logado com sucesso', gmail)

            return getUserVideos(gmail);
        })
    .then(
        (videos) => {
            console.log("Aqui estão os videos do usuário: ", videos)
        })
    .catch(
        (error) => { console.log(error) }
    ) 
