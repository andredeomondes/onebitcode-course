const nomeTurista = prompt("E ai, turista! Qual o seu nome? ") 
let cidadesVisitadas = ""
let qtCidadesVisitadas = 0


let continuar = prompt("Você visitou alguma cidade? (Sim/Não)")

while (continuar === "Sim") {
    let cidade = prompt("Qual é o nome da cidade visitada?")
    cidadesVisitadas += " - " + cidade + "\n"
    qtCidadesVisitadas++
    continuar = prompt("Você visitou alguma outra cidade? (Sim/Não)") 
}

alert(
    "Turista: " + nomeTurista +
    "\n" +
    "\nQuantidade de cidades visitadas: " + qtCidadesVisitadas +
    "\nCidades visitadas:\n" + cidadesVisitadas
  )
  