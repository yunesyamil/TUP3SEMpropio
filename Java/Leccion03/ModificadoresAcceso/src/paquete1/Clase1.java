package paquete1;

public class Clase1 {
    public String atributiPublic = "Valor atributo public";//Atributo public
    protected String atributoProtected = "valor atributo protected";//Atributo protected
    
    public Clase1 () { // constructor public
            System.out.println("Constructor public");
    }
    protected Clase1 (String atributoPublic){
        System.out.println("Constructor protected");
    }
    
    public void metodoPublico(){ //metodo public
        System.out.println("Metodo public");
    }
    protected void metodoProtected(){
        System.out.println("Metodo protected");
    }
}
