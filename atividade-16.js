/*16 – Substituição de matérias na grade
A escola decidiu substituir as disciplinas “Biologia” e “Física” da matriz atual por “Programação” e “Robótica”. Ambas estão na posição 3 e 4 da grade. Faça essa troca.*/

let gradeCurricular = [
  "Matemática",
  "Português",
  "Biologia",
  "Física",
  "História",
  "Educação Física",
  "Inglês"
];
let novaGradeCurricular = gradeCurricular.splice(2,2, "Programação","Robótica")
    console.log(`Nova grade curricular:${gradeCurricular}`);
