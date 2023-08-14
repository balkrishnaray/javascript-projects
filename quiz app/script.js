const questions = [
  {
    question: "Which mountain is Known as the highest peak in the world?",
    answers: [
      { text: "Mount Everest", correct: true },
      { text: "Mount Kanchenjunga", correct: false },
      { text: "Annapurna I", correct: false },
      { text: "Makalu", correct: false },
    ],
  },
  {
    question: " What is the capital city of Nepal?",
    answers: [
      { text: " Pokhara", correct: false },
      { text: "Kathmandu ", correct: true },
      { text: "Ithari", correct: false },
      { text: "Chitwan", correct: false },
    ],
  },
  {
    question: "Which festival is known as the festival of lights in Nepal?",
    answers: [
      { text: "Dashain", correct: false },
      { text: "Holi", correct: false },
      { text: "Teej", correct: false },
      { text: "Tihar", correct: true },
    ],
  },
  {
    question:
      "Which king was responsible for opening Nepal to the outside world in the 1950s?",
    answers: [
      { text: "King Mahendra", correct: true },
      { text: "King Tribhuvan", correct: false },
      { text: "King Prithvi Narayan Shah", correct: false },
      { text: "King Gyanendra", correct: false },
    ],
  },
  {
    question: "Which is the national bird of Nepal?",
    answers: [
      { text: "Red spurfowl", correct: false },
      { text: "Pigeon", correct: false },
      { text: "Himalayan Monal", correct: true },
      { text: "Peafowl", correct: false },
    ],
  },
];

const questionElement = document.getElementById("questions");
const answer = document.getElementById("options");
const next = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  next.innerHTML = "next";
  showQuestion();
}

function showQuestion() {
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
  // answer.innerHTML = "";

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answer.appendChild(button);
  });
}

startQuiz();
