var questions = [
  {
    question: "Who was the First Computer programmer?",
    choices: ["Steve Jobs", "Ada Lovelace", "Rhode Island", "Maine"],
    correctAnswer : 1,
    image : "assets/images/q1-ada-lovelance.jpeg",
    fact : "A gifted mathematician, Ada Lovelace is considered to have written instructions for the first computer program in the mid-1800s"
  },
  {
    question: "What was Java called before it was Java?",
    choices: ["Oak", "Maple", "There was no working name for Java before it was named", "Snoo"],
    correctAnswer : 0,
    image : "assets/images/q2-java.png",
    fact : "Oak is a discontinued programming language created by James Gosling in 1991, initially for Sun Microsystems' set-top box project. The language later evolved to become Java  The name Oak was used by Gosling after an oak tree that stood outside his office."
  },  
  {
    question: "When was the first game created?",
    choices: ["1965", "1983", "1961", "1992"],
    correctAnswer : 2,
    image : "assets/images/q3-space-war.jpg",
    fact : "Steve Russell, a student at the Massachusetts Institute of Technology (MIT), creates Spacewar, the first interactive computer game. It runs on a Digital PDP-1 mainframe computer, and the graphics are made up of ASCII text characters." 
  },  
  {
    question: "Which famous computer scientist killed himself by eating a poison apple?",
    choices: ["Robert Prim", "Donal Knuth", "Bjarne Stroustrup", "Alan Turing"],
    correctAnswer : 3,
    image: "assets/images/q4-alan-turing.jpg",
    fact: "Alan Turing was highly influential in the development of theoretical computer science, providing a formalisation of the concepts of algorithm and computation with the Turing machine, which can be considered a model of a general purpose computer"
  },  
  {
    question: "When was the first virus created?",
    choices: ["1983", "1972", "1999", "1986"],
    correctAnswer : 3,
    image : "assets/images/q5-brain-virus.jpg",
    fact : "The first IBM PC virus in the 'wild' was a boot sector virus dubbed Brain, created in 1986 by the Farooq Alvi Brothers in Lahore, Pakistan, reportedly to deter unauthorized copying of the software they had written."
  },  
  {question: "In what year was the specification for the COBOL language created?",
   choices: ["1942", "1959", "1970", "1952"],
   correctAnswer : 1,
   image : "assets/images/q6-cobol-screen.png",
   fact : "COBOL (Common Business Oriented Language) was one of the earliest high-level programming languages. (CODASYL). This committee was a formed by a joint effort of industry, major universities, and the United States Government. This committee completed the specifications for COBOL as the year of 1959 came to an end" 
  },    
  {question: "What programming language did Bjarne Stroustrup create?",
   choices: ["Java", "Phyton", "SQL", "C++"],
   correctAnswer : 3,
   image : "assets/images/q7-bjarne.jpeg",
   fact : "In the late 1970s, Stroustrup applied the idea of “classes” to the C programming language to create a new language that allows for high level abstraction—but is efficient and close to the hardware." 
  },  
  {question: "What is the name of the Java mascot?",
   choices: ["Mr. Java", "Steamy", "There is no Java Mascot", "Duke"],
   correctAnswer : 3,
   image : "assets/images/q8-duke.png",
   fact : "Back in the early days of Java development, Sun Microsystems' Green Project team created its first working demo—an interactive handheld home entertainment controller called the Star7. At the heart of the animated touch-screen user interface was a cartoon character named Duke" 
  },    
  {question: "Who founded the 'Free Software Foundation'?",
   choices: ["Richard Stallman", "Steve Jobs", "Paul Allen", "Linus Torvalds"],
   correctAnswer : 0,
   image : "assets/images/q9-stallman.jpg",
   fact : "Richard Matthew Stallman, often known by his initials, rms, is an American software freedom activist and programmer.  He campaigns for software to be distributed in a manner such that its users receive the freedoms to use, study, distribute and modify that software" 
  },    
  {question: "Which of the following JavaScript libraries was originally built as an add-on library extension to the Yahoo! User Interface Libary (YUI)?",
   choices: ["jQuery", "ExtJS", "Prototype", "MooTools"],
   correctAnswer : 1,
   image : "assets/images/q10-extjs.jpg",
   fact : "Ext JS is a pure JavaScript application framework for building interactive cross platform web applications using techniques such as Ajax, DHTML and DOM scripting" 
  },    
  {question: "What is the origin of the Python scripting language's name?",
   choices: ["It was named after Python of Aenus, a student of Plato", "The creator thought it was a cool name", "It was named after Monty Python's Flying Circus", "It was named after Python, the earth-dragon of Delphi. Which was a serpent from ancient Greece"],
   correctAnswer : 2,
   image : "assets/images/q11-monty-python.png",
   fact : "Python actually got is name from a BBC comedy series from the seventies 'Monty Python's Flying Circus'. The designer needed a name that was short, unique, and slightly mysterious. Since he was a fan of the show he thought this name was great." 
  },    
  {question: "In 2010, which job did CNN.com rank as the #1 'Best Job in America'?",
   choices: ["Database Administrator", "Program Analyst", "Software Architect", "Information Technology Manager"],
   correctAnswer : 2,
   image : "assets/images/q12-best-job.png",
   fact : "The same way an architect designs a house, software architects lay out a design plan for new programs. That usually means leading a team of developers and engineers, and making sure all the pieces come together to make fully-functioning software." 
  },    
  {question: "What was the first song ever sung by a computer?",
   choices: ["Mary Had a Little Lamb", "Daisy Bell", "Twinkle Twinkle Little Star", "Happy Birthday"],
   correctAnswer : 1,
   image : "assets/images/q13-first-sang.jpg",
   fact : "In 1961, the IBM 7094 became the first computer to sing, singing the song Daisy Bell. Vocals were programmed by John Kelly and Carol Lockbaum and the accompaniment was programmed by Max Mathews. This performance was the inspiration for a similar scene in 2001: A Space Odyssey"
  },  
  {question: "Who is the creator of the JavaScript scripting language?",
   choices: ["Brendan Eich", "Guido van Rossum", "Larry Wall", "Sergey Brin"],
   correctAnswer : 0,
   image : "assets/images/q14-brendan.jpg",
   fact :  "Brendan Eich is an American technologist and creator of the JavaScript programming language. He co-founded the Mozilla project, the Mozilla Foundation and the Mozilla Corporation, and served as the Mozilla Corporation's chief technical officer and briefly its chief executive officer. He is the CEO of Brave Software"
  } 
]
var choiceValue;  
var time = 20;
var counter = 0;
var triviaCounter = 0;
var globalIndex = 0;//change to the for loop with each question
var maxShowTime = 23;
var resetInterval;
var correctCounter = 0;
var incorrectCounter = 0;
var noAnswerCounter = 0;

