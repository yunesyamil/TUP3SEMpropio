
package ar.com.system2023.mundopc;

/**
 *
 * @author Yamil
 */

public class Orden {
    private final int idOrden;
    private Computadora computadora[];
    private static int contadorOrdenes;
    private static final int MAX_COMPUTADORAS = 10; //ARREGLO
    private int cotadorComputadora;
    //Constructor vacío
    public Orden(){
        this.idOrden = ++Orden.contadorOrdenes;
        this.computadora = new Computadora[Orden.MAX_COMPUTADORAS];
    }

    //Método para agregar nueva computadora al arreglo

    public void agregarComputadora(Computadora computadora){
        if(this.cotadorComputadora < Orden.MAX_COMPUTADORAS){
            this.computadora[this.cotadorComputadora++] = computadora;
        }
        else{
            System.out.println("Has superado el limite: "+Orden.MAX_COMPUTADORAS);
        }
    }

    //Método Mostrar Orden
    public void mostrarOrden(){
        System.out.println("Orden #: "+this.idOrden);
        System.out.println("Computadoras de la orden #: "+this.idOrden);
        for(int i = 0; i < this.cotadorComputadora; i++){
            System.out.println(this.computadora[i]);
        }
    }
}
