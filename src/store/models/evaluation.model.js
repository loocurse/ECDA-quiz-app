import questions from '../../configs/questions.json';

export const evaluation = {
  state: {
    student: null,
    questions,
    responses: [],
    currentPage: 0,
  }, // initial state
  reducers: {
    // handle state changes with pure functions
    setResponse(state, payload) {
      const currResponse = [...state.questions];
      currResponse[state.currentPage].questions[payload.qnIndex].response = payload.response;
      return {
        ...state,
        questions: currResponse,
      };
    },
    setStudent(state, payload) {
      return {
        ...state,
        student: payload,
      };
    },
    incrementPage(state) {
      if (state.currentPage < state.questions.length) {
        return {
          ...state,
          currentPage: state.currentPage + 1,
        };
      }
      return state
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
