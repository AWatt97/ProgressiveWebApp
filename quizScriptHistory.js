const quizData = [
    {
        question: "Where was Napoleon born?",
        a: "France",
        b: "Sicilly",
        c: "Nassau",
        d: "Corsica",
        correct: "d",
    },
    {
        question: "When did WW2 start?",
        a: "1939",
        b: "1949",
        c: "1918",
        d: "1950",
        correct: "a",
    },
    {
        question: "Which two countries were the Punic Wars waged bewteen?",
        a: "Rome and Carthage",
        b: "Rome and Gaul",
        c: "Rome and Hanibal",
        d: "Rome and Britannia",
        correct: "a",
    },
    {
        question: "On the Apollo 11 mission which person stayed in the command module?",
        a: "Neil Armstrong",
        b: "David Bowie",
        c: "Michael Collins",
        d: "Franklin Aldrin",
        correct: "c",
    },
    {
        question: "When did the first crusade start?",
        a: "1422",
        b: "1096",
        c: "1000",
        d: "1099",
        correct: "b",
    },
    {
        question: "When was Constantinople sacked?",
        a: "1308",
        b: "1097",
        c: "980",
        d: "1204",
        correct: "d",
    },
    {
        question: "What was the capital city of South Vietnam?",
        a: "Ho Chi Minh City",
        b: "Hanoi",
        c: "Saigon",
        d: "Taipei",
        correct: "c",
    },
    {
        question: "Who was the first Prime Minister of Australia?",
        a: "Edmund Barton",
        b: "Alfred Deakin",
        c: "Joesph Cook",
        d: "Bob Hawke",
        correct: "a",
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