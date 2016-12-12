var questions = [
  {
    question: "Who was the First Computer programmer",
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
    image : "assets/images/q3-space-war.jpeg",
    fact : "Steve Russell, a student at the Massachusetts Institute of Technology (MIT), creates Spacewar, the first interactive computer game. It runs on a Digital PDP-1 mainframe computer, and the graphics are made up of ASCII text characters." 
  },  
  {
    question: "Which famous computer scientist killed himself by eating a poison apple?",
    choices: ["Robert Prim", "Donal Knuth", "Bjarne Stroustrup", "Alan Turing"],
    correctAnswer : 3,
    image: "assets/images/q4-alan-turing.jpeg",
    fact: "Alan Turing was highly influential in the development of theoretical computer science, providing a formalisation of the concepts of algorithm and computation with the Turing machine, which can be considered a model of a general purpose computer"
  },  
  {
    question: "When was the first virus created?",
    choices: ["1983", "1972", "1999", "1986"],
    correctAnswer : 0,
    image : "assets/images/",
    fact : "The first IBM PC virus in the 'wild' was a boot sector virus dubbed (c)Brain, created in 1986 by the Farooq Alvi Brothers in Lahore, Pakistan, reportedly to deter unauthorized copying of the software they had written."
  },  
  {question: "In what year was the specification for the COBOL language created?",
   choices: ["1942", "1959", "1970", "1952"],
   correctAnswer : 1,
   image : "assets/images/",
   fact : "" 
  },    
  {question: "What programming language did Bjarne Stroustrup create?",
   choices: ["Java", "Phyton", "SQL", "C++"],
   correctAnswer : 3,
   image : "assets/images/",
   fact : "" 
  },  
  {question: "What is the name of the Java mascot?",
   choices: ["Mr. Java", "Steamy", "There is no Java Mascot", "Duke"],
   correctAnswer : 3,
   image : "assets/images/q8-duke.png",
   fact : "" 
  },    
  {question: "Who founded the 'Free Software Foundation'?",
   choices: ["Richard Stallman", "Steve Jobs", "Paul Allen", "Linus Torvalds"],
   correctAnswer : 0,
   image : "assets/images/",
   fact : "" 
  },    
  {question: "Which of the following JavaScript libraries was originally built as an add-on library extension to the Yahoo! User Interface Libary (YUI)?",
   choices: ["jQuery", "ExtJS", "Prototype", "MooTools"],
   correctAnswer : 1,
   image : "assets/images/",
   fact : "" 
  },    
  {question: "What is the origin of the Python scripting language's name?",
   choices: ["It was named after Python of Aenus, a student of Plato", "The creator thought it was a cool name", "It was named after Monty Python's Flying Circus", "It was named after Python, the earth-dragon of Delphi. Which was a serpent from ancient Greece"],
   correctAnswer : 2,
   image : "assets/images/",
   fact : "" 
  },    
  {question: "In 2010, which job did CNN.com rank as the #1 'Best Job in America'?",
   choices: ["Database Administrator", "Program Analyst", "Software Architect", "Information Technology Manager"],
   correctAnswer : 2,
   image : "assets/images/",
   fact : "" 
  },    
  {question: "What was the first song ever sung by a computer?",
   choices: ["Mary Had a Little Lamb", "Daisy Bell", "Twinkle Twinkle Little Star", "Happy Birthday"],
   correctAnswer : 1,
   image : "assets/images/",
   fact :  ""
  },  
  {question: "Who is the creator of the JavaScript scripting language?",
   choices: ["Brendan Eich", "Guido van Rossum", "Larry Wall", "Sergey Brin"],
   correctAnswer : 0,
   image : "assets/images/",
   fact :  ""
  } 
]
var choiceValue;  
var time = 5;
var counter = 0;
var triviaCounter = 0;
var globalIndex = 0;//change to the for loop with each question
var maxShowTime = 7;
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
  time = 5;
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
  return(questions[globalIndex].fact)
}

function showImage(){
  return $('<img>').attr('src', questions[globalIndex].image);

}

function displayResults(){
  $("#dDisplay").empty();
  $('#dQuestion').html(showAnswer() + " is the correct Answer");
  $('#dOptions').html(showImage());
  $('#dFacts').html(showFacts());
}

function createRadios() {
  var opt = showChoices(globalIndex);
  var item;
  var input = '';
  for (var i = 0; i < opt.length; i++) {
    //names have to be all the same
    input = '<input type="radio" name="choices" value=' + i + ' />';
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
      $("#dAnswer").html("That is an Incorrect Answer");      
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
      if (globalIndex < 5) {
        displayQuestion();
      }
      else{
        clearInterval(resetInterval);
        resetDisplay();
        displayFinalResults();
      }
    },1000*maxShowTime);
  });//End start button on click function

  $('#dOptions').on('click',function(){
    choiceValue = $('#dOptions input:radio:checked').val();
    // console.log("User Choice: " + choiceValue);
    display(choiceValue);
  });//End Div Options on click function    
 
});//End document ready function



