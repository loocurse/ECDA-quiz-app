import React from 'react';
import { dispatch } from '../store';

function QuestionCard({ question, subdomain, questionType = 'dropdown' }) {
  if (questionType === 'dropdown') {
    return (
      <div className=" w-2/3 mx-auto m-5 flex flex-row justify-between">
        <p className="max-w-md">{question}</p>
        <div className="w-48 ml-auto p-0">
          <select
            className="select w-full max-w-xs"
            onChange={(e) =>
              dispatch.evaluation.setResponse({
                qn: question,
                subdomain,
                resp: e.target.value,
              })
            }
          >
            <option selected>Not Assessed</option>
            <option>Not Yet</option>
            <option>Not Proficient</option>
            <option>Average</option>
            <option>Very Good</option>
          </select>
        </div>

      </div>
    );
  } else if (questionType === 'text_area') {
    return (
      <div className=" w-2/3 mx-auto m-5 flex flex-col justify-between">
        <p className="max-w-md">{question}</p>
        <div className="w-full p-0 mt-5">
          <textarea
            onChange={(e) =>
              dispatch.evaluation.setResponse({
                qn: question,
                subdomain,
                resp: e.target.value,
              })
            }
            className="textarea textarea-bordered w-full"
            placeholder="Type here..."
          ></textarea>
        </div>
      </div>
    );
  }
}

export default QuestionCard;
