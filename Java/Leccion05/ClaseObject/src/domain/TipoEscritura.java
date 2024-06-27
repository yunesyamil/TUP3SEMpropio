package domain;

public enum TipoEscritura {
    CLASICO("Escritura a mano"),
    MODERNO("Escritura Digital");
    
    private final String descripcion;
    
    //Constructor
    private TipoEscritura(String descripcion){
        this.descripcion = descripcion;
    }
    
    // Método Get
    public String getDescripcion(){
        return this.descripcion;
    }
}
