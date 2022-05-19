var quoteAPI = 'https://type.fit/api/quotes';


function getQuote() {
    fetch(quoteAPI)
    .then(res => res.json())
    .then(data => JSON.stringify(data[Math.floor(Math.random(data) * data.length)]))
    .then(data2 => displayQuote(`"${JSON.parse(data2).text}" - ${JSON.parse(data2).author}`))
}

function displayQuote(quote) {
    var quoteText = document.querySelector('.quote-text');
    quoteText.textContent = quote;
}

var newQuoteButton = document.querySelector('.new-quote');
newQuoteButton.addEventListener('click', getQuote);
getQuote();
