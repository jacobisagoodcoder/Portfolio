//1. variable that contains string of words I want it to spell out
//2. create a function that splits string into an array
//3. loop over the array and append each letter to the DOM
//4. use setInterval() to call function every 1 second


const introPhrase = "Hello! Welcome to my portfolio page!"
const consDomInput = document.getElementById('consWords');
let phraseIndex = 0;


function consoleWriter(phrase, domInput){
  let phraseArray = phrase.split('');
  phraseArray.push(0);
  const paragraphTag = document.createElement('p');

  if(phraseArray[phraseIndex] === 0){
    phraseArray.pop();
    clearInterval(consoleWriterInterval);
  }
  else if(phraseArray.length > 0){
      if(phraseArray[phraseIndex] === " "){
      paragraphTag.innerHTML = '&nbsp;';
      domInput.appendChild(paragraphTag);
      phraseIndex++
    }else{
    paragraphTag.textContent = phraseArray[phraseIndex];
    domInput.appendChild(paragraphTag);
    phraseIndex++;
  } 
}
}

const consoleWriterInterval = setInterval(function(){consoleWriter(introPhrase, consDomInput)}, 250);