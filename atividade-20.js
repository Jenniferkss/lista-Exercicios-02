/*20 – Formatando lista de preços
Os preços estão salvos como números e precisam ser exibidos no formato de moeda brasileira para o painel de clientes. Gere uma nova lista com os valores formatados.*/

let precos = [
  129.9,
  399.5,
  259.0,
  89.9,
  599.99,
  39.5,
  999.0
];
let precosFormatados = precos.map(precos => "R$" + precos.toFixed(2).replace(".",","))
console.log(`Preços formatos:${precosFormatados}`);
