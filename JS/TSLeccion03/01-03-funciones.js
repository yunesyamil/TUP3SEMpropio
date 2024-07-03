//Llamado a la funcion antes de definirla (hosting):
miFuncion(8, 2);

//Definimos una funcion
function miFuncion(a, b) { //puede o no tener parametros o argumentos
    //console.log("Sumamos: " + (a + b))
    return a + b; //SI LLEGAMOS AL FINAL DE LA FINCION Y NO HEMOS AGREGADO RETURN
    //js se encarga de agregarlo de manera automática
}
//Llamamos la funcion
miFuncion(5, 4);

let resultado = miFuncion(6, 7);
console.log(resultado);

//Funciones de tipo expresion
let x = function (a, b) { return a + b }; //necesita si o si ";" para cerrarla
resultado = x(5, 6) //Llamammos con la var y entre paréntesis los argumentos
console.log(resultado);

//Funciones tipo self o invoking
(function (a, b) {
    console.log('Ejecutando la funcion: ' + (a + b));
})(9, 6); // se llama a sí misma con parámetros y con argumentos, por unica vez


console.log(typeof miFuncion);
function miFuncionDos(a, b) {
    console.log(arguments.length);
}
miFuncionDos(5, 7, 3, 6);

//toString
//Convierte la funcion a texto
var miFuncionTexto = miFuncionDos.toString(); //lAMAMOS AL METODO toString a traves de la funcion
console.log(miFuncionTexto);

//Funciones flecha: " => "
//*NO SE USA "function"
//*NO SE USA "{}"
//¨NO SE USA LA PALABRA"return"
const sumarFuncionFlecha = (a, b) => a + b;
//con const ya no podemos cambiar el valor 
resultado = sumarFuncionFlecha(3, 7);//Asiganamos el valor a una variable
console.log(resultado);

//ARGUMENTOS Y PARÁMETROS:
//Parámetros: lo definimos cdo definimos una funcion(a, b, c)
//Argumentos: Son los valores que le pasamos: (2, 3, 4)

//Funcion tipo expresion
let sumar = function (a = 4, b = 8) {
    console.log(arguments[0]); //Muestra el parámetro de índice 0
    console.log(arguments[1]);
    return a + b + arguments[2];
}
resultado = sumar(3, 2, 9);
console.log(resultado);

//Sumar todos los argumentos
//Llamamos a la funcion antes de ser creada
let respuesta = sumarTodo(5, 4, 13, 10, 9);
console.log(respuesta);
function sumarTodo() {
    let suma = 0;
    for (let i = 0; i < arguments.length; i++) {
        suma += arguments[i]; //arguments es para arreglos
    }
    return suma;
}
//TIPOS PRIMITIVOS
//PASO POR VALOR: La variable no recibe ningún cambio
let k = 10;
function cambiarValor(a) { //CREAMOS UNA NUEVA VARIABLE DENTRO DE LA FUNCION Y REASIGNAMOS 
    //UN VALOR:
    a = 20;
}
cambiarValor(k);
console.log(k);

//PASO POR REFERENCIA: 
//creamos un objeto para asignar propiedades

//definimos var tipo const
const persona = {
    nombre: 'Juan',
    apellido: 'Lepez'
}

console.log(persona); //Primer valor
//Creamos la funcion
function cambiarValorObjeto(p1) {
    p1.nombre = 'Ignasio';
    p1.apellido = 'Perez';
}
//Se destruye la variable p1, pero las modificaciones quedan afectando a "PERSONA"
cambiarValorObjeto(persona);
console.log(persona); //Valor ya afectado

