import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const PracticePage = () => {
  const location = useLocation();
  const passedTimeInMinutes = location.state?.time || 1;
  const navigate = useNavigate();

  // State variables
  const [gameStarted, setGameStarted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(passedTimeInMinutes * 60);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState({});
  const [userAnswer, setUserAnswer] = useState("");
  const [streak, setStreak] = useState(0);

  // Function to determine difficulty
  const getDifficulty = (score, timeLeft) => {
    if (score >= 5 && timeLeft >= 20) {
      return "hard";
    } else if (score >= 3 && timeLeft >= 10) {
      return "medium";
    } else {
      return "easy";
    }
  };

  const adjustDifficultyBasedOnScoreTimeRatio = (score, timeElapsed) => {
    const scoreToTimeRatio = score / timeElapsed; // points per second
    if (scoreToTimeRatio >= 0.5) {
      return "hard";
    } else if (scoreToTimeRatio >= 0.2) {
      return "medium";
    } else {
      return "easy";
    }
  };

  const unlockRewardsForHighPerformance = (score) => {
    if (score >= 10) {
      return "new_mode"; // e.g., unlock time-challenge mode
    } else if (score >= 20) {
      return "bonus"; // Unlock bonus features or rewards
    } else {
      return "none"; // No rewards yet
    }
  };

  const adjustDifficultyBasedOnStreak = (streak) => {
    if (streak >= 3) {
      return "hard"; // 3 correct answers in a row = hard
    } else if (streak === 2) {
      return "medium"; // 2 correct answers = medium difficulty
    } else {
      return "easy"; // 1 correct answer or less = easy
    }
  };

  const applyTimeBonus = (timeTaken) => {
    if (timeTaken <= 5) {
      return "hard"; // Answered in under 5 seconds, next question will be harder
    } else if (timeTaken <= 10) {
      return "medium";
    } else {
      return "easy";
    }
  };

  const giveTimeBoostForMilestones = (score) => {
    if (score >= 5) {
      return 10; // Add 10 extra seconds
    } else if (score >= 10) {
      return 15; // Add 15 extra seconds
    } else {
      return 0; // No extra time for lower scores
    }
  };

  const adjustDifficultyBasedOnRounds = (round) => {
    if (round === 1) {
      return "easy"; // Round 1, easy
    } else if (round === 2) {
      return "medium"; // Round 2, medium
    } else {
      return "hard"; // Round 3 and onwards, hard
    }
  };

  const adaptDifficultyBasedOnPerformance = (correctAnswers, totalQuestions) => {
    const performance = correctAnswers / totalQuestions;
    if (performance >= 0.8) {
      return "hard"; // 80% or more correct answers = hard
    } else if (performance >= 0.5) {
      return "medium"; // 50% or more correct answers = medium
    } else {
      return "easy"; // Less than 50% correct answers = easy
    }
  };

  // Function to generate a question
  const generateQuestion = (difficulty) => {
    const operators = ["+", "-", "*", "/"];
    const operator = operators[Math.floor(Math.random() * operators.length)];

    let num1, num2;

    if (difficulty === "hard") {
      num1 = Math.floor(Math.random() * 90) + 10;
      num2 = Math.floor(Math.random() * 90) + 10;
    } else if (difficulty === "medium") {
      num1 = Math.floor(Math.random() * 20) + 1;
      num2 = Math.floor(Math.random() * 20) + 1;
    } else {
      num1 = Math.floor(Math.random() * 10) + 1;
      num2 = Math.floor(Math.random() * 10) + 1;
    }

    const question = operator === "/" ? { num1: num1 * num2, num2, operator } : { num1, num2, operator };
    setCurrentQuestion(question);
  };

  // Function to check the player's answer
  const checkAnswer = () => {
    const { num1, num2, operator } = currentQuestion;
    let correctAnswer;

    switch (operator) {
      case "+":
        correctAnswer = num1 + num2;
        break;
      case "-":
        correctAnswer = num1 - num2;
        break;
      case "*":
        correctAnswer = num1 * num2;
        break;
      case "/":
        correctAnswer = num1 / num2;
        break;
      default:
        return;
    }

    if (parseFloat(userAnswer) === correctAnswer) {
      setScore((prevScore) => prevScore + 1);
      setStreak((prevStreak) => prevStreak + 1);
      generateQuestion(getDifficulty(score, timeLeft));
    } else {
      setStreak(0); // Reset streak
    }

    setUserAnswer("");
  };

  // Function to end the game
  const endGame = () => {
    alert(`Game over! Your score is: ${score}`);
    setGameStarted(false);
    setTimeLeft(passedTimeInMinutes * 60); // Reset time
    setScore(0);
    setCurrentQuestion({});
    setStreak(0); // Reset streak
  };

  // Function to start the game
  const startGame = () => {
    setGameStarted(true);
    generateQuestion(getDifficulty(0, passedTimeInMinutes * 60));
  };

  // Timer logic using useEffect to clean up intervals
  useEffect(() => {
    if (gameStarted) {
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(timer); // Stop timer
            endGame();
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);

      // Cleanup the timer when the component unmounts or game ends
      return () => clearInterval(timer);
    }
  }, [gameStarted]);

  return (
    <div>
      {!gameStarted ? (
        <div className="flex items-center justify-center h-screen">
          <div className="flex gap-4">
            <div
              onClick={startGame}
              className="cursor-pointer p-4 rounded-lg flex items-center justify-center gap-4 transition bg-blue-500 text-white shadow-lg hover:bg-blue-600"
            >
              <p className="font-semibold">Start</p>
            </div>

            <div
              onClick={() => navigate("/dashboard")}
              className="cursor-pointer p-4 rounded-lg flex items-center justify-center gap-4 transition bg-gray-100 text-gray-800 hover:bg-gray-200"
            >
              <p className="font-semibold">Back</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="p-6 bg-white rounded-lg shadow-md flex flex-col items-center justify-center h-screen">
          {/* Time and Score Section */}
          <h3 className="text-xl font-bold text-gray-700 mb-4">
            Time Left: {Math.floor(timeLeft / 60)}:{timeLeft % 60}
          </h3>
          <h3 className="text-xl font-bold text-gray-700 mb-4">Score: {score}</h3>
          <h3 className="text-xl font-bold text-gray-700 mb-4">Streak: {streak}</h3>

          {/* Question Section */}
          <div>
            <p className="text-lg font-semibold mb-4">
              {currentQuestion.num1} {currentQuestion.operator} {currentQuestion.num2} = ?
            </p>

            {/* Input for user answer */}
            <input
              type="text"
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              className="border border-gray-300 rounded-lg p-2 mb-4"
            />

            {/* Buttons for Submit and Stop */}
            <div className="flex gap-4">
              <button
                onClick={checkAnswer}
                className="ml-4 px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600"
              >
                Submit
              </button>

              <button
                onClick={endGame}
                className="ml-4 px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600"
              >
                Stop
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PracticePage;
