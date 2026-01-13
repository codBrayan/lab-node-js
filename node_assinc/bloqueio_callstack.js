
const start = Date.now();
console.log("Iniciando bloqueio síncrono...");
setTimeout(() => {
    console.log("Este timeout será executado após o bloqueio.");
}, 0);
while (Date.now() - start < 5000) {
    // Não faz nada, apenas ocupa a Call Stack por 5 segundos
}
console.log("Bloqueio síncrono finalizado!");