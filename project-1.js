//variables

let btn =document.querySelector("#new-quote");

let  quote = document.querySelector(".quote");

let person = document.querySelector(".person") ;

const quotes = [{
    quote:`"The only way to do great work is to love what you do."`,
    person: `Steve Jobs`
},{
    quote:`"Be yourself; everyone else is already taken."`,
    person: `Oscar Wilde`
},{
    quote:`"In the end, it's not the years in your life that count. It's the life in your years."`,
    person: `Abraham Lincoln`
},{
    quote:`"The greatest glory in living lies not in never falling, but in rising every time we fall."`,
    person: `Nelson Mandela`
},{
    quote:`"Success is not final, failure is not fatal: It is the courage to continue that counts."`,
    person: `Winston Churchill`
},{
    quote:`"The future belongs to those who believe in the beauty of their dreams."`,
    person: `Eleanor Roosevelt`
},{
    quote:`"The best way to predict the future is to create it." `,
    person: `Peter Drucker`
},{
    quote:`"Don't watch the clock; do what it does. Keep going." `,
    person: `Sam Levenson`
},{
    quote:`"The biggest risk is not taking any risk. In a world that's changing quickly, the only strategy that is guaranteed to fail is not taking risks." `,
    person: `Mark Zuckerberg`
},{
    quote:`"Believe you can and you're halfway there." `,
    person: `Theodore Roosevelt`
}];


btn.addEventListener("click", function(){
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote; 
    person.innerText = quotes[random].person;

} )
