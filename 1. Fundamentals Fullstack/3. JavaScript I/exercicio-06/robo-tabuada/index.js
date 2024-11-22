const numero = parseFloat(prompt("Digite um número: "))
let tabuada = ""

for (let i=1; i<=20; i++) {
  tabuada += "\n" + numero + " x " + i +" = "  + numero * i

}

alert (tabuada)
