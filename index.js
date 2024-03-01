const introWord = "Hello! Welcome to my profile page!";
const introPhrase = introWord.split('');

let consWords = document.getElementById("consWords");
let consUnderscore = document.getElementById("consUnderscore");
let personalInfo = document.getElementById("personalInfo");

let index = 0;
let isBool = true;


function underscoreBlink() {
  if (isBool) {
    consUnderscore.innerHTML = "_";
    isBool = false;
  } else if (!isBool) {
    consUnderscore.innerHTML = "";
    isBool = true;
  }
}

function introPhraseThing(){

  if(introPhrase.length > 0){
    let character = introPhrase[index]
    let h1 = document.createTextNode(character);
    h1.textContent = character;
    
    consWords.appendChild(h1);

    index++;
   
    setTimeout(introPhraseThing, 250);
  } else if(introPhrase.length == 0){
    //call future func here for personal info/project information
  }
}


introPhraseThing();
setInterval(underscoreBlink, 500)