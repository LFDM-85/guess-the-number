## Gonçalo

> mover o script para o head do HTML;
> linha 39 não retorna setGameOver();
> checkGuess() aceita strings em guessField mas não retorna avisos/erros
> guessesObj.tries += 1; encontra-se fora da função checkGuess()
> função de setGameOver() parece criar um reset button sem classes ou ID
> função resetGame() parece limpar o guesses object mas este deveria permanecer ao longo de vários jogos
> funão resetGame() está declarada mas não parece ter nenhum click event associado

## Luís

> > Selectors
> > Nos selectores é preciso definir como HTML(qualquer coisa) -> ja alterei no ficheiro
> > no primeiro selector guesses é um id logo tem de ser #guesses e não .guesses
> > loworHi é .loworHi...como está só define texto

> let resetButton: HTMLElement

> let guesssesObj temos de definir uma interface para termos o objecto(acho eu) e o tries está com letra grande;
