// DOM references
const textoOriginal = document.getElementById("texto-original");
const textoModificado = document.getElementById("texto-modificado");
const buttonOfuscar = document.getElementById("ofuscar");
const buttonDesofuscar = document.getElementById("desofuscar");

// Event listeners
buttonOfuscar.addEventListener("click", ofuscar);
buttonDesofuscar.addEventListener("click", desofuscar);

// a =>	ais
// e =>	enter
// i =>	inis
// o => omber
// u => ufter

const pattern1 = {
  a: "ais",
  e: "enter",
  i: "inis",
  o: "omber",
  u: "ufter",
  A: "Ais",
  E: "Enter",
  I: "Inis",
  O: "Omber",
  U: "Ufter",
};

const pattern2 = {
  ais: "a",
  enter: "e",
  inis: "i",
  omber: "o",
  ufter: "u",
  Ais: "A",
  Enter: "E",
  Inis: "I",
  Omber: "O",
  Ufter: "U",
};

// Functions
function ofuscar() {
  const input = textoOriginal.value;

  const regEx = new RegExp(`${Object.keys(pattern1).join("|")}`, "g");
  const result = input.replace(regEx, char => pattern1[char]);

  textoModificado.value = result;
}

function desofuscar() {
  const input = textoOriginal.value;

  const regEx = new RegExp(`${Object.keys(pattern2).join("|")}`, "gi");
  const result = input.replace(regEx, char => pattern2[char]);

  textoModificado.value = result;
}
