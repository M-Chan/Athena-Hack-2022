var questionNumber = 0

const questions  = [
    {
        question: 'What field are you interested in?',
        answers: ['one', 'two']
    },
    {
        question: 'What career roles have you held?',
        answers: ['three', 'four']
    },
    {
        question: 'question3',
        answers: ['three', 'four']
    }
]

let questionText = document.getElementById('questions')


// questionText.innerText = questions[0].question

// document.addEventListener("onclick", questionDisplay(questionNumber))

// function next(){
//     questionNumber++
// }

function questionDisplay(qu) {
    questionText.innerText = questions[qu].question
    console.log("question number is", questionNumber)
    questionNumber++
}

console.log("question number is", questionNumber)

document.querySelectorAll(".answerButtons").forEach(item => {item.addEventListener('click', function(){questionDisplay(questionNumber); })})
