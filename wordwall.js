//global variables
		var currentWord = [];
		var testList = [];
		var correctList = [];
		var incorrectList = [];

		var debugflag=false;

		function startup(){
		  // We start with OptionsDiv visible and WorkDiv hidden
		  document.getElementById('WorkDiv').style.visibility = 'visible';

			// Set visibility of debug div
			if (debugflag) {
				document.getElementById('DebugDiv').style.visibility = 'visible';
			} else {
				document.getElementById('DebugDiv').style.visibility = 'hidden';
			}

		  // fill the testList and randomize it
		  //testList = ["a", "and", "big", "blue", "can", "come", "down", "find", "for", "funny", "go", "help", "here", "I", "in", "is", "it", "jump", "little", "look", "make", "me", "my", "not", "one", "play", "red", "run", "said", "see", "the", "three", "to", "two", "up", "we", "where", "yellow", "you"];
		  testList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
		  //testList = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
		  //testList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

		  testList.sort(function() {return 0.5 - Math.random()});

		  // set the initial word
		  newWord();

		  // set the intial stats
		  updateStats();
		}

		function newWord(){
			// Get the next word, and fill the screen
			currentWord = testList.shift();
			document.getElementById("word").innerHTML=currentWord;

			// When debugging, set the debug values
			debugStuff();
		}

		function correct(bool){
			// add the word the correct or incorrect list depending on if the answer was correct or not
			if (bool) {
				correctList.push(currentWord);
			} else {
				incorrectList.push(currentWord);
			}

			//Let the user know how they are doing.
			updateStats();

			// Decide if we are done
			if (testList.length) {
				newWord();
			} else {
				endStuff();
			}

		}

		function endStuff(){
			// Let the user know they are done
			document.getElementById("word").innerHTML="Nice job! You got " + correctList.length + " words right!";
			document.getElementById("Buttons").style.visibility="hidden";
		}

		function updateStats(){
			//
			var messageString = "Correct: " + correctList.length + "  Incorrect: " + incorrectList.length + "<p>Left: " + testList.length + "</p>";
			document.getElementById("mystats").innerHTML=messageString;
		}

		function debugStuff(){
			if (debugflag) {
				document.getElementById("debug_currentWord").innerHTML="currentWord: " + currentWord;
				document.getElementById("debug_testList").innerHTML="testList: " + testList;
				document.getElementById("debug_correctList").innerHTML="correctList: " + correctList;
				document.getElementById("debug_incorrectList").innerHTML="incorrectList: " + incorrectList;
			}
		}