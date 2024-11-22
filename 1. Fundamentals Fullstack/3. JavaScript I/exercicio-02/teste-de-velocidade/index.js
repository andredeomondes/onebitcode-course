const veiculoA = prompt("Digite o nome do primeiro veículo: ")
const velocidadeA = parseFloat(prompt("Digite a velocidade do " + veiculoA + " : "))
const veiculoB = prompt("Digite o nome do segundo veículo: ")
const velocidadeB = parseFloat(prompt("Digite a velocidade do " + veiculoB + " : "))

if (velocidadeA > velocidadeB) {
    alert(veiculoA + " é mais veloz.")
} else if (velocidadeA < velocidadeB) {
    alert(veiculoB + " é mais veloz.")
} else {
    alert("Os dois veículos possuem a mesma velocidade.")
}