// Declarar arreglos de diferentes maneras:
//let autos = new Array('Ferrari', 'Ranault', 'BMW') // fORMA ANTIGUA NO RECOMENDABLE
//Declaramos la variable y definimos los elementos del arreglo
const autos = ['Ferrari', 'Ranault', 'BMW'] //Usamos const porque la referencia ya no se va a modificar
console.log(autos)

//Recorremos elementos de un arreglo:
console.log(autos[0]) // Accedemos al Array y en el índice el elemento
console.log(autos[2])
// Recorremos con un ciclo
for (let i = 0; i < autos.length; i++) { //lengt para mostrar uno del arreglo
    console.log(i + ': ' + autos[i])
}
//Modificamos los elementos del Array
autos[1] = 'Volvo'
console.log(autos[1])

//Agregamos elementos con ".push"
autos.push('Audi') // Agregamos al final
console.log(autos)

//Otras formas de agregar con ".length"
autos[autos.length] = 'Porche'
console.log(autos)

//Otra forma ¡¡¡CON CUIDADO!!!
//Tomar bien en cuenta el indice en que se agrega, no saltar espacios
autos[6] = 'Renault'
console.log(autos)

//Como preguntar si es en Array
console.log(Array.isArray(autos)) //pREGUNTAMOS A TRAVES DE .isArray (t or f)

console.log(autos instanceof Array) // si es una instancia (t or f)