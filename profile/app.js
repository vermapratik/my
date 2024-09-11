
const button = document.querySelector("button");
const correctCounter = document.querySelector("#p1");
let correctAnswers = 0;
const incorrectCounter = document.querySelector("#p");
let incorrectAnswers = 0;
const score = document.querySelector('#score');


var data = [
    { q: 'What is JavaScript?', a: 'A scripting language', b: 'A styling language', c: 'A database', d: 'A markup language', ans: 'a' },
    { q: 'Which symbol is used for comments in JavaScript?', a: '//', b: '<!-- -->', c: '#', d: '/* */', ans: 'a' },
    { q: 'Which method is used to write content into an HTML document using JavaScript?', a: 'document.write()', b: 'console.log()', c: 'alert()', d: 'prompt()', ans: 'a' },
    { q: 'Which company developed JavaScript?', a: 'Microsoft', b: 'Sun Microsystems', c: 'Netscape', d: 'Oracle', ans: 'c' },
    { q: 'Which of the following is a JavaScript framework?', a: 'React', b: 'Laravel', c: 'Django', d: 'Ruby on Rails', ans: 'a' },
    { q: 'How do you declare a variable in JavaScript?', a: 'var', b: 'let', c: 'const', d: 'All of the above', ans: 'd' },
    { q: 'Which of the following is NOT a JavaScript data type?', a: 'String', b: 'Boolean', c: 'Float', d: 'Undefined', ans: 'c' },
    { q: 'How do you create a function in JavaScript?', a: 'function = myFunction()', b: 'function myFunction()', c: 'def myFunction()', d: 'func myFunction()', ans: 'b' },
    { q: 'Which event occurs when the user clicks on an HTML element?', a: 'onchange', b: 'onclick', c: 'onmouseover', d: 'onload', ans: 'b' },
    { q: 'How do you round a number to the nearest integer in JavaScript?', a: 'Math.floor()', b: 'Math.random()', c: 'Math.round()', d: 'Math.ceil()', ans: 'c' },
    { q: 'What keyword is used to check whether a property exists in an object?', a: 'exists', b: 'in', c: 'has', d: 'contains', ans: 'b' },
    { q: 'What will the following expression return: Boolean(0)?', a: 'true', b: 'false', c: 'undefined', d: 'null', ans: 'b' },
    { q: 'Which JavaScript method is used to find the length of a string?', a: 'length()', b: 'getLength()', c: 'size()', d: 'None of the above', ans: 'd' },
    { q: 'What does the "this" keyword refer to in JavaScript?', a: 'The current object', b: 'The previous object', c: 'The global object', d: 'The object that owns the function', ans: 'd' },
];

var ch = '';  
var r = 0;   
var it;     
let count = 10; 

function setValue(l) {
    ch = l;
}

function show() {
    count = 10;  
    document.getElementById('q').innerText = data[r]['q']; 
    document.getElementById('c1').innerText = data[r]['a']; 
    document.getElementById('c2').innerText = data[r]['b']; 
    document.getElementById('c3').innerText = data[r]['c']; 
    document.getElementById('c4').innerText = data[r]['d']; 

    document.querySelectorAll('input[name="option"]').forEach(input => input.checked = false);
    clearInterval(it);
    it = setInterval(function () {
        document.getElementById('t').innerText = count;
        count--;       
        if (count < 0) {
            clearInterval(it);
            checkAnswer(); 
            r = (r + 1) % data.length;
            if (r === 15) { 
                finish();
            } else {
                show();
            }
        }
    }, 1000);
}

function checkAnswer() {
    if (ch === data[r]['ans']) {
        correctAnswers++; 
        correctCounter.innerText = 'Correct Answers: ' + correctAnswers;
    } else {
        incorrectAnswers++; 
        incorrectCounter.innerText = 'Incorrect Answers: ' + incorrectAnswers; 
    }
}

button.addEventListener('click', function () {
    checkAnswer();
    r = (r + 1);
    ch = '';
    if (r === data.length) { 
        finish();
    } else {
        show();
    }
});

function finish() {
    button.innerText = 'Finish';
    button.disabled = true; 
    clearInterval(it);  
    let finalScore = correctAnswers-(incorrectAnswers*0.5);
    score.innerText = 'final score:-'+finalScore;
    document.getElementById('t').style.display = 'none';    
}
show();


