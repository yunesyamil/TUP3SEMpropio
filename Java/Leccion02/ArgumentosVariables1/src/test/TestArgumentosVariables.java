package test;

public class TestArgumentosVariables {

    public static void main(String[] args) {

        // Llamamos al método dos veces
        imprimirNumeros(3, 4, 5);
        imprimirNumeros(1, 2);
        variosParametros("Juan", "Lucas", 7, 8, 9, 10);
    }

    //Otro método pero con argumentos variables
    private static void variosParametros(String nombre, String apellido, int... numeros) {
        System.out.println("Nombre: " + nombre + " Apellido: " + apellido);
        imprimirNumeros(numeros);
    }

    private static void imprimirNumeros(int... numeros) {
        /*La var se convierte en un arreglo de tipo 
         int. y los ... indican que la cantidad de elemenmtos para este va a ser indefinida
         */
        for (int i = 0; i < numeros.length; i++) {
            //Recorremos el arreglo
            System.out.println("Elementos: " + numeros[i]);
        }
    }
}
