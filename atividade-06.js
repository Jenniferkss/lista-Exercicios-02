/* 6 – Primeira mensagem indevida
Uma mensagem indevida foi enviada por engano no início do chat e deve ser removida da conversa para análise posterior. */ 

let mensagens = [
    "Propaganda indevida",
    "Bom dia, posso ajudar?",
    "Preciso de suporte técnico",
    "Claro, qual o problema?",
    "Erro ao acessar conta"
  ];
mensagens.shift();
console.log(`Conversa com a mensagem indevida removida: ${mensagens}`);
