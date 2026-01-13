console.log("Iniciando")

setTimeout(() => {
    console.log("Esperei 3 segundos")
}, 3000);
console.log("Eu registrei um setTimeout para 3 segundos")
setTimeout(() => {
    console.log("Iniciando callbacks, Esperei 0 segundos")
}, 0);
console.log("Eu registrei um setTimeout para 0 segundos")
setTimeout(() => {
    console.log("Esperei 1 segundo")
}, 1000);
console.log("Eu registrei um setTimeout para 1 segundo")
setTimeout(() => {
    console.log("Esperei 2 segundos")
}, 2000);
console.log("Eu registrei um setTimeout para 2 segundos")
console.log("Finalizando")

