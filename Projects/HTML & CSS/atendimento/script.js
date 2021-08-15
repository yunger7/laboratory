let contador = 1;

const fila = {
	comum: [],
	rapido: [],
	prioritario: [],
};

// DOM references
const buttonComum = document.getElementById("comum");
const buttonRapido = document.getElementById("rapido");
const buttonPrioritario = document.getElementById("prioritario");
const buttonCaixa1 = document.getElementById("caixa1");
const buttonCaixa2 = document.getElementById("caixa2");
const buttonCaixa3 = document.getElementById("caixa3");
const buttonCaixa4 = document.getElementById("caixa4");
const suaSenha = document.getElementById("sua-senha");
const senhaEl = document.getElementById("senha");
const caixaEl = document.getElementById("caixa");

// Event listeners
buttonComum.addEventListener("click", () => gerarSenha("comum"));
buttonRapido.addEventListener("click", () => gerarSenha("rapido"));
buttonPrioritario.addEventListener("click", () => gerarSenha("prioritario"));
buttonCaixa1.addEventListener("click", () => chamarSenha(1));
buttonCaixa2.addEventListener("click", () => chamarSenha(2));
buttonCaixa3.addEventListener("click", () => chamarSenha(3));
buttonCaixa4.addEventListener("click", () => chamarSenha(4));

// Functions
function gerarSenha(tipo) {
	const senha = `${tipo.slice(0, 1).toUpperCase()}-${contador}`;

	fila[tipo].push(senha);
	contador++;
	suaSenha.innerText = `Sua senha é ${senha}`;
}

function chamarSenha(caixa) {
  // Caixa 1 => P R C
  // Caixa 2 e 3 => R P C
  // Caixa 4 => C P R

  switch (caixa) {
    case 1:
      calcularSenha(caixa, ["prioritario", "rapido", "comum"]);
      break;
    case 2:
    case 3:
      calcularSenha(caixa, ["rapido", "prioritario", "comum"]);
      break;
    case 4:
      calcularSenha(caixa, ["comum", "prioritario", "rapido"]);
      break;
  }
}

function calcularSenha(caixa, prioridade) {
  if (!fila.comum.length && !fila.prioritario.length && !fila.rapido.length) {
    senhaEl.innerText = "Aguarde";
    caixaEl.innerText = "Caixa -";

    return;
  }

  prioridade.every(tipo => {
    if (fila[tipo].length) {
      const senha = fila[tipo].shift();
  
      senhaEl.innerText = senha;
      caixaEl.innerText = `Caixa ${caixa}`;
      return false;
    }

    return true;
  });


}
