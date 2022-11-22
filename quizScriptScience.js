const quizData = [
    {
        question: "Which of the following instruments measures humidity?",
        a: "Hygrometer",
        b: "Barometer",
        c: "Seismograph",
        d: "Thermometer",
        correct: "a",
    },
    {
        question: "What is the element that Au represents on the periodic table?",
        a: "Augronite",
        b: "Argon",
        c: "Gold",
        d: "Mercury",
        correct: "c",
    },
    {
        question: "Which of the following is not a primary colour?",
        a: "Red",
        b: "Green",
        c: "Yellow",
        d: "Blue",
        correct: "c",
    },
    {
        question: "What is the speed of sound?",
        a: "333m/s",
        b: "343m/s",
        c: "343km/h",
        d: "3km/s",
        correct: "b",
    },
    {
        question: "What is the process of a solid turning into a gas?",
        a: "Vaporization",
        b: "Condensation",
        c: "Evaporation",
        d: "Sublimation",
        correct: "d",
    },
    {
        question: "What is the boiling point of liquid nitrogen?",
        a: "-195.8 C",
        b: "-273.1 C",
        c: "0.0 C",
        d: "-153.7 C",
        correct: "a",
    },
    {
        question: "How many bones are in the human body?",
        a: "206",
        b: "960",
        c: "72",
        d: "512",
        correct: "a",
    },
    {
        question: "What is the largest muscle in the human body?",
        a: "Genioglossus",
        b: "Gluteus Maximus",
        c: "Myocardium",
        d: "Gluteus Medius",
        correct: "b",
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