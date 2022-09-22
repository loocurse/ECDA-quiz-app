import questionsBank from '../../configs/updatedQuestions.json';

export const evaluation = {
  state: {
    student: null,
    questions: null,
    selectedDomain: null,
    domains: Object.keys(questionsBank),
    currentPage: 0,
  }, // initial state
  reducers: {
    // handle state changes with pure functions
    setResponse(state, payload) {
      const currResponse = {...state.questions};
      // console.log("Current qns");
      // console.log(currResponse[payload.subdomain]);
      currResponse[payload.subdomain] = currResponse[payload.subdomain].map((item) => {
        // console.log('QUESTION CHECK!')
        // console.log(item.qn, ' ', payload.qn);
        if (item.question === payload.qn) {
          // console.log("Checking item out")
          // console.log(item)
          // console.log(payload)
          return {
            ...item,
            response: payload.resp,
          };
        } else if (item.response == null) {
          return {
            ...item,
            response: "Not Assessed"
          };
        }
        return item;
      });
      console.log(currResponse)
      // console.log("HEREREEEE");
      return {
        ...state,
        questions: currResponse,
      };
    },
    setQuestions(state, payload) {
      return {
        ...state,
        questions: questionsBank[payload],
      };
    },
    setStudent(state, payload) {
      return {
        ...state,
        student: payload,
      };
    },
    reset(state, payload) {
      return {
        ...state,
        student: null,
      };
    },
    incrementPage(state) {
      if (state.currentPage < state.questions.length - 1) {
        return {
          ...state,
          currentPage: state.currentPage + 1,
        };
      }
      return state;
    },
    set(state, payload) {
      return {
        ...state,
        ...payload,
      };
    },
  },
  effects: (dispatch) => ({
    // handle state changes with impure functions.
    // use async/await for async actions
  }),
};
