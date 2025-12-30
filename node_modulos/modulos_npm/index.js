(async () => {
    const uuid = await import('uuid');
    console.log("Hello World!!");

    const id = uuid.v4();
    console.log(`UUID Gerado: ${id}`);
})();
