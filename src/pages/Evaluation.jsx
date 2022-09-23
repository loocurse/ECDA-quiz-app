import React from 'react';
import { useSelector } from 'react-redux';
import EvaluationQuestions from '../components/evaluation/EvaluationQuestions';
import StudentSelection from '../components/StudentSelection';
import { dispatch } from '../store';

function Evaluation() {
  const student = useSelector((state) => state.evaluation.student);

  const submitNextHandler = () => {
    dispatch.evaluation.incrementPage();
    if (isLastPage) {
      dispatch.evaluation.reset();
    }
  };

  if (!student) {
    return <StudentSelection type={'evaluation'} />;
  }

  return (
    <div>
      <EvaluationQuestions />
      <div className="flex items-center justify-center">
        <button
          className="btn bg-accent hover:bg-accent-focus border-0"
          onClick={submitNextHandler}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default Evaluation;
