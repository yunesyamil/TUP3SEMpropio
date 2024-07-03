
// Fuction aleatorio
function aleatorio(max, min) {
    let numero = Math.floor(Math.random() * (max - min + 1) + min);
    return numero
}

function eleccion(jugada) {
    let resultado = ""
    if (jugada == 1) {
        resultado = "Piedra 🥌"
    } else if (jugada == 2) {
        resultado = "Papel 📜"
    } else if (jugada == 3) {
        resultado = "Tijera ✂"
    } else {
        resultado = "Mal elegido"
    }
    return resultado
}

// 1 será piedra 2 será papel 3 sera tijera
let jugador = 0
let pc = 0
let triunfos = 0
let perdidas = 0

while (triunfos < 3 && perdidas < 3) {
    pc = aleatorio(3, 1)
    jugador = prompt("Elije: 1 piedra, 2 papel, 3 tijera")
    //alert("Elije jugador: "+jugador)
    alert("Pc elige: " + eleccion(pc))
    alert("Tu eliges: " + eleccion(jugador))

    // Combate
    if (pc == jugador) {
        alert("EMPATE")
    } else if (jugador == 1 && pc == 3) {
        alert("Ganaste")
        triunfos = triunfos + 1
    } else if (jugador == 2 && pc == 1) {
        alert("Ganaste")
        triunfos = triunfos + 1
    } else if (jugador == 3 && pc == 2) {
        alert("Ganaste")
        triunfos = triunfos + 1
    } else {
        alert("Perdiste")
        perdidas = perdidas + 1
    }
}
alert("Ganaste " + triunfos + " veces. Perdiste " + perdidas + " veces.")

