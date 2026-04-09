function calcularSaldoPartidasRankeadas(vitorias, derrotas) {
  return vitorias - derrotas;
}

let herois = [
  { nome: "Rossi", vitorias: 5, derrotas: 2 },
  { nome: "Alberto", vitorias: 59, derrotas: 20 },
  { nome: "Lutero", vitorias: 110, derrotas: 2 },
];

for (let heroi = 0; heroi < herois.length; heroi++) {
  let nome = herois[heroi].nome;
  let saldo = calcularSaldoPartidasRankeadas(
    herois[heroi].vitorias,
    herois[heroi].derrotas,
  );

  let rank = " ";

  if (saldo <= 10) {
    rank = "Ferro";
  } else if (saldo <= 20) {
    rank = "Bronze";
  } else if (saldo <= 50) {
    rank = "Prata";
  } else if (saldo <= 80) {
    rank = "Ouro";
  } else if (saldo <= 90) {
    rank = "Diamante";
  } else if (saldo <= 100) {
    rank = "Lendário";
  } else rank = "Imortal";

  console.log(`O Herói tem de saldo de ${saldo} está no nível de ${rank}`);
}
