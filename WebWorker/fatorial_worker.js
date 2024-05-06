self.addEventListener("message", function(event) {
    const inputNumber = event.data;
    let fatorialNumero = 1;

    for (let i = 2; i <= inputNumber; i++){
        fatorialNumero = i * fatorialNumero
    }
    self.postMessage(fatorialNumero);
});
