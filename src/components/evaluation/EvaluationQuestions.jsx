import React from 'react';
import { useSelector } from 'react-redux';
import { dispatch } from '../../store';
import QuestionCard from './QuestionCard';

function EvaluationQuestions() {
  const questions = useSelector((state) => state.evaluation.questions);
  return (
    <div>
      <button
        className="btn btn-circle btn-outline m-5"
        onClick={() => dispatch.evaluation.reset()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      {Object.keys(questions).map((subDomain) => (
        <div key={subDomain}>
          <h3 className="text-xl font-bold mt-3 text-center">{subDomain}</h3>
          {questions[subDomain].map((qn, index) => (
            <QuestionCard
              question={qn.question}
              key={`${qn.question}${index}`}
              subdomain={subDomain}
              response={1}
              questionType={qn.type}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default EvaluationQuestions;
