//global variables
var currentWord = new Array();
var testList = new Array();
var correctList = new Array();

var debugflag=false;

function startup()
{
  // We start with OptionsDiv visible and WorkDiv hidden
  document.getElementById('WorkDiv').style.visibility = 'visible';

	// Set visibility of debug div
	if (debugflag) {
		document.getElementById('DebugDiv').style.visibility = 'visible';
	} else {
		document.getElementById('DebugDiv').style.visibility = 'hidden';
	}

  // fill the testList and randomize it
  testList = ["a", "and", "big", "blue", "can", "come", "down", "find", "for", "funny", "go", "help", "here", "I", "in", "is", "it", "jump", "little", "look", "make", "me", "my", "not", "one", "play", "red", "run", "said", "see", "the", "three", "to", "two", "up", "we", "where", "yellow", "you"]

  testList.sort(function() {return 0.5 - Math.random()});

  // set the initial word
  newWord();

  // set the intial stats
  updateStats()
}

function newWord()
{
	// Get the next word, and fill the screen
	currentWord = testList.shift();
	document.getElementById("word").innerHTML=currentWord;

	// When debugging, set the debug values
	if (debugflag) {
		document.getElementById("debug_currentWord").innerHTML="currentWord: " + currentWord;
		document.getElementById("debug_testList").innerHTML="testList: " + testList;
		document.getElementById("debug_correctList").innerHTML="correctList: " + correctList;
	}
}

function correct()
{
	// add correct answer to correcList, get a new word
	correctList.push(currentWord);

	if (testList.length) {
		newWord();
	} else {
		// Let the user know they are done
		document.getElementById("word").innerHTML="Yeah, You did it!";
		document.getElementById("Buttons").style.visibility="hidden";
	}
	//Let the user know how they are doing.
	updateStats()
}

function incorrect()
{
	// add the incorrect word onto the end of the list
	testList.push(currentWord);

	// Get a new word and
	newWord();

	//Let the user know how they are doing.
	updateStats()
}

function updateStats()
{
	//
	var messageString = "Left: " + testList.length + "  Correct: " + correctList.length;
	document.getElementById("mystats").innerHTML=messageString;
}