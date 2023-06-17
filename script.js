const prompt = require("prompt-sync")({ sigint: true });

const luck = ['Bad Luck','Awful Luck','Depressing Luck','Moderate Luck','OK Luck','Good Luck','Excellent Luck','Best possible Luck'];
const signs = ['Sun','Mercury','Venus','Earth','Mars','Jupiter','Saturn','Uranus','Neptune','Pluto','TON 618','UY Scuti'];
const advices = ['Trust no one', 'Take it easy', 'Learn something new', 'Conquer your fears', 'Do not be ashamed of yourself','Change something within yourself','Learn how to think of new advices to write','Try eating soup with a fork'];

function randLuck() {
    let index = Math.floor(Math.random() * luck.length);
    return luck[index];
};

function randSign() {
    let index = Math.floor(Math.random() * signs.length);
    return signs[index];
};

function randAdvice() {
    let index = Math.floor(Math.random() * advices.length);
    return advices[index];
};

function randomMessage() {
    todaysLuck = randLuck();
    todaysSign = randSign();
    todaysAdvice = randAdvice();
    
    zodiac = prompt('What is your zodiac sign?');
    
    if (zodiac === 'leo' || zodiac === 'Leo') {
        todaysLuck = 'No need for luck';
        todaysSign = 'Autobahn';
        todaysAdvice = 'Continue grinding, beast';
    };
    
    console.log(`Your have ${todaysLuck}`);
    console.log(`Your sign is ${todaysSign}`);
    console.log(`Your advice for today is: ${todaysAdvice}`);
};

randomMessage(); 
