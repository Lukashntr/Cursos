preco = input("Digite o preço do produto: ")
desconto = float(preco) / 100 * 5
precoFinal = float(preco) - desconto
print(f"O preço final do produto com desconto é: {precoFinal}")