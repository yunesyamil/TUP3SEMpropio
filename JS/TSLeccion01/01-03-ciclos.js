// Ciclo While
let contador = 0;
while (contador < 3) { // condicional
    console.log(contador);
    contador++;
}

console.log("Fin de ciclo while");

// ciclo Do While
let conteo = 0;
do {
    console.log(conteo);
    conteo++; // ++ operador de post incremento
} while (conteo < 3)
console.log("Fin de ciclo do while");

// for
// ya tiene definido la INICIALIZACIÓN, LA REVISIÓN Y EL INCREMENTO 
//O DECREMENTO DEL CONTADOR
for (let contando = 0; contando < 3; contando++) { // inicializamos la variable dentro del ciclo
    console.log(contando);
}

// se ejecuta una sola vez, 
// 1) se inicializa la variable, 
// 2) COMPARA LA CONDICIÓN TIPO BOOL 
// 3) INCREMENTA O DECREMENTA

console.log("Fin de ciclo for");

// break
for (let contando = 0; contando <= 10; contando++) {
    if (contando % 2 == 0) {
        console.log(contando)// muestra los pares entre 0 y 10
        break; // rompe cualquier estructura y finaliza al cumplir la primer condición
    }
}
console.log("Termina el ciclo al encontrar el primer número par");

// Continue
for (let contando = 0; contando <= 10; contando++) {
    if (contando % 2 !== 0) { // cambiamos la logica preguntando si es dif a 0, cada vez que sea F
        continue; // ir a la ste iteración    
    }
    console.log(contando);
}
console.log("Termina el ciclo");

// Etiquetas Labels

inicio:
for (let contando = 0; contando <= 10; contando++) {
    if (contando % 2 !== 0) {
        break inicio;   // inicio indica que rompa el ciclo y salga
    }
    console.log(contando);
}
console.log("Termina el ciclo");