function calcularFactorial(numero){
    //Se almacena el resultado en una variable
    let resultado = 1
    //Iteramos sobre el número y multiplicamos el resultado de la multiplicación por el siguiente número hasta llegar al introducido.
    for (let num = 1; num <= numero; num++){
        resultado *= num
    }
    return resultado
}
// Pedimos el número por pantalla
let entrada = prompt("Numero")
console.log(calcularFactorial(entrada))

// Se ha usasdo el IDE visual studio y para depurar se ha usado varios console.log