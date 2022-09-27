
export const report = {
  state: {
    student: null,
  }, // initial state
  reducers: {
    // handle state changes with pure functions
    setResponse(state, payload) {
      const currResponse = { ...state.questions };
      currResponse[payload.subdomain] = currResponse[payload.subdomain].map(
        (item) => {
          if (item.qn === payload.qn) {
            console.log(item);
            console.log(payload);
            return {
              ...item,
              response: payload.resp,
            };
          }
          return item;
        },
      );
      console.log(currResponse);
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
