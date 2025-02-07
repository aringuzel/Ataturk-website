const quoteContent = document.querySelector(".quote-container .quote-content");
const newQuoteButton = document.querySelector(".quote-container .new-quote-btn");




const updateQuote = (data) => {
  quoteContent.innerHTML = data.quote;
};


const nextQuote = () => {
  fetch("https://ataturk.now.sh/en")
  .then((response) => response.json())
  .then((data) => {
    console.log(`${data.quote}`)
    updateQuote(data);
  });
};

nextQuote();
newQuoteButton.addEventListener("click", nextQuote);