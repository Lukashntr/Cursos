
precoDia = 60
precoKM = 0.15

km = input("Digite a quantidade de quilômetros percorridos: ")
dias = input("Digite a quantidade de dias que o carro foi alugado: ")

print(f"O carro foi alugado por {dias} dias e percorreu {km} quilômetros.")
print(f"O custo total do aluguel do carro é: {float(dias) * precoDia + float(km) * precoKM}")
