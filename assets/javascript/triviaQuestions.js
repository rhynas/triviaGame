var questions = [
	{question: "Name one state that borders Canada",
	 choices: ["Oregon", "South Dakota", "Rhode Island", "Maine"]
	 correctAnswer : 3
	},
	{question: "Who is the 'Father of Our Country?'",
	 choices: ["George Washington", "Abraham Lincoln", "Patrick Henry", "Thomas Jefferson"]
	 correctAnswer : 0
	},	
	{question: "What did the Emancipation Proclamation do?",
	 choices: ["Freed slaves in most Southern states", "ended World War I", "gave woman the right to vote", "gave the United States Independence from Great Britain"]
	 correctAnswer : 0
	},	
	{question: "What are the two parts of the U.S. Congress?",
	 choices: ["The House of Lords and the House of Commons", "The Senate and House of Representatives", "the Senate and the courts", "The house of Representatives and the courts"]
	 correctAnswer : 1
	},		
	{question: "During the Cold War, what was the main concern of the United States?",
	 choices: ["climate change", "the Great Depression", "slavery", "Communism"]
	 correctAnswer : 3
	},	
	{question: "What does the Constitution do?",
	 choices: ["defines the government", " sets up the government", "protect basic rights of Americans", "all of the answers"]
	 correctAnswer : 3
	},		
	{question: "What is the political party of the President now?",
	 choices: ["Democratic Party", "Green Party", "Independent Party", "Republican Party"]
	 correctAnswer : 0
	},		
	{question: "We elect a U.S. Senator for how many years?",
	 choices: ["ten (10)", "six (6)", "two (2)", "four (4)"]
	 correctAnswer : 1
	},		
	{question: "Who is the Commander in Chief of the military?",
	 choices: ["the Secretary of Defense", "the Vice President", "the President", "the Attorney General"]
	 correctAnswer : 2
	},		
	{question: "Who wrote the Declaration of Independence?",
	 choices: ["James Madison", "George Washington", "Thomas Jefferson", "Abraham Lincoln"]
	 correctAnswer : 2
	},		
	{question: "Who was the first President?",
	 choices: ["Thomas Jefferson", "Geroge Washington", "John Adams", "Abraham Lincoln"]
	 correctAnswer : 1
	},	


]


var questions = [
  {question: "Name one state that borders Canada",
   choices: ["Oregon", "South Dakota", "Rhode Island", "Maine"],
   correctAnswer : 3,
   image : "assets/images/usborders.png"
  },
  {question: "Who is the 'Father of Our Country?'",
   choices: ["George Washington", "Abraham Lincoln", "Patrick Henry", "Thomas Jefferson"],
   correctAnswer : 0
  },  
  {question: "What did the Emancipation Proclamation do?",
   choices: ["Freed slaves in most Southern states", "ended World War I", "gave woman the right to vote", "gave the United States Independence from Great Britain"],
   correctAnswer : 0
  },  
  {question: "What are the two parts of the U.S. Congress?",
   choices: ["The House of Lords and the House of Commons", "The Senate and House of Representatives", "the Senate and the courts", "The house of Representatives and the courts"],
   correctAnswer : 1
  },    
  {question: "During the Cold War, what was the main concern of the United States?",
   choices: ["climate change", "the Great Depression", "slavery", "Communism"],
   correctAnswer : 3
  },  
  {question: "What does the Constitution do?",
   choices: ["defines the government", " sets up the government", "protect basic rights of Americans", "all of the answers"],
   correctAnswer : 3
  },    
  {question: "What is the political party of the President now?",
   choices: ["Democratic Party", "Green Party", "Independent Party", "Republican Party"],
   correctAnswer : 0
  },    
  {question: "We elect a U.S. Senator for how many years?",
   choices: ["ten (10)", "six (6)", "two (2)", "four (4)"],
   correctAnswer : 1
  },    
  {question: "Who is the Commander in Chief of the military?",
   choices: ["the Secretary of Defense", "the Vice President", "the President", "the Attorney General"],
   correctAnswer : 2
  },    
  {question: "Who wrote the Declaration of Independence?",
   choices: ["James Madison", "George Washington", "Thomas Jefferson", "Abraham Lincoln"],
   correctAnswer : 2
  },    
  {question: "Who was the first President?",
   choices: ["Thomas Jefferson", "Geroge Washington", "John Adams", "Abraham Lincoln"],
   correctAnswer : 1
  },  
]
$("#lap").on("click", recordLap);
$("#stop").on("click", stop);
$("#reset").on("click", reset);
$("#start").on("click", start);

var time = 0;
var lap = 1;
var stopWatch;

function reset() {

  time = 0;
  lap = 1;

  $("#display").html("00:00");
  $("#laps").html("");

}

function start() {
  stopWatch = setInterval(count, 1000);
}

function stop() {

  console.log("stopping");
  clearInterval(stopWatch);

}

function recordLap() {

  var converted = timeConverter(time);
  var p = $('<p>').text("Lap " + lap + " : " + converted);

  $("#laps").append(p);
  lap
  ++;
}

function count() {

  time++;
  var converted = timeConverter(time);
  $("#display").html(converted);

}

function timeConverter(t) {

  var minutes = Math.floor(t / 60);
  var seconds = t - (minutes * 60);

  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  if (minutes === 0) {
    minutes = "00";
  }
  else if (minutes < 10) {
    minutes = "0" + minutes;
  }

  return minutes + ":" + seconds;
}

// Questions about Countries
// Which is the only American state to begin with the letter 'p'? 
// Pennsylvania.
// Name the world's biggest island 
// Greenland.
// What is the world's longest river? 
// Amazon.
// Name the world's largest ocean. 
// Pacific.
// What is the diameter of Earth? 
// 8,000 miles.
// Where would you find the world's most ancient forest? 
// Daintree Forest north of Cairns, Australia.
// Which four British cities have underground rail systems? 
// Liverpool, Glasgow, Newcastle and London.
// What is the capital city of Spain? 
// Madrid.
// Which country is Prague in? 
// Czech Republic.
// Which English town was a forerunner of the Parks Movement and the first city in Europe to have a street tram system? 
// Birkenhead.


  function createQuestionElement(index) {
    var qElement = $('<div>', {
      id: 'question'
    });
    
    var header = $('<h2>Question ' + (index + 1) + ':</h2>');
    qElement.append(header);
    
    var question = $('<p>').append(questions[index].question);
    qElement.append(question);
    
    var radioButtons = createRadios(index);
    qElement.append(radioButtons);
    
    return qElement;
  }
  
  // Creates a list of the answer choices as radio inputs
  function createRadios(index) {
    var radioList = $('<ul>');
    var item;
    var input = '';
    for (var i = 0; i < questions[index].choices.length; i++) {
      item = $('<li>');
      input = '<input type="radio" name="answer" value=' + i + ' />';
      input += questions[index].choices[i];
      item.append(input);
      radioList.append(item);
    }
    return radioList;
  }
  