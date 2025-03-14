nome = input("Qual seu nome? ")
idade = int(input("Qual sua idade? "))
if idade >= 18:
        print(nome, "é maior de idade.")
elif idade >= 14 or idade < 18:
    print(nome, "adolescente.")
else:
    print("Criança.")