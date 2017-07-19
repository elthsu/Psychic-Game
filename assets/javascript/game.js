
		var letter;
		var wins = 0;
		var losses = 0;
		var remaining = 10;
		var guesses;
		var letterArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
		var winsText = document.getElementById("wins-text");
		var lossesText = document.getElementById("losses-text");
		var remainingText = document.getElementById("remaining-text");
		var guessesText = document.getElementById("guesses-text");
		var guessesArray = [];
		var letterNumber; 

	
		


		letterNumber = Math.floor((Math.random() * 25) + 1);
		letter = letterArray[letterNumber];
		console.log(letter);

		document.onkeyup = function(event) {

		guesses = event.key;
		guessesArray.push(" " + guesses);


		
		if (letterArray.indexOf(guesses) !== -1) {

			
			if (remaining !== 0 && guesses === letter) {

				alert("Yay! You win!");
				wins++;
				guessesArray = [];
				remaining = 11;
				
			}
					
			remaining--;

			if (remaining === 0) {

				alert("You Lost!");
				guessesArray = [];
				losses++;
				remaining = 10;

			}

			winsText.textContent = wins;
			lossesText.textContent = losses;
			remainingText.textContent = remaining;
			guessesText.textContent = guessesArray;	
		}

		else {

			alert("Please use letters.")
			guessesText.textContent = guessesArray;	
		}


		
	
	};

