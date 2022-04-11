## Gonçalo

> mover o script para o head do HTML;
> linha 39 não retorna setGameOver();
> checkGuess() aceita strings em guessField mas não retorna avisos/erros
> guessesObj.tries += 1; encontra-se fora da função checkGuess()
> função de setGameOver() parece criar um reset button sem classes ou ID
> função resetGame() parece limpar o guesses object mas este deveria permanecer ao longo de vários jogos
> funão resetGame() está declarada mas não parece ter nenhum click event associado

## Luís

> linha 11 let resetButton : as HTLMElement
> linha 19 let userGuess
> linha 19 guesses?.textContent
> linha 24 lastResult?.textContent
> linha 25 lastResult?.textContent
> linha 26 lowOrHi?.textContent
> linha 29 if(guessCount === 3)
>
> > tudo o que for "Objecto is possibly 'null' podemos colocar o ?.
