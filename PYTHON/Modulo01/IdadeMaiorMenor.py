idade = 15                              # variavel idade recebe 15

if idade < 18:                          # estrutura condicional para verificar a idade e imprimir a mensagem correspondente
    print("Você é menor de idade.")
elif idade > 18 and idade < 25:
    print("Você é jovem.")
elif idade > 25 and idade < 40:
    print("Você é adulto.")
elif idade > 40 and idade < 60:
    print("Você é um jovem idoso.")
elif idade > 60:
    print("Você é idoso.")              # fim da estrutura condicional
