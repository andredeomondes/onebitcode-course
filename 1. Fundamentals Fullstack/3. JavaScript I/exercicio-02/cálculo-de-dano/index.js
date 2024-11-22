const atacante = prompt("Digite o nome do personagem atacante: ")
const poderDeAtaque = parseFloat(prompt("Digite o poder de ataque de " + atacante + " :"))

const defensor = prompt("Digite o nome do personagem defensor: ")
let vidaDefensor = parseFloat(prompt("Digite a quantidade de vida de " + defensor))
const poderDeDefesa = parseFloat(prompt("Digite o poder de defesa de " + defensor + " :"))
const possuiEscudo = prompt("Ele possui escudo (Sim/Não")


let danoCausado = 0

if (poderDeAtaque > poderDeDefesa && possuiEscudo === "Não") {
    danoCausado = poderDeAtaque - poderDeDefesa
} else if (poderDeAtaque > poderDeDefesa && possuiEscudo === "Sim") {
    danoCausado = (poderDeAtaque - poderDeDefesa)/2
} else {
    danoCausado = 0
}

vidaDefensor -= danoCausado

alert(atacante + " causou " + danoCausado + " pontos de dano em " + defensor)

alert(
  atacante + 
  "\nPoder de ataque: " + poderDeAtaque + 
  "\n\n" +
  defensor + 
  "\nPontos de vida: " + vidaDefensor +
  "\nPoder de defesa: " + poderDeDefesa +
  "\nPossui escudo: " + possuiEscudo
)



