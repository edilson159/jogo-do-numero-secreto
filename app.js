const title = document.querySelector("h1");
const paragraph = document.querySelector(".texto__paragrafo");
const ButtonChutar = document.querySelector(".container__botao");
let numberSecret = generateRandomNumber();
const camp = document.querySelector(".container__input");
let attemps = 1;

// title.innerHTML = `
// Jogo do Número Secreto`;

// paragraph.innerHTML = "Escolha um Número entre 1 e 10";

function displayTextOnScreen(tag, textTheVariable) {
  const textVariable = document.querySelector(tag);
  textVariable.innerHTML = textTheVariable;
}

function displayInitialText() {
  displayTextOnScreen("h1", "Jogo do Número Secreto");
  displayTextOnScreen(".texto__paragrafo", "Escolha um Número entre 1 e 100 .");
}

displayInitialText();

function verificarChute() {
  const kick = document.querySelector(".container__input").value;
  clearValueKick(kick);
  if (kick == numberSecret) {
    const wordAttemps = attemps > 1 ? "tentativas" : "tentativa";
    const message = `Você acertou o número secreto depois de ${attemps} ${wordAttemps}`;
    displayTextOnScreen("h1", "Acertou!!!");
    displayTextOnScreen(".texto__paragrafo", message);
    document.querySelector("#reiniciar").removeAttribute("disabled");
  } else {
    if (kick > numberSecret) {
      displayTextOnScreen("p", "O número secreto é menor");
    } else {
      displayTextOnScreen("p", "O número secreto é maior");
    }
    attemps++;
  }
}

function generateRandomNumber() {
  return parseInt(Math.random() * 100 + 1);
}

function clearValueKick() {
  camp.value = "";
}

function restartGame() {
  numberSecret = generateRandomNumber();
  clearValueKick();
  attemps = 1;
  displayInitialText();
  document.querySelector("#reiniciar").setAttribute("disabled", "true");
}
