// Your solution goes here 
let prevGuessedNum;
function playGuessingGame(numToGuess, totalGuesses = 10) {
    let guesses = 0;

    for (let i = 0; i < totalGuesses; i++) {
        guesses++
        if(i==0){
            var number = prompt("Enter a number between 1 and 100.");
            validate(numToGuess, number, guesses, totalGuesses); 
        }else if(prevGuessedNum < numToGuess){
            number = prompt(prevGuessedNum+" is too small. Guess a larger number", prevGuessedNum);
            validate(numToGuess, number, guesses, totalGuesses); 
        }else if(prevGuessedNum > numToGuess){
            number = prompt(prevGuessedNum+" is too large. Guess a smaller number", prevGuessedNum);
            validate(numToGuess, number, guesses, totalGuesses); 
        }
        
    }
    
}

function validate(numToGuess, number, guesses, totalGuesses){
    if (isNaN(number)) {
        number = prompt("Please enter a number.",);
    }
    if(number == null){
        return 0;
    }else if(number == numToGuess){
        console.log("Number of Guesses: "+guesses);
        alert("You guessed the right number as "+number+". Number of Guesses: "+guesses)
        return guesses;
    }else if(number !== numToGuess){
        if(guesses == totalGuesses){
            alert("You exceeded the Number of Guesses: "+guesses+". The right number as "+numToGuess);
        }
        prevGuessedNum = number;
    }
}


playGuessingGame(7, 3);