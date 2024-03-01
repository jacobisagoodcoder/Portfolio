//create arr that contains words I would like console animation to display
//create blinking underscore element
//loop through each letter of word and input into DOM BEFORE underscore
//once word is complete, create call function that loops through word and removes letter backwords

const introWord = "Hello! Welcome to my profile page!";
const introPhrase = introWord.split('');
const finalArr = [];

let consWords = document.getElementById("consWords");

let isBool = true;

setInterval(underscoreBlink, 1000);

function underscoreBlink() {
  if (isBool) {
    consWords.innerHTML = "_";
    isBool = false;
  } else if (!isBool) {
    consWords.innerHTML = "";
    isBool = true;
  }
}

//

function addIntroPhrase(){
    introPhrase.forEach((letter) => {
        finalArr.push(letter);
        addFinalPhrase();
    })
}

//for loop that places each letter in array in it's own <span> with 'hidden' class that gets removed one by one? 