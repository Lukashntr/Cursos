numero = input("Digite um número para ver sua tabuada: ")
for i in range(1, 11):
    resultado = int(numero) * i
    print(f"{numero} x {i} = {resultado}")