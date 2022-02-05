const quotes = [{
    quote:"Love yourself first and everything else falls into line. You really have to love yourself to get anything done in this world.",
    author:"Lucille Ball",
},{
    quote:"The most important thing in life is to learn how to give out love, and to let it come in.",
    author:"Morrie Schwartz",
},{
    quote:"I love you not because of who you are, but because of who I am when I am with you.",
    author:"Roy Croft",
},{
    quote:"If I know what love is, it is because of you.",
    author:"Herman Hesse",
},{
    quote:"Love is a friendship set to music.",
    author:"Joseph Campbell",
},{
    quote:"We are shaped and fashioned by what we love.",
    author:"Johann Wolfgang von Goethe",
},{
    quote:"When we are in love we seem to ourselves quite different from what we were before.",
    author:"Blaise Pascal",
},{
    quote:"The way to love anything is to realize that it may be lost.",
    author:"Gilbert K. Chesterton",
},{
    quote:"Love is of all passions the strongest, for it attacks simultaneously the head, the heart and the senses.",
    author:"Lao Tzu",
},{
    quote:"Don’t brood. Get on with living and loving. You don’t have forever.",
    author:"Leo Buscaglia",
}];
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todayQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;