let filteredQuestions = [...questions];

let usedQuestions = [];

let currentQuestion;

let score = 0;
let solvedCount = 0;

let examMode = false;

let hasAnswered = false;

const questionEl =
  document.getElementById("question");

const resultEl =
  document.getElementById("result");

const explanationEl =
  document.getElementById("explanation");

const scoreEl =
  document.getElementById("score");

const progressEl =
  document.getElementById("progress");

const progressFill =
  document.getElementById("progressFill");

const categoryLabelEl =
  document.getElementById("categoryLabel");

const nextBtn =
  document.getElementById("nextBtn");

function initializeCategories() {

  const categories =
    [...new Set(
      questions.map(q => q.category)
    )];

  const select =
    document.getElementById("categorySelect");

  categories.forEach(category => {

    const option =
      document.createElement("option");

    option.value = category;
    option.textContent = category;

    select.appendChild(option);

  });

  select.addEventListener("change", () => {

    const value = select.value;

    if(value === "all") {

      filteredQuestions = [...questions];

    } else {

      filteredQuestions =
        questions.filter(
          q => q.category === value
        );

    }

    resetSession();

  });

}

function resetSession() {

  usedQuestions = [];

  score = 0;

  solvedCount = 0;

  hasAnswered = false;

  loadQuestion();

  updateUI();

}

function loadQuestion() {

  if(
    usedQuestions.length ===
    filteredQuestions.length
  ) {

    questionEl.textContent =
      "모든 문제를 완료했습니다.";

    categoryLabelEl.textContent = "";

    resultEl.innerHTML =
      `
      최종 점수: ${score} / ${filteredQuestions.length}
      <br><br>
      정답률:
      ${(
        score / filteredQuestions.length * 100
      ).toFixed(1)}%
      `;

    resultEl.style.color =
      "var(--primary)";

    explanationEl.textContent = "";

    nextBtn.style.display = "none";

    return;

  }

  hasAnswered = false;

  nextBtn.style.display = "inline-block";

  const remaining =
    filteredQuestions.filter(
      q => !usedQuestions.includes(q.id)
    );

  const randomIndex =
    Math.floor(
      Math.random() * remaining.length
    );

  currentQuestion =
    remaining[randomIndex];

  usedQuestions.push(currentQuestion.id);

  questionEl.textContent =
    currentQuestion.question;

  categoryLabelEl.textContent =
    currentQuestion.category;

  resultEl.textContent = "";

  explanationEl.textContent = "";

  updateUI();

}

function checkAnswer(userAnswer) {

  if(hasAnswered) return;

  hasAnswered = true;

  solvedCount++;

  const isCorrect =
    userAnswer === currentQuestion.answer;

  if(isCorrect) {

    score++;

    resultEl.textContent = "정답!";

    resultEl.style.color = "#16a34a";

  } else {

    resultEl.textContent = "오답!";

    resultEl.style.color = "#dc2626";

  }

  if(!examMode) {

    explanationEl.textContent =
      currentQuestion.explanation;

  }

  updateUI();

  if(examMode) {

    setTimeout(() => {

      loadQuestion();

    }, 700);

  }

}

function nextQuestion() {

  if(!hasAnswered) return;

  loadQuestion();

}

function updateUI() {

  scoreEl.textContent = score;

  progressEl.textContent =
    `${solvedCount} / ${filteredQuestions.length}`;

  const percent =
    (
      solvedCount /
      filteredQuestions.length
    ) * 100;

  progressFill.style.width =
    percent + "%";

}

document
  .getElementById("darkModeBtn")
  .addEventListener("click", () => {

    document.body.classList.toggle("dark");

  });

document
  .getElementById("examModeBtn")
  .addEventListener("click", () => {

    examMode = !examMode;

    document.getElementById(
      "examModeBtn"
    ).textContent =
      examMode
      ? "시험모드 ON"
      : "시험모드 OFF";

  });

initializeCategories();

loadQuestion();

updateUI();