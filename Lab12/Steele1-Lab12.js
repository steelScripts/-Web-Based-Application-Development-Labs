// constants
var POSSIBLE_WORDS = ["obdurate", "verisimilitude", "defenestrate", 
    "obsequious", "dissonant", "toady", "idempotent"];
var MAX_GUESSES = 7;           // number of total guesses per game

// global variables
var word = "?";                // random word user is trying to guess
var guesses = "";              // letters the player has guessed
var guessCount = MAX_GUESSES;  // number of guesses player has left

$(document).ready(function() 
{
	$("#newGame").click(newGame);
	$("#guessLetter").click(guessLetter);
});

// Chooses a new random word and displays its clue on the page.
function newGame() {
  // choose a random word
  var randomIndex = parseInt(Math.random() * POSSIBLE_WORDS.length);
  word = POSSIBLE_WORDS[randomIndex];
  guessCount = MAX_GUESSES;
  guesses = "";
  updatePage();   // show initial word clue - all underscores
}

// Guesses a letter.  Called when the user presses the Guess button.
function guessLetter() 
{
	var letter = $("#guess").val();
	var clue = $("#clue").text();
	if (guessCount == 0 || clue.search("_") < 0 || guesses.search(letter) >= 0) 
	{
		return;   // game is over, or already guessed this letter
	}
	guesses += letter;
	if (word.indexOf(letter) < 0) 
	{
		guessCount--;      // an incorrect guess
		$("#hangmanpic").css("border", "solid yellow 5px"); 
	}
	if (guessCount <= 1) {
		$("body").css("backgroundColor", "orange");
	}
	else {
		$("body").css("backgroundColor", "white");
	}
	
	updatePage();
}

// Updates the hangman image, word clue, etc. to the current game state.
function updatePage() 
{
	// update clue string such as "h _ l l _ "
	var clueString = "";
	for (var i = 0; i < word.length; i++) 
	{
		var letter = word.charAt(i);
		if (guesses.indexOf(letter) >= 0) 
		{   // letter has been guessed
			clueString += letter + " ";
		} 
		else 
		{  // not guessed
			clueString += "_ ";
		}
	}

	var clue = $("#clue").text(clueString);
  
	// show the guesses the player has made
  var guessArea = document.getElementById("guesses");
	if (guessCount == 0) 
	{
		$("#guesses").append("<img src=\"https://images.duckduckgo.com/iu/?u=http%3A%2F%2Fdanny.bag.gs%2Fblog%2Fwp-content%2Fuploads%2F2012%2F12%2Ffacebook-thumbs-down.png&f=1\" />");    // game over (loss)
	} 
	else if (clueString.indexOf("_") < 0) 
	{
		$("#guesses").append("<img src=\"https://images.duckduckgo.com/iu/?u=http%3A%2F%2Fny-image1.etsy.com%2Fil_fullxfull.222295605.jpg&f=1\" />");     // game over (win)
	} 
	else 
	{
		$("#guesses").text("Guesses: " + guesses + "     " + "Guesses Left: " 
							+ guessCount);
	}

  // update hangman image
  	$("#hangmanpic").attr("src", "HangmanImages/hangman" + guessCount + ".gif");
}
