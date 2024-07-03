let x = 10; // var tipo primitivo
console.log(x.lenght);
console.log('Tipos Primitivos');
//Objeto con sus propiedades:
let persona = {
    nombre: 'Carlos',
    apellido: 'Gil',
    email: 'cgil@gmail.com',
    edad: 28,
    idioma: 'es',
    get lang() {
        return this.idioma.toUpperCase(); //toUpperCase convierte de minúsculas a mayúsculas
    },
    //MÉTODO SET
    set lang(lang) {
        this.idioma = lang.toUpperCase();
    },
    nombreCompleto: function () { //metodo o funcion
        return this.nombre + ' ' + this.apellido;
    },
    //Método get
    get nombreEdad() {
        return 'El nombre es: ' + this.nombre + ', Edad: ' + this.edad;
    },

}

console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.email);
console.log(persona.edad);
console.log(persona);
console.log(persona.nombreCompleto());
console.log('Ejecutando con un objeto');

//Creamos otro objeto y agregamos las propiedades
let persona2 = new Object(); //
persona2.nombre = 'Juan';
persona2.direccion = 'Salada 14';
persona2.telefono = '2324747588';
console.log(persona2.telefono);
console.log('Creamos un nuevo objeto');

//Accedemos a las propiedaddes de un objeto:
console.log(persona['apellido']); //Como si fuera un arreglo
console.log('Usamos ciclo for in');
//for in:
//para acceder a las propiedades pero no a lo que contiene
for (propiedad in persona) {
    console.log(propiedad);
    //Accedemos al valor de la propiedad
    console.log(persona[propiedad]);
}
console.log('Cambiamos y eliminamos error');
//Agregar nueva propiedad:
persona.apellida = 'Betancud'; //CAMBIAMOS DINÁMICAMENTE EL VALOR DE UN OBJETO
delete persona.apellida; //Eliminamos la propiedad y el valor
console.log(persona);

//Distintas maneras de imprimir un objeto
//Número1: La más sencilla: 
//_CONCATENAR CADA VALOR DE CADA PROPIEDAD:
console.log('Distintas maneras de imprimir un objeto: forma 1');
console.log(persona.nombre + ', ' + persona.apellido);

//Número2: 
//_A TRAVES DEL CICLO FOR IN:
console.log('Distintas maneras de imprimir un objeto: forma 2');
for (nombrePropiedad in persona) {
    console.log(persona[nombrePropiedad]);
}

//Número3: Con un método: 
//_FUNCIÓN Object.values():
console.log('Distintas maneras de imprimir un objeto: forma 3');
let personaArray = Object.values(persona);
console.log(personaArray);

//Número3: 
//_Método JSON.stringify:
console.log('Distintas maneras de imprimir un objeto: forma 4');
let personaString = JSON.stringify(persona);
console.log(personaString);


console.log('Comenzamos a utilizar el métogo get');
console.log(persona.nombreEdad);

console.log('Comenzamos con el método get y set para idiomas');
console.log(persona.lang);
persona.lang = 'en';
console.log(persona.lang);

//FUNCION CONSTRUCTOR
function Persona3(nombre, apellido, email) { //constructor
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function () {
        return this.nombre + ' ' + this.apellido;
    }
}
let padre = new Persona3('Leo', 'Lopez', 'lopezl@gmail.com');
padre.nombre = 'Luis'; //Se puede modificar el objeto
padre.telefono = '5926182882821'; //agregamos una propiedad exclusiva
console.log(padre);
console.log(padre.nombreCompleto()); //Usamos la funcion

let madre = new Persona3('Laura', 'Contrera', 'contreral@gmail.com');
console.log(madre);
console.log(madre.telefono); //La propiedad no esta definida
console.log(madre.nombreCompleto());

//Distintas formas de crear objetos:
//Objeto1: con "new"
let miObjeto = new Object(); //Opcion formal
//Objeto2: más breve y recomendada:
let miObjeto2 = {};

//String1:
let miCadena1 = new String('Hola'); //Sintaxis formal
//String2:
let miCadena = 'Hola'; //Sintaxis simplificada y recomendada

//Caso con números:
//Number1: 
let miNumero = new Number(1); //Sintaxis formal
//Number2:
let miNumero2 = 1; //Sintaxis recomendad

//Caso boolean:
//Boolean1:
let miBoolean1 = new Boolean(false); //Formal
//Boolean2:
let miBoolean2 = false;//recomendada

//Caso Arreglos:
//Arreglos1:
let miArreglo1 = new Array(); //formal
//Arreglos2:
let miArreglo2 = []; //recomendada

//Caso funcion:
//funcion1:
let miFuncion1 = new function () { }; //Todo despues de NEW es considerado OBJETO
//funcion2:
let miFuncion2 = function () { }; //RECOMENDADA

//uso de prototype
//Para agregarlo a todos los objetos de la clase 
Persona3.prototype.telefono = '2618383832';
console.log(padre);
console.log(madre);
madre.telefono = '5492618383832';
console.log(madre.telefono);

//Uso de call
//Llama un metodo definido en un objeto desde otro objeto
let persona4 = {
    nombre: 'Juan',
    apellido: 'Perez',
    nombreCompleto2: function (titulo, telefono) {
        return titulo + ': ' + this.nombre + ' ' + this.apellido + ' ' + telefono;
        //return this.nombre + ' ' + this.apellido;
    }

}

let persona5 = {
    nombre: 'Carlos',
    apellido: 'Lara'
}

console.log(persona4.nombreCompleto2('Lic.', '5492618383834'));
//Llamamos a la funcion: nombreCompleto que esta en el otro objeto:
console.log(persona4.nombreCompleto2.call(persona5, 'Ing.', '5492618585856'));

//Metodo Apply
//llamamos a un metodo no definido anteriormente
//CON APPLY PASAMOS UN ARREGLO CON TODOS LOS ARGUMENTOS QUE NECESITAMOS
let arreglo = ['Ing.', '5492618686865'];
console.log(persona4.nombreCompleto2.apply(persona5, arreglo));

