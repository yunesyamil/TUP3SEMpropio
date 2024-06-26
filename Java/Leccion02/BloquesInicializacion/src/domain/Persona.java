
package domain;

public class Persona {
    private final int idPersona;
    private static int contadorPersonas;
    //creamos el bloque de inicializacion estatica
    static{
        System.out.println("Ejecución bloque estático"); 
        ++Persona.contadorPersonas; //iniciamos el contador comienza en 1 ya incrementamos
    }
    {
    //Bloque de inicializacion NO ESTATICO O DINAMICO  
        System.out.println("Ejecución bloque no estático");
        this.idPersona = Persona.contadorPersonas++; //Incrementa el atributo de nuevo 2
    }
    // Los bloques de inicialización se ejecutan antes del constructor
    // CONSTRUCTOR:
    public Persona(){
        System.out.println("Ejecución del constructor");
    }
    
    public int idPersona(){
        return this.idPersona;
    }
    
    //Agragamos el toString

    @Override
    public String toString() {
        return "Persona{" + "idPersona=" + idPersona + '}';
    }
    
}

