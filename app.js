var EM = document.getElementById('myEm');
var HEADER = document.getElementById('myHeader');
var buttn = document.getElementById("myButton");
var quote = [
    "The purpose of our lives is to be happy",
    "Life is what happens when you're busy making other plans",
    "Get busy living or get busy dying.",
    "You only live once, but if you do it right, once is enough",
    "Many of life’s failures are people who did not realize how close they were to success when they gave up",
    "Never let the fear of striking out keep you from playing the game",
    "Money and success don’t change people; they merely amplify what is already there.",
    "Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma – which is living with the results of other people’s thinking."
];

var writer = [
    "Dalai Lama",
    "John Lennon",
    "Stephen King",
    "Mae West",
    "Thomas A. Edison",
    "Babe Ruth",
    "Will Smith",
    "Steve Jobs"
];

buttn.addEventListener('click', function () {
    var randomNamber = Math.floor(Math.random() * 8);
    EM.innerText = quote[randomNamber];
    HEADER.innerText = writer[randomNamber];
    console.log(randomNamber);
});
