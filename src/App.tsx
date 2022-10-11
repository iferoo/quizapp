import React, { useState } from 'react';
import './app.css';
//components
import QuestionCard from './components/QuestionCard';

const TOTAL_QUESTIONS = 10;

export default function App() {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  const startTrivia = async () => {};
  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {};
  const nextQuestion = () => {};

  return (
    <div>
      <h1>Quiez App</h1>
      <button className="start" onClick={startTrivia}>
        Start
      </button>
      {/* <QuestionCard
        questionNr={number + 1}
        totalQuestions={TOTAL_QUESTIONS}
        question={questions[number].question}
        answers={questions[number].answers}
        userAnswer={userAnswers ? userAnswers[number] : undefined}
        callback={checkAnswer}
      /> */}
      <p className="score">Score:</p>
      <p>Loading Questions ...</p>
      <button className="next" onClick={nextQuestion}>
        Next Quistion
      </button>
    </div>
  );
}
