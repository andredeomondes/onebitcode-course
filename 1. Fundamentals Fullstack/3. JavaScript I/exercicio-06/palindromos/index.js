const palavra = prompt("Digite uma palavra: ")
let palavaInvertida = ""

for (let i= palavra.length -1; i >= 0; i--) {
  palavaInvertida += palavra[i]

}

if (palavra === palavraInvertida) {
  alert(palavra + " é um palíndromo!")
} else {
  alert(palavra + " não é um palíndromo!\n\n" + palavra + " !== " + palavraInvertida)
}

