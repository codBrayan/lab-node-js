const path = require('path')


const filePath = __filename;

// Funções principais
console.log("Nome do arquivo:", path.basename(filePath));
console.log("Extensão do arquivo: ", path.extname(filePath))
console.log("Nome da pasta: ", path.dirname(filePath))
console.log 
