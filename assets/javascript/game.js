	

	// VARIABLES
	// ==========================================================================

	// All the variables that will help us keep track of our stats.
	var letter;
	var wins = 0;
	var losses = 0;
	var remaining = 10;
	var guesses;
	// Our array of all letters available.
	var letterArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
	// Variables that will print on page.
	var winsText = document.getElementById("wins-text");
	var lossesText = document.getElementById("losses-text");
	var remainingText = document.getElementById("remaining-text");
	var guessesText = document.getElementById("guesses-text");
	// Empty array to store user guesses.
	var guessesArray;
	// Variable to assist in finding the letter in the array for our random generator.
	var letterNumber;
		 
	
	// FUNCTIONS
	// ==========================================================================
		 
	// Function to start the game.
	function start () { 
	// Empties user guesses array.	
	guessesArray = [];
	// (Re)sets remaining guesses to 10.
	remaining = 10;
	// Randoms a number and then finds corresponding letter in all letters array.
	letterNumber = Math.floor(Math.random() * 26);
	letter = letterArray[letterNumber];
	// Updates the stats.
	display();	
	}

	// Function to run when user wins, adds one to "wins" and then restarts the game.
	function win () {
	alert("Yay! You win!");
	wins++;
	start();
	}

	// Function to run when user loses, adds one to "losses" and then restarts the game.
	function lose () {
	alert("You are a loser.....of this game!");
	losses++;
	start();
	}

	// Function to run when we need to update the stats.
	function display () {
	winsText.textContent = wins;
	lossesText.textContent = losses;
	remainingText.textContent = remaining;
	guessesText.textContent = guessesArray;
	}

		
	
    // MAIN PROCESS
    // ==============================================================================

    // Calling functions to start the game.	
	start();

	// When the user presses a key, it will run the following function to add user guesses to array.
	document.onkeyup = function(event) {
	guesses = event.key;
	guessesArray.push(" " + guesses);

		// Runs this code first to make sure user pressed a valid key.
	  	if (letterArray.indexOf(guesses) !== -1 && remaining > 0) {
	  		// If user guessed right, then win.
	  		if (guesses === letter) {
				display();
				win();
			}
			// If user did not guess correctly, number of guess reduces by 1.
					else {
						remaining--;
						display();
						// If by reducing 1, the number of guesses equals 0, user loses.
						if (remaining === 0) {
							lose();
						}
					}
		}
		// If invalid key was used, alert user, reduce number of guesses by 1.
		else if (letterArray.indexOf(guesses) === -1 && remaining > 0) {
			alert("Please use letters, numbskull.");
			remaining--;
			display();
			// If by reducing 1, the number of guesses equals 0, user loses.
			if (remaining === 0) {
				lose();
			}
		}	
			
		// If no guesses are left, user loses.
		else {
			lose();
		}		
	};
	
	
		


