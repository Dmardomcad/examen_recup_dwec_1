
function calcularDni(num){
    const LETRAS = ['T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','E']
    const resto = num%23
    console.log(num)
    if (num = 0 || num > 99999999 || isNaN(num)){
        console.log("Numero no valido")
        alert("Número no válido")
        return
    }
    let letraDni = LETRAS[resto]
    var dniCompleto = entrada + letraDni
    alert("El dni completo es "+ dniCompleto)
}
let entrada = prompt("Introduzca el número del DNI")
calcularDni(entrada)

// Se ha usado el IDE visual studio code y console log para depurar