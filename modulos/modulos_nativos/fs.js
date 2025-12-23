const fs = require('fs');
const path = require('path');

// Criar pasta em diretorio
fs.mkdir(path.join(__dirname, "new-folder"), (error) => {
    console.log(error)
});

// Criar um arquivo nessa nova pasta
fs.writeFile(path.join(__dirname, "new-folder", "new-file.txt"), "Hello World!", (error) => {
    console.log(error);
});

fs.appendFile(path.join(__dirname, "new-folder", "new-file.txt"), "Hello World!2", (error) => {
    console.log(error);
})
