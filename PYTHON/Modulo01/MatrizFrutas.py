# matrizes e vetores começam com 0 tanto linha como coluna
frutas= [ 
          ["maçã", "banana"],               # matriz com 2 linhas e 2 colunas
          ["laranja", "uva"]  
        ]

for frutas in frutas:                   # estrutura de repetição para percorrer a matriz frutas
    for fruta in frutas:                # estrutura de repetição para percorrer cada elemento da matriz frutas
        print(fruta)                    # imprime o elemento da matriz frutas
