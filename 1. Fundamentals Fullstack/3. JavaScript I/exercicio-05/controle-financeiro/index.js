let saldo = 0

saldo = parseFloat(prompt("Digite a quantidade inicial de dinheiro na conta: "))

do {

    opcao = prompt(
    "Seja bem-vindo(a)!\n" +
    "\nEscolha uma das opções abaixo:" +
    "\n1 - Depositar" +
    "\n2 - Sacar" +
    "\n3 - Encerrar"
)

switch (opcao) {
    case "1":
      alert("Opção: Depósito")
      saldo += parseFloat(prompt("Digite o valor de depósito: "))
      alert (
        "\nSaldo atual: " + saldo
      )
      break
    case "2":
      alert("Opção: Saque")
      saldo -=parseFloat(prompt("Digite o valor de saque: "))

      alert (
        "\nSaldo atual: " + saldo
      )
      break
    case "3":
            alert("Encerrando o programa...")
      break
    default:
      alert("Entrada inválida! Escolha uma das cinco opções.")
  }

} while (opcao !== "3");


