/*Você precisa gerar um relatório com apenas a primeira semana de férias dos colaboradores listados, sem modificar a lista original.*/ 

let diasFaltas = [
    "Carlos – Segunda",
    "Carlos – Terça",
    "Carlos – Quarta",
    "Carlos – Quinta",
    "Carlos – Sexta",
    "Carlos – Segunda (semana 2)",
    "Carlos – Terça (semana 2)",
    "Carlos – Quarta (semana 2)"
  ];
console.log(`Relatorio da primeira semana: ${diasFaltas.slice(0,5)}`);

console.table(diasFaltas)
console.table(diasFaltas.slice(0,5))
