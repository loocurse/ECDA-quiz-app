import React from 'react';
import { useSelector } from 'react-redux';
import EvaluationQuestions from '../components/EvaluationQuestions';
import { dispatch } from '../store';

function Evaluation() {
  const student = useSelector((state) => state.evaluation.student);
  const sections = useSelector((state) =>
    state.evaluation.questions.map((item) => item.category),
  );
  const currentPage = useSelector((state) => state.evaluation.currentPage);
  const isLastPage = useSelector(
    (state) =>
      state.evaluation.currentPage === state.evaluation.questions.length - 1,
  );

  const submitNextHandler = () => {
    dispatch.evaluation.incrementPage()
    if (isLastPage) {
      dispatch.evaluation.reset()
    }
  }

  if (!student) {
    return (
      <div className="h-full flex flex-col justify-center">
        <h1 className="font-bold text-xl text-center mb-5">
          Select a student to evaluate
        </h1>
        <div className="flex w-2/3 mx-auto">
          <select className="select select-secondary max-w-xs mx-6 w-48">
            <option disabled selected>
              Class
            </option>
            <option>K101</option>
            <option>K102</option>
          </select>
          <select className="select select-secondary max-w-xs mx-6 w-48">
            <option disabled selected>
              Student
            </option>
            <option>Rachel Lee</option>
            <option>Samuel Lim</option>
          </select>
          <select className="select select-secondary max-w-xs mx-6 w-48">
            <option disabled selected>
              Term
            </option>
            <option>1</option>
            <option>2</option>
          </select>
        </div>
        <button
          className="btn border-0 bg-accent hover:bg-accent-focus w-48 mt-5 mx-auto"
          onClick={() => dispatch.evaluation.setStudent('Rachel Lee')}
        >
          Evaluate
        </button>
      </div>
    );
  }

  return (
    <div>
      <div className="flex mt-5">
        <ul className="steps mx-auto w-1/2">
          {sections.map((sec, index) => (
            <li
              className={`step cursor-pointer ${
                index <= currentPage ? 'step-primary' : ''
              }`}
              onClick={() => dispatch.evaluation.set({ currentPage: index })}
              key={index}
            >
              {sec}
            </li>
          ))}
        </ul>
      </div>
      <EvaluationQuestions />
      <div className="flex items-center justify-center">
        <button
          className="btn bg-accent hover:bg-accent-focus border-0"
          onClick={submitNextHandler}
        >
          {isLastPage ? 'Submit' : 'Next'}
        </button>
      </div>
    </div>
  );
}

export default Evaluation;
