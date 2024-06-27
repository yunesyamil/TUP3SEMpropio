package test;

import domain.*;

public class TestInstanceOf {

    public static void main(String[] args) {
        Empleado empleado1 = new Empleado("Juan", 10000);
        determinarTipo(empleado1);
        empleado1= new Gerente("Jose", 5000, "Sistemas");
        //determinarTipo(empleado1);
    }
    
    public static void determinarTipo(Empleado empleado) {
        //preguntamos si es una instancia de tal o cual clase
        if(empleado instanceof Gerente){
            System.out.println("Es de tipo Gerente");
            //No podemos acceder al metodo departamento, sin antes convertir la var empleado a 
            //una var de tipo Hijo. ASÍ LO CONVERTIMOS:
            Gerente gerente = (Gerente)empleado;
            //Otra manera de convertirlo
            //((Gerente) empleado).getDepartamento();
            System.out.println("gerente = "+gerente.getDepartamento());
        }
        else if(empleado instanceof Empleado){
            System.out.println("Es de tipo Empleado");
            //Gerente gerente = (Gerente)empleado;
            //System.out.println("gerente = " + gerente.getDepartamento());
        }
        else if(empleado instanceof Object){
            System.out.println("Es de tipo Object");
        }       
            
        
    }
}
