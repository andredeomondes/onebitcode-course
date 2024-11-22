const primeiroNome = prompt("Digite o seu nome: ")
const sobrenome = prompt("Digite o seu sobrenome: ")
const campoDeEstudo = prompt("Digite o seu campo de estudo: ")
const anoDeNascimento = prompt("Digite o ano em que você nasceu:")

alert (
    "Recruta cadastrado com sucesso! \n" + 
    "\nNome completo: " + primeiroNome + " " + "sobrenome" + 
    "\nCampo de estudo: " + campoDeEstudo +
    "\nIdade: " + (2024 - anoDeNascimento)
)