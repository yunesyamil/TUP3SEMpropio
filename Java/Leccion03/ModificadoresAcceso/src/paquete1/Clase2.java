package paquete1;

class Clase2 { // la ausencia del modificador la hace default
    String atributoDefault = "Valor del atributo default";
    
    /*Clase2(){
        System.out.println("Constructor default");
    }*/
    
    public Clase2(){
        super();
        this.atributoDefault = "Modificación del atributo default";
        System.out.println("atributoDefault = " + this.atributoDefault);
        this.metodoDefault();
    }
   
    void metodoDefault(){
        System.out.println("Metodo default");
    }
}
