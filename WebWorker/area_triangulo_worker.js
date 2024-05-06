self.addEventListener("message", function(event){
    const sides = event.data;
    const base = sides.base;
    const altura = sides.altura;

    const area = base * altura /2;
    postMessage(area)
});
