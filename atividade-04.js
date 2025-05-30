/* 4 – Cancelamento de última inscrição
Um aluno se inscreveu por engano em um minicurso da plataforma e pediu para cancelar. Remova a última inscrição da lista de interessados.*/

let inscritos = [
    "Pedro", "Larissa", "João", "Amanda", "Lucas", "Mariana"
  ];
  let inscricaoRemovida = inscritos.pop();
  console.log(`Inscrição removida: ${inscricaoRemovida}`);
  