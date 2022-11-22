const quizData = [
    {
        question: "What is the process of finding errors in code?",
        a: "Compiling",
        b: "Debugging",
        c: "Defoliating",
        d: "Runtime",
        correct: "b",
    },
    {
        question: "What does HTTP stand for?",
        a: "Hypotext Transfer Protocol",
        b: "Hypertransfer Text Protocol",
        c: "Hypertext Transfer Protocol",
        d: "Hypertext Training Program",
        correct: "c",
    },
    {
        question: "In the following logic gate (p∧q)⊕(¬p∧g) if variables p, q and g are true what is the outcome?",
        a: "Both",
        b: "False",
        c: "True",
        d: "None of the above",
        correct: "c",
    },
    {
        question: "Which of the folowing is an Object Orientated language?",
        a: "Java",
        b: "Javasript",
        c: "SQL",
        d: "UML",
        correct: "a",
    },
    {
        question: "Which of the following HTML code snippets is correctly formated?",
        a: "<div hello world div>",
        b: "<div>hello world</div>",
        c: "<div>hello world<div>",
        d: "<div div hello world>",
        correct: "b",
    },
    {
        question: "What is the file extension of a javascript file?",
        a: ".js",
        b: ".jv",
        c: ".javas",
        d: ".jscript",
        correct: "a",
    },
    {
        question: "What was the first computer based programming language?",
        a: "IBM",
        b: "BDM",
        c: "ENIAC",
        d: "FORTRAN",
        correct: "d",
    },
    {
        question: "What is Vue.js?",
        a: "Script",
        b: "Package",
        c: "Library",
        d: "Framework",
        correct: "d",
    },


];

const quiz= document.getElementById('quiz')
const quizAnswer = document.querySelectorAll('.answer')
const quizQuestion = document.getElementById('question')
const aText = document.getElementById('aText')
const bText = document.getElementById('bText')
const cText = document.getElementById('cText')
const dText = document.getElementById('dText')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]
    //Tried to get random questions working but couldn't without them repeating
    //const currentQuizData = quizData[Math.floor(Math.random()*quizData.length)]
    //const removeQuestion = quizData.indexOf(currentQuizData);
    //currentQuizData.splice(removeQuestion,1);

    quizQuestion.innerText = currentQuizData.question
    aText.innerText = currentQuizData.a
    bText.innerText = currentQuizData.b
    cText.innerText = currentQuizData.c
    dText.innerText = currentQuizData.d
}

function deselectAnswers() {
    quizAnswer.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    quizAnswer.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
        window.alert("Correct!");
           score++
       }
       else{
        window.alert("incorrect");
       }

       currentQuiz++

       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>
           <h2>Congratulations!</h2>

           <button onclick="location.reload()">Reload</button>
           `
       }
    }
})