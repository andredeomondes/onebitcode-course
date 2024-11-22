const entrada1 = prompt("Digite o primeiro número: ") 
const entrada2 = prompt("Digite o segundo número: ") 

const a = parseFloat(entrada1)
const b = parseFloat(entrada2)

const soma = a + b
const subtracao = a - b
const multiplicacao = a * b
const divisao = a / b

alert (
    "Resultados: \n" +
    "\nSoma: " + soma + 
    "\nSubtração: " + subtracao +
    "\nMultiplicacao: " + multiplicacao +
    "\nDivisão: " + divisao
)

