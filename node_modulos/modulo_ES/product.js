export class Product {
    constructor(id, name, price) {
        this.name = name;
        this.price = price;
        this.id = id;
    }

    getInfo() {
        return `ID do produto: ${this.id}; Nome: ${this.name}; Preço: ${this.price}`
    }
}

export function createProduct(id, name, price) {
    return new Product(id, name, price);
}

export default 200;

// module.exports = { //Exportando a função e a classe
//     createProduct,
//     Product,
//     defaultPrice,
// };
