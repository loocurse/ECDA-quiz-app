import React from 'react'
import { useSelector } from 'react-redux';
import { dispatch } from '../store';

function QuestionCard({ question, index }) {
  const response = useSelector(state => state.evaluation.questions[state.evaluation.currentPage].questions[index].response)
  return (
    <div className="p-5 rounded w-1/2 mx-auto border m-5">
      <p className="font-bold">{question}</p>
      <div className="w-96 mx-auto mt-9">
        <input
          type="range"
          min="1"
          max="5"
          className="range range-primary"
          step="1"
          value={response}
          onChange={(e) =>
            dispatch.evaluation.setResponse({
              qnIndex: index,
              response: e.target.value,
            })
          }
        />
        <div className="w-full flex justify-between text-xs px-2">
          <span>Strongly Disagree</span>
          <span>Strongly Agree</span>
        </div>
      </div>
    </div>
  );
}

export default QuestionCard