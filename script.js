const quiz = [
  {
    question: "What is the most used programming language in 2019?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
  },
  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
  },
  {
    question: "Inside which HTML element do we put the JavaScript?",
    a: "JavaScript",
    b: "scripting",
    c: "script",
    d: "js",
    correct: "c",
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },
];

const btn = document.getElementById("submit");
const quizs = document.getElementById("quiz");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const question = document.getElementById("question");
const answerEls = document.querySelectorAll(".answer");
let score = 0;
let currentQuiz = 0;
loadQuiz();

function loadQuiz() {
  deselected();
  const currentQuizData = quiz[currentQuiz];
  question.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function getselected() {
  let answer = undefined;
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

function deselected() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}
btn.addEventListener("click", () => {
  const answer = getselected();
//   console.log(answer);
  if (answer) {
    if (answer === quiz[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;
    if (currentQuiz < quiz.length) {
      loadQuiz();
    } else {
      quizs.innerHTML = `<h2>You answered correctly ${score}/${quiz.length}question.</h2><button onclick="location.reload()">Reload</button>`;
    }
  }
});
