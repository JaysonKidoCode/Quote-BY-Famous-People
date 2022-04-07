const quotes = [
{
    name: 'Stephen King',
    quote: 'Get Busy Living Or Get Busy Dying.'
},
{
    name:'John F.Kennedy',
    quote:'Those who dare to fail miserably can achive greatly.'
},
{
    name:'Abraham Lincoln',
    quote:'Folks are usually about as happy as they make their minds up to be.'
},
{
    name:'Leonardo Da Vinci',
    quote:'Time stays long enough for anyone who will use it.'
},
{
    name:'Leo Tolstoy',
    quote:'If you want to be happy, be.'
}
]

const quoteBtn = document.querySelector('#quoteBtn');
const quoteAuthor = document.querySelector('#quoteAuthor');
const quote = document.querySelector('#quote');

quoteBtn.addEventListener('click', displayQuote);

function displayQuote (){

let number = Math.floor(Math.random()*quotes.length);
quoteAuthor.innerHTML = quotes[number].name;
quote.innerHTML = quotes[number].quote;

}


