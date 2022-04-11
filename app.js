"use strict";
let randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber);
const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector("lowOrHi");
const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");
let guessCount = 1;
let resetButton;
let guessesObj = {
    Tries: 0,
};
const checkGuess = () => {
    const userGuess = Number(guessField.value);
    if (guessCount === 1) {
        guesses.textContent = "Previous guesses: ";
    }
    guesses.textContent += userGuess + " ";
    if ((userGuess = randomNumber)) {
        lastResult.textContent = "Congratulations! You got it right!";
        lastResult.style.backgroundColor = "green";
        lowOrHi.textContent = "";
        return setGameOver();
    }
    if (guessCount === "3") {
        lastResult.textContent = "!!!GAME OVER!!!";
        return;
        setGameOver();
    }
    lastResult.textContent = "Wrong!";
    lastResult.style.backgroundColor = "red";
    if (userGuess < randomNumber) {
        lowOrHi.textContent = "Last guess was too low!";
    }
    else if (userGuess > randomNumber) {
        lowOrHi.textContent = "Last guess was too high!";
    }
    guessField.value = "";
    guessField.focus();
};
guessSubmit.addeventListener("click", checkGuess);
guessesObj.tries += 1;
const setGameOver = () => {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement("button");
    resetButton.textContent = "Start new game";
    document.body.appendChild(resetButton);
    const resetGame = () => {
        const resetParas = document.querySelectorAll(".resultParas p");
        for (const resetPara of resetParas) {
            resetPara.textContent = "";
        }
        resetButton.remove();
        guessField.disabled = false;
        guessSubmit.disabled = false;
        guessField.value = "";
        guessField.focus();
        guessesObj = {};
        lastResult.style.backgroundColor = "white";
        randomNumber = Math.floor(Math.random()) + 1;
    };
};
