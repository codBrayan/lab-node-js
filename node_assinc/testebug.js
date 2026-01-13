console.log("Estou na call stack");

const start = Date.now();
while (Date.now() - start < 1000) {
    setTimeout(() => {
        console.log("Será que eu apareço?");
    }, 5000);
}

console.log("Finalizei o loop síncrono");