let atual = 0;

mostrarPergunta();

function normalizar(texto){
  return texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
}

function mostrarPergunta(){
  document.getElementById("progresso").innerText =
    `Pergunta ${atual + 1} de ${perguntas.length}`;

  document.getElementById("pergunta").innerText =
    perguntas[atual].pergunta;

  document.getElementById("resposta").value = "";
  document.getElementById("mensagem").innerText = "";
}

function verificar(){
  const resposta = normalizar(
    document.getElementById("resposta").value
  );

  const corretas = perguntas[atual].respostas.map(normalizar);

  if(corretas.includes(resposta)){
    atual++;

    if(atual >= perguntas.length){
      document.querySelector(".container").innerHTML = `
        <h1>🏆 Parabéns!</h1>
        <p>Você concluiu o desafio.</p>
      `;
      return;
    }

    mostrarPergunta();
  } else {
    document.getElementById("mensagem").innerText =
      "❌ Resposta incorreta. Tente novamente.";
  }
}
