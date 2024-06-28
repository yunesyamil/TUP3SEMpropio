package accesodatos;

public interface IAccesoDatos {
    int MAX_REGISTRO = 10; //Aributo de la interface(public, final, static) 
    
    // Metodo insertar es abstracto y sin cuerpo
    void insertar();
    
    void listar();
    
    void actualizar();
    
    void eliminar();
}
