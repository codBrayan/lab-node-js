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
            };
        }, 2000);
    });
};

const getUserVideos = (gmail) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const error = false;
            if (error) {
                reject("Erro ao buscar os videos do usuário");
            } else {
                resolve(["video 1", "video 2", "video 3"]);
            };
        }, 1000);
    });
};


const getUserData = async () => {
    // try {
    //     console.log("Efetuando login");
    //     const user = await loginUser("brayan@gmail.com", "senhacabulosa");
    //     console.log(`Olá ${user}! Vou coletar seus videos`);
    //     const videosUser = await getUserVideos(gmail);
    //     console.log("Aqui estão seus videos: ", videos)
    // } catch (error) {
    //     console.log(error)
    // }
    let gmail = "brayan@21321"
    try {
        const results = await Promise.all([loginUser(gmail, "1234"), getUserVideos(gmail)]) //Usando o promise.all, se der um erro ele não executa as outras promisses
        console.log(results)
        console.log(`Olá ${results[0]}! Aqui estão seus videos: ${results[1]}`)
    } catch (error) {
        console.log(error)
    }
};
getUserData();