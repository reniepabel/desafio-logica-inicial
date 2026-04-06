let herois = [
  { nome: "Harlam", xp: 550 },
  { nome: "Xerxes", xp: 4100 },
  { nome: "Artemis", xp: 11000 },
];

for (let heroi = 0; heroi < herois.length; heroi++) {
  let nome = herois[heroi].nome;
  let xp = herois[heroi].xp;
  let nivel = "";

  if (xp <= 1000) {
    nivel = "Ferro";
  } else if (xp <= 2000) {
    nivel = "Bronze";
  } else if (xp <= 5000) {
    nivel = "Prata";
  } else if (xp <= 7000) {
    nivel = "Ouro";
  } else if (xp <= 8000) {
    nivel = "Platina";
  } else if (xp <= 9000) {
    nivel = "Ascendente";
  } else if (xp <= 10000) {
    nivel = "Imortal";
  } else {
    nivel = "Radiante";
  }
  console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);
}
