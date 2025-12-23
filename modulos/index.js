const fs = require('fs')
const { createProduct, Product, defaultPrice } = require("./product");
require("./teste");

// Escrevendo um arquivo
// fs.writeFile('file.js', "Teste", (err) => {
//     if (err) {
//         console.error('Erro ao escrever o arquivo:', err);
//     } else {
//         console.log('Arquivo escrito com sucesso!');
//     }
// });

const product = createProduct(1, "Notebook", 1250);
const product2 = new Product(2, "Smartphone", defaultPrice);
console.log(product.getInfo())
console.log(product2.getInfo())
