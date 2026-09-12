alturaParede = input("Digite a altura da parede em metros: ")
larguraParede = input("Digite a largura da parede em metros: ")
tinta = 2
areaParede = float(alturaParede) * float(larguraParede)
print(f"A área da parede é {areaParede} metros quadrados.")
print(f"Você precisará de {areaParede / tinta} litros de tinta para pintar a parede.")  