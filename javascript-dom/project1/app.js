//variable

let btn = document.querySelector('#new-qoute');
let quote = document.querySelector('.qoute');
let person = document.querySelector('.person');

const quotes = [{
    quote:` "The greatest glory in living lies not in never falling, but in rising every time we fall."`,
    person: `Nelson Mandela`

},
{
    quote: `"Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking."`,
    person: `Steve Jobs`
},
{
    quote:`"If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough."`,
    person: `Oprah Winfrey`
},
{
    quote: `"You may say I'm a dreamer, but I'm not the only one. I hope someday you'll join us. And the world will live as one. "`,
    person:`John Lennon`
}];

btn.addEventListener('click', function(){
    let random = Math.floor(Math.random() * quotes.length);
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})