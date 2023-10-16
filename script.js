/* 
Basic JavaScript Questions:
How do you declare a variable in JavaScript?
You can declare a variable in JavaScript using the keywords "var", "let", or "const". For example, to declare a variable called "x" and assign it the value of 5, you can use "var x = 5", "let x = 5", or "const x = 5"
5
.
How do you write a function in JavaScript?
To write a function in JavaScript, you can use the "function" keyword followed by the function name and parameters in parentheses. For example, to write a function called "add" that takes two parameters and returns their sum, you can use "function add(a, b) { return a + b; }"
5
.
How do you access an element in an array in JavaScript?
You can access an element in an array in JavaScript using square brackets and the index of the element you want to access. For example, to access the third element in an array called "myArray", you can use "myArray
2
" since array indices start at 0
2
.
How do you check if a variable is an array in JavaScript?
You can check if a variable is an array in JavaScript using the "Array.isArray()" method. For example, to check if a variable called "myVariable" is an array, you can use "Array.isArray(myVariable)" which will return true if it is an array and false if it is not
5
.
How do you use the "this" keyword in JavaScript?
The "this" keyword in JavaScript refers to the object that the function is a method of. For example, if you have an object called "myObject" with a method called "myMethod", you can use "this" inside the "myMethod" function to refer to the "myObject" object. The value of "this" depends on how the function is called
5
.

How do you use Promises in JavaScript?
Promises in JavaScript are used for asynchronous programming and allow you to handle the results of an asynchronous operation once it completes. To use a Promise, you can create a new Promise object and pass in a function with two parameters: "resolve" and "reject". Inside this function, you can perform the asynchronous operation and call "resolve" with the result if it is successful or "reject" with an error if it fails.


How do you use the "spread" operator in JavaScript?
The "spread" operator in JavaScript is used to spread the elements of an array or object into another array or object. To use the "spread" operator with an array, you can use three dots followed by the array name. 
*/

//document objects
const flashcard = document.querySelector('[data-container]');
const questionContainer = document.querySelector('[data-question]');
const userInput = document.querySelector('[data-user-answer]');
const submit = document.querySelector('[data-submit]');
const answer = document.querySelector('[data-answer]');
const tally = document.querySelector('[data-marks]');
const nextButton = document.querySelector('[data-next-question');

//score
let mark = 0;

//object for questions
let flipQuestions = [
    {question: 'What keyword is used to declare a variable in JavaScript?',
     answer1: 'var',
     answer2: 'let', 
     answer3: 'const',
     explanation: 'You can declare a variable in JavaScript using the keywords "var", "let", or "const". For example, to declare a variable called "x" and assign it the value of 5, you can use "var x = 5", "let x = 5", or "const x = 5"'
    },
    {question: 'What keyword is used to define a function in JavaScript',
     answer1: 'function',
     explanation: 'To write a function in JavaScript, you can use the "function" keyword followed by the function name and parameters in parentheses. For example, to write a function called "add" that takes two parameters and returns their sum, you can use "function add(a, b) { return a + b; }". You can also use arrow syntax like so: "const add = (a, b) => {}',
    },
    {question: 'How do you format the "spread" operator in JavaScript?',
     answer1: '...',
     explanation: 'The "spread" operator in JavaScript is used to spread the elements of an array or object into another array or object. To use the "spread" operator with an array, you can use three dots followed by the array name.'
    }
]

questionContainer.innerText = flipQuestions[0].question;

//function for flipcard
const flipCard = () => {
    if (userInput.value == '') {
        alert('No answer');
    }   else if ((userInput.value.includes(flipQuestions[0].answer1)) || (userInput.value.includes(flipQuestions[0].answer2)) || (userInput.value.includes(flipQuestions[0].answer3))) {
        mark += 1;
        answer.style.display = 'visible';
        answer.innerText = flipQuestions[0].explanation;
        tally.innerText = `Total Points: ${mark}`;
        //console.log(mark);
        console.log('correct! ' + mark);
        answer.style.visibility = 'visible';
    }   else {
        mark -= 1;
        console.log(mark);
        tally.innerText = `Total Points: ${mark}`;
        answer.style.visibility = 'visible';
        console.log('incorrect! Lose a point!')
    }

}
    
const cueNextQuestion = () => {
    if (questionContainer.innerText == flipQuestions[0].question) {
        questionContainer.innerText = flipQuestions[1].question;
    }   else if (questionContainer.innerText = flipQuestions[1].question) {
        questionContainer.innerText = flipQuestions[2].question
    }   else {
        questionContainer.innerText = `This concludes the test! You have ${mark} points!`;
    }
}
    // (userInput.innerText.includes('var' || 'let' || 'const') && answer.style.visibility == 'hidden') {
    //     console.log('this is not visible');
    //     answer.style.visibility = 'visible';
    // }   else {
    //     console.log('no idea');
    // }
//};

submit.addEventListener('click', flipCard);
nextButton.addEventListener('click', cueNextQuestion);