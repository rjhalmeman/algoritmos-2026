def funcaoCalcular():
    # Entrada de dados (equivalente ao parseFloat do JavaScript)
    valorA = float(input("Digite um valor para A: "))
    valorB = float(input("Digite um valor para B: "))
    
    # Processamento
    soma = valorA + valorB
    
    # Saída (equivalente ao innerHTML)
    print(f"resposta: {soma}")

# Executar a função
funcaoCalcular()