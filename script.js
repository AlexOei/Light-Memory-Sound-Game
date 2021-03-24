/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
// global constants
//how long to hold each clue's light/sound
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence

//Global Variables
var pattern = [6, 5, 4, 3, 2, 1, 2, 4];
var progress = 0; 
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;//must be between 0.0 and 1.0
var guessCounter = 0;
var clueHoldTime = 1000;
var mistakes = 0;
var guessCorrect = false;
var timer;



function startGame(){
    //initialize game variables
    progress = 0;
    gamePlaying = true;
    document.getElementById("startBtn").classList.add("hidden");//make start hidden
    document.getElementById("stopBtn").classList.remove("hidden");
    document.getElementById("timer").classList.remove("hidden");
    document.getElementById("timerDiv").classList.remove("hidden");
    randomPattern();
    playClueSequence();
    
}

function stopGame(){
    gamePlaying = false;
    document.getElementById("startBtn").classList.remove("hidden");
    document.getElementById("stopBtn").classList.add("hidden");
    document.getElementById("timer").classList.add("hidden");
    document.getElementById("timerDiv").classList.add("hidden");
    clear();
}

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}

function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playAudio(btn);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence(){
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i = 0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
    
  }
  clueHoldTime = clueHoldTime - 75;
  setTimeout(timerF, delay-clueHoldTime-cluePauseTime, 10)
  
  
  

  
}

function timerF(seconds){
  
  
  timer = setInterval(function(){
  seconds -= 1;
  document.querySelector('#timer').textContent = seconds;
  
  
    
  if (seconds == -1){
    clear();
    loseGame();
  }
  
  
  
  }, 1000)
  
  
}


function clear(){
  clearInterval(timer);
  
}

function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
}
function winGame(){
  stopGame();
  alert("Game Over. You won!");
}
function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }

  // add game logic here
  if (pattern[guessCounter] == btn){
    if(guessCounter == progress){
      if(progress + 1 == pattern.length){
        winGame();
      }else{
        progress++;
        clear();
        document.querySelector('#timer').textContent = 10;
        playClueSequence()
    
      }
    }else{
      guessCounter++;
    }
  }else{
    mistakes++;
    if (mistakes == 3){
      loseGame();
    }
    
  }
}

function randomPattern(element){
  for (var i = 0; i < pattern.length; i++){
    pattern[i] = Math.round(Math.random() * 5) + 1;
  }
  console.log(pattern);
}


function playAudio(btn){
  audio = document.getElementById("audio" + btn);
  audio.play();
  setTimeout(function(){
    pauseAudio(btn);
  }, clueHoldTime)
}

function pauseAudio(btn){
  audio = document.getElementById("audio" + btn);
  audio.pause();
  audio.currentTime = 0;
}