function decreaseTime() {
  time--;
  if(time == 0){
    $('#dAnswer').html("You run out of Time");
    noAnswerCounter++;
    displayResults();
    stopTimer();
//    resetTimer();
  } else{
    $("#dDisplay").html("Time Remaining: " + time);
  }
}

function setTimer() {
   counter = setInterval(decreaseTime, 1000);
    $("#dDisplay").html("Time Remaining: " + time);
}

function resetTimer() {
  time = 20;
  $("#dDisplay").html("30");
}

function stopTimer() {
  clearInterval(counter);
 }


function showQuestion(){
  return(questions[globalIndex].question);
}

function showAnswer(){
  return(questions[globalIndex].choices[questions[globalIndex].correctAnswer]);
}

function showChoices(){
  return(questions[globalIndex].choices)
}

function showFacts(){
  return("<p>" + questions[globalIndex].fact + "</p>")
}

function showImage(){
  return $('<img>').attr('src', questions[globalIndex].image).addClass("cImage");

}

function displayResults(){
  $("#dDisplay").empty();
  $('#dQuestion').html(showAnswer() + " is the correct Answer");
  // $('#dOptions').empty();
  $('#dOptions').html(showImage());
  $('#dFacts').html(showFacts());
}

function createRadios() {
  var opt = showChoices(globalIndex);
  var item;
  var input = '';
  for (var i = 0; i < opt.length; i++) {
    //names have to be all the same
    input = '<input type="radio" name="choices" value=' + " " + i + ' />';
    input += opt[i];
    $("#dOptions").append(input + '<br>');

  } 
}

function checkAnswer(choiceSelected){
  if (questions[globalIndex].correctAnswer == choiceSelected){
    return true;
  } else { 
    return false;
  }
}

function display(choice){
    if (checkAnswer(choice) === true){
      $("#dAnswer").html("Correct....!!!");
      displayResults();
      correctCounter++;
      stopTimer();
    } else{
      $("#dAnswer").html("...Incorrect Answer...");      
      displayResults();
      incorrectCounter++;
      stopTimer();
    }
}

function displayQuestion(){
  setTimer();
  $("#dQuestion").html(showQuestion());
  createRadios();

}

function displayFinalResults(){
  $('#dDisplay').append("Game Over...!!!")
  $('#dResults').append("Results");
  $('#dResults').append("<br>Correct Answers: " + correctCounter);
  $('#dResults').append("<br>Incorrect Answers: " + incorrectCounter);
  $('#dResults').append("<br>Unanswered Questions: " + noAnswerCounter);

}

function resetDisplay(){
  $("#dDisplay").empty();
  $('#dOptions').empty();
  $('#dFacts').empty();
  $("#dAnswer").empty();
  $("#dQuestion").empty();
  // $('#dImage').empty();
}
//  
$(document).ready(function(){
  $('#startButton').on('click', function(){  
    $('#startButton').hide();
    if(triviaCounter === 0){
      displayQuestion();
      triviaCounter++;
    }
    resetInterval = setInterval(function(){
      resetTimer();
      globalIndex++;
      resetDisplay();
      triviaCounter++;
      if (globalIndex < questions.length) {
        displayQuestion();
      }
      else{
        clearInterval(resetInterval);
        resetDisplay();
        displayFinalResults();
      }
    },1000*maxShowTime);//End trivia interval function
  });//End start button on click function

  $('#dOptions').on('click',function(){
    choiceValue = $('#dOptions input:radio:checked').val();
    // console.log("User Choice: " + choiceValue);
    display(choiceValue);
  });//End Div Options on click function    
 
});//End document ready function



