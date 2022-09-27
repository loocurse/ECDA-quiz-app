import React from 'react';
import { useSelector } from 'react-redux';
import { dispatch } from '../store';

const data = {
  Class: ['K101', 'K102'],
  Student: ['Samuel Lim', 'Rachel Lee'],
  Term: [1, 2],
};

function StudentSelection({ type }) {
  const domains = useSelector((state) => state.evaluation.domains);
  return (
    <div className="h-full flex flex-col justify-center">
      <h1 className="font-bold text-xl text-center mb-5">Select a student</h1>
      <div className="flex w-2/3 mx-auto flex-col items-center">
        {Object.keys(data).map((cat) => (
          <select className="select select-secondary max-w-xs my-2 w-48">
            <option disabled selected>
              {cat}
            </option>
            {data[cat].map((_class) => (
              <option key={_class}>{_class}</option>
            ))}
          </select>
        ))}
        {type === 'evaluation' && (
          <select
            className="select select-secondary max-w-xs my-2 w-48"
            onChange={(e) => {
              dispatch[type].setQuestions(e.target.value);
              dispatch[type].set({ selectedDomain: e.target.value });
            }}
          >
            <option disabled selected>
              Domain
            </option>
            {domains.map((domain) => (
              <option key={domain}>{domain}</option>
            ))}
          </select>
        )}
      </div>
      <button
        className="btn border-0 bg-accent hover:bg-accent-focus w-48 mt-5 mx-auto"
        onClick={() => dispatch[type].set({ student: 'Rachel Lee' })}
      >
        Evaluate
      </button>
    </div>
  );
}

export default StudentSelection;
