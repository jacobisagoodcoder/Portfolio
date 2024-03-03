const introPhrase = "Hello! Welcome to my portfolio page!";
const consDomInput = document.getElementById("consWords");
let phraseIndex = 0;

function consoleWriter(phrase, domInput, interval) {
  let phraseArray = phrase.split("");
  phraseArray.push(0);
  const paragraphTag = document.createElement("p");

  if (phraseArray[phraseIndex] === 0) {
    //inputs flag to stop interval
    phraseArray.pop();
    clearInterval(interval);
    //calls next function
  } else if (phraseArray.length > 0) {
    if (phraseArray[phraseIndex] === " ") {
      //checks for spaces to be properly input into DOM
      paragraphTag.innerHTML = "&nbsp;";
      domInput.appendChild(paragraphTag);
      phraseIndex++;
    } else {
      //Inputs every other character into DOM
      paragraphTag.textContent = phraseArray[phraseIndex];
      domInput.appendChild(paragraphTag);
      phraseIndex++;
    }
  }
}

//calls first consolewriter. The writer takes 4 params the phrase, where it is input 
//in the DOM and the name of the interval calling it in this case itself, finally the next function
//to be called after the console writer is completed
const introConsoleWriterInterval = setInterval(function () {
  consoleWriter(introPhrase, consDomInput, introConsoleWriterInterval);
}, 200);


