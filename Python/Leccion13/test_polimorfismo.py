from Empleado import Empleado

from Gerente import Gerente

def imprimir_detalles(objeto):
    # print(objeto) # indirectamente llama al str de la clase Empleado o Gerente
    print(type(objeto))  # es para saber el tipo de dato que recibe
    print(objeto.mostrar_detalles())
    if isinstance(objeto, Gerente):
        print(objeto.departamento)

empleado = Empleado("Yamil", 900000.00)
imprimir_detalles(empleado)

gerente = Gerente("Jesus", 60000.00, 'Sistemas')
imprimir_detalles(gerente)
# Se realiza un debug