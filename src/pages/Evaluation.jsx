import React from 'react';
import { useSelector } from 'react-redux';
import EvaluationQuestions from '../components/EvaluationQuestions';
import { dispatch } from '../store';
// import update from '../csv-related/functions3';
import { readAll } from '../db/utils2';



function Evaluation() {
  const responses = useSelector((state) => state.evaluation.questions);
  const prevExists = useSelector((state) => state.evaluation.prevExists)
  const student = useSelector((state) => state.evaluation.student);
  const yeet = useSelector((state) => state.evaluation);
  const domains = useSelector((state) => state.evaluation.domains);
  const currentPage = useSelector((state) => state.evaluation.currentPage);
  // const isLastPage = useSelector(
    //   (state) =>
    //     state.evaluation.currentPage === state.evaluation.questions.length - 1,
    // );
    const isLastPage = true;
    
    async function getPrevVals() {
      const res = await fetch("http://localhost:3000/findEntries/", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          year: 2022,
          term: 4,
          teacher_id: 'T001',
          student_id: 'S0001',
          category: yeet.selectedDomain
        })
      })
      const finalJson = await res.json();
      console.log(finalJson);
      console.log("Checked if it is empty!")
      if (Object.keys(finalJson).length===0) {
        // object is empty
        dispatch.evaluation.setPrevResponse({
          result: false
        })
      } else {
        dispatch.evaluation.setPrevResponse({
          result: true
        })
      }
    }

    async function sendInsert(body) {
      const res = await fetch("http://localhost:3000/simpleInsert/", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      })
      console.log(await res.text());
    }

    async function update(body) {
      const res = await fetch("http://localhost:3000/updateEntries/", {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      })
      console.log("UPDATED ENTIRED!!")
      console.log(await res.text());
    }

    const submitNextHandler = () => {
    // console.log("Changing page");
    // console.log(currentPage)
    // console.log(domains)
    // console.log(yeet.selectedDomain);
    // console.log(responses);
    // console.log("REPONSES")
    var packet = {
      year: 2022,
      term: 4,
      class: 'K2',
      student: {
        name: student,
        id: "S0001",
        dob: '15-Jun-16'
      },
      teacher: {
        id: 'T001',
        name: "MRS LINDA TAN"
      },
      category: yeet.selectedDomain
    }
    packet = {...packet, response: {...responses}}
    if (prevExists) {
      update(packet);
    } else {
      sendInsert(packet);
    }

    // console.log(JSON.stringify(packet));  
    dispatch.evaluation.incrementPage();
    if (isLastPage) {
      dispatch.evaluation.reset();
    }
  };

  if (!student) {
    return (
      <div className="h-full flex flex-col justify-center">
        <h1 className="font-bold text-xl text-center mb-5">
          Select a student to evaluate
        </h1>
        <div className="flex w-2/3 mx-auto flex-col items-center">
          <select className="select select-secondary max-w-xs my-2 w-48">
            <option disabled selected>
              Class
            </option>
            <option>K101</option>
            <option>K102</option>
          </select>
          <select className="select select-secondary max-w-xs my-2 w-48">
            <option disabled selected>
              Student
            </option>
            <option>Rachel Lee</option>
            <option>Samuel Lim</option>
          </select>
          <select className="select select-secondary max-w-xs my-2 w-48">
            <option disabled selected>
              Term
            </option>
            <option>1</option>
            <option>2</option>
          </select>
          <select
            className="select select-secondary max-w-xs my-2 w-48"
            onChange={(e) => {
              dispatch.evaluation.setQuestions(e.target.value);
              dispatch.evaluation.set({ selectedDomain: e.target.value });
            }}
          >
            <option disabled selected>
              Domain
            </option>
            {domains.map((domain) => (
              <option key={domain}>{domain}</option>
            ))}
          </select>
        </div>
        <button
          className="btn border-0 bg-accent hover:bg-accent-focus w-48 mt-5 mx-auto"
          onClick={async () => {
            // readAll();
            await getPrevVals();
            dispatch.evaluation.set({ student: 'Rachel Lee' })}
          }
        >
          Evaluate
        </button>
      </div>
    );
  }

  return (
    <div>
      {/* <div className="flex mt-5">
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
      </div> */}
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
