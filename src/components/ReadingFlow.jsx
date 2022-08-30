import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ReadingFlow({ pages, questions, cutOff }) {
  const [currentPage, setCurrentPage] = useState(0);

  const navigate = useNavigate();

  const clickHandler = () => {
    if (currentPage < cutOff) {
      setCurrentPage(currentPage + 1);
    }
  };
  const quizAnswerHandler = () => {
    if (currentPage == pages.length - 1) {
      navigate('/reading');
    }
    setCurrentPage(currentPage + 1);
  };
  return (
    <div>
      <img
        src={pages[currentPage]}
        alt=""
        onClick={clickHandler}
        className="w-100"
      />
      {questions.map((qn) => (
        <div
          key={qn.question}
          className={`absolute ${qn.position} p-3`}
          style={{
            backgroundColor: 'rgba(255,255,255,0.75)',
            display: qn.page === currentPage ? 'block' : 'none',
          }}
        >
          <p className="mb-5">{qn.question}</p>
          {qn.answers.map((ans, idx) => (
            <button
              key={idx}
              className="block mt-1"
              onClick={() => quizAnswerHandler(idx)}
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
