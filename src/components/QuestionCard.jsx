import React from 'react';
import { useSelector } from 'react-redux';
import { dispatch } from '../store';

function QuestionCard({ question, subdomain, prevVal}) {
  // to make my life easier (DELETE LATER)
  // dispatch.evaluation.setResponse({
  //   qn: question,
  //   subdomain,
  //   resp: "Not Yet",
  // })
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
          
          {/*
            QUICK FIX TO MAKE MY LIFE EASIER!!
            TODO: REVERT THIS BEFORE RELEASE
          <option selected>Not Assessed</option>
          <option>Not Yet</option> */}
          <option value={0}>Not Assessed</option>
          <option value={1} selected>Not Yet</option>
          <option value={2}>Not Proficient</option>
          <option value={3}>Average</option>
          <option value={4}>Very Good</option>
        </select>
      </div>
    </div>
  );
}

export default QuestionCard;
