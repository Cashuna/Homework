var space = " ";
var questionInDOM = document.getElementById("question");
var userSelection = document.getElementsByTagName("em");
//var newDiv = document.createElement("div");
var trivia = {
 	questions: ["Q1?", "Q2?", "Q3?", "Q4?", "Q5?", "Q6?", "Q7?", "Q8?", "Q9?", "What external file can be used to style an HTML page?"],
	choices: [["javascript", "jQuery", "HTML", "CSS"], ['2', '2b', '2c', '2d'], ['a', 'b', 'c', 'd'],
 					  ['a', 'b', 'c', 'd'], ['a', 'b', 'c', 'd'], ['a', 'b', 'c', 'd'], ['a', 'b', 'c', 'd'],
 					  ['a', 'b', 'c', 'd'], ['a', 'b', 'c', 'd'], ['a', 'b', 'c', 'd']],
 					
 	correct_answer: ["CSS", "t", "t", "t", "t", "t", "t", "t", "t", "t"],

 };


function choiceList ()
 	{
 		
 		for (var i=0; i< userSelection.length; i++)
		{
		trivia.choices[i];
		}
	}


//var playgame = false;
//var correctAnswer = 0; incorrectAnswer= 0; unansweredQuestions = 0;
//some way to start the game


for (var j=0; j<trivia.questions.length; j++)
{
	questionInDOM.innerHTML = trivia.questions[j];
	choiceList(trivia.choices);
	console.log(trivia.questions[j]);
	console.log(trivia.choices[j]);
}



/*this.correct = function (){
 /* if (on click == array[array.length-1]) { 
	correctAnswer++

 	} else 
 		write "incorrect answer"
 		incorrectAnswer ++ and write correctAnswer to DOM,
 		====================================================
		trivia.correct_answer = array[4];
 	};	
 }*/