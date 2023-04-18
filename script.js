var questions = [
    {
      question: "What is HTML?",
      choices: ["A cord", "HyperText Markup Language", "A Company", "Just an absurd text"],
      answer: 1
    },
    {
      question: "What does CSS stand for?",
      choices: ["Cascading Style Sheet", "Company Stand Structure", "Camping Site Standards", "Coding Structure Standards"],
      answer: 0
    },
    {
      question: "What is JavaScript?",
      choices: ["A high level  program language ", "A random old language", "A Company", "A Currency"],
      answer: 0
    },
    {
      question: "What school is the best?",
      choices: ["K-State", "Duke", "KU", "Florida"],
      answer: 2
    }
  ];
  
  let currentQuestion = 0;
  let score = 0;
  let timeLeft = 30;
  let timerId;
  
  var quiz = document.getElementById("quiz");
  var questionEl = document.getElementById("question");
  var choicesEl = document.getElementById("choices");
  var scoreEl = document.getElementById("points");
  var timeEl = document.getElementById("time");
  var nextButton = document.getElementById("next");
  
  function startTimer() {
    timerId = setInterval(() => {
      timeLeft--;
      timeEl.textContent = timeLeft;
      if (timeLeft === 0) {
        clearInterval(timerId);
        showScore();
      }
      timeEl.textContent
     }, 1000);
    } 
    function showScore() {
        // Display the final score to the user
        quiz.innerHTML = `<h2>Your score: ${score}/${questions.length}</h2>`;
        // Stop the timer
        clearInterval(timerId);
      }
      
      function displayQuestion() {
        // Display the current question to the user
        let q = questions[currentQuestion];
        questionEl.textContent = q.question;
        choicesEl.innerHTML = "";
        for (let i = 0; i < q.choices.length; i++) {
          let choice = q.choices[i];
          let li = document.createElement("li");
          li.textContent = choice;
          li.addEventListener("click", function() {
            // Check if the user's answer is correct
            if (i === q.answer) {
              score++;
              scoreEl.textContent = score;
            }
            // Move on to the next question
            currentQuestion++;
            if (currentQuestion < questions.length) {
              displayQuestion();
            } else {
              showScore();
            }
          });
          choicesEl.appendChild(li);
        }
      }
      
      // Event listener for the next button
      nextButton.addEventListener("click", function() {
        // Move on to the next question
        currentQuestion++;
        if (currentQuestion < questions.length) {
          displayQuestion();
        } else {
          showScore();
        }
      });
      
      // Start the timer and display the first question
      startTimer();
      displayQuestion();
      
      
      