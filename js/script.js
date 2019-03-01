/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing

/***
  Create the `getRandomQuote` function to:
   - Create a variable to store a random number
   - Cse the random number to `return` a random quote object from the `quotes` array.
***/
var usedQuotes = []
var timeOut;

function getRandomQuote(){
  var randomNumber = Math.floor(Math.random() * quotes.length);
  var getQuotes = quotes[randomNumber];
    usedQuotes.push(getQuotes);
    quotes.splice(randomNumber, 1);
    if(quotes.length === 0){
      quotes = usedQuotes;
      usedQuotes = [];
}
  return getQuotes;
}

function rgbColor(){
 var randomRgb = 'rgb(';
  randomRgb += Math.floor(Math.random() * 255) + ',';
  randomRgb += Math.floor(Math.random() * 255) + ',';
  randomRgb += Math.floor(Math.random() * 255);
  randomRgb += ')';
  return randomRgb;
}



/***
  Create the `printQuote` function to:
   - Call the `getRandomQuote` function and assign it to a variable.
   - Create a variable for the HTML string and set it equal to an empty string.
   - Use the HTML template in the instructions or the markup in the index.html file, AND
     the random quote vairable to build your HTML string.
   - Add the quote and source section to the HTML string.
   - Use an if statement to check for the citation property before adding it to the HTML string.
   - Use an if statement to check for the year property before adding it to the HTML string.
   - Don't forget to close that final `p` tag.
   - Set the `innerHTML` of the `quote-box` div to the HTML string.
***/
function printQuote(){
  var randomQuote = getRandomQuote();
  var quotesHTML = '<p class="quote"> ' + randomQuote.quote + ' </p>';
    quotesHTML += '<p class="source"> ' + randomQuote.source + ',';
      if(randomQuote.citation){
        quotesHTML += '<span class"citation"> ' + randomQuote.citation + ' </span>';
    } if(randomQuote.year){
        quotesHTML += '<span class="year"> ' + randomQuote.year +  ' </span>';
    }
    quotesHTML += '</p>';
    document.body.style.backgroundColor = rgbColor();
    return document.getElementById('quote-box').innerHTML = quotesHTML;
}
console.log(printQuote());
 timeOut = window.setInterval(printQuote, 10000);

/***
  When the "Show another quote" button is clicked, the event listener
  below will be triggered, and it will call, or "invoke", the `printQuote`
  function. So do not make any changes to the line of code below this
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.
