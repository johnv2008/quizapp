var questions = [
  {
    question: "How states does the united states have?",
    answer: 50
  },
  {
    question: "What is the capital of California?",
    answer: "sacramento"
  },
  {
    question: "If Batman is from gothem, where is Superman from?",
    answer: "krypton"
  },
  {
    question: "How many letters are in our alphabet?",
    answer: 26
  },
  {
    question: "Who is DC Comics rival?",
    answer: "marvel"
  }
];

  // This is the loop for each question
  for(var i = 0; i < questions.length; i++) {
	var question = questions[i].question;
	var el = document.getElementById('question' + [i]);
	console.log(question, el);

	el.textContent = question;
}
  function results() {
	var correct = 0;
	var incorrect = 0;

	for(var i = 0; i < questions.length; i++) {

		var answer = questions[i].answer;
		var guess = document.getElementById('answer' + [i]).value;
		var questionSpot = document.getElementById('question' + [i]);


		if(answer == guess) {
			questionSpot.className = 'correct';
			correct++;
		} else {
			questionSpot.className = 'incorrect';
			incorrect++;
		};
	};

	document.getElementById('correct').textContent = correct;
	document.getElementById('incorrect').textContent = incorrect;
}
