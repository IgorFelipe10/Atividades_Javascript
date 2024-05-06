self.addEventListener("message", function(event) {
    const inputNumber = event.data;
    const square = inputNumber * inputNumber;
    self.postMessage(square);
});
