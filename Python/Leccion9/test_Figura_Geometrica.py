#plantilla para probar nuestro codigo

from Cuadrado import Cuadrado

cuadrado1 = Cuadrado(5, 'Azul')
print(cuadrado1.ancho)
print(cuadrado1.alto)
print(f'Cálculo del area del cuadrado: {cuadrado1.calcular_area()} ')

# MRO = Method Resolution Order

print(Cuadrado.mro())

print(cuadrado1)