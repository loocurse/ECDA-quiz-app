import React from 'react';
import { useSelector } from 'react-redux';
import QuestionCard from './QuestionCard';

function EvaluationQuestions() {
  const currentPage = useSelector((state) => state.evaluation.currentPage);
  const questions = useSelector((state) => state.evaluation.questions)[
    currentPage
  ];
  return (
    <div>
      <h3 className="text-xl font-bold mt-3 text-center">
        Section {currentPage + 1}: {questions.category}
      </h3>
      {questions.questions.map((qn, index) => (
        <QuestionCard question={qn.question} key={index} index={index} />
      ))}
    </div>
  );
}

export default EvaluationQuestions;
