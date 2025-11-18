document.addEventListener("DOMContentLoaded", () => {
  const p1Question = document.getElementById("p1-question");
  const p1ScoreDisplay = document.getElementById("p1-score");
  const p1Keypad = document.getElementById("p1-keypad");

  const p2Question = document.getElementById("p2-question");
  const p2ScoreDisplay = document.getElementById("p2-score");
  const p2Keypad = document.getElementById("p2-keypad");

  const p1OptionButtons = {
    A: document.getElementById("p1-option-A"),
    B: document.getElementById("p1-option-B"),
    C: document.getElementById("p1-option-C"),
    D: document.getElementById("p1-option-D"),
    E: document.getElementById("p1-option-E"),
  };
  const p2OptionButtons = {
    A: document.getElementById("p2-option-A"),
    B: document.getElementById("p2-option-B"),
    C: document.getElementById("p2-option-C"),
    D: document.getElementById("p2-option-D"),
    E: document.getElementById("p2-option-E"),
  };

  const ropeMarker = document.getElementById("rope-marker");
  const ropeTrack = document.getElementById("rope-track");
  const statusText = document.getElementById("status-text");

  const modal = document.getElementById("win-modal");
  const winMessage = document.getElementById("win-message");
  const resetButton = document.getElementById("reset-button");
  const themeToggleButton = document.getElementById("theme-toggle");
  const allKeys = document.querySelectorAll(".key");

  let player1Score = 0;
  let player2Score = 0;
  let ropePosition = 0;
  const winCondition = 6;
  let gameActive = true;

  let currentQuestionP1 = {};
  let currentQuestionP2 = {};

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  themeToggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const isDarkMode = document.body.classList.contains("dark-mode");
    themeToggleButton.textContent = isDarkMode ? "🌙" : "☀️";
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  });

  function loadTheme() {
    const preferredTheme = localStorage.getItem("theme");
    if (preferredTheme === "dark") {
      document.body.classList.add("dark-mode");
      themeToggleButton.textContent = "🌙";
    } else {
      document.body.classList.remove("dark-mode");
      themeToggleButton.textContent = "☀️";
    }
  }

  function initGame() {
    player1Score = 0;
    player2Score = 0;
    ropePosition = 0;
    gameActive = true;

    allKeys.forEach((key) => {
      key.classList.remove("correct", "incorrect");
    });
    p1Keypad.classList.remove("disabled");
    p2Keypad.classList.remove("disabled");

    updateScores();
    updateRope();

    loadQuestion(1);
    loadQuestion(2);

    modal.style.display = "none";
  }

  function loadQuestion(player) {
    const questionIndex = Math.floor(Math.random() * questions.length);
    const q = questions[questionIndex];

    let shuffledOptions = shuffleArray([...q.options]);

    shuffledOptions = shuffledOptions.slice(0, 5);

    if (!shuffledOptions.includes(q.answer)) {
      shuffledOptions[shuffledOptions.length - 1] = q.answer;
      shuffledOptions = shuffleArray(shuffledOptions);
    }

    const questionData = {
      question: q.question,
      options: shuffledOptions,
      answerText: q.answer,
    };

    const keys = ["A", "B", "C", "D", "E"];
    let optionButtons;

    if (player === 1) {
      currentQuestionP1 = questionData;
      p1Question.textContent = q.question;
      optionButtons = p1OptionButtons;
    } else {
      currentQuestionP2 = questionData;
      p2Question.textContent = q.question;
      optionButtons = p2OptionButtons;
    }

    keys.forEach((key, index) => {
      if (optionButtons[key]) {
        const optionText = shuffledOptions[index];
        optionButtons[key].textContent = `${key}. ${optionText}`;
        optionButtons[key].classList.remove("correct", "incorrect");
      }
    });

    if (player === 1) p1Keypad.classList.remove("disabled");
    else p2Keypad.classList.remove("disabled");
  }

  function handleKeyPress(player, key) {
    if (!gameActive) return;
    submitAnswer(player, key);
  }

  function submitAnswer(player, selectedKey) {
    if (!gameActive) return;

    let questionData, optionButtons, keypad;
    if (player === 1) {
      questionData = currentQuestionP1;
      optionButtons = p1OptionButtons;
      keypad = p1Keypad;
    } else {
      questionData = currentQuestionP2;
      optionButtons = p2OptionButtons;
      keypad = p2Keypad;
    }

    gameActive = false;
    p1Keypad.classList.add("disabled");
    p2Keypad.classList.add("disabled");

    const selectedButton = optionButtons[selectedKey];
    const selectedText = selectedButton.textContent.substring(3); // Hapus "A. "
    const correctText = questionData.answerText;
    const isCorrect = selectedText === correctText;

    if (isCorrect) {
      selectedButton.classList.add("correct");
      if (player === 1) {
        player1Score++;
        ropePosition--;
      } else {
        player2Score++;
        ropePosition++;
      }
      updateScores();
      updateRope();
    } else {
      selectedButton.classList.add("incorrect");
      Object.values(optionButtons).forEach((button) => {
        if (button.textContent.substring(3) === correctText) {
          button.classList.add("correct");
        }
      });
    }

    const winner = checkWin();
    if (winner) {
      gameActive = false;
      return;
    }

    setTimeout(() => {
      Object.values(optionButtons).forEach((button) => {
        button.classList.remove("correct", "incorrect");
      });

      loadQuestion(player);

      gameActive = true;
      p1Keypad.classList.remove("disabled");
      p2Keypad.classList.remove("disabled");
    }, 1200);
  }

  function updateScores() {
    p1ScoreDisplay.textContent = `${player1Score}x`;
    p2ScoreDisplay.textContent = `${player2Score}x`;
  }

  function updateRope() {
    const percentPerStep = 50 / winCondition;
    const markerPositionPercent = 50 + ropePosition * percentPerStep;

    ropeMarker.style.left = `${markerPositionPercent}%`;

    if (ropePosition > 0) {
      ropeTrack.style.left = "50%";
      ropeTrack.style.width = `${ropePosition * percentPerStep}%`;
      ropeTrack.style.transform = "translateX(0)";
    } else if (ropePosition < 0) {
      ropeTrack.style.width = `${Math.abs(ropePosition) * percentPerStep}%`;
      ropeTrack.style.left = `${50 - Math.abs(ropePosition) * percentPerStep}%`;
      ropeTrack.style.transform = "translateX(0)";
    } else {
      ropeTrack.style.left = "50%";
      ropeTrack.style.width = "0";
      ropeTrack.style.transform = "translateX(0)";
    }

    if (ropePosition === 0) {
      statusText.textContent = "Posisi netral.";
    } else if (ropePosition > 0) {
      statusText.textContent = `Player 2 unggul ${ropePosition} langkah.`;
    } else {
      statusText.textContent = `Player 1 unggul ${Math.abs(
        ropePosition
      )} langkah.`;
    }
  }

  function checkWin() {
    if (!gameActive) return false;

    if (ropePosition <= -winCondition) {
      showWinModal("Player 1 (Biru) Menang!");
      gameActive = false;
      return true;
    } else if (ropePosition >= winCondition) {
      showWinModal("Player 2 (Merah) Menang!");
      gameActive = false;
      return true;
    }
    return false;
  }

  function showWinModal(message) {
    winMessage.textContent = message;
    modal.style.display = "flex";
  }

  // --- Event Listeners ---
  allKeys.forEach((key) => {
    key.addEventListener("click", () => {
      const player = parseInt(key.dataset.player);
      const keyValue = key.dataset.key;
      handleKeyPress(player, keyValue);
    });
  });

  resetButton.addEventListener("click", initGame);

  loadTheme();
  initGame();
});
