
function calcularDni(num){
    const LETRAS = ['T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','E']
    const resto = num%23
    console.log(num)
    if (num = 0 || num > 99999999){
        console.log("Numero no valido")
        return
    }
    let letraDni = LETRAS[resto]
    console.log(letraDni)
    return letraDni
}
let entrada = prompt("Introduzca el número del DNI")
calcularDni(entrada)

// Se ha usado visual studio y console logs