/*19 – Códigos de produtos formatados
O sistema de estoque exige que os códigos dos produtos fiquem todos em letras maiúsculas para padronização da leitura. Gere uma nova lista com os códigos transformados.*/

let codigos = [
  "abc123",
  "def456",
  "ghi789",
  "jkl012",
  "mno345",
  "pqr678",
  "stu901",
  "vwx234"
];
let codigosMaiuscula = codigos.map(codigos => codigos.toLocaleUpperCase());
console.log(`Codigos em letra maiuscula:${codigosMaiuscula}`);

