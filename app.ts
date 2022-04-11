//Selectors
const guesses = document.querySelector("#guesses") as HTMLParagraphElement;
const lastResult = document.querySelector(
  ".lastResult"
) as HTMLParagraphElement;
const lowOrHi = document.querySelector(".lowOrHi") as HTMLParagraphElement;
const guessSubmit = document.querySelector(".guessSubmit") as HTMLInputElement;
const guessField = document.querySelector(".guessField") as HTMLInputElement;
const resetParas = document.querySelectorAll(".resultParas p");

//checkGuess() and setGameOver() components
interface Guesses {
  tries: number;
  wins: number;
  guesses: number[];
}

let guessCount: number;
let randomNumber: number;
let resetButton: HTMLElement;
let guessesObj: Guesses = {
  tries: 0,
  wins: 0,
  guesses: [],
};

//Initial state. Runs at startup and at game over
const begin = () => {
  guessCount = 1;
  resetParas.forEach((elem) => (elem.textContent = ""));
  resetButton?.remove();
  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = "";
  guessField.focus();
  lastResult.style.backgroundColor = "white";
  randomNumber = Math.floor(Math.random() * 100) + 1;
  console.log(randomNumber);
};
begin();

const checkGuess = () => {
  const userGuess = Number(guessField.value);
  if (guessCount === 1) {
    guesses.textContent = "Previous guesses: ";
  }
  guessCount++;
  guesses.textContent += userGuess + ", ";

  //Win condition
  if (userGuess === randomNumber) {
    lastResult.textContent = "Congratulations! You got it right!";
    lastResult.style.backgroundColor = "green";
    lowOrHi.textContent = "";
    guessesObj.wins += 1;

    return setGameOver();
  }

  //Loss condition
  if (guessCount > 3) {
    lastResult.textContent = "!!!GAME OVER!!!";
    return setGameOver();
  }

  //Else conditions
  lastResult.textContent = "Wrong!";
  lastResult.style.backgroundColor = "red";
  if (userGuess < randomNumber) {
    lowOrHi.textContent = "Last guess was too low!";
  } else if (userGuess > randomNumber) {
    lowOrHi.textContent = "Last guess was too high!";
  }
  guessField.value = "";
  guessField.focus();
};
guessSubmit.addEventListener("click", checkGuess);

//GameOver state
const setGameOver = () => {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement("button");
  resetButton.textContent = "Start new game";
  document.body.appendChild(resetButton);
  resetButton.addEventListener("click", begin);
  guessesObj.tries += 1;
  guessesObj.guesses.push(randomNumber);
  console.log(guessesObj);
};
