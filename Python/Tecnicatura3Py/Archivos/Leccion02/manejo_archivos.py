# Declaramos una variable
try:
    archivo = open('prueba.txt', 'w', encoding='utf8')  # La w es de write que significa escribir
    archivo.write('Programamos con diferentes tipos de archivos, ahora en txt.\n')
    archivo.write('Los acentos son importantes en las palabras\n')
    archivo.write('como por ejemplo: acción, ejecución y producción\n')
    archivo.write('las letras son:\nr read leer,\na append agrega,\nw write escribe,\nx crea un archivo')
    archivo.write('\nt esta es para texto o text,\nb archivos binarios,\nw+ lee y escribe son iguales r+\n')
    archivo.write('Saludos a todos los alumnos de la tecnicatura\n')
    archivo.write('Con esto terminamos')
except Exception as e:
    print(e)
finally:  # siempre se ejecuta
    archivo.close()  # Con esto se debe cerrar el archivo
# archivo.write('Todo quedo perfecto'): este es un error
