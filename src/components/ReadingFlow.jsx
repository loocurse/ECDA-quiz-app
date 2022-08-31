import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ReadingFlow({ pages, questions, cutOff }) {
  const [currentPage, setCurrentPage] = useState(0);
  const [wrong, setWrong] = useState([false, false, false]);

  const navigate = useNavigate();

  const clickHandler = () => {
    if (currentPage < cutOff) {
      setCurrentPage(currentPage + 1);
    }
  };

  const nextPage = () => {
    if (currentPage == pages.length - 1) {
      navigate('/reading');
    }
    setCurrentPage(currentPage + 1);
    setWrong([false, false, false]);
  };

  const quizAnswerHandler = (isCorrect, idx) => {
    if (isCorrect) {
      nextPage()
    } else {
      const newArr = [...wrong];
      newArr[idx] = true;
      setWrong(newArr);
    }
  };
  return (
    <div>
      <img
        src={pages[currentPage]}
        alt=""
        onClick={clickHandler}
        className="w-100"
      />
      {questions.map((question) => (
        <div
          key={question.question}
          className={`absolute ${question.position} p-3`}
          style={{
            backgroundColor: 'rgba(255,255,255,0.75)',
            display: question.page === currentPage ? 'block' : 'none',
          }}
        >
          <p className="mb-5">{question.question}</p>
          {question.answers.map((ans, idx) => (
            <button
              key={idx}
              className={`block mt-1 p-1  ${
                wrong[idx] ? 'outline outline-2  outline-rose-500' : ''
              }`}
              onClick={() =>
                quizAnswerHandler(idx === question.correctAnswer, idx)
              }
            >
              {`${idx + 1}. ${ans}`}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}

export default ReadingFlow;
