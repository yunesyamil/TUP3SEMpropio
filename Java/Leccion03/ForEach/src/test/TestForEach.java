package test;

import domain.Persona;

public class TestForEach {
    public static void main(String[] args) { //For each se usa como un for pero mejorado
        int edades[] = {5, 6, 8, 9}; // Creamos un arreglo
        for (int edad: edades) { /*En esta sintaxis definomos el ciclo con una variable que almacene
            los valores de un arreglo, debe ser del mismo tipo que los valores del arreglo
            Entra al primer elem del arreglo y lo muestra y así sucesivamente en cada vuelta*/
            System.out.println("edad = " + edad);
            
        }
        
        Persona personas[] = {new Persona("Juan"), new Persona("Carla"), new Persona("Beatriz")};
        
        for (Persona persona: personas) {
            System.out.println("persona = " + persona);
            
        }
    }
}
