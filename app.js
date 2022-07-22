var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");
var serverURL = "https://api.funtranslations.com/translate/minion.json";

function getUrl(text) {
  return serverURL + "?text=" + text;
}

function errorHandler(error) {
  alert("Something is wrong! Please try after some time.");
  console.log("Error : " + error);
}

function clickHandler() {
  var inputText = txtInput.value;
  if (inputText === "") alert("Please Enter the text to be translated");

  fetch(getUrl(inputText))
    .then((response) => response.json())
    .then((json) => {
      var translatedText = json.contents.translated;
      output.innerText = translatedText; // output
    })
    .catch(errorHandler);
}

btnTranslate.addEventListener("click", clickHandler);
