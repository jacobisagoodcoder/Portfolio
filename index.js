//create arr that contains words I would like console animation to display
//create blinking underscore element
//loop through each letter of word and input into DOM BEFORE underscore
//once word is complete, create call function that loops through word and removes letter backwords

const introWord = "Hello! Welcome to my profile page!";
const introPhrase = introWord.split('');



let consWords = document.getElementById("consWords");
let consPhrase = document.getElementById("consPhrase");
let consUnderscore = document.getElementById("consUnderscore");

let index = 0;
let isBool = true;

setInterval(underscoreBlink, 500)

function underscoreBlink() {
  if (isBool) {
    consUnderscore.innerHTML = "_";
    isBool = false;
  } else if (!isBool) {
    consUnderscore.innerHTML = "";
    isBool = true;
  }
}

//

function introPhraseThing(){

  if(introPhrase.length > 0){
    let character = introPhrase[index]
    let h1 = document.createTextNode(character);
    h1.textContent = character;
    

    consWords.appendChild(h1);

    index++;
   

    setTimeout(introPhraseThing, 250);
  }
}

introPhraseThing();

//for loop that places each letter in array in it's own <span> with 'hidden' class that gets removed one by one? 