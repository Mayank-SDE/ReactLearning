import React from 'react';
import QUESTIONS from '../questions.js';
import quizCompleteImg from '../assets/quiz-complete.png';
const Summary = ({ userAnswers }) => {
  const skippedAnswers = userAnswers.filter((answer) => answer === null);

  const correctAnswers = userAnswers.filter(
    (answer, index) => answer === QUESTIONS[index].answers[0]
  );

  const skippedAnswersShare = Math.round(
    (skippedAnswers.length / userAnswers.length) * 100
  );

  const correctAnswersShare = Math.round(
    (correctAnswers.length / userAnswers.length) * 100
  );

  const wrongAnswerShare = 100 - skippedAnswersShare - correctAnswersShare;

  return (
    <div id="summary">
      <img src={quizCompleteImg} alt="Trophy icon" />
      <h2>Quiz Completed!</h2>
      <div id="summary-stats">
        <p>
          <span className="number">{skippedAnswersShare}%</span>
          <span className="text">Skipped</span>
        </p>
        <p>
          <span className="number">{correctAnswersShare}%</span>
          <span className="text">Correctly Answered</span>
        </p>
        <p>
          <span className="number">{wrongAnswerShare}%</span>
          <span className="text">Incorrectly Answered</span>
        </p>
      </div>
      <ol>
        {userAnswers.map((answer, index) => {
          let cssClasses = 'user-answer';
          if (answer === null) {
            cssClasses += ' skipped';
          } else if (answer === QUESTIONS[index].answers[0]) {
            cssClasses += ' correct';
          } else {
            cssClasses += ' wrong';
          }
          return (
            <li key={index}>
              <h3>{index + 1}</h3>
              <p className="question">{QUESTIONS[index].text}</p>
              <p className={cssClasses}>{answer ?? 'Skipped'}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default Summary;
