# HANGMAN README

## DESCRIPTION:
This project is a simple game of standard hangman. The style is meant to replicate a classic arcade look and feel. The instructions on the landing page should make it clear how to play. Its a two person game, where the first person types a a secret word into the text box. Then the second player attemtps to guess the secret word one letter at a time. They win if they complete the word, and lose on their sixth incorrect guess.

## CORE FEATURES/FUNCTIONALITY
-The game takes the initial secret word input and parses it into an array.
-At the same time, it will create two blank arrays, the same length as the secret word.    
* The first is to keep track of correct letter guesses.    
* The second is to keep track of incorrect letter guesses.  
-Then the game board is created, with empty boxes created for each letter in the array for correcrt guesses.  
-When the second user guesses a letter, it runs a for loop, using counter 'i' against the secret word array.  
    -If a match is found, it writes the guessed letter into the correct blank box using the index 'i' to select the correct blank box. It also writes the letter into an array for correct guessses to index 'i' of that array. This ensures the letters stored in the correct guesses array is in the correct order. It then checks for a win by comparing the correct guesses array to the secret word array.  
    -If no match is found, it creates a new box in the section for incorrect guesses and write the letter to that box. It also writes the incorrect letter into an incorrect gusses array. It then checks for a loss by checking the length of the incorrect guesses array.  
-When there is an incorrect guess, the game starts to unveil the hangman guy. The hangman guy was built using CSS GRID, where the grids contain a part of the man (head, body, left arm, right arm, left leg, and right leg). The sections of the man are unveiled by removing a 'hidden' class. Upon loss, two X's are written into the head as well :)  

## OTHER FEATURES
-Flashing borders to indicate to the user what the next action in the game should be.  
-Starting a new game without refreshng the page. This involves resetting the board. To reset the board, we must remove the win/loss message, add the visibility class to all the hangman parts, change the flashing border to point the user to start a new game.  
-Keeping track of wins and losses  
-Adding an initial bit of instructions when the user comes to the page.  
-Clearing the forms after a user submits them.  
-Error handling for having text entered in the 'new word' box.  

## TECHNOLOGIES/APPROACH
-This project uses standard HTML, CSS, and Vanilla Javascript.  
-With the CSS, I make frequent use of flexbox, and CSS grid to organize the hangman. I also use some animation with CSS to do the flashing border.  
-The Vanilla Javascript uses a functional approach, where there are several different functions called at strategic time to ensure game flow. Functions include:  
    -startGame(), checkInput(), clearBoard(), setBoard(), checkLetter(), checkWin(), checkLoss()  