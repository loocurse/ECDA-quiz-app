export const user = {
  state: {
    isLoggedIn: false,
  }, // initial state
  reducers: {
    // handle state changes with pure functions
    login(state, payload) {
      return {
        ...state,
        isLoggedIn: true,
      };
    },
  },
  effects: (dispatch) => ({
    // handle state changes with impure functions.
    // use async/await for async actions
    async incrementAsync(payload, rootState) {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      dispatch.count.increment(payload);
    },
  }),
};
