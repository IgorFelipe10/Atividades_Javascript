const worker = new Worker("quadrado_worker.js");
const workerTriangulo = new Worker("area_triangulo_worker.js");
const workerFatorial = new Worker("fatorial_worker.js");

worker.addEventListener("message", function(event){
    const square = event.data;
    const resultElement = document.getElementById("result");
    resultElement.textContent = "O quadrado do numero é: " + square;
});

function calculateSquare(){
    const inputElement = document.getElementById("inputNumber");
    const inputNumber = Number(inputElement.value);
    worker.postMessage(inputNumber);
}

workerTriangulo.addEventListener("message", function(event){
    const area = event.data;
    const resultElement = document.getElementById("result2");
    resultElement.textContent = "A area do triangulo é: " + area;
});

function calculateArea() {
    workerTriangulo.postMessage({
    base: Number(document.getElementById('inputNumber2').value),
    altura: Number(document.getElementById('inputNumber3').value)
    });
}

function calculateFatorial(){
       const inputNumber = Number(document.getElementById('inputNumber4').value)
       workerFatorial.postMessage(inputNumber)
}

workerFatorial.addEventListener('message', function(event){
    const fatorial = event.data;
    const resultElement = document.getElementById("result3");
    resultElement.textContent = "O fatorial do numero é: " + fatorial;
});
