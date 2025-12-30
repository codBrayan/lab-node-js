import defaultPrice, { createProduct, Product } from "./product.js";

const prod1 = createProduct(1, "Camiseta", 29.99);
const prod2 = new Product(2, "Calça", defaultPrice);

console.log(prod1.getInfo());
console.log(prod2.getInfo());

console.log("Preço padrão do produto:", defaultPrice);